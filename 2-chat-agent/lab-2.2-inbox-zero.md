# 🟢 Lab 2.2 — Inbox Zero

> **Your mission:** Build an AI agent that reads an *entire inbox* and hands you a morning briefing — a tidy summary, a clear action list, and a heads-up on what's urgent. No coding. No Gmail connector. About 15 minutes.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 1 · Easy | ~15 min | **Agent Designer** (Chat pane) | Upload `TechBond-Customer-Emails.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project, then open the Gemini Enterprise web app URL you created and bookmarked in Step 7.

---

## 🎬 The story

It's Monday morning at **TechBond Industries**. ☕ The Sales inbox is stuffed: AutoParts wants a bulk quote, ChemCorp's contract is expiring, EV Motors wants samples, and somewhere in there is a **quality incident** that someone really needs to act on *today*.

Reading all of it by hand? Slow. Missing the urgent one? Dangerous. So you're going to build an AI chief-of-staff that reads the whole pile and tells you exactly what matters — in seconds. Let's go! 🚀

---

## 🛠️ Build it (follow along)

**Step 1 — Open the builder.**
Open your Gemini Enterprise web app. In the left menu, click **+ Create agent**. The chat box appears — this is Agent Designer's **Chat pane**. You'll build this agent just by *talking to it*.

**Step 2 — Give the agent the inbox (the magic step 🪄).**
Click the **Add files** button (paper-clip / upload icon) and upload **`TechBond-Customer-Emails.pdf`**.
> 💡 This one file contains 9 real emails. Instead of connecting to live Gmail, you just *hand the agent the inbox* — and now it knows every conversation inside it. That's how we stay connector-free.

**Step 3 — Tell the agent what to do.**
In the chat box, type (or paste) a prompt like this:

> *"You are my executive assistant. Use the uploaded inbox PDF to give me a morning briefing whenever I ask. Always answer in three sections: (1) **Summary** — exactly 5 bullets covering the most important emails. (2) **Action items** — a table with Who / What needs doing / Deadline. (3) **Urgent** — list any email that needs action today and explain why in one line. Use only the uploaded emails. Be concise and accurate."*

Press **Submit**. Gemini builds your agent. 🎉

**Step 4 — Test it!**
Open the **Preview** tab on the right and ask real questions:
- *"Give me my morning briefing."* (watch the 3 sections appear)
- *"What does AutoParts want?"* (expect: 500 drums of BondMax 500, Detroit, pricing + lead time)
- *"Anything urgent?"* (it should flag the **quality incident QI-2025-0087** — the SecureSeal batch SS-2025-892 that must NOT ship)
- *"What's the deadline on the ChemCorp renewal?"* (expect: proposal by end of January; contract expires Feb 28)

**Step 5 — Make it yours.**
Not enough detail in the action items? Just tell the agent in chat: *"In the action items table, add a Priority column (High/Medium/Low)."* Re-test. You refine by chatting — never by coding. That's the superpower.

**Step 6 — Launch it.**
Happy with your briefing? Click **Create** to save your agent. You just built an AI chief-of-staff! 🏆

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — It summarizes but won't flag what's urgent</strong></summary>

Be explicit in your prompt about *what urgent means*. Add: *"Treat any email about a quality incident, a contract expiring soon, or a deadline within 7 days as URGENT, and say why."* The quality incident email (QI-2025-0087) and the ChemCorp renewal are the obvious ones it should catch.
</details>

<details>
<summary><strong>Hint 2 — The action items are vague (no owner or date)</strong></summary>

Force structure. Add to your prompt: *"Action items MUST be a table with three columns: Who / What / Deadline. If a deadline isn't stated, write 'ASAP' and note it's not specified."* Structure in the prompt = structure in the answer.
</details>

<details>
<summary><strong>Hint 3 — A great starter prompt to copy</strong></summary>

> *"You are TechBond's Sales inbox assistant. Read ONLY the uploaded emails PDF. When I ask for a briefing, always reply in this exact format: 1) **Summary** — 5 bullets, most important first. 2) **Action items** — a markdown table: Who | What | Deadline. 3) **Urgent** — bullet list; flag anything about a quality incident, an expiring contract, or a deadline within 7 days, with a one-line reason. If I ask about a specific customer, answer just that. Never invent facts not in the emails."*
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → the Chat pane opens.
2. **Add files** → upload `TechBond-Customer-Emails.pdf`.
3. Paste the starter prompt from Hint 3 → **Submit**.
4. In **Preview**, ask *"Give me my morning briefing."* → expect 5-bullet summary, an action-items table (AutoParts quote, ChemCorp renewal by end of Jan, EV Motors samples, TierOne 48h SLA follow-up…), and an Urgent section flagging **QI-2025-0087** (SecureSeal batch SS-2025-892 — do not ship; notify MegaAuto & ChemCorp).
5. Ask *"What does AutoParts want?"* → 500 × 25kg drums of BondMax 500 to Detroit, plus pricing, data sheet, lead time, shipping.
6. Refine via chat (add a Priority column, etc.) → **Create** to launch.

**That's it — an AI assistant that turns a messy inbox into a clear plan, with zero connectors.**
</details>

---

## ✅ You did it when…

- [ ] Your agent produces **correct action items** with an owner and a deadline (e.g. ChemCorp renewal proposal by end of January).
- [ ] When you ask *"Anything urgent?"* it **flags the quality incident QI-2025-0087** and explains why.
- [ ] *(Optional)* It can **draft a reply** to a customer on request (see the challenge below).

---

## ✨ Level-up challenge (optional, +bragging rights)

Ask your agent: *"Draft a reply to ChemCorp about the renewal."* ✍️ Watch it write a professional email covering pricing stability, sub-3-week lead times, and the sustainability statement they asked for — all pulled from the inbox.
> 📨 Your agent **drafts** the reply as text here; it doesn't actually send it. Got the Gmail connector? **Module 6** makes this actually hit send.

---

## 🧠 What you just learned

You turned a chaotic inbox into a structured morning briefing — summary, action items, and urgent flags — just by uploading one file and describing the job in plain English. This is the real-world skill of **triage at speed**: never miss the email that matters. **Upload → describe → test → refine.**

➡️ **Next up:** [Lab 2.3 — Week Planner](./lab-2.3-week-planner.md), where you hand your agent your calendar and let it run your week.
