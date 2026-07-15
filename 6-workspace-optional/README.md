# Module 6 · Optional — Real Workspace Connectors

> **Workshop role:** Day 1 or Day 2 bonus. Lab 6.0 is a standalone seeding lab with no Gemini Enterprise connectors. Start Labs 6.1 or 6.2 only when the facilitator confirms that their listed Workspace connectors are enabled.
>
> **The big idea:** Take the agents you already built and point them at *your real life.* Live Gmail. Live Calendar. Live Drive. And agents that don't just *suggest* an action — they **actually do it.** 🔌⚡

---

> # ⚠️ READ THIS FIRST — is this module for you?
>
> **Lab 6.0 needs no Gemini Enterprise connectors.** It uses Google Apps Script, but your workshop account must allow Apps Script and let you approve its Gmail and Calendar OAuth permissions.
>
> **Only do Labs 6.1 and 6.2 if your workshop has their Gmail / Calendar / Drive connectors enabled.**
>
> **Many workshops don't — and that's 100% fine.** 🙂 You can still run Lab 6.0 if your account passes its Apps Script/OAuth gate, then skip Labs 6.1 and 6.2 with zero guilt. Everything in **Modules 1–5** works without Workspace connectors.

---

## 🤔 So what changes with live connectors?

In Modules 1–5 you handed your agent a **file** (an inbox PDF, a calendar PDF). Powerful — but it's a snapshot. With Workspace connectors, two new superpowers unlock:

- **📥 Live data, not a snapshot.** The agent reads **YOUR actual emails**, **YOUR real calendar**, and **YOUR Drive documents** — right now, as they are. No uploads.
- **🚀 Real actions, not drafts.** Instead of *proposing* a reply or *suggesting* a meeting, the agent can **actually send the email** or **actually book the meeting** on your calendar.

Same skills you already learned — now plugged into the real thing.

---

## 🧪 The labs

| Lab | Mission | Connectors | Time |
|---|---|---|---|
| 🟣 [6.0 — Seed Your Own Workspace](./lab-6.0-seed-your-workspace.md) | Use **Google Apps Script** to add **one test + 30 TechBond emails** and **one test + 15 TechBond meetings** to your own account. *Skip if your facilitator pre-seeded it.* | No Gemini Enterprise connectors; Apps Script + Gmail/Calendar OAuth required | ~20 min |
| 🟣 [6.1 — Live Inbox Agent](./lab-6.1-live-inbox-agent.md) | Run your Inbox Zero agent on your **real Gmail** — and let it actually **send** a reply (to yourself!). | Gmail (+ Send email) | ~20 min |
| 🟣 [6.2 — Live Meeting Prep](./lab-6.2-live-meeting-prep.md) | Cross-source meeting prep on **live** Gmail + Calendar + Drive — then **book** the follow-up meeting for real. | Gmail + Calendar + Drive (+ Create calendar event) | ~25 min |

---

## 🛟 Safety first (please actually read this)

This is the one module where your agent takes **real actions on a real account.** So:

- **🧍 Always test on your OWN account first.** Send test emails **to yourself**. Create test events **on your own calendar.**
- **🚫 Never** point a real action at a customer, a colleague, or anyone else during the workshop.
- **👀 Preview before you trust.** Read what the agent wants to do *before* you let it fire the action.

Treat it like a new intern: brilliant, eager, and you double-check the first few things it sends. 😄

---

## 📦 What you'll need

- **Lab 6.0:** a workshop account that can open **Google Apps Script** and approve **Gmail and Calendar OAuth permissions**. Gemini Enterprise connectors are not needed.
- **Labs 6.1–6.2:** the **Gemini Enterprise** web app with **Agent Designer** and the Workspace connectors/actions listed in the table.
- **Lab 6.2:** the two PDFs in this module's `Files/` folder uploaded to a Drive folder as explained in that lab.

> 📭 **Inbox looking empty?** If your workshop account is brand new, run **[Lab 6.0 — Seed Your Own Workspace](./lab-6.0-seed-your-workspace.md)** first. It adds one test plus 30 TechBond emails and one test plus 15 TechBond meetings. If your facilitator already seeded your account, skip it.

Need seed data? Start with standalone **[Lab 6.0](./lab-6.0-seed-your-workspace.md)**. Already seeded and the connectors are on? Start with **[Lab 6.1 — Live Inbox Agent](./lab-6.1-live-inbox-agent.md)**. 🚀
