# 🟣 Lab 6.1 — Live Inbox Agent

> **Your mission:** Take the Inbox Zero agent from Lab 2.2 and unleash it on your **real inbox** — then give it the power to **actually send** a reply (safely, to yourself). About 20 minutes.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| Optional · Connectors | ~20 min | **Agent Designer** (Chat pane *or* Flow builder) | **Gmail** connector + optional **Send email** action |

---

> **⚠️ Connectors required**
> This lab needs the **Gmail connector** enabled (and the **Send email** action for the second half). No connectors in your workshop? No problem — go back and enjoy **[Lab 2.2 — Inbox Zero](../2-chat-agent/lab-2.2-inbox-zero.md)**, which does the same thing with an uploaded file.

---

## 🎬 The story

In **Lab 2.2** you built an AI chief-of-staff that triaged a *pretend* TechBond inbox from a PDF. 📄 It was great — but it was a snapshot.

Today we cut the cord. 🔌 Your agent reads **your actual Gmail**, gives you a real morning briefing, and — if you let it — **sends a real reply.** Same agent, same skills. Live ammo this time. Let's go! 🚀

---

## 🛠️ Build it (follow along)

**Step 1 — Create the agent.**
Open the Gemini Enterprise web app. Click **+ Create agent**. Either face of Agent Designer works for this lab — the **Chat pane** is the quickest. Give it a job, e.g.:

> *"You are my executive assistant for email. Read my recent inbox and give me a morning briefing: a short summary of the most important messages, a clear action list, and what's urgent."*

**Step 2 — Plug in your real inbox (the magic step 🪄).**
Click **Add data sources & tools** and **enable the Gmail connector.** You may be asked to sign in / grant access — that's Gemini connecting securely to *your* Workspace account.
> 💡 No file to upload this time. The agent now reads your **live** Gmail directly.

**Step 3 — Ask for a real briefing.**
In **Preview**, type a prompt like:

> *"Summarize my most recent emails from the last 3 days. Give me: (1) a 5-bullet summary, most important first; (2) an action-items table — Who | What | Deadline; (3) anything urgent, with a one-line reason. Use only my actual emails."*

Watch it read **your real messages** and brief you. 🤯

**Step 4 — Have it draft replies.**
Pick a real email and ask:

> *"Draft a polite reply to the email from [name/subject]. Keep it short and professional."*

Right now it just *writes* the reply as text — nothing is sent yet. Read it, tweak it by chatting. Good? Time to give it hands. 🖐️

**Step 5 — Enable the Send email action.**
Open **Add data sources & tools** again and turn on the **Send email** action. Your agent can now actually hit send. With great power… you know the rest. 😅

> **🛟 SAFETY — do this part on yourself only**
> During the workshop, **only send test emails to your OWN email address.** Never let the agent email a customer, colleague, or anyone else. Test on yourself, every time.

**Step 6 — Send a test email to yourself.**
In **Preview**, ask:

> *"Draft a one-line test email with the subject 'Live Inbox Agent test' and send it to my own email address ([you]@yourcompany.com). Show me the draft first, then send it."*

Check your inbox. 📨 If that test email just landed — your agent took a **real action**. You did it!

**Step 7 — Launch it.**
Happy? Click **Create** to save your live inbox agent. 🏆

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — I don't see Gmail under Add data sources & tools</strong></summary>

The **Gmail connector** has to be enabled for your workshop by an admin. If it's missing, your room likely doesn't have Workspace connectors on — that's expected for many workshops. Use **[Lab 2.2](../2-chat-agent/lab-2.2-inbox-zero.md)** (uploaded inbox file) instead; you lose nothing.
</details>

<details>
<summary><strong>Hint 2 — It summarizes but won't pull recent emails</strong></summary>

Be specific about the time window and source. Add: *"Look only at emails received in the last 3 days. If there are none, say so."* If access was just granted, give it a moment to sync, then re-ask.
</details>

<details>
<summary><strong>Hint 3 — It drafts the email but won't send it</strong></summary>

Two checks: (1) Confirm the **Send email** action is actually enabled (Step 5). (2) Tell it explicitly: *"After showing me the draft, use the Send email action to send it to [your own address]."* If it asks to confirm before sending — that's the safety net working. Say yes.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → the Chat pane opens. Give it the assistant prompt from Step 1.
2. **Add data sources & tools** → enable **Gmail** → sign in / grant access.
3. In **Preview**, ask for a briefing on the last 3 days → expect a 5-bullet summary, an action table, and an urgent section from your **real** mail.
4. Ask it to **draft a reply** to a specific real email → read it, refine by chatting.
5. **Add data sources & tools** → enable the **Send email** action.
6. Ask it to draft a test email **to your own address**, show the draft, then **send** → check your inbox for *"Live Inbox Agent test."*
7. **Create** to launch.

**That's it — your Inbox Zero agent, now live and able to actually send (to yourself!).**
</details>

---

## ✅ You did it when…

- [ ] Your agent produced a correct briefing from **your real, live inbox** (not an uploaded file).
- [ ] It **drafted a reply** to one of your actual emails.
- [ ] It **sent a real test email to your own address** — and you saw it land. 📨

---

## ✨ Level-up challenge (optional, +bragging rights)

Ask your agent: *"Find any email I haven't replied to in 2+ days, draft a friendly nudge for each, and send the first one to me so I can review the wording."* ✍️ You've just got an AI follow-up machine — that still tests on you first.

---

## 🧠 What you just learned

You connected an agent to **live Gmail** and gave it a **real action** — the leap from an agent that *advises* to an agent that *acts.* This is the real-world skill of **safe automation**: preview the action, test it on yourself, then trust it. Same agent as Lab 2.2 — now with live data and a send button.

➡️ **Next up:** [Lab 6.2 — Live Meeting Prep](./lab-6.2-live-meeting-prep.md), where your agent reads live Gmail + Calendar + Drive and **books a real meeting.**
