# Secrets-Management mit 1Password — Architektur & Anleitung für neue Repos

> Gilt für alle Projekte auf dieser Maschine · Enthält keine Secret-Werte.
> Nachschlagewerk „welcher Key liegt wo": die Secrets-Registry (privates Claude-Artifact,
> generiert aus `secrets-registry-data.json`).

---

## 1. Das Prinzip in drei Sätzen

**1Password ist die einzige Quelle der Wahrheit für jedes Secret.** Auf Entwickler-Maschinen
liegt kein Klartext-Key — lokale `.env`-Dateien enthalten nur **Referenzen** (`op://…`), die
zur Laufzeit aufgelöst werden. Cloud-Plattformen (Vercel, Convex, Modal), die kein 1Password
lesen können, halten **Kopien** der Werte in ihren Env-Stores — bei einer Rotation wird zuerst
1Password geändert und dann werden die Kopien nachgepusht.

```
                    ┌─────────────────────┐
                    │  1Password (Master) │  Vault »APIKeys«
                    └─────────┬───────────┘
          lokal (op run)      │       Kopie (einmalig gepusht)
        ┌─────────────────────┼──────────────────────────┐
        ▼                     ▼                          ▼
  .env mit op://-Refs   Vercel Env / Convex Env /   n8n-Credential-Store
  (Wert nie auf Platte)  Modal Secrets (Laufzeit)    (Tool-verwaltet)
```

## 2. Die Bausteine

| Baustein | Was es ist |
|---|---|
| **Vault `APIKeys`** | Ein Vault in 1Password. Pro externem Service ein Item (Kategorie „API Credential"), Wert im Feld `credential`. App-interne Secrets: ein Item pro Projekt (`app-<projekt>`) mit mehreren Feldern. |
| **Service Account (read-only)** | 1P-Service-Account-Token, darf **nur lesen**. Liegt in der macOS-Keychain (nie in einer Datei), Export in **`~/.zshenv`** (Abschnitt 2.1). Items **anlegen/ändern** kann nur ein Mensch in der 1P-App — Skripte/Agents lesen, schreiben nie. |
| **`op` CLI** | Löst Referenzen auf. Zwei Muster: `op run --env-file=.env -- <befehl>` (ersetzt alle Refs in der Prozess-Umgebung) und `op read 'op://APIKeys/<item>/credential'` (einzelner Wert, direkt in eine Pipe). |

### 2.1 Der Token-Export steht in `~/.zshenv`

`~/.zshenv` liest zsh bei **jedem** Aufruf — interaktiv, Skript, `zsh -c`, Login,
LaunchAgent. Damit steht `OP_SERVICE_ACCOUNT_TOKEN` in jedem Kontext zur Verfügung
und `op` fällt nie auf die **App-Integration** zurück, die nach Touch ID fragt und
unbeaufsichtigte Läufe blockieren würde.

`~/.zshrc` ist dafür kein gültiger Ort: zsh liest die Datei **ausschließlich für
interaktive Shells**. Die kanonische Kopie liegt im Setup-Repo unter
`mac/shell/zshenv.zsh`.

```zsh
# ~/.zshenv
if [[ -z "$OP_SERVICE_ACCOUNT_TOKEN" ]]; then
  export OP_SERVICE_ACCOUNT_TOKEN="$(/usr/bin/security find-generic-password -s op-service-account -a 1password -w 2>/dev/null)"
  [[ -z "$OP_SERVICE_ACCOUNT_TOKEN" ]] && unset OP_SERVICE_ACCOUNT_TOKEN
fi
```

Drei Details sind Absicht und sollten nicht „vereinfacht" werden:

- **Der Guard auf leere Variable** — in verschachtelten Shells ist der Token schon
  vererbt; dann wird die Keychain gar nicht erst angefasst (~10 ms pro zsh-Start).
- **Absoluter Pfad `/usr/bin/security`** — `.zshenv` läuft **vor** `.zprofile`,
  Homebrew ist zu dem Zeitpunkt noch nicht im `PATH`.
- **`unset` statt leerer Wert** bei Keychain-Miss — eine leere Variable bringt `op`
  in einen unklaren Zustand, statt sauber auf die anderen Auth-Wege zu fallen.

**Verifikation** — Token aus der Umgebung entfernen, damit er zwingend aus
`.zshenv` kommen muss: `env -u OP_SERVICE_ACCOUNT_TOKEN zsh -c 'op whoami'`
liefert den Service Account ohne Prompt, `op read op://APIKeys/context7/credential`
klappt, und `op run --env-file=… -- …` löst die Projekt-Secrets auf. Geprüft wird
über Längen und Status — **nie über die Werte** (Regel E7 / Regel 3 unten).

**Referenz-Syntax:** `op://APIKeys/<item-name>/credential` bzw.
`op://APIKeys/app-<projekt>/<feldname>`. Item-Namen lowercase-kebab
(`easyverein`, `google-gemini`, `app-shared-canvas`).
Bekannte Abweichungen im Bestand: `OpenAI` (großgeschrieben), `vercelaigw`.

## 3. Lokale Nutzung im Projekt

Die `.env` enthält nur Referenzen und Nicht-Secrets — und ist trotzdem gitignored:

```bash
# .env — enthält KEINE Werte, nur Referenzen
EASYVEREIN_API_KEY=op://APIKeys/easyverein/credential
GOOGLE_CSE_API_KEY=op://APIKeys/google-custom-search/credential
GOOGLE_CX=10c1d253...          # kein Secret → darf literal bleiben
```

Gestartet wird **immer über `op run`**:

```bash
op run --env-file=.env -- npm run dev
op run --env-file=.env -- uv run python script.py
```

`op run` setzt die echten Werte in die Prozess-Umgebung. Das verträgt sich mit allen üblichen
Frameworks, weil `dotenv` / `next dev` bereits gesetzte Env-Vars **nie überschreiben** — der
echte Wert gewinnt gegen die literale Ref in der Datei. Bonus: `op run` maskiert Secret-Werte
automatisch in stdout/stderr.

**Zwei Sonderfälle aus der Praxis:**

- **Skript parst die `.env` selbst per Regex** statt `process.env` zu lesen → würde die
  literale Ref als Key benutzen. Fix: `process.env` zuerst, Datei nur als Fallback, und bei
  `op://`-Präfix mit klarer Fehlermeldung abbrechen (Beispiel: `dan-Filme/scan.mjs`).
- **Credential ist eine Datei** (z. B. Google-Service-Account-JSON): kompletter JSON-Inhalt
  einzeilig im 1P-Item; der Secrets-Loader erkennt „Wert beginnt mit `{`", schreibt ihn in
  eine `chmod 600`-Tempdatei und löscht sie per `atexit` beim Prozessende
  (Beispiel: `svb-tools/svb-scripts/src/svb_toolkit/config/secrets.py`).

## 4. Deployments (Vercel / Convex / Modal)

Deployte Apps kennen 1Password nicht — sie lesen ihre Plattform-Env. Das ist gewollt: Die
Plattform hält eine **Laufzeit-Kopie**, 1P bleibt Master. Werte werden per CLI gepusht, ohne
dass sie durch Dateien oder das Terminal-Log laufen:

```bash
# Vercel (Wert via --value aus op read; die CLI akzeptiert kein stdin-Piping)
vercel env add ANTHROPIC_API_KEY production --value "$(op read op://APIKeys/anthropic/credential)" --yes

# Convex
npx convex env set EASYVEREIN_API_KEY "$(op read op://APIKeys/easyverein/credential)" --prod

# Modal
modal secret create mein-secret MY_API_KEY="$(op read op://APIKeys/<item>/credential)" --force
```

**Rotation ist immer zweistufig:**
1. Neuen Wert ins 1P-Item → alles Lokale folgt automatisch.
2. Kopien nachpushen (Befehle oben erneut). Welche Kopien ein Key hat, steht pro Service in
   der Secrets-Registry. Vercel backt Env-Werte beim Deployment ein → nach dem Push einmal
   redeployen.

**Gehört NICHT in 1Password:** plattform-generierte/kurzlebige Credentials
(`VERCEL_OIDC_TOKEN`, `BLOB_READ_WRITE_TOKEN`), OAuth-Logins der CLIs (vercel, gh, gcloud)
und native Tool-Stores (`~/.modal.toml`, `~/.convex`). Die verwaltet die jeweilige Plattform.

## 5. Regeln

1. **Ein Key = ein Name.** Derselbe Key heißt überall gleich (`EASYVEREIN_API_KEY`,
   `RESEND_API_KEY`, …). Und umgekehrt: nie ein generischer Name für zwei verschiedene Keys
   (deshalb `GOOGLE_CSE_API_KEY` ≠ `GOOGLE_API_KEY`/Gemini). Projekt-eigene Secrets tragen
   Projekt-Präfixe (`APP_`, `LANALYZER_`, …), weil es verschiedene Secrets sind.
2. **Kein Wert in Dateien.** `.env` mit Refs ist okay (und trotzdem gitignored — Defense in
   Depth). `.env.example` enthält nur Platzhalter.
3. **Kein Wert im LLM-/Agent-Kontext** (globale Regel E7): Agents lösen Secrets nur in
   Subprozessen auf (`op run`, Pipes, `curl -K -` mit Config über stdin — so steht der Key
   auch nicht in `ps`); ausgegeben werden nur HTTP-Status, Längen oder Hashes. Ein Wert, der
   doch im Kontext landet, gilt als kompromittiert → rotieren.
4. **Ein Wert existiert an maximal zwei Orten:** 1Password (Master) + Plattform-Env
   (Laufzeit). Nirgendwo sonst — nicht in Deploy-Dateien, nicht in Scan-Caches, nicht in
   Cloud-Sync-Ordnern.
5. **Kleinster Scope pro Key:** beim Anlegen im Anbieter-Dashboard restriktieren (ElevenLabs:
   nur „Text to Speech" + Credit-Limit; Deepgram: Member-Rolle; Google: API-Restriktion pro
   Key).
6. **Rotation live verifizieren, nicht raten:** alten Key gegen die API testen (muss 401
   liefern) und den neuen (muss 200 liefern) — mit dem richtigen Endpoint. Achtung
   Falsch-Positive: manche Endpoints antworten 200 ohne Auth (OpenRouter `/models`,
   AI-Gateway `/v1/models`); Vercel meldet tote Tokens als 403 + `invalidToken`, Gemini als
   400 + `API_KEY_INVALID`, Blob als 404 `store_not_found`.

## 6. Checkliste: neues Repository aufsetzen

1. **Keys beim Anbieter erzeugen** — mit minimalem Scope (Regel 5).
2. **1P-Items anlegen** (in der App, Vault `APIKeys`): pro externem Service ein Item, Wert
   ins Feld `credential`. App-interne Secrets (PINs, Proxy-Secrets, Signierschlüssel) in ein
   Item `app-<projekt>` mit einem Feld pro Variable.
3. **`.env` schreiben** — nur `op://`-Referenzen und Nicht-Secrets (URLs, IDs). `.env` in
   `.gitignore`, `.env.example` mit Platzhaltern committen.
4. **Standardnamen verwenden** — vorher in der Secrets-Registry nachsehen, ob der Service
   schon einen etablierten Variablennamen hat.
5. **Start-Befehle auf `op run` umstellen** — im README/`package.json` dokumentieren
   (`"dev": "op run --env-file=.env -- next dev"`).
6. **Deployment:** Werte per `op read`-Einzeiler (Abschnitt 4) in Vercel/Convex/Modal
   pushen — nie per Copy-Paste über Zwischendateien.
7. **Registry ergänzen:** neuer Service/Key in die Secrets-Registry eintragen (Service →
   Keys → Speicherorte → Projekte → „Bei Rotation ändern").
8. **Verifizieren:**
   `op run --env-file=.env -- sh -c '[ "${VAR#op://}" = "$VAR" ] && [ -n "$VAR" ] && echo RESOLVED'`
   plus ein echter API-Call (nur Status ausgeben). Wiederholbare Liveness-Tests über alle
   Keys laufen über `validate-keys.sh`.
