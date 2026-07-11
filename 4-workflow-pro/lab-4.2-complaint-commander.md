# 🔴 Lab 4.2 — The Complaint Commander

> **Your mission:** A customer has a quality complaint. Build an agent crew that handles it **end to end**: an **Investigator** digs up the facts, a **Responder** drafts an empathetic reply, and a **Scheduler** proposes a follow-up meeting. And here's the twist — for the first time, your agent doesn't just *think*… it proposes an **action**. 🎯

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 3 · Hard | ~30 min | **Agent Designer** (Flow builder: subagents + actions) | **Cloud Storage** doc library + upload `TechBond-Customer-Emails.pdf` and `TechBond-Team-Calendar.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project. Open the app URL you created, then confirm your TechBond bucket and `techbond-docs` data store are visible before continuing.

---

## 🎬 The story

Bad news travels fast. ⚠️ **Lisa Chen** at MegaAuto heard a "viscosity comment" about the SecureSeal line and wants reassurance before her big Q1 reorder. Behind the scenes, quality incident **QI-2025-0087** is real: SecureSeal 100 batch SS-2025-892 came in at **2450 cP** (spec 1800–2200). 😬

This needs a calm, factual, *fast* response. So you'll build a **Complaint Commander** crew: investigate the incident, draft a response Lisa will trust, and propose a follow-up meeting — all from one command. This is the lab where your agents start to *do* things. Let's command this complaint! 🫡

---

## 🛠️ Build it (follow along)

> 🐢 Same golden rule as Lab 4.1: **add one subagent, test it, then add the next.**

**Step 1 — Open the flow builder + set up the manager.**
**+ Create agent** → **Proceed to builder** → **Flow** tab. Configure the main node:
- **Name:** `Complaint Commander`
- **Description:** `Handles a customer quality complaint end-to-end.`
- **Instructions:**

> *"You manage a complaint-resolution team. Given a customer complaint, run these steps in order: (1) Investigator gathers the incident facts, (2) Responder drafts a customer reply using those facts, (3) Scheduler proposes a follow-up meeting. Delegate each step and pass the output down the chain. Finally present: the investigation summary, the drafted response, and the proposed meeting. Do not do the specialists' jobs yourself."*

**Step 2 — Plug in the knowledge.**
Click **Add data sources & tools**:
- **Cloud Storage** → the TechBond doc library (holds the `Quality-Management-Handbook` with the escalation procedure).
- **Upload** `TechBond-Customer-Emails.pdf` (holds Lisa's email + the QI-2025-0087 incident notification).
- For Step 5, also have the **team calendar** available (`TechBond-Team-Calendar.pdf`, uploaded from `Files/` or available via Cloud Storage) so the Scheduler can find a free slot.

**Step 3 — Subagent #1: the Investigator.** 🔍
Hover the node → **Add subagent**:
- **Name:** `Investigator`
- **Description:** `Pulls the full facts of a quality incident.`
- **Instructions:**

> *"You are a quality investigator. Given an incident, pull every relevant fact from the uploaded emails and the Cloud Storage documents: the incident ID, product, batch, measured vs. spec values, severity, status, root cause, affected customers, and any handbook procedure that applies. For incident QI-2025-0087, also reference the Quality-Management-Handbook for the procedure that applies. Return a clear, factual investigation summary — no spin."*

✅ **Test it now.** **Preview** → *"Investigate QI-2025-0087."* Expect: SecureSeal 100, batch SS-2025-892, **2450 cP vs spec 1800–2200**, severity Medium, batch quarantined, affects MegaAuto & ChemCorp. **Don't continue until this is solid.**

**Step 4 — Subagent #2: the Responder.** 💬
Hover → **Add subagent**:
- **Name:** `Responder`
- **Description:** `Drafts an empathetic, factual customer reply.`
- **Instructions:**

> *"You draft customer responses for a quality team. Using the investigation summary, write an email to Lisa Chen at MegaAuto that is empathetic AND factual. Acknowledge her concern, be honest about the viscosity deviation on batch SS-2025-892, explain the actions taken (line halted, batch quarantined, under investigation), state that supply impact is still being assessed and two orders may be delayed, give the next confirmed update time, and offer a follow-up call. Do not promise uninterrupted supply. Warm, calm, no jargon. Output as plain text with a Subject line — do NOT send it."*

✅ **Test the chain.** *"Handle the MegaAuto complaint."* You should now get an investigation summary **and** a drafted reply to Lisa. 👍

> ✋ **Connector-free note:** the reply is *drafted as text*, not sent. **Got the Gmail connector? Module 6 makes it actually send.** 📨

**Step 5 — Subagent #3: the Scheduler (your first ACTION).** 📅
Hover → **Add subagent**:
- **Name:** `Scheduler`
- **Description:** `Proposes a follow-up meeting with the customer.`
- **Instructions:**

> *"You schedule follow-up meetings. Propose a meeting to discuss the QI-2025-0087 resolution with Lisa Chen. Provide: a clear title (e.g. 'MegaAuto × TechBond — SecureSeal Quality Follow-up'), the attendee (Lisa Chen), a 30-minute duration, and a specific date/time chosen from a FREE slot in the team calendar (avoid existing meetings). If the **Create calendar event** action is available, use it to create the event. Otherwise, output the full invite as text for a human to send."*

> 🎬 **This is the new superpower — actions.** An action lets an agent *do* something, not just write about it. In the subagent's tools, look for **Create calendar event** (under Calendar). If the **Calendar connector is enabled**, the Scheduler can create the event for real. If not (our connector-free default), it just **proposes the invite as text** — same useful output, nothing risky.

✅ **Test it.** *"Handle the MegaAuto complaint and set up a follow-up."* The Scheduler proposes (or creates) a meeting in a real free slot.

**Step 6 — Peek at the Schedule tab.** ⏰
Open the **Schedule** tab in the Designer pane. This lets an agent **run automatically** (e.g., every Monday morning, sweep new complaints). You don't have to set one — just know it's there. Imagine this whole crew running itself. 🤯

**Step 7 — Run the full mission + launch.**
**Preview** → *"Handle the MegaAuto complaint end to end."* Confirm you get all three outputs, then click **Create**. Complaint: commanded. 🫡🏆

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — The Investigator misses the incident details</strong></summary>

QI-2025-0087 lives in the **uploaded emails file** (the quality incident notification). The escalation procedure lives in **Cloud Storage** (`Quality-Management-Handbook`). Make sure **both** sources are attached, and tell the Investigator to search both. (Careful: `Lab-Test-Report-Batch-TB2025` is about a *different*, passing BondMax batch — don't point the Investigator at it.) Reference the incident by its exact ID: **QI-2025-0087**.
</details>

<details>
<summary><strong>Hint 2 — I don't see a "Create calendar event" action</strong></summary>

That action needs the **Calendar connector** enabled (an admin step) — and Modules 1–5 are intentionally **connector-free**. So that's expected! In our setup, the Scheduler simply **outputs the invite as text** (title, attendee, date/time). That's a valid success. **Module 6 turns on Calendar so the event actually gets created.** 📅
</details>

<details>
<summary><strong>Hint 3 — The Scheduler picks a time that clashes with a meeting</strong></summary>

Make sure the **team calendar** is one of the agent's sources, and add to the Scheduler's instructions: *"Choose a time that does NOT overlap any existing calendar entry — use a free slot."* The calendar file has a free-slots section to make this easy.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → **Proceed to builder** → **Flow** tab.
2. **Main agent** `Complaint Commander` with the orchestration prompt (Step 1).
3. **Add data sources & tools** → **Cloud Storage** (incl. the Quality-Management-Handbook) + upload `TechBond-Customer-Emails.pdf` + `TechBond-Team-Calendar.pdf`.
4. **Add subagent** `Investigator` (Step 3) → test *"Investigate QI-2025-0087."*
5. **Add subagent** `Responder` (Step 4) → test the chain to Lisa Chen.
6. **Add subagent** `Scheduler` (Step 5) → uses **Create calendar event** if Calendar is on, else proposes the invite as text.
7. **Preview** → *"Handle the MegaAuto complaint end to end."* → expect: an investigation summary (2450 cP vs 1800–2200, batch SS-2025-892, quarantined), a drafted reply to Lisa Chen, and a proposed/created follow-up meeting in a free slot.
8. Glance at the **Schedule** tab → **Create** to launch.

**Result:** a three-output, end-to-end complaint workflow — your first agent that proposes an action.
</details>

---

## ✅ You did it when…

- [ ] You got an **investigation summary** with the real QI-2025-0087 facts (e.g. **2450 cP vs spec 1800–2200**, batch SS-2025-892).
- [ ] You got a **drafted customer response** to **Lisa Chen** that's both empathetic and factual.
- [ ] You got a **proposed (or created) follow-up meeting** with a title, Lisa as attendee, and a time from a **free** calendar slot.

---

## ✨ Level-up challenge (optional, +bragging rights)

Add a **"Manager Alert" subagent** that drafts a short internal heads-up email to the sales manager (*"MegaAuto complaint handled — reply drafted, follow-up proposed for [date]"*). In Module 6, with the connector on, this becomes a real **Send email** action. ✉️

---

## 🧠 What you just learned

You built an **end-to-end workflow with actions**: subagents that investigate, respond, and *propose doing something* — plus you met the **Schedule** tab that can run a crew automatically. This is the leap from agents that *answer* to agents that *act* — the foundation of real business automation. 🚀

➡️ **Next up:** [Module 5 — Explore](../5-explore/README.md), where you go wide with Deep Research and free-form agent experiments. (And **Module 6** flips on the connectors so all these drafts and invites *actually send and schedule*.)
