# 🟣 Lab 7.4 — The Adventure Agent

> **Your mission:** Write a small **Python** agent with Google's **Agent Development Kit (ADK 2.x)** that plays by itself until the workshop game reports the **level is complete**. 🗺️🤖

| 🏆 Role | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Day 2 advanced choice | ~40–60 min | **ADK 2.x** (`google-adk`, Python) | Python 3.11+, your dedicated Owner/admin workshop project, the game URL (`<WORKSHOP_ADVENTURE_GAME_URL>`), your **personal game API key**, and access to a Gemini model |

> 🌐 **The game link is provided separately for each workshop** — each workshop uses its own adventure-game server, so the universal docs keep it as `<WORKSHOP_ADVENTURE_GAME_URL>`.
>
> 🚪 **External value gate:** Your facilitator must supply the game URL before this lab. If you do not have it, skip this lab. The game is a **stateful REST API**: every request must carry your personal API key in an `Authorization: ApiKey YOUR_KEY` header, each action is its own endpoint under `/game/…` (`start`, `look`, `move`, `take`, `drop`, `use`, `examine`, `inventory`), and the server publishes an **OpenAPI spec** at `/openapi.json`. You get your key and working `curl` examples from the game's **Test the Game API** page. Do not guess URLs or request shapes — copy them from that page or from this lab.

---

## 🎬 The story

You've built agents by **chatting** and by **drawing flows**. Those are perfect for business users. But engineers sometimes need agents that are **testable, version-controlled, and measurable** — real software. That's **ADK**.

Your quest: drop an agent into a text-based world, give it tools to act (move north, take key, use key on door), and let it **explore, solve puzzles, and complete the level on its own**. No human steering. 🎮

---

## 🧰 Before you start (2-minute setup)

> 🚪 **Prep Gate:** This lab assumes you completed **[Lab 7.0 — Developer Setup](./lab-7.0-developer-setup.md)** (Cloud Shell + Python virtual environment). If not, run it first.

Open **Cloud Shell**, return to your home directory, and activate your environment. Since we are importing the `requests` library in our code later, we must make sure to install it alongside `google-adk` inside the virtual environment:

```bash
# 1. Activate the virtual environment from Lab 7.0
cd "$HOME"
source "$HOME/venv/bin/activate"

# 2. Install the kit AND the requests library
pip install --upgrade pip
pip install google-adk requests

# 3. Confirm the CLI is available
adk --version
```

---

## 🛠️ Build it (step by step)

**Step 1 — Play the game by hand first.** 🎮
Open the game URL your facilitator gives you, work through its workshop pages, and play a few moves in the web interface. Then open the game's **Test the Game API** page: it shows your **personal API key** and `curl` examples for starting a level and looking around. Try them — the JSON you get back is exactly what your agent will see. You can't automate a world you don't understand.

> 🔐 Your game API key is personal. Treat it like a password: keep it in `.env`, never in code, prompts, or screenshots.

**Step 2 — Make the project.**
ADK expects a small folder with an `__init__.py`, an `agent.py` that exposes a `root_agent`, and a `requirements.txt` file detailing dependencies:

```
adventure/
├── __init__.py        # one line: from . import agent
├── agent.py           # defines root_agent
├── requirements.txt   # third-party libraries (google-adk, requests)
└── .env               # non-secret model settings + the game URL
```

Let's create the folder structure and touch the files:

```bash
mkdir -p adventure
printf 'from . import agent\n' > adventure/__init__.py
touch adventure/agent.py
touch adventure/requirements.txt
touch adventure/.env
```

Open `adventure/requirements.txt` in your editor and add:

```text
google-adk
requests
```

The `.env` file holds the non-secret settings for your **Gemini model** and game. ADK loads it automatically from the agent folder. Vertex AI is the workshop default.

### ☁️ Default: Vertex AI / Agent Platform (keyless)

1. In Cloud Shell, run:

   ```bash
   gcloud auth application-default login
   ```

2. Open `adventure/.env` in your editor and add (replace with your project ID):

   ```bash
   GOOGLE_GENAI_USE_VERTEXAI=TRUE
   GOOGLE_CLOUD_PROJECT="your-project-id"
   GOOGLE_CLOUD_LOCATION="europe-west4"
   GAME_URL="<WORKSHOP_ADVENTURE_GAME_URL>"
   GAME_API_KEY="YOUR_PERSONAL_GAME_API_KEY"
   ```

### 🔑 Facilitator-controlled fallback: Google AI Studio

Use this only when the facilitator explicitly enables the fallback and controls the provider key. Keep the same non-secret `GAME_URL` and `GAME_API_KEY` in `.env`; never write the provider key there. Read it without displaying it and export it only in the current shell:

```bash
read -rsp "Facilitator-provided AI Studio key: " GOOGLE_API_KEY
printf '\n'
export GOOGLE_API_KEY
export GOOGLE_GENAI_USE_VERTEXAI=FALSE
```

**Step 3 — Give the agent tools (this is the key move 🔑).**
The game publishes an **OpenAPI specification** at `<GAME_URL>/openapi.json` — a machine-readable description of every endpoint, its parameters, and its responses. Instead of hand-writing one Python function per endpoint (you did that in Lab 7.2), let ADK's **`OpenAPIToolset`** generate the whole toolset from the spec, with your API key wired into every request. This is the same approach the game's own workshop pages walk you through.

Open `adventure/agent.py` in your editor and add:

```python
import os
import requests
from google.adk.tools.openapi_tool import OpenAPIToolset
from google.adk.tools.openapi_tool.auth.auth_helpers import token_to_scheme_credential

GAME_URL = os.environ["GAME_URL"].rstrip("/")

openapi_spec = requests.get(f"{GAME_URL}/openapi.json", timeout=15).text

auth_scheme, auth_credential = token_to_scheme_credential(
    "apikey",
    "header",
    "Authorization",
    f"ApiKey {os.environ.get('GAME_API_KEY')}",
)

adventure_game_toolset = OpenAPIToolset(
    spec_str=openapi_spec,
    auth_scheme=auth_scheme,
    auth_credential=auth_credential,
)
```

The toolset gives your agent one tool per endpoint. The API is **stateful** — the server remembers your level and location, and starting a level cancels any session already running:

| Endpoint | What it does |
|---|---|
| `POST /game/start` | Start (or restart) a level, e.g. `level-0` |
| `GET /game/levels` | List the available levels |
| `GET /game/look` | Describe the current room, its items, and exits |
| `POST /game/move` | Move through an exit (`exit_name`) |
| `POST /game/take` / `POST /game/drop` | Pick up / drop an item (`item_name`) |
| `POST /game/use` | Use an item (`direct_object`), optionally on another (`indirect_object`) |
| `POST /game/examine` | Inspect an item or feature (`target`) |
| `GET /game/inventory` | List what you are carrying |

**Step 4 — Write the agent.** In the same `adventure/agent.py`, below the toolset, define the agent. The instruction is deliberately minimal — making it smarter is Step 6:

```python
from google.adk.agents.llm_agent import Agent
from google.adk.models import Gemini
from google.genai import types

root_agent = Agent(
    model=Gemini(
        model="gemini-3.5-flash",
        retry_options=types.HttpRetryOptions(
            initial_delay=2.0,
            attempts=6,
            max_delay=60.0,
        ),
    ),
    name="adventure_agent",
    description="An expert adventure game player.",
    instruction=("Solve the requested level"),
    tools=[adventure_game_toolset],
)
```

> ⏳ The `retry_options` matter in a room full of participants: when the model API rate-limits you, ADK backs off and retries instead of crashing mid-quest.

**Step 5 — Run it.** Two ways (ADK auto-loads `adventure/.env`; only the approved AI Studio fallback needs the Step 2 shell exports):

```bash
adk run adventure      # interactive in your terminal
adk web .              # a local web UI to watch it think, step by step
```

In the chat, try: *"What levels can I play?"* — then *"Solve level 0"*.

> 🔁 Edited `.env` while the web UI was running? Restart it — the environment is read at startup.

**Step 6 — Make it autonomous, then improve.** Run the agent once. With the minimal instruction it will play, but not well. Now rewrite the `instruction` to give it a clear goal and a way of working: explore systematically, examine anything unusual, keep a running list of rooms and items, take ONE action per turn, narrate its plan before each move, change strategy after repeated failures, and **stop after at most 40 moves** with a short failure report if the level is still unsolved. Re-run and check the new prompt gets further, until the game reports the **level is complete** (a `level_complete` flag or victory message). That loop — *observe → adjust the prompt → re-run* — is the whole game.

If you used the AI Studio fallback, then run `unset GOOGLE_API_KEY GOOGLE_GENAI_USE_VERTEXAI` and have the facilitator delete or revoke the provider key.

---

## 💡 Tips & tricks

- 🧭 **Make it narrate its plan.** Add to the instruction: *"Before each move, state your current goal in one sentence."* You'll instantly see *why* it's stuck.
- 🗺️ **Ask it to track state.** *"Keep a running list of rooms visited and items held."* Agents play far better when they remember.
- 🔁 **One action per turn.** Tell it explicitly — the API is stateful, so each reply changes what the right next move is.
- 🧪 **Use `adk web`** to inspect each tool call and the model's reasoning. It's the fastest way to debug.
- 🎛️ **Swap models freely.** `gemini-3.5-flash` is fast and cheap for iterating; try a bigger Gemini model if it gets stuck on hard puzzles.

## ✅ Do / 🚫 Don't

| ✅ Do | 🚫 Don't |
|---|---|
| Let `OpenAPIToolset` generate the API tools from the spec | Don't hand-write one function per endpoint — the spec already describes them |
| Put all behavior in the **instruction**, iterate on it | Don't hard-code a fixed sequence of moves — that's not an agent |
| Test the API with `curl` first (the game's *Test the Game API* page) | Don't debug the API and the agent at the same time |
| Let the agent **retry** failed moves | Don't let it loop forever — add "if stuck after 3 tries, change strategy" |
| Read the [ADK docs](https://adk.dev/) when unsure | Don't guess API names — ADK 2.x changed some from 1.x |

---

## 🆘 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — "ModuleNotFoundError: google.adk" or CLI not found</strong></summary>

You're likely on Python 3.9 or older — ADK 2.x needs **3.10+**. Check `python --version`, then `pip install google-adk` in that interpreter. Confirm with `adk --version`.
</details>

<details>
<summary><strong>Hint 2 — "Missing key inputs argument" / API key or auth errors</strong></summary>

The model configuration is not reaching ADK. For the default route, check that `adventure/.env` contains `GOOGLE_GENAI_USE_VERTEXAI=TRUE`, `GOOGLE_CLOUD_PROJECT`, `GOOGLE_CLOUD_LOCATION`, and `GAME_URL`, then confirm you ran `gcloud auth application-default login`. For the approved fallback, confirm the provider key and `GOOGLE_GENAI_USE_VERTEXAI=FALSE` were exported in this shell. Re-run from the folder *above* `adventure/`.
</details>

<details>
<summary><strong>Hint 3 — The game returns 401/403 or "detail: Not authenticated"</strong></summary>

The **game** key (not the Gemini one) isn't reaching the server. Check that `adventure/.env` has `GAME_API_KEY` set to the key from the game's **Test the Game API** page, then **restart** `adk web`/`adk run` — the environment is read at startup. The header must end up as `Authorization: ApiKey YOUR_KEY` (the word `ApiKey`, one space, then the key), which is exactly what the `token_to_scheme_credential(...)` line builds. Test outside ADK first with the `curl` examples from that page.
</details>

<details>
<summary><strong>Hint 4 — The agent never calls my tools</strong></summary>

Make sure you actually passed the toolset: `tools=[adventure_game_toolset]`. If the toolset came out empty, open `<GAME_URL>/openapi.json` in your browser and confirm it returns the spec — a typo'd `GAME_URL` gives you an agent with zero tools and no error.
</details>

<details>
<summary><strong>Hint 5 — It makes one move and stops, or loops forever</strong></summary>

Strengthen the instruction: *"Continue making moves until you win or are truly stuck. Take ONE action per turn, observe the result, then act again."* For loops, add: *"If the same move fails 3 times, try something different."*
</details>

<details>
<summary><strong>✅ Show me a full working solution</strong></summary>

`adventure/.env`

```bash
GOOGLE_GENAI_USE_VERTEXAI=TRUE
GOOGLE_CLOUD_PROJECT="your-project-id"
GOOGLE_CLOUD_LOCATION="europe-west4"
GAME_URL="<WORKSHOP_ADVENTURE_GAME_URL>"
GAME_API_KEY="your-personal-game-api-key"
```

Authenticate with `gcloud auth application-default login`. If the facilitator enables the AI Studio fallback instead, use Step 2's hidden shell read/export and never add its key to this file.

`adventure/__init__.py`

```python
from . import agent
```

`adventure/agent.py`

```python
import os
import requests
from google.adk.agents.llm_agent import Agent
from google.adk.models import Gemini
from google.adk.tools.openapi_tool import OpenAPIToolset
from google.adk.tools.openapi_tool.auth.auth_helpers import token_to_scheme_credential
from google.genai import types

# Your facilitator provides the game URL; your personal API key
# comes from the game's "Test the Game API" page.
GAME_URL = os.environ["GAME_URL"].rstrip("/")

openapi_spec = requests.get(f"{GAME_URL}/openapi.json", timeout=15).text

auth_scheme, auth_credential = token_to_scheme_credential(
    "apikey",
    "header",
    "Authorization",
    f"ApiKey {os.environ.get('GAME_API_KEY')}",
)

adventure_game_toolset = OpenAPIToolset(
    spec_str=openapi_spec,
    auth_scheme=auth_scheme,
    auth_credential=auth_credential,
)

root_agent = Agent(
    model=Gemini(
        model="gemini-3.5-flash",
        retry_options=types.HttpRetryOptions(
            initial_delay=2.0,
            attempts=6,
            max_delay=60.0,
        ),
    ),
    name="adventure_agent",
    description="An expert adventure game player.",
    instruction=(
        "You are playing a text adventure game; your goal is to complete the level "
        "the user names. Start the level, then look around. Take ONE action per turn "
        "and study the reply before the next. Keep a running list of rooms visited "
        "and items held. Examine anything unusual, collect useful items, and use "
        "them — alone or on other things — when a puzzle demands it. Narrate your "
        "plan in one sentence before each action. If an action fails 3 times, change "
        "strategy. Keep playing until the game reports the level is complete, but "
        "stop after at most 40 moves and report what blocked you if it is not."
    ),
    tools=[adventure_game_toolset],
)
```

Run it (from the folder *above* `adventure/` — ADK picks up the `.env` automatically):

```bash
adk web .          # watch it play in the browser, or:
adk run adventure  # play in the terminal
```

When the session opens, send this exact first user message:

> Solve level 0. Take exactly one game action per tool call and keep going until the game reports the level is complete. Stop after at most 40 moves and give me a short failure report if it is not complete by then.

After an AI Studio fallback run, unset `GOOGLE_API_KEY GOOGLE_GENAI_USE_VERTEXAI` and have the facilitator delete or revoke the provider key.

</details>

---

## ✅ You did it when…

- [ ] You played the game manually and copied your personal API key from the **Test the Game API** page.
- [ ] If the first run did not win, you confirmed progress in `adk web`, improved the **instruction**, and saw the agent get further.
- [ ] Your agent plays until the game reports the **level is complete** — without human steering.

---

## ✨ Optional level-up — Level 2 needs a *custom* tool

Level 2 contains a puzzle a language model can't brute-force through the standard game actions — it needs a **custom tool**. A custom tool is just a Python function with a good docstring, exactly like you wrote in Lab 7.2: play Level 2 far enough to discover what logic is missing, implement it as a function, pass it alongside the toolset (`tools=[adventure_game_toolset, your_tool]`), restart `adk web`, and send the agent back in. The game's **Add Tools** workshop page links a step-by-step guide.

---

## ✨ Optional level-up challenge — *measure* it (real Agent Engineering)

Don't just vibe-check it — **evaluate** it. ADK ships an evaluation flow:

```bash
adk eval adventure path/to/your.evalset.json
```

Create an evalset by following the official [ADK evaluation guide](https://google.github.io/adk-docs/evaluate/), capture two successful runs, then prove a prompt change improved the score. Measuring tool-use and outcomes against known-good runs is what separates a demo from a dependable agent. 📊

---

## 🧠 What you just learned

You met the difference between **building agents fast** (no-code, Modules 1–6) and **engineering agents to last** (code + tests + evaluation). With ADK 2.x you defined an agent, generated a full toolset from an OpenAPI spec, ran it, and prepared it for measurement as a real software artifact.

📚 **Go deeper:** the official docs at **[adk.dev](https://adk.dev/)** (quickstart, tools, multi-agent **Workflow** graphs, and evaluation).

⬅️ Back to the **[module overview](./README.md)** · **[student materials](../README.md)**.
