# TechBond Agent Academy: Student Workbook

Welcome to the TechBond Agent Academy! This document collects every module, its labs, and the reference materials in one place. For the full interactive experience, open [START_HERE.md](./START_HERE.md) (in this folder).

## Getting Started

Welcome to the TechBond Agent Academy! This guide helps you get oriented before your first lab.

---

## What is Gemini Enterprise?

Gemini Enterprise is Google's AI platform for business users. In this workshop you'll use it to:

- **Build your own agents** in **Agent Designer** — by chatting (the **Chat pane**) or visually (the **Flow builder**)
- **Ground agents in your data** — uploaded files and a Cloud Storage document library
- **Use ready-made power agents** like Deep Research and Idea Generation

You'll also use **NotebookLM** (a separate Google tool) to turn documents into podcasts, videos, and mind maps.

---

## Accessing the tools

### Gemini Enterprise

1. Sign in with the workshop account provided by your facilitator.
2. Select your dedicated billed Google Cloud project. Your account has Project Owner/admin access.
3. Complete **Module 0, Lab 0.1** to enable the APIs, create your Gemini Enterprise app, connect the TechBond data store, and retrieve its web app URL.
4. Keep the web app tab open throughout the workshop.

### NotebookLM

1. Go to [notebooklm.google.com](https://notebooklm.google.com) and sign in with the same workshop account.
2. You'll use it for Module 1.

---

## Your workshop data

**Simulation context:**
- **Company**: TechBond Industries (fictional B2B adhesives maker)
- **Note**: All data (emails, events, documents) is set in **January 2026**.

No connectors needed — everything works with **files you upload** plus a shared **Cloud Storage** library:

- **Business documents** — ~20 files (sales reports, spec sheets, marketing materials), provided in the relevant module `Files/` folders and in the Cloud Storage library.
- **Email export** — `TechBond-Customer-Emails.pdf`, a 9-email inbox snapshot in the `Files/` folders for Modules 1, 2, and 4.
- **Calendar export** — `TechBond-Team-Calendar.pdf`, a two-week team calendar in the `Files/` folders for Modules 2 and 4.

*(Module 6 is the one optional exception: it uses live Gmail/Calendar/Drive connectors — only if your workshop has them enabled.)*

---

## Workshop flow

The standard workshop runs for **two days, from 09:00 to 17:00 each day**. Follow the day guide for today's core, choice, and bonus path:

- **[Day 1](./DAY_1.md):** NotebookLM, Agent Designer, and the fixed Antigravity taster
- **[Day 2](./DAY_2.md):** shared newcomer start, Cloud, ADK, Antigravity, and tools

The ten modules (0–9) remain a reusable lab library. Use the day guides to choose what to complete; you do not need to work through every module in order.

0. **Prep-Work — Environment Setup** 🟢: Gemini Enterprise, Agent Designer, and Cloud Storage
1. **Warm-Up — NotebookLM** 🟢: podcasts, videos & mind maps from documents
2. **Level 1 — Agent Designer: Chat pane** 🟢: build your first agent by chatting
3. **Level 2 — Agent Designer: Flow builder** 🟡: visual builder + Cloud Storage
4. **Level 3 — Multi-step Agent Crews** 🔴: main agents, specialists, and explicit handoffs
5. **Explore — Power Agents** 🔵: Deep Research, Idea Generation & more
6. **Optional — Workspace Connectors** 🟣: live Gmail/Calendar/Drive
7. **Optional — Build with Code (ADK)** 🟣: for developers
8. **Optional — Google Cloud Toolkit** ☁️: buckets, APIs, Cloud Shell, deploy
9. **Optional — Cloud Services** ☁️: Compute Engine, Workstations, and Cloud Storage

---

## Tips for success

1. **Read the mission first** — every lab starts with the business problem you're solving.
2. **Be specific** — the more detail you give an agent, the better it performs.
3. **Test frequently** — use the Preview tab and the suggested prompts.

---

## Getting help

- **Hints**: each lab file has collapsible **💡 hints** with progressive help.
- **Solutions**: the **✅ full solution** is hidden at the bottom of every lab — no shame in peeking.
- **Facilitators**: stuck for 5 minutes? Ask!

---

## Ready?

Open **`1-warmup-research/lab-1.1-boardroom-podcast.md`** and let's go! 🎉


---

## Day 1: NotebookLM, Agent Designer, and Vibe Coding

Today you build with NotebookLM and Gemini Enterprise for most of the day. The final 80-minute block gives everyone a guided Antigravity experience in Cloud Shell.

### Preflight

Complete this check before 09:00:

- [ ] Sign in to the workshop Google account.
- [ ] Complete [Lab 0.1](./0-setup/lab-0.1-environment-setup.md) in your own dedicated workshop project.
- [ ] Complete [Lab 0.2](./0-setup/lab-0.2-enable-cloud-assist.md) and confirm that **Gemini Cloud Assist** opens in the Google Cloud Console. This console assistant is separate from **Agent Designer**.
- [ ] Open [NotebookLM](https://notebooklm.google.com) and the Gemini Enterprise web app URL you created in Lab 0.1. The app's **Agents → Made by Google → NotebookLM** entry is an alternative route.
- [ ] Confirm **Agent Gallery**, **+ Create agent**, the Chat pane, **Proceed to builder**, **Flow**, and **Preview** are visible.
- [ ] Confirm the model selector, session sharing, Canvas, and image generation are visible.
- [ ] Confirm **Idea Generation** appears under **Agents → Made by Google**. If it is missing, stop and tell the facilitator; Lab 5.2 has a fallback.
- [ ] Confirm that your dedicated billed Google Cloud project opens in the [Cloud Console](https://console.cloud.google.com) and that your workshop account has Project Owner/admin access.
- [ ] Open **Cloud Shell** with the `>_` icon and run `python3 --version`.
- [ ] Keep the [Cheat Sheet](./CHEAT_SHEET.md) open.

Stop and ask the facilitator if any check fails. Do not use another participant's project.

### Agenda, 09:00 to 17:00

| Time | Min | Block | What happens |
|---|---:|---|---|
| 09:00 | 25 | **Welcome and story** | Introduce TechBond, fix logins, show levels, and open the cheat sheet. |
| 09:25 | 35 | **NotebookLM kickoff** | Start Lab 1.1, generate the Audio Overview, and explore Studio while it renders. |
| 10:00 | 30 | **Gemini Enterprise introduction** | Explain agents, tour Agent Designer, and demo Lab 2.1. |
| 10:30 | 15 | ☕ **Break** | |
| 10:45 | 50 | **Chat-build an agent** | Everyone builds Lab 2.1, then chooses 2.2 or 2.3. |
| 11:35 | 25 | **Your use case** | Sketch one real work task, its data, and its steps. Share it with a neighbor. |
| 12:00 | 60 | 🍽️ **Lunch** | |
| 13:00 | 10 | **Start Deep Research** | Launch Lab 5.1 and let it run in the background. |
| 13:10 | 15 | **Flow builder demo** | Show Lab 3.1, Cloud Storage grounding, and citations. |
| 13:25 | 65 | **Flow builder and agent crews** | Build from Modules 3 and 4 using difficulty doors. |
| 14:30 | 15 | ☕ **Break** | |
| 14:45 | 20 | **Power agents** | Review Deep Research and try Idea Generation. |
| 15:05 | 80 | **Fixed Antigravity and vibe-coding taster** | Everyone uses Cloud Shell and `agy` to build and test the standalone batch checker. Pairing is the default. |
| 16:25 | 35 | **Share-out and Day 2 preview** | Share one safe session or synthetic-data agent with a partner, demo results, and preview the cloud path. |

**Program total: 390 minutes. Breaks: 90 minutes. Day 1 total: 480 minutes.**

The first 310 program minutes use no-code or low-code tools. Everyone joins the fixed 80-minute Antigravity block.

### Core path

Complete these labs or guided sections with the group:

1. [Lab 1.1: Boardroom Podcast](./1-warmup-research/lab-1.1-boardroom-podcast.md)
2. [Lab 2.1: Doc Whisperer](./2-chat-agent/lab-2.1-doc-whisperer.md)
3. [Lab 5.1: Deep Research](./5-explore/lab-5.1-deep-research.md)
4. [Lab 3.1: Knowledge Base](./3-workflow-agent/lab-3.1-knowledge-base.md)
5. [Lab 7.4: Vibe Coding Taster](./7-code-adk/lab-7.4-vibe-coding-taster.md)

### Choice path

Choose work that fits your pace inside each block:

- Chat pane: [Lab 2.2](./2-chat-agent/lab-2.2-inbox-zero.md) or [Lab 2.3](./2-chat-agent/lab-2.3-week-planner.md)
- Flow builder: [Lab 3.2](./3-workflow-agent/lab-3.2-meeting-prep-machine.md), [Lab 3.3](./3-workflow-agent/lab-3.3-launch-tracker.md), [Lab 4.1](./4-workflow-pro/lab-4.1-success-orchestrator.md), or [Lab 4.2](./4-workflow-pro/lab-4.2-complaint-commander.md)
- Power agents: [Lab 5.2](./5-explore/lab-5.2-idea-generator.md)

### Bonus path

- Continue with your own use-case sketch and approved data.
- Try [Lab 1.2](./1-warmup-research/lab-1.2-instant-explainer.md), [Lab 1.3](./1-warmup-research/lab-1.3-research-detective.md), or [Lab 5.3](./5-explore/lab-5.3-data-insights.md).
- Use [Module 6](./6-workspace-optional/) only when the facilitator confirms that Workspace connectors are enabled.

### End-of-day cleanup

- Exit `agy` with `/exit`.
- Keep `~/techbond-vibe-taster` for Day 2, or remove it with `rm -rf ~/techbond-vibe-taster` after checking the path.
- Confirm that you created no billable resources outside your assigned project.
- Save the URL of any Agent Designer agent you want to show tomorrow.
- Share only sessions or agents that use synthetic TechBond data. A shared agent also exposes its attached files and data sources to its recipients.

Continue with [Day 2](./DAY_2.md).


---

## Day 2: Cloud, ADK, Antigravity, and Tools

Everyone starts together with 90 minutes of NotebookLM and Gemini Enterprise. New arrivals get a complete starting route before the room moves into Cloud, ADK, Antigravity, and tool labs.

### Preflight

Complete this check before 09:00:

- [ ] Sign in to the workshop Google account.
- [ ] Complete required [Lab 0.1](./0-setup/lab-0.1-environment-setup.md) if you have not already created your Gemini Enterprise app and data store.
- [ ] Open [NotebookLM](https://notebooklm.google.com) and the Gemini Enterprise web app URL you created in Lab 0.1.
- [ ] Confirm that you are using the correct workshop account and dedicated billed project, with Project Owner/admin access.
- [ ] Confirm that you can open **APIs & Services** and **Cloud Shell** in the [Cloud Console](https://console.cloud.google.com).
- [ ] In Cloud Shell, run `gcloud config get-value project` and compare the result with the assigned project ID.
- [ ] Keep the [Cheat Sheet](./CHEAT_SHEET.md) open.

Stop and ask the facilitator if the account or project ID is wrong. Do not switch to another project.

> **Cloud catch-up:** [Lab 0.2](./0-setup/lab-0.2-enable-cloud-assist.md) is helpful before hands-on Cloud work because it enables Gemini Cloud Assist in the console. It is not a prerequisite for ADK.

### Agenda, 09:00 to 17:00

| Time | Min | Block | What happens |
|---|---:|---|---|
| 09:00 | 15 | **Welcome and paths** | Introduce TechBond, resources, safety, buddies, and difficulty doors. |
| 09:15 | 30 | **NotebookLM for everyone** | Newcomers build 1.1. Returning participants choose 1.2 or 1.3 with a new question. |
| 09:45 | 45 | **Gemini Enterprise for everyone** | Newcomers build 2.1. Returning participants build a harder Chat-pane or Flow-builder use case. |
| 10:30 | 15 | ☕ **Break** | |
| 10:45 | 40 | **Google Cloud fundamentals** | Deliver the beginner-safe speaker session with a live project, bucket, API, and Cloud Shell tour. |
| 11:25 | 35 | **Cloud foundations hands-on** | Everyone starts Lab 8.1 in their dedicated project. Advanced participants choose a Module 9 door. |
| 12:00 | 60 | 🍽️ **Lunch** | |
| 13:00 | 20 | **ADK and Antigravity demo** | Show an ADK agent, `adk web`, `agy`, and the adventure game. Explain driver and navigator roles. |
| 13:20 | 70 | **Build an agent in code** | Complete setup and build through Module 7 in pairs. |
| 14:30 | 15 | ☕ **Break** | |
| 14:45 | 60 | **Build and evaluate** | Continue the ADK agent, add an Antigravity-assisted change, and run Lab 7.2's deterministic tool checks. |
| 15:45 | 50 | **Ship or extend with cloud tools** | Choose deployment, Vision, Document AI, Model Armor, or a Module 9 infrastructure lab. |
| 16:35 | 25 | **Share-out, cleanup, and next step** | Demo, delete or stop billable resources, and name one real next use case. |

**Program total: 390 minutes. Breaks: 90 minutes. Day 2 total: 480 minutes.**

### Newcomer route, 09:00 to 10:30

You do not need Day 1 experience.

1. Pair with a returning participant.
2. Complete [Lab 1.1: Boardroom Podcast](./1-warmup-research/lab-1.1-boardroom-podcast.md) during the NotebookLM block.
3. Complete [Lab 2.1: Doc Whisperer](./2-chat-agent/lab-2.1-doc-whisperer.md) during the Gemini Enterprise block.
4. Ask your buddy to show one difference between the Chat pane and the Flow builder.
5. Join the full group at the 10:30 break.

Returning participants use [Lab 1.2](./1-warmup-research/lab-1.2-instant-explainer.md), [Lab 1.3](./1-warmup-research/lab-1.3-research-detective.md), [Lab 2.3](./2-chat-agent/lab-2.3-week-planner.md), or approved use-case data during the same blocks.

### Core path

1. Complete the shared NotebookLM and Agent Designer start above.
2. Build [Lab 8.1: Cloud Foundations](./8-cloud-toolkit/lab-8.1-cloud-foundations.md) in your assigned project.
3. Complete [Lab 7.0: Developer Setup](./7-code-adk/lab-7.0-developer-setup.md) and [Lab 7.1: Formula Assistant](./7-code-adk/lab-7.1-formula-assistant.md) in a pair.
4. Use [Lab 7.2: Coding with agy](./7-code-adk/lab-7.2-agy-coding-companion.md) to change, inspect, run, and judge the agent.

### Choice path

- Cloud foundations: [Lab 9.3](./9-cloud-services/lab-9.3-cloud-shell-agy-storage.md)
- Build and evaluate: [Lab 7.3](./7-code-adk/lab-7.3-adventure-agent.md)
- Ship or extend: [Lab 8.2](./8-cloud-toolkit/lab-8.2-ship-your-agent.md), [Lab 8.3](./8-cloud-toolkit/lab-8.3-agent-with-eyes.md), [Lab 8.4](./8-cloud-toolkit/lab-8.4-document-detective.md), or [Lab 8.5](./8-cloud-toolkit/lab-8.5-model-armor-prompt-security.md)
- Infrastructure, after confirming billing and service setup: [Lab 9.1](./9-cloud-services/lab-9.1-gce-ssh.md) or [Lab 9.2](./9-cloud-services/lab-9.2-cloud-workstations.md)

### Bonus path

- Continue an approved real use case with your own test data.
- Build another Agent Designer flow from [Module 4](./4-workflow-pro/) if you do not want to continue coding.
- Use [Module 6](./6-workspace-optional/) only when the facilitator confirms that Workspace connectors are enabled.
- After Lab 9.1 or 9.2, use [Lab 9.4](./9-cloud-services/lab-9.4-agy-managed-linux.md) as an optional advanced bonus only when the owner/admin and cleanup gates are confirmed.

### Cleanup before 17:00

- Delete test buckets that no later lab needs.
- Delete deployed Agent Runtime or Cloud Run resources unless the workshop owner approved retention.
- Stop or delete Compute Engine VMs and Cloud Workstations.
- Run `gcloud config get-value project` once more and confirm that all work stayed in the assigned project.
- Remember that budget alerts notify you but do not cap spending.

Use the [Reference Guide](./Reference_Guide.md) when you continue after the workshop.


---

## Modules & Labs

### Module 0 · Prep-Work — Environment Setup 🛠️
**Folder:** `0-setup/`

#### 🟢 Lab 0.1 — Environment Setup
**Location:** `📂 0-setup > 📄 lab-0.1-environment-setup.md`

> **Your mission:** Set up Gemini Enterprise with the workshop feature profile, create a Google Cloud Storage bucket, upload the TechBond document library, and connect it as a secure data source. ⚙️☁️

#### 🟢 Lab 0.2 — Enable Gemini Cloud Assist
**Location:** `📂 0-setup > 📄 lab-0.2-enable-cloud-assist.md`

> **Your mission:** Activate Gemini Cloud Assist in your project so you have a persistent, helpful AI assistant built directly into the Google Cloud Console to explain resources, troubleshoot errors, and write gcloud commands for you. 🧠✨


---

### Module 1 · Warm-Up — NotebookLM Research Lab 🔬
**Folder:** `1-warmup-research/`

#### 🟢 Lab 1.1 — The Boardroom Podcast
**Location:** `📂 1-warmup-research > 📄 lab-1.1-boardroom-podcast.md`

> **Your mission:** Take 3 dense business reports nobody wants to read, and turn them into a lively podcast you'd actually listen to on your commute — then *talk back to the hosts live*. 🎙️

#### 🟢 Lab 1.2 — The Instant Explainer
**Location:** `📂 1-warmup-research > 📄 lab-1.2-instant-explainer.md`

> **Your mission:** Turn three technical TechBond documents into a slick **AI-narrated video** and a clickable **mind map** — the fastest "explain this to me" button ever invented. 🎬🗺️

#### 🟢 Lab 1.3 — The Research Detective
**Location:** `📂 1-warmup-research > 📄 lab-1.3-research-detective.md`

> **Your mission:** Stop *trusting* your documents and start *interrogating* them. 🕵️ Hunt down what's missing, what contradicts, and what's hype-vs-evidence — and back every finding with a citation.


---

### Module 2 · Level 1 — Agent Designer: Chat pane
**Folder:** `2-chat-agent/`

#### 🟢 Lab 2.1 — The Doc Whisperer
**Location:** `📂 2-chat-agent > 📄 lab-2.1-doc-whisperer.md`

> **Your mission:** Build an AI agent that reads a product spec sheet and answers *any* question about it — just by chatting. No coding. No data connectors. You'll have it working in about 15 minutes.

#### 🟢 Lab 2.2 — Inbox Zero
**Location:** `📂 2-chat-agent > 📄 lab-2.2-inbox-zero.md`

> **Your mission:** Build an AI agent that turns an entire inbox into a morning briefing with a summary, clear actions, and an urgent warning. No coding. No Gmail connector. About 15 minutes.

#### 🟢 Lab 2.3 — Week Planner
**Location:** `📂 2-chat-agent > 📄 lab-2.3-week-planner.md`

> **Your mission:** Build an agent that lists your meetings, finds real open time, and prepares you for the AutoParts review. No coding. No Calendar connector. About 15 minutes.


---

### Module 3 · Level 2 — Agent Designer: Flow builder
**Folder:** `3-workflow-agent/`

#### 🟡 Lab 3.1 — The Company Brain
**Location:** `📂 3-workflow-agent > 📄 lab-3.1-knowledge-base.md`

> **Your mission:** Build an ask-me-anything agent connected to TechBond's full Cloud Storage library, with a citation for every answer. 🧠📚

#### 🟡 Lab 3.2 — The Meeting Prep Machine
**Location:** `📂 3-workflow-agent > 📄 lab-3.2-meeting-prep-machine.md`

> **Your mission:** Build an agent that cross-references four documents and creates a useful one-page AutoParts meeting brief. 📋⚡

#### 🟡 Lab 3.3 — The Launch Tracker
**Location:** `📂 3-workflow-agent > 📄 lab-3.3-launch-tracker.md`

> **Your mission:** Build an agent that reports the SecureSeal EV launch status, milestones, risks, and next steps across four documents. 🚀📊


---

### Module 4 · Level 3 — Multi-step Agent Crews
**Folder:** `4-workflow-pro/`

#### 🔴 Lab 4.1 — The Success Orchestrator
**Location:** `📂 4-workflow-pro > 📄 lab-4.1-success-orchestrator.md`

> **Your mission:** Build a main agent and three specialists that turn one AutoParts request into a grounded account brief and a drafted follow-up email. 🤖

#### 🔴 Lab 4.2 — The Complaint Commander
**Location:** `📂 4-workflow-pro > 📄 lab-4.2-complaint-commander.md`

> **Your mission:** Build an agent crew that investigates QI-2025-0087, drafts a factual response, and proposes a conflict-free follow-up meeting. 🎯


---

### Module 5 · Explore — Ready-Made Power Agents 🚀
**Folder:** `5-explore/`

#### 🔵 Lab 5.1 — The Deep Research Engine
**Location:** `📂 5-explore > 📄 lab-5.1-deep-research.md`

> **Your mission:** Make a pre-built AI agent do a week of analyst work in minutes — use selected sources, plan its own research, and hand you a consulting-grade market report with **real citations**. No building. No connectors. Just one juicy prompt. 🔎📊

#### 🔵 Lab 5.2 — The Idea Machine
**Location:** `📂 5-explore > 📄 lab-5.2-idea-generator.md`

> **Your mission:** Generate and rank ten ideas for younger, eco-conscious TechBond customers, then develop one winner into a pitch. 💡⚡

#### 🔵 Lab 5.3 — Ask Anything 🎁
**Location:** `📂 5-explore > 📄 lab-5.3-data-insights.md`

> **Your mission:** Quiz an agent across **both** structured data *and* unstructured documents — in plain English — and get back an insight that combines a hard number with a real reason. No connectors to wire. 🔍📊


---

### Module 6 · Optional — Real Workspace Connectors
**Folder:** `6-workspace-optional/`

#### 🟣 Lab 6.0 — Seed Your Own Workspace
**Location:** `📂 6-workspace-optional > 📄 lab-6.0-seed-your-workspace.md`

> **Your mission:** Fill your own Gmail and Google Calendar with realistic TechBond data — a full inbox of 30 business emails and a packed two-week calendar — by running two small Google Apps Scripts yourself. About 20 minutes.

#### 🟣 Lab 6.1 — Live Inbox Agent
**Location:** `📂 6-workspace-optional > 📄 lab-6.1-live-inbox-agent.md`

> **Your mission:** Take the Inbox Zero agent from Lab 2.2 and unleash it on your **real inbox** — then give it the power to **actually send** a reply (safely, to yourself). About 20 minutes.

#### 🟣 Lab 6.2 — Live Meeting Prep
**Location:** `📂 6-workspace-optional > 📄 lab-6.2-live-meeting-prep.md`

> **Your mission:** Build a multi-step agent that reads your **real** calendar, pulls the related **emails and Drive docs**, writes you a one-page brief — then **actually books** the follow-up meeting. About 25 minutes.


---

### 🟣 Module 7 · Build with Code (ADK 2.x)
**Folder:** `7-code-adk/`

#### 🟣 Lab 7.0 — Developer Setup (The Prep Gate)
**Location:** `📂 7-code-adk > 📄 lab-7.0-developer-setup.md`

> **Your mission:** Prepare your complete developer environment in **Google Cloud Shell**: a clean Python virtual environment, the **Google Agent CLI (`agents-cli`)**, the **Antigravity CLI (`agy`)**, and the official **Google Developer Knowledge MCP server** — everything the coding labs in Modules 7–9 rely on. 💻🌐

#### 🟣 Lab 7.1 — The Formula Assistant
**Location:** `📂 7-code-adk > 📄 lab-7.1-formula-assistant.md`

> **Your mission:** Build a simple **Python** agent with Google's **Agent Development Kit (ADK 2.x)** that helps TechBond chemists by automatically converting viscosity measurements. 🧪📊

#### 🟣 Lab 7.2 — Coding with agy (The CLI Companion)
**Location:** `📂 7-code-adk > 📄 lab-7.2-agy-coding-companion.md`

> **Your mission:** Use the terminal-based **Antigravity CLI (`agy`)** to programmatically enhance your agent with a temperature conversion tool without writing the code by hand. 💻🤖

#### 🟣 Lab 7.3 — The Adventure Agent
**Location:** `📂 7-code-adk > 📄 lab-7.3-adventure-agent.md`

> **Your mission:** Write a small **Python** agent with Google's **Agent Development Kit (ADK 2.x)** that plays by itself until the workshop game returns its explicit **winning response**. 🗺️🤖

#### 🟣 Lab 7.4: Vibe Coding Taster
**Location:** `📂 7-code-adk > 📄 lab-7.4-vibe-coding-taster.md`

> **Your mission:** Use Antigravity in Cloud Shell to build and test a small TechBond batch checker. You decide the rules; `agy` writes the first draft. Then you inspect, run, and judge the result.


---

### ☁️ Module 8 · Google Cloud Toolkit
**Folder:** `8-cloud-toolkit/`

#### 🟢 Lab 8.1 — Cloud Foundations
**Location:** `📂 8-cloud-toolkit > 📄 lab-8.1-cloud-foundations.md`

> **Your mission:** Learn the four Google Cloud moves every agent-builder needs — **store a file**, **turn on a service**, **use it without writing code**, and **run a command from your browser**. Four quick quests, four new superpowers. ☁️🛠️

#### 🔴 Lab 8.2 — Ship Your Agent
**Location:** `📂 8-cloud-toolkit > 📄 lab-8.2-ship-your-agent.md`

> **Your mission:** Deploy the module's ready-to-run **Formula Agent** to **Agent Runtime** — one command, and it's live as a managed cloud agent. 🚀🌐

#### 🔴 Lab 8.3 — The Agent With Eyes
**Location:** `📂 8-cloud-toolkit > 📄 lab-8.3-agent-with-eyes.md`

> **Your mission:** Give an agent a brand-new sense. Use the **Cloud Vision API** to "look at" a picture — first with **zero code**, then as a real **tool** your ADK agent can call. 👁️🤖

#### 🔴 Lab 8.4 — The Document Detective
**Location:** `📂 8-cloud-toolkit > 📄 lab-8.4-document-detective.md`

> **Your mission:** Take a messy TechBond **PDF** and turn it into clean, structured data with **Document AI** — the difference between "a file" and "data an agent can use." 📄🔍

#### 🛡️ Lab 8.5 — Shielding Your Agent with Model Armor
**Location:** `📂 8-cloud-toolkit > 📄 lab-8.5-model-armor-prompt-security.md`

> **Your mission:** Configure **Google Cloud Model Armor** as an "AI Firewall" that detects prompt injection and sensitive data before a prompt reaches your agent's model. 🛡️🔒


---

### ☁️ Module 9 — Cloud Services
**Folder:** `9-cloud-services/`

#### 🟢 Lab 9.1 — Compute Engine with Ubuntu
**Location:** `📂 9-cloud-services > 📄 lab-9.1-gce-ssh.md`

> **Your mission:** Spin up an enterprise-grade virtual machine on **Google Compute Engine** with 8 GB of RAM and **Ubuntu**, and connect to it securely via **SSH** to run shell commands in the cloud. 🚀🖥️

#### 🟢 Lab 9.2 — Cloud Workstations
**Location:** `📂 9-cloud-services > 📄 lab-9.2-cloud-workstations.md`

> **Your mission:** Provision a fully managed, secure cloud development workspace using **Google Cloud Workstations** with a web-based **VS Code (Code OSS)** IDE. 🚀🖥️

#### 🟡 Lab 9.3 — Cloud Shell, agy & Storage
**Location:** `📂 9-cloud-services > 📄 lab-9.3-cloud-shell-agy-storage.md`

> **Your mission:** Open **Cloud Shell**, start the **Antigravity CLI (`agy`)** terminal companion to generate **5 text reports**, create a **Cloud Storage bucket** via the CLI, and upload the files to your bucket using `gcloud storage`. 📦📁

#### 🔴 Lab 9.4 — agy on Managed Linux
**Location:** `📂 9-cloud-services > 📄 lab-9.4-agy-managed-linux.md`

> **Your mission:** Turn the Ubuntu environment from **Lab 9.1 or Lab 9.2** into a ready-to-use agent development terminal: install the **Antigravity CLI (`agy`)**, Google Agent CLI skills, and the Google Developer Knowledge MCP server, then ask a grounded Cloud Storage question. 🖥️🤖


---

## Reference Library

Your simulated company (TechBond Industries) has the following documents available.

### Sales
- `Annual-Business-Review-2025.md`
- `Customer-Account-Overview-Top20.md`
- `Distributor-Performance-2025.md`
- `Pricing-Guidelines-B2B-Adhesives.md`
- `Q3-2025-Sales-Report-EMEA.md`

### Product
- `Adhesive-Application-Guide-Automotive.md`
- `BondMax-500-Technical-Data-Sheet.md`
- `Lab-Test-Report-Batch-TB2025.md`
- `R&D-Project-Portfolio-2026.md`
- `SecureSeal-EV-Series-Launch-Plan.md`

### Operations
- `EHS-Compliance-Checklist.md`
- `Employee-Onboarding-Guide.md`
- `Quality-Management-Handbook.md`
- `Supplier-Contracts-Summary.md`
- `Sustainability-Report-2025.md`

### Marketing
- `Brand-Guidelines-TechBond-2026.md`
- `Competitor-Analysis-Adhesives-Market.md`
- `Customer-Testimonials-Collection.md`
- `Marketing-Campaign-Calendar-2026.md`
- `Trade-Show-Playbook-AutoExpo.md`
