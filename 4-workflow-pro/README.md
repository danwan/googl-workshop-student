# Module 4 · Level 3 — Multi-step Agent Crews

> **Workshop role:** Day 1 choice for the Flow-builder block. Day 2 bonus for participants who stay in Agent Designer.

> **The big idea:** One agent is smart. A *team* of agents is unstoppable. 🤖🤖🤖 In this module you build a **main agent** that coordinates a crew of **subagents** — each with ONE job — to handle a whole business task from start to finish.

Welcome to the deep end — and the most fun part of the workshop. 🏊 You've built single-step agents that answer questions. Now you'll build **multi-step agents**: a little assembly line where work flows down a chain of specialists.

## 🧠 What's a multi-step agent?

Think of a great team:

- A **main agent** is the *manager*. It doesn't do all the work itself — it understands the goal and hands pieces down the chain.
- Each **subagent** is a *specialist* with **single responsibility**: one clear job, its own instructions. (Gatherer gathers. Drafter drafts. That's it.)
- Work flows **down the chain**: subagent 1's output becomes subagent 2's input → and so on → until the main agent assembles the final result.

> 💡 **Why single responsibility?** Small jobs are easy to write, easy to test, and easy to fix. A subagent that does one thing well beats a giant prompt that tries to do five things badly. This is the #1 pro habit: **one subagent, one job.**

## 🛠️ How you'll build it

You'll use the **Flow builder** (the **Flow** tab in Agent Designer):

1. **+ Create agent** → **Proceed to builder** → land on the **Flow** tab (a visual canvas).
2. Configure the **main agent** node: **Name, Description, Instructions, Model**.
3. **Add data sources & tools** → attach **Cloud Storage** (the doc library) + your uploaded file.
4. Hover the node → **Add subagent** → add your specialists **one at a time**.
5. **Build then test each subagent before adding the next.** (Slow is smooth, smooth is fast.) 🐢
6. Test the whole chain in **Preview** → **Create** to launch.

There's also a **Schedule** tab for recurring runs. It is Preview, requires a multi-region app, and its credentials must be refreshed every 14 days. Lab 4.2 inspects it without enabling a schedule.

> ⚠️ **Still connector-free.** Your agents will *draft* an email and *propose* a meeting — as **text**. They won't actually send or schedule yet. That's intentional and safe. **Got the Gmail/Calendar connectors? Module 6 makes these actually send and schedule.** 📨📅

## 🧪 The labs

| Lab | Mission | Time |
|---|---|---|
| 🔴 [4.1 — Success Orchestrator](./lab-4.1-success-orchestrator.md) | Build a main agent + 3 subagents that run a "customer success" assembly line for the AutoParts account — gather → brief → draft email. | ~30 min |
| 🔴 [4.2 — Complaint Commander](./lab-4.2-complaint-commander.md) | Handle the MegaAuto quality complaint end-to-end: investigate → respond → propose a follow-up meeting. | ~30 min |

## 📦 What you'll need

- The **Gemini Enterprise** web app with **Agent Designer** (you'll work in its **Flow builder**).
- Your Cloud Storage TechBond document bucket and `techbond-docs` data store from Lab 0.1. The PDFs are in `Files/Document-Library/`.
- Files to upload from `Files/`: `TechBond-Customer-Emails.pdf` (both labs) and `TechBond-Team-Calendar.pdf` for Lab 4.2.

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project. Open the app URL you created, then verify your TechBond bucket and `techbond-docs` data store are visible before starting.

These are the hardest labs in the workshop — but don't sweat it. You'll build **one piece at a time**, test as you go, and watch a team of agents come to life. 💪

Start with **[Lab 4.1 — Success Orchestrator](./lab-4.1-success-orchestrator.md)**.
