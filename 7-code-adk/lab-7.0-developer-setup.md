# 🟣 Lab 7.0 — Developer Setup (The Prep Gate)

> **Your mission:** Prepare your complete developer environment in **Google Cloud Shell**: a clean Python virtual environment, the **Google Agents CLI (`agents-cli`)**, the **Antigravity CLI (`agy`)**, and the official **Google Developer Knowledge MCP server** — everything the coding labs in Modules 7–9 rely on. 💻🌐

| 🏆 Role | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Day 2 core | ~40–50 min | **Google Cloud Shell** | Your dedicated billed workshop project with Project Owner/admin access and Python 3.11+ |

---

## 🎬 The story

As Lead AI Architect at **TechBond Industries**, you want to empower our terminal-loving developer teams. While visual agent builders are great, true developers want to work directly inside **Google Cloud Shell** using their CLI tools.

This lab is the single **Developer Prep Gate** for the code track: run it once and every coding lab that follows (7.2 → 7.4, Module 8, Lab 9.1) will work out of the box. You'll also hook the **Antigravity CLI (`agy`)** up to the official **Google Developer Knowledge Model Context Protocol (MCP) server**, so your terminal assistant can search, retrieve, and cite official Google Cloud documentation in real time while you write code!

> ♻️ **Coming back after a break (or on Day 2)?** Cloud Shell recycles its VM after a period of inactivity. Your home directory (your `venv` folder, `agy`, `uv`) survives on persistent disk, but your **shell state resets** — the virtual environment is no longer activated and exported variables are gone. Re-activate with `source "$HOME/venv/bin/activate"`, and only re-run the relevant install step below if a command is actually missing.

Let's dive into the terminal! 🚀

---

## 🛠️ Build it (step by step)

### Step 1 — Open Cloud Shell

1. At the top right of your Google Cloud Console, click the **Activate Cloud Shell** button (it looks like a terminal prompt icon: `>_`).
2. Wait a moment for your free Linux VM to provision and connect.
3. Verify the environment and, most importantly, the active Google account and project:

   ```bash
   gcloud --version
   gcloud auth list --filter=status:ACTIVE --format="value(account)"
   gcloud config get-value project
   python3 --version
   node --version
   npx --version
   ```

Cloud Shell supplies `gcloud`, Python, Node.js, and `npx`. Confirm that Python is **3.11 or newer**. If the account or project is not the dedicated workshop account/project assigned to you, **stop here** and ask the facilitator before enabling APIs or creating resources.

---

### Step 2 — Set up Python isolation & uv

Modern Python environments restrict global package installation (PEP 668), so all our labs work inside an isolated virtual environment. We'll also install the ultra-fast Python manager `uv`.

Run everything below from your **home directory** — the later labs assume the `venv` folder lives there. Check `uv` before installing it:

```bash
# 0. Make sure you're in your home directory
cd "$HOME"

# 1. Create and activate a clean virtual environment
test -d "$HOME/venv" || python3 -m venv "$HOME/venv"
source "$HOME/venv/bin/activate"

# 2. Check uv first
uv --version
```

If `uv --version` succeeds, skip the installer. Only if that check fails, download and inspect it:

```bash
curl --max-time 10 -LsSf https://astral.sh/uv/install.sh -o install-uv.sh
less install-uv.sh
```

Read the installer and press `q` after you reach the end. If you cannot assess what it will do, stop and ask the facilitator to review it with you. Then run the reviewed local file and continue:

```bash
bash install-uv.sh
rm install-uv.sh
source "$HOME/.local/bin/env"
uv --version
```

---

### Step 3 — Verify or install the Antigravity CLI (`agy`)

The **Antigravity CLI (`agy`)** is a terminal-based AI assistant that lets you build, manage, and debug your cloud applications.

1. Verify whether `agy` is installed:

   ```bash
   agy --version
   ```

   If the command prints a version, skip the installer. Only if it fails, download and inspect the official installer:

   ```bash
   curl --max-time 10 -fsSL https://antigravity.google/cli/install.sh -o install-agy.sh
   less install-agy.sh
   ```

   Read the installer and press `q` after you reach the end. If you cannot assess what it will do, stop and ask the facilitator to review it with you. Then run the reviewed local file:

   ```bash
   bash install-agy.sh
   rm install-agy.sh
   source "$HOME/.local/bin/env"
   agy --version
   ```

Install `agy` before the skill setup in the next step so the installers can target the Antigravity CLI directly.

---

### Step 4 — Verify or set up the Agents CLI and skills

> ⚠️ **Preview / Pre-GA gate:** The Google Agents CLI is Preview / Pre-GA. Before the workshop, the facilitator must smoke-test the setup and state the expected `agents-cli --version`. If that gate is missing, or the checks still fail after the matching case below, do not troubleshoot Preview tooling live: continue with Lab 7.2 and, in Lab 7.3, skip `/skills` and the `agy`-assisted edit, use the full-route manual temperature-tool code, and run the deterministic checks.

Check both the executable/version and the installed lifecycle skills. A working version command alone is not enough:

```bash
agents-cli --version
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

These are two complementary skill sources:

- The **Google Agents CLI lifecycle skills** guide the ADK workflow: scaffold, code, run, evaluate, and deploy agents.
- **`google/skills`** provides broader Google product and Cloud skills, including `gcloud` guidance.

Launch `agy` and inspect the installed skills:

```bash
agy
```

Inside the TUI, enter:

```text
/skills
```

Verify that `google-agents-cli-workflow`, `google-agents-cli-adk-code`, and `gcloud` are visible. If this is your first launch, complete the on-screen authorization first. Then return to the shell with `/exit` (or press `Ctrl+D` twice).

---

### Step 5 — Enable the Developer Knowledge API

To give `agy` access to Google's Developer Knowledge base, enable the API in your project. For these newly created workshop projects, enabling the API automatically enables the managed MCP server.

1. Run the following command in Cloud Shell to enable the **Developer Knowledge API**:

   ```bash
   gcloud services enable developerknowledge.googleapis.com
   ```

---

### Step 6 — Generate an API Key

To securely connect `agy` to the developer documentation corpus, we need a restricted API Key.

1. In the Google Cloud Console search bar, search for **Credentials** (under *APIs & Services*).
2. Click **+ Create Credentials** at the top of the dashboard and select **API key**.
3. A modal will pop up with your new API key. **Copy this key to your clipboard!**
4. For security, click **Restrict Key** in the modal.
5. Under *API restrictions*, select **Restrict key**, choose **Developer Knowledge API** from the dropdown list, and click **Save**.

---

### Step 7 — Configure the MCP Server in agy

Antigravity manages remote Model Context Protocol (MCP) servers using a central configuration file. Let's add the Google Developer Knowledge server block.

1. Protect the configuration directory first:

   ```bash
   install -d -m 700 ~/.gemini/config
   ```

2. If `~/.gemini/config/mcp_config.json` already exists, back it up and edit its existing `mcpServers` object. Preserve every unrelated server and copy **only** the `google-developer-knowledge` object from the example below — do not replace the whole file. If the file does not exist, create it and use the full JSON shown below.

   ```bash
   if test -f ~/.gemini/config/mcp_config.json \
      && test ! -f ~/.gemini/config/mcp_config.json.before-lab-7.0; then
     install -m 600 ~/.gemini/config/mcp_config.json \
       ~/.gemini/config/mcp_config.json.before-lab-7.0
   fi
   if test ! -f ~/.gemini/config/mcp_config.json \
      || test -f ~/.gemini/config/mcp_config.json.before-lab-7.0; then
     nano ~/.gemini/config/mcp_config.json
   else
     printf 'STOP: the backup could not be created — do not edit until it exists.\n' >&2
   fi
   ```

3. Replace only `YOUR_API_KEY_HERE` with the restricted API key you copied in Step 6. Do not paste the key into a prompt, command, source file, or screenshot.

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

4. Save with **`Ctrl+O`**, **`Enter`**, **`Ctrl+X`**. If you edited an existing file, make sure the final document still has one valid top-level `mcpServers` object containing every pre-existing entry.
5. Restrict the file permissions and validate the JSON:

   ```bash
   chmod 600 ~/.gemini/config/mcp_config.json
   if [ "$(stat -c '%a' ~/.gemini/config/mcp_config.json)" != "600" ]; then
     printf 'STOP: config permissions are not 600. Fix them before continuing.\n' >&2
     false
   elif ! python3 -m json.tool ~/.gemini/config/mcp_config.json >/dev/null; then
     if test ! -f ~/.gemini/config/mcp_config.json.before-lab-7.0; then
       printf 'Invalid JSON and no backup exists. Stop and fix the file.\n' >&2
     elif cp -p ~/.gemini/config/mcp_config.json.before-lab-7.0 ~/.gemini/config/mcp_config.json; then
       printf 'Invalid JSON. Previous config restored from the backup. Stop and fix the merge.\n' >&2
     else
       printf 'Invalid JSON and restoring the backup failed. Recover manually from ~/.gemini/config/mcp_config.json.before-lab-7.0.\n' >&2
     fi
     false
   fi
   ```

The command must print no `STOP` or `Invalid JSON` message. **Do not continue to `/mcp` until both checks pass.** If an existing configuration was invalid, the command restores it from the backup; keep the backup and fix the merge before continuing. If this lab created a new invalid file, stop and fix it before continuing.

---

### Step 8 — Verify and Test the MCP Connection in agy

Let's see our terminal assistant in action with its newly expanded knowledge base!

1. Launch the Antigravity TUI again:

   ```bash
   agy
   ```

2. Once the chat pane is active, run the following slash command to list all active MCP integrations:

   ```text
   /mcp
   ```

3. Verify that `google-developer-knowledge` is listed as active, exposing tools like `search_documents`, `get_documents`, and `answer_query`.
4. Test the grounding capabilities by typing a real query in the chat prompt:

   ```text
   How do I configure a GCS bucket to prevent public access using gcloud?
   ```

5. Watch as `agy` queries the Developer Knowledge API, returns up-to-date syntax, and cites the official documentation sources inline! 🛡️📚

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — The /mcp command shows the server is red or failed to connect</strong></summary>

Verify that your `mcp_config.json` syntax is perfectly formed JSON (no trailing commas, double-quotes around all keys and values). Also, double check that you renamed the legacy `url` key to `serverUrl` as required by the Antigravity CLI, and that the header key is exactly `X-Goog-Api-Key` with your correct API key.
</details>

<details>
<summary><strong>Hint 2 — agy or adk says 'command not found' after a break</strong></summary>

Your Cloud Shell VM was likely recycled and your shell state (activated venv, PATH additions, exported variables) reset — though your home directory survives. First try re-activating your environment and reloading your PATH:

```bash
source "$HOME/venv/bin/activate"
source $HOME/.local/bin/env
```

If a command is still missing, re-run only the installer whose executable/version check fails.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. Start Cloud Shell.
2. Verify the Cloud Shell tools, active account, active project, and Python 3.11+; stop if the account or project is wrong.
3. Create and activate `$HOME/venv`; run `uv --version` and install `uv` only if that check fails.
4. Run `agy --version` and install `agy` only if it fails. For the Preview / Pre-GA Agents CLI, use exactly one Step 4 case: missing CLI → official setup; facilitator-version mismatch → `uv tool upgrade` plus `agents-cli update -y`; matching version but missing lifecycle skills in `agents-cli info` → official setup. Recheck version and info. If the gate still fails, continue through Lab 7.3 using its full-route manual temperature-tool code and deterministic checks instead of `/skills` or the `agy`-assisted edit.
5. Enable the Developer Knowledge API:

   ```bash
   gcloud services enable developerknowledge.googleapis.com
   ```

6. Create an API key in the Cloud Console under **APIs & Services > Credentials** and restrict it to the Developer Knowledge API.
7. Protect `~/.gemini/config` with mode `700`. If `mcp_config.json` exists, back it up to `.before-lab-7.0` and merge only the `google-developer-knowledge` block; otherwise create the full configuration. Set mode `600`, verify it with `stat`, and require `python3 -m json.tool` to pass before continuing. Restore and keep the backup if an existing configuration fails validation.
8. Start `agy`, verify with `/mcp`, and ask the grounded test query from Step 8.
9. Keep the MCP configuration for the later workshop labs. At the end of the workshop, follow the cleanup below.
</details>

---

## ✅ You did it when…

- [ ] Cloud Shell reports `gcloud`, Python 3.11+, Node.js, and `npx`, with the correct active account and project.
- [ ] Your `$HOME/venv` environment is active, and `uv --version` and `agy --version` work; you ran an installer only for a failed check.
- [ ] The facilitator's Agents CLI Preview / Pre-GA gate passed: the version matches and `agents-cli info` lists the lifecycle skills; otherwise you will use Lab 7.3's manual temperature-tool code and deterministic checks.
- [ ] When the Agents CLI gate passes, entering `/skills` inside `agy` shows `google-agents-cli-workflow`, `google-agents-cli-adk-code`, and `gcloud`.
- [ ] You have enabled `developerknowledge.googleapis.com`, which automatically enabled the managed MCP server for this newly created workshop project.
- [ ] You have generated a restricted API key and safely merged it into `~/.gemini/config/mcp_config.json` without removing unrelated servers.
- [ ] Before `/mcp`, `stat` reports mode `600` and `python3 -m json.tool` validates the MCP configuration.
- [ ] Entering `/mcp` inside the `agy` TUI shows the `google-developer-knowledge` server as active and connected, and the grounded test query returns cited documentation.
- [ ] You know whether the lab created a new configuration or backed up an existing one, and you identified the matching end-of-workshop cleanup path.

---

## 🧹 End-of-workshop cleanup — not now

**Do not run this cleanup after Lab 7.0.** Later workshop labs use this MCP connection. Run it only when the workshop is finished:

1. In **APIs & Services → Credentials**, delete the Developer Knowledge workshop API key unless the facilitator explicitly approved reuse.
2. Remove the local MCP secret safely:
   - If Lab 7.0 created a new `mcp_config.json` (there is no `.before-lab-7.0` backup), delete that file with `rm ~/.gemini/config/mcp_config.json`.
   - If the file existed before Lab 7.0, open it with `nano`, remove **only** the `google-developer-knowledge` block, and preserve every unrelated server. Then run:

   ```bash
   chmod 600 ~/.gemini/config/mcp_config.json
   if python3 -m json.tool ~/.gemini/config/mcp_config.json >/dev/null; then
     rm ~/.gemini/config/mcp_config.json.before-lab-7.0
   else
     cp -p ~/.gemini/config/mcp_config.json.before-lab-7.0 ~/.gemini/config/mcp_config.json
     printf 'Invalid JSON. Previous config restored; backup kept. Stop and fix cleanup.\n' >&2
   fi
   ```

Delete the backup only after the cleaned configuration validates. If validation fails, the commands restore the original file and keep the backup; stop and fix the cleanup.

---

## 🧠 What you just learned

You've built a complete, reproducible developer environment! You learned that:
1. Modern Linux Python installs are **externally managed (PEP 668)** — virtual environments keep your labs conflict-free.
2. **Antigravity TUI (`agy`)** combines Agents CLI lifecycle skills with broader Google product skills.
3. The **Model Context Protocol (MCP)** allows local and remote servers to expose tools and knowledge directly to AI clients — Google provides a managed documentation corpus via `developerknowledge.googleapis.com/mcp`, securely authenticated in `agy` using the `X-Goog-Api-Key` header.

➡️ Next: **[Lab 7.2 — The Formula Assistant](./lab-7.2-formula-assistant.md)**, or back to the **[module overview](./README.md)**.
