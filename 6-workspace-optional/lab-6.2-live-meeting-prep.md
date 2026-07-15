# 🟣 Lab 6.2 — Live Meeting Prep

> **Your mission:** Build a multi-step agent that reads your **real** calendar, pulls the related **emails and Drive docs**, writes you a one-page brief — then **actually books** the follow-up meeting. About 25 minutes.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| Optional · Connectors | ~25 min | **Agent Designer** (Flow builder) | **Gmail + Calendar + Drive** connectors + **Create calendar event** action |

> **Starting here or skipped earlier labs?** Your Workspace admin must have enabled the **Gmail, Calendar, and Drive connectors** plus **Create calendar event**. If your inbox or calendar is empty, run **[Lab 6.0](./lab-6.0-seed-your-workspace.md)** first. In Google Drive, create a folder named **`TechBond Workshop Docs`** and upload `Files/Customer-Account-Overview-Top20.pdf` and `Files/Pricing-Guidelines-B2B-Adhesives.pdf`. In this lab, choose an upcoming seeded TechBond customer meeting such as **AutoParts** or **MegaAuto**, so matching mail and Drive context exist.

---

> **⚠️ Connectors required**
> This lab needs **Gmail, Calendar, and Drive** connectors enabled, plus the **Create calendar event** action. No connectors in your workshop? That's fine — the connector-free versions live in **[Lab 3.2](../3-workflow-agent/lab-3.2-meeting-prep-machine.md)** (the cross-source meeting brief) and **[Lab 4.2](../4-workflow-pro/lab-4.2-complaint-commander.md)** (a crew that proposes the follow-up meeting), using uploaded files instead.

---

## 🎬 The story

In **Lab 3.2** you built a cross-source meeting brief from a document library. In **Lab 4.2** your agent crew *proposed* a follow-up meeting — as text. 📄📄 Both brilliant — both snapshots.

Now we go fully live. 🔌 Your agent looks at your **actual next meeting**, hunts down the **real emails and Drive docs** about it, writes a crisp one-pager, and then **books the follow-up on your real calendar.** From scattered context to a booked meeting — in one flow. Let's build it. 🚀

---

## 🛠️ Build it (follow along)

**Step 1 — Open the flow builder.**
Click **+ Create agent**, then **Proceed to builder.** You're on the **Flow** tab — the visual canvas (the **Flow builder**), perfect for a multi-step job that touches several sources.

**Step 2 — Name the main agent and describe the job.**
On the **Flow** tab, configure the main agent node — **Name**, **Description**, **Instructions**. Try:

> *"You are my meeting-prep assistant. For my next upcoming TechBond customer meeting, gather the related emails and documents, write a one-page brief, and book a follow-up meeting."*

**Step 3 — Add your live sources (the magic step 🪄).**
Click **Add data sources & tools** and add all three Workspace connectors: **Gmail**, **Calendar**, and **Drive.** Grant access if prompted.
> 💡 Three live sources, one agent. It can now cross-reference your real mail, your real calendar, and your real Drive — no uploads anywhere.

**Step 4 — Write the prep instructions.**
Give the agent a clear recipe in its **Instructions** (or split into subagents — hover the node → **Add subagent** — one job each: *find meeting → gather context → write brief → book follow-up*):

> *"1) Find my next upcoming TechBond customer meeting on my Calendar — note the title, time, and attendees. 2) Search my Gmail and the `TechBond Workshop Docs` Drive folder for emails and documents related to that meeting (match on attendee names and the meeting topic). 3) Write a one-page brief: Goal, Key background (3–5 bullets), Open questions, and a suggested follow-up date. 4) Then book the follow-up meeting. Use only my real data and cite which email or doc each fact came from."*

**Step 5 — Test the brief in Preview.**
Open the **Preview** tab and run it. The agent should name your **next TechBond customer meeting**, then surface the **actual emails and Drive docs** tied to it and produce a tidy one-pager. 🤯 Refine the format by editing the instructions and re-running.

**Step 6 — Add the Create calendar event action.**
Back in **Add data sources & tools**, enable the **Create calendar event** action. Now the agent can actually put a meeting on your calendar.

> **🛟 SAFETY — your own calendar only**
> Create the test event on **YOUR OWN calendar.** **Do not** invite customers or colleagues during the workshop. Leave the guest list empty (or just yourself). Preview the event details *before* you let it create them.

**Step 7 — Book the follow-up for real.**
In **Preview**, ask:

> *"Create a 30-minute follow-up event on my own calendar titled '[Meeting] — Follow-up' for a suitable time next week. No other guests. Show me the details first, then create it."*

Open Google Calendar. 📅 If that follow-up event is sitting there — your agent just took a **real action** across **three live sources.** Bravo!

**Step 8 — Launch it.**
Happy with the flow? Hit **Create.** You built a live, cross-source, meeting-booking agent. 🏆

**Step 9 — Clean up the workshop Drive data.**
When you are finished, open Google Drive and move the **`TechBond Workshop Docs`** folder to Trash. This removes only the two workshop copies you uploaded; it does not touch the original files in your workshop folder.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — One of the connectors is missing</strong></summary>

All three — **Gmail, Calendar, Drive** — must be enabled for your workshop. If any is missing, your room probably doesn't have Workspace connectors on. Use the connector-free versions: **[Lab 3.2](../3-workflow-agent/lab-3.2-meeting-prep-machine.md)** (cross-source meeting brief) and **[Lab 4.2](../4-workflow-pro/lab-4.2-complaint-commander.md)** (crew that proposes the follow-up) with uploaded files.
</details>

<details>
<summary><strong>Hint 2 — It finds the meeting but no related emails/docs</strong></summary>

Tell it *what to match on.* Add: *"Search Gmail and Drive using the meeting's attendee names AND the topic keywords from the title. List what you found and where."* If nothing matches, pick a meeting that actually has related threads/docs so there's real context to pull.
</details>

<details>
<summary><strong>Hint 3 — It writes the brief but won't create the event</strong></summary>

Check the **Create calendar event** action is enabled (Step 6). Then be explicit: *"Use the Create calendar event action to add the follow-up to my own calendar. Show the title, date, time, and that there are no other guests, then create it."* If it asks you to confirm first — good, that's the safety net.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → **Proceed to builder** → **Flow** tab.
2. Name + describe the main agent (meeting-prep assistant).
3. **Add data sources & tools** → add **Gmail**, **Calendar**, **Drive** → grant access.
4. Paste the 4-step prep instructions (optionally split into subagents: find → gather → brief → book).
5. **Preview** → it names your next TechBond customer meeting, pulls related mail + docs, writes a one-page brief with citations.
6. **Add data sources & tools** → enable **Create calendar event**.
7. Ask it to create a 30-min follow-up **on your own calendar, no other guests**, show details, then create → confirm it appears in Google Calendar.
8. **Create** to launch.
9. When finished, move the `TechBond Workshop Docs` Drive folder to Trash.

**That's it — a live cross-source brief AND a real calendar event, from one agent.**
</details>

---

## ✅ You did it when…

- [ ] Your agent identified your **next TechBond customer meeting** and pulled **actual emails and Drive docs** about it.
- [ ] It produced a **one-page brief** (goal, background, open questions, follow-up date) from that live data.
- [ ] It **created a real follow-up event on your own calendar** — and you saw it appear. 📅
- [ ] When finished, you moved the **`TechBond Workshop Docs`** folder to Drive Trash.

---

## ✨ Level-up challenge (optional, +bragging rights)

Add a **Send email** action too, and end the flow with: *"Email the one-page brief to me so I have it before the meeting."* ✍️ Now it's full end-to-end: read the world → write the brief → book the follow-up → send you the prep. (Still all on your own account!)

---

## 🧠 What you just learned

You wired a **multi-step agent** to **three live Workspace sources** and gave it a **real action** — the full picture of an agent that gathers, reasons, and *does.* This is the real-world skill of **orchestration**: many sources in, one clear outcome out. Same ideas as Labs 3.2 + 4.2 — now live, and it books the meeting for you.

➡️ **Back to base:** return to the [student workshop guide](../README.md) — or revisit any agent you built and imagine it running on your real data. 🎉
