# 🔴 Lab 9.4 — agy on Managed Linux

> **Your mission:** Turn the Ubuntu environment from **Lab 9.2 or Lab 9.3** into a ready-to-use agent development terminal: install the **Antigravity CLI (`agy`)**, Google Agents CLI lifecycle skills, and the Google Developer Knowledge MCP server, then ask a grounded Cloud Storage question. 🖥️🤖

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Advanced | ~25–35 min | **Ubuntu terminal** + **agy CLI** | A running Lab 9.2 VM **or** Lab 9.3 Code OSS workstation; dedicated billed project; Project Owner/admin access |

> 🚪 **Owner/admin gate:** Continue only when the facilitator confirms the assigned project, billing, API enablement, and your permission to create a restricted API key. Otherwise, stop here.
>
> 💸 **Cost gate:** This lab is outside the core schedule. At the end, delete the Compute Engine VM and any retained disks or static IPs; stop it only with explicit facilitator approval. For Cloud Workstations, stopping is insufficient: delete the **Workstation → Configuration → Cluster** because the cluster control plane and storage can keep billing.
>
> 📌 **Start in exactly one of these places:** the browser SSH terminal **inside the Ubuntu VM from Lab 9.2**, or **Terminal → New Terminal inside the Code OSS Cloud Workstation from Lab 9.3**. Do not use Cloud Shell, a local terminal, or the Antigravity IDE for this lab.
>
> 🔁 **New environment, new installation:** Your Cloud Shell setup from Lab 9.1 does not carry into this VM or workstation. Install only the tools missing from the selected environment.

---

## 🎬 The story

TechBond wants the same agent-building tools on managed Linux that developers use in short-lived Cloud Shell sessions. You will inspect each installer before running it, connect `agy` to current Google documentation, and complete the required cleanup for the selected cloud resource.

---

## 🛠️ Build it (step by step)

### Step 1 — Confirm where you are and inspect what is installed

Run this in the Lab 9.2 SSH terminal or the Lab 9.3 Code OSS terminal:

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
command -v agy && agy --version || printf 'MISSING: agy\n'
command -v agents-cli && agents-cli --version || printf 'MISSING: agents-cli\n'
```

Install only the items whose executable, version, or lifecycle-skill checks failed, using Steps 2, 3, and 5.

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

If the `uv --version` check in Step 1 failed, download and review its official installer before running it:

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

Choose the path that matches the environment you opened.

**Lab 9.2 Compute Engine path:** the VM has no attached service account. Sign in as your workshop account, then separately create and verify Application Default Credentials (ADC). Replace both expected values with the exact facilitator assignment.

```bash
(
EXPECTED_ACCOUNT="your-workshop-account@example.com"
EXPECTED_PROJECT_ID="your-assigned-workshop-project-id"

gcloud auth login
ACTIVE_ACCOUNT="$(gcloud auth list --filter=status:ACTIVE --format='value(account)')"
PROJECT_ID="$(gcloud config get-value project 2>/dev/null)"
if [ "$ACTIVE_ACCOUNT" != "$EXPECTED_ACCOUNT" ] \
  || [ "$PROJECT_ID" != "$EXPECTED_PROJECT_ID" ]; then
  printf 'STOP: account or project does not match the workshop assignment.\n' >&2
  exit 1
fi

gcloud auth application-default login "$EXPECTED_ACCOUNT" \
  || { printf 'STOP: ADC login failed for the workshop account.\n' >&2; exit 1; }
gcloud auth application-default print-access-token >/dev/null \
  || { printf 'STOP: ADC verification failed.\n' >&2; exit 1; }
)
```

**Lab 9.3 Cloud Workstations path:** do not improvise a human login. Get the expected service-account principal from the workstation configuration or facilitator, then verify that exact principal and project. Stop on any mismatch.

```bash
(
EXPECTED_SERVICE_ACCOUNT="workstation-service-account@your-project.iam.gserviceaccount.com"
EXPECTED_PROJECT_ID="your-assigned-workshop-project-id"

ACTIVE_PRINCIPAL="$(curl --max-time 10 -fsS \
  -H 'Metadata-Flavor: Google' \
  http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/email)"
PROJECT_ID="$(curl --max-time 10 -fsS \
  -H 'Metadata-Flavor: Google' \
  http://metadata.google.internal/computeMetadata/v1/project/project-id)"
if [ "$ACTIVE_PRINCIPAL" != "$EXPECTED_SERVICE_ACCOUNT" ] \
  || [ "$PROJECT_ID" != "$EXPECTED_PROJECT_ID" ]; then
  printf 'STOP: workstation principal or project does not match the approved configuration.\n' >&2
  exit 1
fi

gcloud config set project "$PROJECT_ID" \
  || { printf 'STOP: failed to set the verified workstation project.\n' >&2; exit 1; }
gcloud auth application-default print-access-token >/dev/null \
  || { printf 'STOP: configured workstation ADC is unavailable.\n' >&2; exit 1; }
)
```

### Step 5 — Install agy and the skills

If the `agy --version` check in Step 1 succeeded, skip its installer. Only if that check failed, inspect the official installer before running it:

```bash
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

> ⚠️ **Preview / Pre-GA gate:** The Google Agents CLI is Preview / Pre-GA. Before offering this lab, the facilitator must smoke-test the setup on the selected VM/workstation image and state the expected `agents-cli --version`. If that gate is missing, or the checks still fail after the matching case below, use Module 7's manual ADK route instead, or skip this optional lab.

Check the installed lifecycle skills too; a working version command alone is not enough:

```bash
agents-cli info
```

Run only the case that matches:

1. **CLI missing:** install the tool, then run the official setup command.

   ```bash
   uv tool install google-agents-cli
   uvx google-agents-cli setup --agent antigravity
   ```

2. **CLI present but its version differs from the facilitator-approved version:** upgrade the installed tool, then update its managed assets.

   ```bash
   uv tool upgrade google-agents-cli
   agents-cli update -y
   ```

3. **CLI version matches, but `agents-cli info` does not list the lifecycle skills:** run the official setup command to restore them.

   ```bash
   uvx google-agents-cli setup --agent antigravity
   ```

Recheck both outputs:

```bash
agents-cli --version
agents-cli info
```

After the version matches and `agents-cli info` lists the lifecycle skills, add Google's broader skill collection:

```bash
npx skills add google/skills --skill '*' --global --agent antigravity --yes
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

1. Enter the existing Lab 9.2 Ubuntu SSH terminal or Lab 9.3 Code OSS terminal.
2. Check `gcloud`, Python 3.11+, Node.js 18+, `npx`, `uv`, `agy`, and `agents-cli`; install only tools whose executable, version, or lifecycle-skill checks fail, then repeat their checks.
3. Use Step 4's matching subshell: on GCE, sign in and separately verify the exact human account and ADC; on Workstations, verify the metadata service-account principal and project, set that verified project, and check ADC without a human login.
4. Install `agy` only if its check failed. For the Preview / Pre-GA Agents CLI, use exactly one Step 5 case: missing CLI → official setup; facilitator-version mismatch → `uv tool upgrade` plus `agents-cli update -y`; matching version but missing lifecycle skills in `agents-cli info` → official setup. Recheck version and info; if the gate still fails, use the manual ADK route or skip this optional lab. After the gate passes, add the broader Google skills.
5. In `agy`, use `/skills` and verify the three named skills.
6. Enable Developer Knowledge, create a restricted key, merge its server entry into `~/.gemini/config/mcp_config.json` without removing other servers, verify mode `600`, and require `python3 -m json.tool` to pass before continuing.
7. Use `/mcp`, ask the grounded Cloud Storage question, and confirm official citations.
8. Continue to the optional bonus if desired, then exit `agy` but keep the terminal open. Delete the workshop key unless reuse was approved, remove only the lab's local MCP configuration, and complete its JSON check.
9. If retaining the GCE VM, run `gcloud auth application-default revoke` and `gcloud auth revoke`. Close the terminal only after cleanup and any revokes finish.
10. Stop or delete the VM, or delete the Workstation → Configuration → Cluster.
</details>

---

## ✅ You did it when…

- [ ] You worked only inside the Ubuntu terminal from Lab 9.2 or the Code OSS terminal from Lab 9.3.
- [ ] `gcloud`, Python 3.11+, Node.js 18+, `npx`, `uv`, and `agy` pass their version checks; installers ran only for failed checks.
- [ ] The facilitator's Agents CLI Preview / Pre-GA gate passed: the version matches and `agents-cli info` lists the lifecycle skills; otherwise you chose the manual ADK/skip route.
- [ ] The GCE human account and ADC, or the configured Workstations service-account principal and ADC, match the approved workshop setup.
- [ ] When the Agents CLI gate passes, `/skills` shows `google-agents-cli-workflow`, `google-agents-cli-adk-code`, and `gcloud`.
- [ ] Before `/mcp`, `stat` reports mode `600` and `python3 -m json.tool` validates `~/.gemini/config/mcp_config.json`.
- [ ] `/mcp` shows `google-developer-knowledge` connected.
- [ ] The Cloud Storage answer cites official Google documentation without changing resources.
- [ ] You identified the required API-key deletion and the safe MCP cleanup path for a new versus pre-existing config file.
- [ ] You identified the VM stop/delete action or the mandatory Workstation → Configuration → Cluster deletion sequence.

---

## ⭐ Bonus level-up — Review a read-only gcloud plan

Before cleanup, ask `agy` to use its installed `gcloud` skill without taking action:

```text
Use the gcloud skill to draft a read-only verification plan for my existing Lab 9.2 VM or Lab 9.3 workstation. Include only list and describe commands that confirm the resource and its state. Explain the later cleanup order, but do not execute commands and do not create, update, start, stop, or delete anything.
```

Review the proposed plan yourself. It passes only when every command is read-only (`list` or `describe`) and nothing was executed. Reject and revise any plan containing a mutating command.

---

## 🧹 Cleanup and cost stop

1. Exit `agy` with `/exit`, but keep the terminal open for the remaining local cleanup.
2. Delete the workshop Developer Knowledge API key under **APIs & Services → Credentials**, unless the facilitator explicitly approved reuse.
3. Remove the lab's local MCP secret:
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

4. If you used the GCE path and retention was approved instead of deletion, revoke both credential stores before leaving the VM:

   ```bash
   gcloud auth application-default revoke
   gcloud auth revoke
   ```

5. Close the terminal only after the file check and any required revokes finish.
6. **Required cost action:** follow [Lab 9.2](./lab-9.2-gce-ssh.md) to stop or delete the VM. For [Lab 9.3](./lab-9.3-cloud-workstations.md), delete the **Workstation → Configuration → Cluster** in dependency order; stopping the workstation is insufficient because the cluster control plane and storage can keep billing.

---

## 🧠 What you just learned

You learned how to audit a managed Ubuntu environment before installing anything, inspect remote installers, keep system Python separate from `uv`-managed tools, verify Google Cloud identity and project context, extend the terminal-only `agy` client with Agents CLI lifecycle skills and broader Google skills, ground answers through a restricted Developer Knowledge MCP key, and end a cloud lab with an explicit cost stop.

⬅️ Back to the **[module overview](./README.md)**.
