# 🟢 Lab 2.3 — Week Planner

> **Your mission:** Build an AI agent that runs your week. Hand it your calendar and it lists your meetings, finds your open hours, and preps you for the big one — all by chatting. No coding. No Calendar connector. About 15 minutes.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 1 · Easy | ~15 min | **Agent Designer** (Chat pane) | Upload `TechBond-Team-Calendar.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project, then open the Gemini Enterprise web app URL you created and bookmarked in Step 7.

---

## 🎬 The story

It's Monday at **TechBond Industries** and your week is *packed*. 📅 Standups, supplier negotiations, a trade-show prep, a customer contract review, a complaint review… and somewhere in there you need an hour of quiet to actually get work done.

Wouldn't it be nice to have an assistant who reads your whole calendar and says: *"Here are your meetings, here's a free hour on Tuesday, and here's exactly what to prepare for the AutoParts review"*? Let's build it! 🚀

---

## 🛠️ Build it (follow along)

**Step 1 — Open the builder.**
Open your Gemini Enterprise web app. In the left menu, click **+ Create agent**. The chat box appears — this is Agent Designer's **Chat pane**. You'll build this one just by *talking to it*.

**Step 2 — Give the agent your calendar (the magic step 🪄).**
Click the **Add files** button (paper-clip / upload icon) and upload **`TechBond-Team-Calendar.pdf`**.
> 💡 This file holds two full weeks of meetings. Instead of connecting to live Google Calendar, you just *hand the agent the schedule* — now it knows every meeting, room, and free slot. Connector-free magic.

**Step 3 — Tell the agent what to do.**
In the chat box, type (or paste) a prompt like this:

> *"You are my personal planning assistant. Use the uploaded calendar PDF. When I ask about my week, do three things in order: (1) **list this week's meetings as a table** (Day / Time / Meeting / Location); (2) **find my open 1-hour slots** during working hours (09:00–17:00); (3) **prep me for the AutoParts contract review** with a short checklist of what to bring and discuss. Use only the uploaded calendar. Be accurate about times."*

Press **Submit**. Gemini builds your agent. 🎉

**Step 4 — Test it!**
Open the **Preview** tab on the right and ask real questions:
- *"What's on my calendar this week?"* (expect a clean table — standup Mon, supplier negotiation Tue, AutoExpo prep + AutoParts review Wed, business review + MegaAuto complaint Thu, CleanWave + EuroDistributors Fri)
- *"When am I free for a 1-hour focus block?"* (expect a real open slot — e.g. **Tuesday 09:00–14:00 is wide open**, or Wednesday 12:30–15:00)
- *"Prep me for the AutoParts contract review."* (expect a checklist: BondMax 500 pricing & volume discounts, 500-drum bulk order, Detroit delivery, lead time — it's Wednesday 15:00 with Michael Torres)

**Step 5 — Make it yours.**
Want tighter focus blocks? Tell the agent in chat: *"Only show me free slots that are at least 90 minutes long, and prefer mornings."* Re-test. You refine by chatting — never by coding.

**Step 6 — Launch it.**
Happy with your planner? Click **Create** to save your agent. You just hired yourself a scheduler! 🏆

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — It lists meetings but won't find free time</strong></summary>

Tell it the rules of the game. Add to your prompt: *"My working hours are 09:00–17:00. A 'free slot' is any gap between meetings inside those hours. List each free slot as Day + start–end time."* The calendar even has a "Quick reference — open time blocks" section it can lean on.
</details>

<details>
<summary><strong>Hint 2 — The meeting prep is generic</strong></summary>

Point it at the right meeting and ask for specifics. Add: *"For meeting prep, pull the details straight from that calendar entry — who's attending, the topic, and the location — then list 3–5 concrete prep items."* The AutoParts entry mentions BondMax 500, pricing, volume discounts, and Detroit delivery, so a good prep list names those.
</details>

<details>
<summary><strong>Hint 3 — A great starter prompt to copy</strong></summary>

> *"You are TechBond's planning assistant. Read ONLY the uploaded calendar PDF. Working hours are 09:00–17:00. When I ask about my week: 1) show this week's meetings as a markdown table (Day | Time | Meeting | Location); 2) list my free slots ≥ 1 hour, as Day + start–end; 3) when I ask for prep on a meeting, give a 3–5 item checklist built from that meeting's calendar entry. Never invent meetings or times that aren't in the file."*
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → the Chat pane opens.
2. **Add files** → upload `TechBond-Team-Calendar.pdf`.
3. Paste the starter prompt from Hint 3 → **Submit**.
4. In **Preview**, ask *"What's on my calendar this week?"* → expect a table from Monday's standup through Friday's EuroDistributors meeting.
5. Ask *"When am I free for an hour?"* → expect a real gap, e.g. **Tuesday 09:00–14:00**, or **Wednesday 12:30–15:00**, or **Thursday 12:00–14:00**.
6. Ask *"Prep me for the AutoParts contract review."* → checklist: it's **Wed 15:00–16:00** with **Michael Torres**; bring BondMax 500 pricing, volume-discount tiers, the 500-drum bulk order details, and Detroit delivery / lead-time confirmation.
7. Refine via chat (90-min slots, mornings only…) → **Create** to launch.

**That's it — an AI planner that reads your calendar, finds your free time, and preps your meetings, with zero connectors.**
</details>

---

## ✅ You did it when…

- [ ] Your agent lists **this week's meetings correctly** in a table.
- [ ] It identifies a **real free slot** that actually exists in the calendar (e.g. Tuesday morning).
- [ ] It produces a **prep checklist** for the AutoParts contract review pulled from the calendar entry.

---

## ✨ Level-up challenge (optional, +bragging rights)

Ask your agent: *"What should I prepare for the MegaAuto complaint review?"* 🔍 Watch it find the **Thursday 14:00–15:00** entry and prep you on the viscosity deviation in SecureSeal batch **SS-2025-892** (incident **QI-2025-0087**) — root cause, customer comms plan, and what MegaAuto will want to hear. (Bonus points if you also did Lab 2.2 and recognize that incident! 😉)

---

## 🧠 What you just learned

You built a personal planning agent that turns a wall of calendar entries into a clear week — meeting list, free hours, and meeting prep — just by uploading one file and describing the job. This is the real-world skill of **owning your time**: see the week at a glance and walk into every meeting ready. **Upload → describe → test → refine.**

➡️ **Next up:** You've finished Module 2! Head back to the [module README](./README.md) to pick your next adventure. 🎉
