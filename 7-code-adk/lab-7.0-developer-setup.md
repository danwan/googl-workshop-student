# 🟣 Lab 7.0 — Developer Setup (The Prep Gate)

> **Your mission:** Prepare your complete developer environment in **Google Cloud Shell**: a clean Python virtual environment, the **Google Agent CLI (`agents-cli`)**, the **Antigravity CLI (`agy`)**, and the official **Google Developer Knowledge MCP server** — everything the coding labs in Modules 7–9 rely on. 💻🌐

| 🏆 Role | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Day 2 core | ~25–35 min | **Google Cloud Shell** | Your dedicated billed workshop project with Project Owner/admin access and Python 3.11+ |

---

## 🎬 The story

As Lead AI Architect at **TechBond Industries**, you want to empower our terminal-loving developer teams. While visual agent builders are great, true developers want to work directly inside **Google Cloud Shell** using their CLI tools.

This lab is the single **Developer Prep Gate** for the code track: run it once and every coding lab that follows (7.1 → 7.3, Module 8, Lab 9.3) will work out of the box. You'll also hook the **Antigravity CLI (`agy`)** up to the official **Google Developer Knowledge Model Context Protocol (MCP) server**, so your terminal assistant can search, retrieve, and cite official Google Cloud documentation in real time while you write code!

> ♻️ **Coming back after a break (or on Day 2)?** Cloud Shell recycles its VM after a period of inactivity. Your home directory (your `venv` folder, `agy`, `uv`) survives on persistent disk, but your **shell state resets** — the virtual environment is no longer activated and exported variables are gone. Re-activate with `source venv/bin/activate`, and only re-run Steps 2–3 below (they're idempotent) if a command is actually missing.

Let's dive into the terminal! 🚀

---

## 🛠️ Build it (step by step)

### Step 1 — Open Cloud Shell

1. At the top right of your Google Cloud Console, click the **Activate Cloud Shell** button (it looks like a terminal prompt icon: `>_`).
2. Wait a moment for your free Linux VM to provision and connect.

---

### Step 2 — Set up Python isolation & the Google Agent CLI

Modern Python environments restrict global package installation (PEP 668), so all our labs work inside an isolated virtual environment. We'll also install the ultra-fast Python manager `uv` and Google's `agents-cli`, which helps scaffold, build, and evaluate ADK agents.

Run everything below from your **home directory** (`cd ~`) — the later labs assume the `venv` folder lives there:

```bash
# 0. Make sure you're in your home directory
cd ~

# 1. Verify Python 3.11+ is installed
python3 --version

# 2. Create and activate a clean virtual environment
python3 -m venv venv
source venv/bin/activate

# 3. Download and inspect the uv installer (if uv is not already installed)
curl --max-time 10 -LsSf https://astral.sh/uv/install.sh -o install-uv.sh
less install-uv.sh
```

Read the installer and press `q` after you reach the end. If you cannot assess what it will do, stop and ask the facilitator to review it with you. Then run the reviewed local file and continue:

```bash
bash install-uv.sh
rm install-uv.sh
source $HOME/.local/bin/env

# 4. Install the google-agents-cli tool
uv tool install google-agents-cli

# 5. Initialize setup (installs skills and configures basic prompts)
uvx google-agents-cli setup
```

Verify your installation works:
```bash
agents-cli info
```

> 💡 **Prefer `uv` for everything?** You can also create the virtual environment with `uv venv && source .venv/bin/activate` and later install packages with `uv pip install …` instead of `pip install …`.

---

### Step 3 — Install, update & launch the Antigravity CLI (`agy`)

The **Antigravity CLI (`agy`)** is a terminal-based AI assistant that lets you build, manage, and debug your cloud applications.

1. Verify whether `agy` is installed:
   ```bash
   agy --version
   ```
   If Cloud Shell reports `command not found`, download and inspect the official installer:
   ```bash
   curl --max-time 10 -fsSL https://antigravity.google/cli/install.sh -o install-agy.sh
   less install-agy.sh
   ```
   Read the installer and press `q` after you reach the end. If you cannot assess what it will do, stop and ask the facilitator to review it with you. Then run the reviewed local file:
   ```bash
   bash install-agy.sh
   rm install-agy.sh
   source "$HOME/.local/bin/env"
   ```
2. To ensure you have the latest features, bug fixes, and compatibility patches, run the CLI self-updater and verify the version:
   ```bash
   agy update
   agy --version
   ```
3. Now launch the TUI assistant:
   ```bash
   agy
   ```
4. If this is your first time, follow the on-screen steps to authorize `agy` to access your cloud resources.
5. Take a look at the terminal user interface! When you are ready, exit the TUI back to your regular shell prompt by typing:
   ```text
   /exit
   ```
   *(Or press `Ctrl+D` twice.)*

---

### Step 4 — Enable the Developer Knowledge API & MCP Endpoints

To make `agy` truly intelligent and eliminate hallucinations, we'll hook it up to Google's Developer Knowledge base. First, turn on the necessary APIs inside your project.

1. Run the following command in Cloud Shell to enable the **Developer Knowledge API**:
   ```bash
   gcloud services enable developerknowledge.googleapis.com
   ```
2. Run the following command to enable the Beta **Model Context Protocol (MCP)** service endpoint for Developer Knowledge:
   ```bash
   gcloud beta services mcp enable developerknowledge.googleapis.com
   ```

---

### Step 5 — Generate an API Key

To securely connect `agy` to the developer documentation corpus, we need a restricted API Key.

1. In the Google Cloud Console search bar, search for **Credentials** (under *APIs & Services*).
2. Click **+ Create Credentials** at the top of the dashboard and select **API key**.
3. A modal will pop up with your new API key. **Copy this key to your clipboard!**
4. For security, click **Restrict Key** in the modal.
5. Under *API restrictions*, select **Restrict key**, choose **Developer Knowledge API** from the dropdown list, and click **Save**.

---

### Step 6 — Configure the MCP Server in agy

Antigravity manages remote Model Context Protocol (MCP) servers using a central configuration file. Let's add the Google Developer Knowledge server block.

1. In Cloud Shell, we need to create or edit the `mcp_config.json` configuration file located in our CLI home directory. Open it using `nano`:
   ```bash
   nano ~/.gemini/antigravity-cli/mcp_config.json
   ```
2. Paste the following JSON block into the editor, replacing `YOUR_API_KEY_HERE` with the restricted API key you copied in Step 5:
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
3. Save and close the file by pressing **`Ctrl+O`**, then **`Enter`**, then **`Ctrl+X`**.

---

### Step 7 — Verify and Test the MCP Connection in agy

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
<summary><strong>Hint 1 — 'gcloud beta services mcp' says command not found</strong></summary>

The `gcloud beta` component may need to be installed. Run `gcloud components install beta` in Cloud Shell, or you can perform the enablement in the **APIs & Services > Library** dashboard of your Cloud Console by searching for "Developer Knowledge API" and clicking Enable.
</details>

<details>
<summary><strong>Hint 2 — The /mcp command shows the server is red or failed to connect</strong></summary>

Verify that your `mcp_config.json` syntax is perfectly formed JSON (no trailing commas, double-quotes around all keys and values). Also, double check that you renamed the legacy `url` key to `serverUrl` as required by the Antigravity CLI, and that the header key is exactly `X-Goog-Api-Key` with your correct API key.
</details>

<details>
<summary><strong>Hint 3 — agy or adk says 'command not found' after a break</strong></summary>

Your Cloud Shell VM was likely recycled and your shell state (activated venv, PATH additions, exported variables) reset — though your home directory survives. First try re-activating your environment and reloading your PATH:
```bash
source venv/bin/activate
source $HOME/.local/bin/env
```
If a command is still missing, re-run Step 2 and Step 3 (both are safe to repeat).
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. Start Cloud Shell.
2. Create and activate a venv (`python3 -m venv venv && source venv/bin/activate`), install `uv`, `google-agents-cli`, and run `agents-cli info`.
3. If `agy` is missing, follow Step 3's download, inspect, facilitator-review, and local-run sequence. Then run `agy update`.
4. Enable the APIs:
   ```bash
   gcloud services enable developerknowledge.googleapis.com
   gcloud beta services mcp enable developerknowledge.googleapis.com
   ```
5. Create an API key in the Cloud Console under **APIs & Services > Credentials** and restrict it to the Developer Knowledge API.
6. Create/update the file `~/.gemini/antigravity-cli/mcp_config.json` with your API key:
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
7. Start `agy` and verify with `/mcp`.
</details>

---

## ✅ You did it when…

- [ ] Your virtual environment is active (your prompt shows `(venv)`) and `agents-cli info` works.
- [ ] You have run `agy update` and verified that `agy --version` works in Cloud Shell.
- [ ] You have enabled both the `developerknowledge.googleapis.com` API and the beta MCP endpoint.
- [ ] You have generated a restricted API key and mapped it in `~/.gemini/antigravity-cli/mcp_config.json`.
- [ ] Entering `/mcp` inside the `agy` TUI shows the `google-developer-knowledge` server as active and connected.

---

## 🧠 What you just learned

You've built a complete, reproducible developer environment! You learned that:
1. Modern Linux Python installs are **externally managed (PEP 668)** — virtual environments keep your labs conflict-free.
2. **Antigravity TUI (`agy`)** can be installed with one command and updated directly from the command line using `agy update`.
3. The **Model Context Protocol (MCP)** allows local and remote servers to expose tools and knowledge directly to AI clients — Google provides a managed documentation corpus via `developerknowledge.googleapis.com/mcp`, securely authenticated in `agy` using the `X-Goog-Api-Key` header.

➡️ Next: **[Lab 7.1 — The Formula Assistant](./lab-7.1-formula-assistant.md)**, or back to the **[module overview](./README.md)**.
