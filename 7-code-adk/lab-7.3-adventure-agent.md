# 🟣 Lab 7.3 — The Adventure Agent

> **Your mission:** Write a small **Python** agent with Google's **Agent Development Kit (ADK 2.x)** that plays by itself until the workshop game returns its explicit **winning response**. 🗺️🤖

| 🏆 Role | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Day 2 advanced choice | ~40–60 min | **ADK 2.x** (`google-adk`, Python) | Python 3.11+, your dedicated Owner/admin workshop project, the game URL (`<WORKSHOP_ADVENTURE_GAME_URL>`), and access to a Gemini model |

> 🌐 **The game link is provided separately for each workshop** — each workshop uses its own adventure-game server, so the universal docs keep it as `<WORKSHOP_ADVENTURE_GAME_URL>`.
>
> 🚪 **External value gate:** Your facilitator must supply the game URL before this lab. If you do not have it, skip this lab. The workshop game accepts `POST` requests at that supplied URL with JSON shaped exactly like `{"command":"look"}` and returns a successful text response. Do not guess a URL or request shape.

---

## 🎬 The story

You've built agents by **chatting** and by **drawing flows**. Those are perfect for business users. But engineers sometimes need agents that are **testable, version-controlled, and measurable** — real software. That's **ADK**.

Your quest: drop an agent into a text-based world, give it a way to send commands ("go north", "take key", "open door"), and let it **explore, solve puzzles, and reach the goal on its own**. No human steering. 🎮

---

## 🧰 Before you start (2-minute setup)

> 🚪 **Prep Gate:** This lab assumes you completed **[Lab 7.0 — Developer Setup](./lab-7.0-developer-setup.md)** (Cloud Shell + Python virtual environment). If not, run it first.

Open **Cloud Shell** (or your local terminal) and activate your environment. Since we are importing the `requests` library in our code later, we must make sure to install it alongside `google-adk` inside the virtual environment:

```bash
# 1. Activate the virtual environment from Lab 7.0
source venv/bin/activate

# 2. Install the kit AND the requests library
pip install --upgrade pip
pip install google-adk requests

# 3. Confirm the CLI is available
adk --version
```

> 💡 **Using `uv`?** If you created your environment with `uv` in Lab 7.0, run this instead:
> ```bash
> source .venv/bin/activate && uv pip install google-adk requests
> ```

---

## 🛠️ Build it (step by step)

**Step 1 — Play the game by hand first.** 🎮
Open the game URL your facilitator gives you and play a few moves yourself. Learn the **commands** it accepts and identify the game's explicit **winning response**. You can't automate a world you don't understand.

**Step 2 — Make the project.**
ADK expects a small folder with an `__init__.py`, an `agent.py` that exposes a `root_agent`, and a `requirements.txt` file detailing dependencies:

```
adventure/
├── __init__.py        # one line: from . import agent
├── agent.py           # defines root_agent
├── requirements.txt   # third-party libraries (google-adk, requests)
└── .env               # your model credentials + the game URL
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

The `.env` file is how your agent reaches a **Gemini model** — without it, nothing runs. ADK loads it automatically from the agent folder. Create `adventure/.env` and configure your credentials using one of the following methods:

### 🔑 Option A: Google AI Studio (Easiest & Free)
1. Go to **[aistudio.google.com](https://aistudio.google.com)**.
2. Click **Get API Key** and create a new key.
3. Open `adventure/.env` in your editor and add:
   ```bash
   GOOGLE_GENAI_USE_VERTEXAI=FALSE
   GOOGLE_API_KEY="YOUR_AI_STUDIO_API_KEY"
   GAME_URL="<WORKSHOP_ADVENTURE_GAME_URL>"
   ```

### ☁️ Option B: Vertex AI / Agent Platform (Keyless Cloud Integration)
If you are running in Cloud Shell with access to your workshop's Google Cloud project, you can authenticate keylessly:
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
   ```

**Step 3 — Give the agent a tool (this is the key move 🔑).**
A **tool** is just a Python function. This one sends each command as a `POST` request to the supplied game URL with JSON shaped exactly like `{"command":"look"}` and returns what the game says back. Open `adventure/agent.py` in your editor and add:

```python
import os
import requests

GAME_URL = os.environ["GAME_URL"]

def play_move(command: str) -> dict:
    """Send a single command to the adventure game and return its text response.

    Args:
        command: The action to take, e.g. "go north", "take key", "look".
    """
    resp = requests.post(GAME_URL, json={"command": command}, timeout=15)
    return {"reply": resp.text}
```

**Step 4 — Write the agent.** In the same `adventure/agent.py`, below the tool, tell it *who it is*, *its goal*, and *give it the tool*:

```python
from google.adk import Agent

root_agent = Agent(
    name="adventure_agent",
    model="gemini-2.5-flash",
    instruction=(
        "You are playing a text adventure game. Your goal is to win. "
        "Use the play_move tool to send ONE command at a time. "
        "After each reply, build a mental map of rooms and items, then decide the next move. "
        "Explore systematically, pick up useful items, and work toward the goal. "
        "If a move fails, try a different approach — never give up."
    ),
    tools=[play_move],
)
```

**Step 5 — Run it.** Two ways (ADK auto-loads `adventure/.env`, so no exports needed):

```bash
adk run adventure      # interactive in your terminal
adk web .              # a local web UI to watch it think, step by step
```

**Step 6 — Watch, then improve.** Run the agent once. If the game returns its explicit **winning response**, you are done. Otherwise, confirm that the agent makes progress through the world, tighten the `instruction`, re-run, and check that the new prompt gets further. Continue until the game returns its winning response. That loop — *observe → adjust the prompt → re-run* — is the whole game.

---

## 💡 Tips & tricks

- 🧭 **Make it narrate its plan.** Add to the instruction: *"Before each move, state your current goal in one sentence."* You'll instantly see *why* it's stuck.
- 🗺️ **Ask it to track state.** *"Keep a running list of rooms visited and items held."* Agents play far better when they remember.
- 🔁 **One command per turn.** Tell it explicitly — batching moves confuses the game parser.
- 🧪 **Use `adk web`** to inspect each tool call and the model's reasoning. It's the fastest way to debug.
- 🎛️ **Swap models freely.** `gemini-2.5-flash` is fast and cheap for iterating; try a bigger model if it gets stuck on hard puzzles.

## ✅ Do / 🚫 Don't

| ✅ Do | 🚫 Don't |
|---|---|
| Keep the tool tiny and single-purpose (`play_move`) | Don't make one mega-tool that does everything |
| Put all behavior in the **instruction**, iterate on it | Don't hard-code a fixed sequence of moves — that's not an agent |
| Test the tool function on its own first | Don't debug the tool and the agent at the same time |
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

The model credentials aren't reaching ADK. Check that `adventure/.env` exists (Step 2), contains a valid `GOOGLE_API_KEY` (no extra spaces, quotes intact), and has `GOOGLE_GENAI_USE_VERTEXAI=FALSE`. Then re-run from the folder *above* `adventure/`. On Gemini Enterprise: `GOOGLE_GENAI_USE_VERTEXAI=TRUE` + `GOOGLE_CLOUD_PROJECT` + `GOOGLE_CLOUD_LOCATION`, and make sure you ran `gcloud auth application-default login`.
</details>

<details>
<summary><strong>Hint 3 — The agent never calls my tool</strong></summary>

Make sure you actually passed it: `tools=[play_move]`. And give the function a real **docstring** describing what it does and its `command` argument — ADK shows that description to the model, so a vague docstring means the model won't know when to use it.
</details>

<details>
<summary><strong>Hint 4 — It makes one move and stops, or loops forever</strong></summary>

Strengthen the instruction: *"Continue making moves until you win or are truly stuck. Take ONE action per turn, observe the result, then act again."* For loops, add: *"If the same move fails 3 times, try something different."*
</details>

<details>
<summary><strong>✅ Show me a full working solution</strong></summary>

`adventure/.env`

```bash
GOOGLE_GENAI_USE_VERTEXAI=FALSE
GOOGLE_API_KEY="your-api-key-here"
GAME_URL="<WORKSHOP_ADVENTURE_GAME_URL>"
```

`adventure/__init__.py`

```python
from . import agent
```

`adventure/agent.py`

```python
import os
import requests
from google.adk import Agent

# Your facilitator provides this for your workshop's game server.
GAME_URL = os.environ["GAME_URL"]

def play_move(command: str) -> dict:
    """Send one command to the adventure game and return its reply.

    Args:
        command: The action to take, e.g. "go north", "take key", "look".
    """
    resp = requests.post(GAME_URL, json={"command": command}, timeout=15)
    return {"reply": resp.text}

root_agent = Agent(
    name="adventure_agent",
    model="gemini-2.5-flash",
    instruction=(
        "You are playing a text adventure game; your goal is to win. "
        "Use play_move to send ONE command per turn. After each reply, keep a running "
        "list of rooms visited and items held, then decide the next best move. "
        "Explore systematically and collect useful items. If a move fails 3 times, "
        "change strategy. Never give up until you win."
    ),
    tools=[play_move],
)
```

Run it (from the folder *above* `adventure/` — ADK picks up the `.env` automatically):

```bash
adk web .          # watch it play in the browser, or:
adk run adventure  # play in the terminal
```

</details>

---

## ✅ You did it when…

- [ ] You played the game manually and know its commands.
- [ ] If the first run did not win, you confirmed progress in `adk web`, improved the **instruction**, and saw the agent get further.
- [ ] Your agent reaches the workshop game's explicit **winning response** without human steering.

---

## ✨ Optional level-up challenge — *measure* it (real Agent Engineering)

Don't just vibe-check it — **evaluate** it. ADK ships an evaluation flow:

```bash
adk eval adventure path/to/your.evalset.json
```

Create an evalset by following the official [ADK evaluation guide](https://google.github.io/adk-docs/evaluate/), capture two successful runs, then prove a prompt change improved the score. Measuring tool-use and outcomes against known-good runs is what separates a demo from a dependable agent. 📊

---

## 🧠 What you just learned

You met the difference between **building agents fast** (no-code, Modules 1–6) and **engineering agents to last** (code + tests + evaluation). With ADK 2.x you defined an agent, gave it a tool, ran it, and prepared it for measurement as a real software artifact.

📚 **Go deeper:** the official docs at **[adk.dev](https://adk.dev/)** (quickstart, tools, multi-agent **Workflow** graphs, and evaluation).

⬅️ Back to the **[module overview](./README.md)** · **[student materials](../README.md)**.
