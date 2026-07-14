# 🔴 Lab 9.4 — agy on Managed Linux

> **Your mission:** Turn the Ubuntu environment from **Lab 9.1 or Lab 9.2** into a ready-to-use agent development terminal: install the **Antigravity CLI (`agy`)**, Google Agent CLI skills, and the Google Developer Knowledge MCP server, then ask a grounded Cloud Storage question. 🖥️🤖

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Advanced | ~25–35 min | **Ubuntu terminal** + **agy CLI** | A running Lab 9.1 VM **or** Lab 9.2 Code OSS workstation; dedicated billed project; Project Owner/admin access |

> 🚪 **Owner/admin gate:** Continue only when the facilitator confirms the assigned project, billing, API enablement, and your permission to create a restricted API key. Otherwise, stop here.

> 💸 **Cost gate:** This lab is outside the core schedule. Your Compute Engine VM or Cloud Workstation remains billable while it exists (and some attached resources can remain billable while stopped). At the end, explicitly stop or delete the parent resource by following Lab 9.1 or 9.2.

> 📌 **Start in exactly one of these places:** the browser SSH terminal **inside the Ubuntu VM from Lab 9.1**, or **Terminal → New Terminal inside the Code OSS Cloud Workstation from Lab 9.2**. Do not use Cloud Shell, a local terminal, or the Antigravity IDE for this lab.

---

## 🎬 The story

TechBond wants the same agent-building tools on managed Linux that developers use in short-lived Cloud Shell sessions. You will inspect each installer before running it, connect `agy` to current Google documentation, and leave the underlying cloud resource cleanly stopped or deleted.

---

## 🛠️ Build it (step by step)

### Step 1 — Confirm where you are and inspect what is installed

Run this in the Lab 9.1 SSH terminal or the Lab 9.2 Code OSS terminal:

```bash
cat /etc/os-release | head

command -v gcloud && gcloud --version | head -1 || printf 'MISSING: gcloud\n'
python3 -c 'import sys; print(sys.version); raise SystemExit(sys.version_info < (3, 11))' \
  || printf 'MISSING: Python 3.11+\n'
if command -v node >/dev/null \
  && node -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 18 ? 0 : 1)' \
  && command -v npx >/dev/null; then
  node --version
  npx --version
else
  printf 'MISSING: Node.js 18+ and/or npx\n'
fi
command -v uv && uv --version || printf 'MISSING: uv\n'
```

Install only the items reported as missing in Steps 2 and 3.

### Step 2 — Install missing system tools

If `gcloud` is missing, use Google's signed Debian/Ubuntu repository. Download the signing key to a file and inspect it before trusting it:

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates gnupg curl
curl --max-time 10 -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg \
  -o google-cloud-apt-key.gpg
gpg --show-keys google-cloud-apt-key.gpg
```

If the key cannot be read or you cannot review it, stop and ask the facilitator. Otherwise:

```bash
sudo install -m 0755 -d /usr/share/keyrings
sudo gpg --dearmor --yes -o /usr/share/keyrings/cloud.google.gpg google-cloud-apt-key.gpg
rm google-cloud-apt-key.gpg
printf '%s\n' 'deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main' \
  | sudo tee /etc/apt/sources.list.d/google-cloud-sdk.list
sudo apt-get update
sudo apt-get install -y google-cloud-cli
```

If the check reports that Node.js 18+ or `npx` is missing, download and inspect the official `nvm` installer. Do not use Ubuntu 22.04's older `nodejs` package for this lab:

```bash
curl --max-time 10 -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh \
  -o install-nvm.sh
less install-nvm.sh
```

Press `q` after reading it. If you cannot assess it, stop and ask the facilitator. Then install the current Node.js LTS release:

```bash
bash install-nvm.sh
rm install-nvm.sh
export NVM_DIR="$HOME/.nvm"
test -s "$NVM_DIR/nvm.sh" && . "$NVM_DIR/nvm.sh"
nvm install --lts
node --version
npx --version
node -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 18 ? 0 : 1)'
```

### Step 3 — Install Python 3.11+ through uv when needed

If `uv` is missing, download and review its official installer before running it:

```bash
curl --max-time 10 -fsSL https://astral.sh/uv/install.sh -o install-uv.sh
less install-uv.sh
```

Press `q` after reading it. If you cannot assess it, stop and ask the facilitator. Then:

```bash
sh install-uv.sh
rm install-uv.sh
source "$HOME/.local/bin/env"
```

If the Python check in Step 1 failed, let `uv` install a managed Python and make it the default `python3` on your user `PATH` without replacing Ubuntu's system files:

```bash
uv python install 3.11 --default
export PATH="$HOME/.local/bin:$PATH"
hash -r
python3 -c 'import sys; print(sys.version); raise SystemExit(sys.version_info < (3, 11))'
```

### Step 4 — Verify the active Google Cloud identity and project

```bash
gcloud auth list --filter=status:ACTIVE --format='value(account)'
gcloud config get-value project
```

Compare both values with your workshop assignment. If no active account appears, run `gcloud auth login`. If the project is wrong, **stop and ask the facilitator**; do not guess or switch to another project.

Application Default Credentials (ADC) are separate from the active `gcloud` login. Set them up only if an Agent CLI or ADK action asks for ADC:

```bash
gcloud auth application-default print-access-token >/dev/null 2>&1 \
  || gcloud auth application-default login
```

### Step 5 — Install agy and the skills

First check for `agy`. If it is missing, inspect its official installer before running it:

```bash
command -v agy || printf 'MISSING: agy\n'
curl --max-time 10 -fsSL https://antigravity.google/cli/install.sh -o install-agy.sh
less install-agy.sh
```

Press `q` after reading it. If you cannot assess it, stop and ask the facilitator. Then:

```bash
bash install-agy.sh
rm install-agy.sh
source "$HOME/.local/bin/env"
agy --version
```

If `agy` already existed, skip the download and continue. Install the CLI and both skill sources:

```bash
uv tool install google-agents-cli
uvx google-agents-cli setup --agent antigravity-cli
npx skills add google/skills --skill '*' --global --agent antigravity-cli --yes
```

Launch the terminal client only:

```bash
agy
```

Complete its on-screen authorization if asked, then enter:

```text
/skills
```

Confirm that `google-agents-cli-workflow`, `google-agents-cli-adk-code`, and `gcloud` appear. Exit with `/exit`.

### Step 6 — Add the Developer Knowledge MCP server

Enable the Developer Knowledge API in the assigned project:

```bash
gcloud services enable developerknowledge.googleapis.com
```

In the Cloud Console, open **APIs & Services → Credentials**, choose **Create credentials → API key**, and immediately choose **Edit API key**. Under **API restrictions**, select **Restrict key → Developer Knowledge API**, then save. Do not paste the key into a prompt, source file, or screenshot.

Protect the `agy` MCP configuration directory first:

```bash
install -d -m 700 ~/.gemini/config
```

If `~/.gemini/config/mcp_config.json` already exists, back it up and edit its existing `mcpServers` object; preserve every other server and copy only the `google-developer-knowledge` object from the example below — **do not replace the whole file**. If the file does not exist, create it and use the full JSON shown next.

```bash
test ! -f ~/.gemini/config/mcp_config.json \
  || cp -p ~/.gemini/config/mcp_config.json ~/.gemini/config/mcp_config.json.before-lab-9.4
nano ~/.gemini/config/mcp_config.json
```

Paste this JSON and replace only `YOUR_API_KEY_HERE`:

```json
{
  "mcpServers": {
    "google-developer-knowledge": {
      "serverUrl": "https://developerknowledge.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

Save with `Ctrl+O`, `Enter`, `Ctrl+X`. If you edited an existing file, make sure the final document still has one valid top-level `mcpServers` object and includes all pre-existing entries. Then restrict and verify the file permissions:

```bash
chmod 600 ~/.gemini/config/mcp_config.json
stat -c '%a %n' ~/.gemini/config/mcp_config.json
if ! python3 -m json.tool ~/.gemini/config/mcp_config.json >/dev/null; then
  test ! -f ~/.gemini/config/mcp_config.json.before-lab-9.4 \
    || cp -p ~/.gemini/config/mcp_config.json.before-lab-9.4 ~/.gemini/config/mcp_config.json
  printf 'Invalid JSON. Previous config restored when a backup existed. Stop and fix the merge.\n' >&2
fi
```

The `stat` output must start with `600`, and the JSON command must finish without an error. Do not continue to `/mcp` until both checks pass. If validation failed for an existing config, the command restored the backup; keep that backup and fix the merge before continuing.

### Step 7 — Ask a grounded Cloud Storage question

```bash
agy
```

Inside `agy`, run:

```text
/mcp
```

Confirm that `google-developer-knowledge` is connected. Then ask:

```text
Using the Google Developer Knowledge MCP server, explain how to prevent public access on a Cloud Storage bucket with gcloud. Cite the official Google Cloud documentation you used. Do not change any resources.
```

The answer should cite official Google documentation and must not create or modify a bucket.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — A command is still not found</strong></summary>

Reload the user tools path, then check again:

```bash
source "$HOME/.local/bin/env"
export PATH="$HOME/.local/bin:$PATH"
command -v uv agy
```
</details>

<details>
<summary><strong>Hint 2 — /mcp reports an error</strong></summary>

Check that `~/.gemini/config/mcp_config.json` is valid JSON, uses `serverUrl`, and contains the exact `X-Goog-Api-Key` header. Confirm the API key is restricted to **Developer Knowledge API** and that the API is enabled in the assigned project.
</details>

<details>
<summary><strong>✅ Show me the full route</strong></summary>

1. Enter the existing Lab 9.1 Ubuntu SSH terminal or Lab 9.2 Code OSS terminal.
2. Check `gcloud`, Python 3.11+, Node.js 18+, `npx`, and `uv`; install only missing or outdated tools, then repeat their checks.
3. Verify the active `gcloud` account and assigned project. Configure ADC only if a later action requests it.
4. Inspect and install `agy`, then run the three skill-install commands from Step 5.
5. In `agy`, use `/skills` and verify the three named skills.
6. Enable Developer Knowledge, create a restricted key, merge its server entry into `~/.gemini/config/mcp_config.json` without removing other servers, verify mode `600`, and require `python3 -m json.tool` to pass before continuing.
7. Use `/mcp`, ask the grounded Cloud Storage question, and confirm official citations.
8. Continue to the optional bonus if desired, then run **Cleanup and cost stop**: delete the workshop key unless reuse was approved, remove only the lab's local MCP configuration, and stop or delete the parent VM/workstation.
</details>

---

## ✅ You did it when…

- [ ] You worked only inside the Ubuntu terminal from Lab 9.1 or the Code OSS terminal from Lab 9.2.
- [ ] `gcloud`, Python 3.11+, Node.js 18+, `npx`, `uv`, and `agy` pass their version checks.
- [ ] The active Google Cloud account and project match the workshop assignment.
- [ ] `/skills` shows `google-agents-cli-workflow`, `google-agents-cli-adk-code`, and `gcloud`.
- [ ] Before `/mcp`, `stat` reports mode `600` and `python3 -m json.tool` validates `~/.gemini/config/mcp_config.json`.
- [ ] `/mcp` shows `google-developer-knowledge` connected.
- [ ] The Cloud Storage answer cites official Google documentation without changing resources.
- [ ] You identified the required API-key deletion and the safe MCP cleanup path for a new versus pre-existing config file.
- [ ] You identified the required stop/delete action for your parent VM or workstation and understand that underlying resources can remain billable until deleted.

---

## ⭐ Bonus level-up — Review a read-only gcloud plan

Before cleanup, ask `agy` to use its installed `gcloud` skill without taking action:

```text
Use the gcloud skill to draft a read-only verification plan for my existing Lab 9.1 VM or Lab 9.2 workstation. Include only list and describe commands that confirm the resource and its state. Explain the later cleanup order, but do not execute commands and do not create, update, start, stop, or delete anything.
```

Review the proposed plan yourself. It passes only when every command is read-only (`list` or `describe`) and nothing was executed. Reject and revise any plan containing a mutating command.

---

## 🧹 Cleanup and cost stop

1. Exit `agy` with `/exit` and close the terminal session.
2. Delete the workshop Developer Knowledge API key under **APIs & Services → Credentials**, unless the facilitator explicitly approved reuse.
3. If you will retain or stop the parent resource, remove the lab's local MCP secret:
   - If this lab created `mcp_config.json`, delete it with `rm ~/.gemini/config/mcp_config.json`.
   - If the file existed before the lab, open it with `nano`, remove **only** the `google-developer-knowledge` block, preserve every unrelated server, and then run:
   ```bash
   chmod 600 ~/.gemini/config/mcp_config.json
   if python3 -m json.tool ~/.gemini/config/mcp_config.json >/dev/null; then
     rm ~/.gemini/config/mcp_config.json.before-lab-9.4
   else
     cp -p ~/.gemini/config/mcp_config.json.before-lab-9.4 ~/.gemini/config/mcp_config.json
     printf 'Invalid JSON. Previous config restored; backup kept. Stop and fix cleanup.\n' >&2
   fi
   ```
4. If you added user credentials and are keeping the resource, optionally remove that local authentication:
   ```bash
   gcloud auth application-default revoke
   gcloud auth revoke
   ```
5. **Required cost action:** follow [Lab 9.1](./lab-9.1-gce-ssh.md) to stop or delete the VM, or [Lab 9.2](./lab-9.2-cloud-workstations.md) to stop the workstation or delete workstation, configuration, and cluster in dependency order. Closing SSH, the browser tab, Code OSS, or `agy` does not stop billing.

---

## 🧠 What you just learned

You learned how to audit a managed Ubuntu environment before installing anything, inspect remote installers, keep system Python separate from `uv`-managed tools, verify Google Cloud identity and project context, extend the terminal-only `agy` client with Agent CLI and Google skills, ground answers through a restricted Developer Knowledge MCP key, and end a cloud lab with an explicit cost stop.

⬅️ Back to the **[module overview](./README.md)**.
