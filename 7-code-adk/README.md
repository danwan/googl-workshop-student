# 🟣 Module 7 · Build with Code (ADK 2.x)

> **Workshop role:** Day 1 core with standalone Lab 7.1. Day 2 standard ADK path with Labs 7.0, 7.2, 7.2.1, and 7.3; catch-up with Lab 7.1; advanced choice with Lab 7.4.

Build agents **in code** with Google's **Agent Development Kit (ADK 2.x)**, use the **Antigravity CLI (`agy`)** to assist you, and optionally engineer a game-playing agent.

> Lab 7.1 welcomes beginners and stands alone. The Day 2 ADK path uses Python and pairing.
>
> 🌐 **The adventure-game link is provided by your facilitator** (for Lab 7.4) — it's unique to each workshop, so it isn't stored here.

## What you'll need

- **Python 3.11+** for the complete setup path and `pip install google-adk`
- **Google Cloud Shell** with `gcloud`, Node.js, and `npx`
- The **Antigravity CLI** (`agy`), Agents CLI lifecycle skills, and Google Cloud skills
- A dedicated billed workshop project with Project Owner/admin access
- For Lab 7.4: The **game URL** (`<WORKSHOP_ADVENTURE_GAME_URL>`, shared separately) and your **personal game API key** (from the game's *Test the Game API* page)
- Access to a **Gemini model** (Google AI Studio key or **Gemini Enterprise**)

---

## 🛠️ Prep-Work: Lab 7.0, the Developer Prep Gate

All terminal setup for the code track — Cloud Shell account/project checks, the Python virtual environment, `uv`, the **Antigravity CLI (`agy`)**, **Google Agents CLI (`agents-cli`)** lifecycle skills, broader `google/skills`, and the Developer Knowledge MCP server — lives in one place: **[Lab 7.0 — Developer Setup](./lab-7.0-developer-setup.md)**. Allow 40–50 minutes before Lab 7.2. After Cloud Shell recycles, reactivate `~/venv` and reload the PATH; repeat an install step only when its command is missing.

## The labs

| Lab | What you build |
|---|---|
| **[Lab 7.0 — Developer Setup (The Prep Gate)](./lab-7.0-developer-setup.md)** | Verify Cloud Shell, install `agy`, Agents CLI lifecycle skills and Google Cloud skills, then connect the Developer Knowledge MCP server. |
| **[Lab 7.1: Vibe Coding Taster](./lab-7.1-vibe-coding-taster.md)** | A standalone Cloud Shell and `agy` loop using a Python standard-library batch checker. |
| **[Lab 7.2 — The Formula Assistant](./lab-7.2-formula-assistant.md)** | A simple Python ADK agent with a custom viscosity-conversion tool, run inside Cloud Shell. |
| **[Lab 7.2.1 — ADK Under the Hood](./lab-7.2.1-adk-under-the-hood.md)** | Follow a request through ADK Web to understand the runtime, model, tool, events, sessions, and workflow options. |
| **[Lab 7.3 — Coding with agy (The CLI Companion)](./lab-7.3-agy-coding-companion.md)** | Verify the ADK coding skill, then use `agy` to make and test the smallest tool change. |
| **[Lab 7.4 — The Adventure Agent](./lab-7.4-adventure-agent.md)** | A Python ADK agent with a custom tool that explores and beats a text adventure game by itself — then you *measure* it with `adk eval`. |

## Why it's here

It contrasts **building agents fast** (no-code, Modules 1–6) with **engineering agents to last** (code + tests + evaluation) — the "Agent Engineering" mindset, where prompts and agent logic are real software artifacts.

📚 Official docs: **[adk.dev](https://adk.dev/)**.

⬅️ Back to the **[student materials](../README.md)**.
