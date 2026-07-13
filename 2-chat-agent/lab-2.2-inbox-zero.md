# 🟢 Lab 2.2 — Inbox Zero

> **Your mission:** Build an AI agent that turns an entire inbox into a morning briefing with a summary, clear actions, and an urgent warning. No coding. No Gmail connector. About 15 minutes.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 1 · Easy | ~15 min | **Agent Designer** (Chat pane) | Upload `TechBond-Customer-Emails.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)**, then open the Gemini Enterprise web app URL you bookmarked.

---

## 🎬 The story

The TechBond Sales inbox is full: a bulk quote, an expiring contract, sample requests, and a quality incident that needs action today. Your agent must separate signal from noise without inventing facts.

---

## 🎯 Your challenge

Use the Chat pane and the uploaded inbox PDF to create an agent that:

- gives a five-bullet morning summary;
- returns action items with an owner and deadline;
- explains what is urgent and why;
- answers follow-up questions about a specific customer.

Decide what “urgent” means, choose a useful output structure, test the result in Preview, and refine the agent until it is reliable. Launch it when the checks below pass.

## ✅ You did it when…

- [ ] The briefing contains correct action items with an owner and deadline.
- [ ] “Anything urgent?” flags **QI-2025-0087** and explains why batch **SS-2025-892** must not ship.
- [ ] “What does AutoParts want?” identifies the 500-drum BondMax 500 request, pricing, lead time, and Detroit delivery.
- [ ] The agent clearly says when information is not present instead of guessing.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Think about the output contract</strong></summary>

Tell the agent which sections every briefing needs. A summary, an action table, and an urgent section are easier to verify than one long paragraph.
</details>

<details>
<summary><strong>Hint 2 — Define “urgent”</strong></summary>

Use concrete rules such as quality incidents, contracts expiring soon, or deadlines within seven days. Ask for a one-line reason with every flag.
</details>

<details>
<summary><strong>Hint 3 — Starter structure</strong></summary>

Describe the role, restrict answers to the uploaded PDF, define the three output sections, then add the urgency rules and a “do not invent” guardrail.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. Open **+ Create agent** and upload `TechBond-Customer-Emails.pdf`.
2. In the Chat pane, submit: *“You are TechBond's inbox assistant. Read only the uploaded emails. For every morning briefing return: (1) exactly five summary bullets, (2) an action table with Who, What, Deadline, and (3) an urgent list with a reason. Treat quality incidents, contracts expiring soon, and deadlines within seven days as urgent. Never invent missing facts.”*
3. In Preview, test the three questions from the success checklist.
4. Refine any weak section in the Chat pane and retest.
5. Click **Create** to launch.

Expected urgent result: **QI-2025-0087**, SecureSeal batch **SS-2025-892**, must not ship.
</details>

---

## ✨ Level-up challenge

Ask the agent to draft a reply to ChemCorp. It should draft text only; Module 6 covers real Gmail actions.

## 🧠 What you just learned

You converted a messy inbox into a verifiable briefing by defining an output contract, testing real facts, and refining the result.

➡️ **Next up:** [Lab 2.3 — Week Planner](./lab-2.3-week-planner.md).
