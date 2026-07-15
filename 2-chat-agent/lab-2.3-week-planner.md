# 🟢 Lab 2.3 — Week Planner

> **Your mission:** Build an agent that lists your meetings, finds real open time, and prepares you for the AutoParts review. No coding. No Calendar connector. About 15 minutes.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 1 · Easy | ~15 min | **Agent Designer** (Chat pane) | Upload `TechBond-Team-Calendar.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)**, then open the Gemini Enterprise web app URL you bookmarked.

---

## 🎬 The story

Your TechBond week is packed with standups, negotiations, customer reviews, and project work. Build an assistant that reads the exported calendar and helps you protect your time.

---

## 🎯 Your challenge

Use the Chat pane and the calendar PDF to create an agent that:

- shows this week's meetings in a useful table;
- finds free blocks of at least one hour inside 09:00–17:00;
- creates a specific prep checklist for the AutoParts contract review.

Choose the output format and free-time rules yourself. Test dates and times against the source before launching the agent.

## ✅ You did it when…

- [ ] This week's meetings are listed correctly in a table.
- [ ] The agent identifies a real free block, such as Tuesday morning.
- [ ] The AutoParts prep names Michael Torres, BondMax 500 pricing, the BondMax 500 bulk order, and Detroit delivery.
- [ ] The agent never invents a meeting or free slot.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Define the calendar boundaries</strong></summary>

State the working hours and the minimum duration of a free block. Ask for day, start time, and end time.
</details>

<details>
<summary><strong>Hint 2 — Make meeting prep specific</strong></summary>

Tell the agent to use the named calendar entry, including its attendees, topic, location, and notes.
</details>

<details>
<summary><strong>Hint 3 — Starter structure</strong></summary>

Give the agent one role, one source restriction, three required outputs, and a guardrail against invented times.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. Open **+ Create agent** and upload `TechBond-Team-Calendar.pdf`.
2. Submit: *“You are TechBond's planning assistant. Use only the uploaded calendar. Working hours are 09:00–17:00. Show this week's meetings as Day | Time | Meeting | Location, list every free block of at least one hour, and create a 3–5 item checklist when I ask for meeting prep. Never invent meetings or times.”*
3. In Preview ask: *“What's on my calendar this week?”*, *“When am I free for one hour?”*, and *“Prep me for the AutoParts contract review.”*
4. Refine and retest, then click **Create**.

A valid free block includes Tuesday 09:00–14:00; AutoParts is Wednesday 15:00–16:00 with Michael Torres.
</details>

---

## ✨ Level-up challenge

Change the minimum focus block to 90 minutes and prefer mornings, then prepare for Thursday's MegaAuto complaint review.

## 🧠 What you just learned

You made calendar reasoning testable by defining time boundaries and checking every proposed slot against the source.

➡️ Return to the [Day 1 guide](../DAY_1.md) for your next route.
