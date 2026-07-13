# 🔴 Lab 4.2 — The Complaint Commander

> **Your mission:** Build an agent crew that investigates QI-2025-0087, drafts a factual response, and proposes a conflict-free follow-up meeting. 🎯

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 3 · Hard | ~30 min | **Agent Designer** (Flow: subagents) | Cloud Storage + `TechBond-Customer-Emails.pdf` + `TechBond-Team-Calendar.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** and confirm your bucket and `techbond-docs` data store are visible.

---

## 🎬 The story

MegaAuto needs reassurance after a SecureSeal viscosity deviation. Your crew must investigate the evidence, draft a careful reply to Lisa Chen, and propose a meeting without pretending to send or schedule anything.

---

## 🎯 Your challenge

Build a main agent with three specialists:

- one reconstructs the incident and applicable quality procedure;
- one drafts an empathetic but factual customer response;
- one proposes a 30-minute meeting in a genuinely free calendar slot.

Connect all three evidence sources, define the handoffs, test each specialist, and then run the complaint end to end.

> **Schedule is Preview:** The Schedule tab supports recurring runs, not an unverified “new email” trigger. It requires a multi-region app and credentials must be refreshed every 14 days. Inspect it, but do not create a schedule in this lab. See [Schedule agent executions](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/schedule-agent).

## ✅ You did it when…

- [ ] The investigation reports **2450 cP vs 1800–2200**, batch **SS-2025-892**, and its quarantine status.
- [ ] The response to Lisa Chen is empathetic, factual, and makes no unsupported supply promise.
- [ ] The proposed meeting includes Lisa, a clear title, 30 minutes, and a real free slot.
- [ ] No email is sent, no calendar event is created, and no recurring schedule is enabled.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Split evidence from tone</strong></summary>

Let the Investigator produce facts only. The Responder should receive those facts and own the customer-facing tone.
</details>

<details>
<summary><strong>Hint 2 — Find both incident and procedure</strong></summary>

QI-2025-0087 is in `TechBond-Customer-Emails.pdf`; the escalation procedure is in the Cloud Storage quality handbook.
</details>

<details>
<summary><strong>Hint 3 — Make scheduling safe</strong></summary>

Give the Scheduler `TechBond-Team-Calendar.pdf`, require a non-overlapping slot, and request invite text only.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. In **Flow**, create main agent `Complaint Commander` and tell it to delegate Investigator → Responder → Scheduler, then return all three outputs.
2. Attach Cloud Storage and upload `TechBond-Customer-Emails.pdf` plus `TechBond-Team-Calendar.pdf`.
3. Investigator: return incident ID, product, batch, measured/spec values, severity, status, affected customers, and handbook procedure.
4. Responder: draft a plain-text email to Lisa Chen acknowledging the deviation, actions taken, uncertainty, next update, and a follow-up call; never send.
5. Scheduler: propose a 30-minute invite with Lisa in a free source-backed slot; never create an event.
6. Test the specialists, then run *“Handle the MegaAuto complaint end to end.”*
7. Inspect the **Schedule** tab without enabling it, then click **Create**.
</details>

---

## ✨ Level-up challenge

Add a Manager Alert specialist that drafts a short internal status note without sending it.

## 🧠 What you just learned

You separated evidence, communication, and scheduling into a testable workflow while keeping connector-free actions human-controlled.

➡️ **Next up:** [Module 5 — Explore](../5-explore/README.md).
