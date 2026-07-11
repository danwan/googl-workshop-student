# 📚 Reference Guide — Building Great Agents

> Want to go beyond the labs? This is your pocket reference for building agents in **Gemini Enterprise**. Short, practical, no fluff. For a quick term/button lookup, use the **[Cheat Sheet](./CHEAT_SHEET.md)** instead.

---

## 1. The two ways to build an agent

| | 🟢 Chat pane | 🟡 Flow builder |
|---|---|---|
| **What it is** | Build by chatting in plain English | A visual canvas (the **Flow** tab) |
| **Best for** | Simple, single-job agents | Multi-step agents; bigger data |
| **Data it can use** | **Uploaded files** | Uploaded files **+ Cloud Storage / BigQuery** |
| **How you start** | **+ Create agent** → type a prompt | **+ Create agent** → **Proceed to builder** |
| **Effort** | Lowest — great for everyone | A bit more — more power |

**Rule of thumb:** start in the **Chat pane**. Move to the **Flow builder** when you need Cloud Storage, multiple steps, or subagents. (Both are part of **Agent Designer** — one tool, two faces.)

> ⚠️ The Chat pane **cannot** connect Cloud sources (Cloud Storage, BigQuery, Cloud SQL). For those, use the Flow builder.

---

## 2. Giving an agent knowledge

Two options:

1. **Upload files** ("Add files" → the agent's **Knowledge**) — works in **both** builders, **no connector needed**. This is the easiest and most portable way. ✅
2. **Connect a data source** — a live plug into a system:
   - **Google Workspace:** Gmail, Drive, Calendar
   - **Cloud sources:** Cloud Storage, BigQuery, Cloud SQL *(Workflow builder only)*
   - **Third-party:** Jira, Salesforce, and more

**For most jobs, uploading files is all you need.**

---

## 3. Writing instructions that work (the C.L.E.A.R. way)

A good agent prompt is just a good job description:

- **C — Character:** who the agent is. *"You are a friendly TechBond product expert."*
- **L — Limit:** what data to use. *"Use ONLY the uploaded files. Don't guess."*
- **E — Exactly the task:** *"Summarize, list action items, and flag anything urgent."*
- **A — Appearance:** the format. *"Use short bullets. Keep it under 6 lines."*
- **R — Rules for misses:** *"If it's not in the data, say so honestly."*

Paste, tweak, test, repeat. You fix agents by **editing the prompt**, not by coding.

---

## 4. Multi-step agents (subagents)

A **multi-step agent** is a **main agent** that hands work to **subagents**. Each subagent does **one job** and passes its result to the next — like an assembly line.

```
Main agent (the manager)
 ├── Subagent 1: Gather the information
 ├── Subagent 2: Write the brief
 └── Subagent 3: Draft the email
```

**Best practices:**

- 🎯 **One job per subagent.** If a subagent does two things, split it.
- 🧪 **Build and test one subagent at a time**, then add the next.
- 🔗 **Be explicit about hand-offs:** tell the main agent what each subagent receives and returns.

Build these in the **Flow builder** with **Add subagent**.

---

## 5. Actions — when agents *do*, not just *read*

Agents can take real actions when the right connector is enabled:

| Action | Needs |
|---|---|
| **Send email** | Gmail connector |
| **Create / Update calendar event** | Calendar connector |
| **Send a Chat message** | Chat integration |

**In a connector-free workshop**, agents **draft** these as text (a ready-to-send email, a proposed invite). Turn on the connectors (Module 6) to make them real. Always **test actions on your own account first.** 🔒

You can also use the **Schedule** tab to run an agent automatically (e.g., a Monday-morning briefing).

---

## 6. Testing & fixing — a quick loop

1. **Preview** tab → ask a real question.
2. Wrong or made-up answer? → tighten the prompt (add *"use only the data, don't guess"*).
3. Missing info? → check the file/data source is actually attached.
4. Too long/short/formal? → just tell it the style you want.
5. Repeat until you'd trust it. Then **Create**.

---

## 7. NotebookLM cheat (for Module 1)

- **Sources:** PDFs, Google Docs, website URLs, YouTube links, pasted text.
- **Studio outputs:** 🎙️ **Audio Overview** (Deep Dive / The Brief / The Critique / The Debate, plus **Interactive mode**), 🎬 **Video Overview**, 🧠 **Mind Map**, 📄 **Reports** (Briefing doc, Study guide, FAQ, Timeline).
- **Chat** with your sources — every answer is **cited**.

## 8. Google-made agents cheat (for Module 5)

- **Deep Research:** choose sources first, submit a research prompt, review the plan, then click **Start Research**.
- **Idea Generation:** choose sources if prompted, submit a goal, refine the requirements, then click **Start session**.
- **Tenant analytics/data agents:** availability and names vary. If your facilitator hasn't enabled one, skip the bonus lab.

---

## 9. Day 2 code and cloud baseline

Use one dedicated billed workshop project with Project Owner/admin access per participant. You enable the APIs and configure the workshop resources yourself. Never create hands-on resources in a shared project.

### Account and project

```bash
gcloud auth list --filter=status:ACTIVE
gcloud config get-value project
```

Stop when either value differs from the workshop assignment. Use `gcloud auth application-default login` only when an ADK lab requests application-default credentials. Keep tokens and API keys out of source files and prompts.

### ADK and Antigravity

- **ADK** provides the Python agent, tools, local run command, and evaluation path.
- **Antigravity (`agy`)** reads and edits workspace files. Use the loop **ask, inspect, run, judge**.
- Pair by default: the driver types while the navigator checks the lab, output, and next decision.

### Deploy and clean up

- Deploy only from the assigned project and region. Google Cloud hosts managed agents in **Agent Runtime**.
- Delete Agent Runtime or Cloud Run deployments unless retention was approved.
- Delete unused buckets, stop or delete VMs, and stop or delete Cloud Workstations.
- Budget alerts notify you but do not cap spending.

---

## 10. Pre-launch checklist ✅

Before you share an agent with others:

- [ ] It answers the **main questions** correctly from the data.
- [ ] It **admits** when something isn't in the data (no making things up).
- [ ] Its **tone and format** match what you want.
- [ ] If it takes **actions**, you tested them safely (on yourself).
- [ ] You gave it a clear **name** and **description** so others know what it's for.

---

🎉 **That's everything you need.** Build small, test often, and let the agent surprise you. For the step-by-step labs, head back to **[START_HERE](./START_HERE.md)**.
