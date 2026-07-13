# 🟣 Lab 6.0 — Seed Your Own Workspace

> **Your mission:** Fill your own Gmail and Google Calendar with realistic TechBond data — a full inbox of 30 business emails and a packed two-week calendar — by running two small Google Apps Scripts yourself. About 20 minutes.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| Optional · Self-service | ~20 min | **Google Apps Script** ([script.google.com](https://script.google.com)) | `email_seeder_script.js` and `calendar_script.js` from this module's `Files/` folder |

---

> **⏭️ Skip this lab if...** your inbox already contains TechBond emails (search Gmail for `BondMax`). That means your facilitator pre-seeded your account — jump straight to **[Lab 6.1](./lab-6.1-live-inbox-agent.md)**. 🎉
>
> **No connectors? Still worth it!** This lab does not need Gemini Enterprise connectors, but your workshop account must allow **Google Apps Script** and let you approve its **Gmail and Calendar OAuth permissions**. If either is blocked by your admin, ask your facilitator to pre-seed the account instead.

---

## 🎬 The story

Labs 6.1 and 6.2 point your agents at your **real** inbox and calendar. But if your account is brand new for this workshop, your inbox is an empty desert 🌵 — and an agent triaging zero emails isn't much of a demo.

Time to fix that. You're going to use **Google Apps Script** — a free scripting platform built into every Google account — to seed your own workspace with TechBond's world: customer inquiries, supplier drama, quality incidents, marketing campaigns, and a calendar full of meetings. Along the way you'll experience how Google automations authenticate, request OAuth permissions, and act on your behalf. That's real Google platform knowledge, not just workshop plumbing. 💪

---

## 🛠️ Build it (step by step)

### Step 1 — Open Google Apps Script
1. Go to **[script.google.com](https://script.google.com)** (signed in with your workshop account).
2. Click **+ New project**.
3. Click the project name (*Untitled project*) and rename it to `TechBond Inbox Seeder`.

---

### Step 2 — Seed your inbox (30 TechBond emails) 📥
1. Open **`Files/email_seeder_script.js`** from this module's folder and copy the **entire** contents.
2. Back in Apps Script, delete the placeholder `function myFunction() {...}` and **paste the script**.
3. Click **💾 Save**.
4. In the function dropdown (next to **Run**), select **`testSendOneEmail`** and click **▶ Run**.
5. Google asks for authorization — this is the interesting part! 🔍
   * Click **Review permissions** → choose your account.
   * You may see a *"Google hasn't verified this app"* warning — that's expected for your own personal scripts. Click **Advanced → Go to TechBond Inbox Seeder (unsafe)**.
   * Note what it asks for: permission to **send email as you**. This is OAuth — the same consent flow every Google integration (including your agents' connectors!) uses.
6. Check your inbox — you should have a test email from yourself. ✅
7. Now select **`sendAllEmails`** in the dropdown and click **▶ Run**. Watch the **Execution log** count up as all 30 emails arrive.

> ⏱️ The full send takes ~1 minute. Open **[gmail.com](https://gmail.com)** and enjoy your suddenly very busy TechBond inbox.
>
> 🧹 **Undo button:** run `deleteAllWorkshopEmails` to move only messages carrying the `TechBond-Workshop-Seed` label to Trash. Your other mail is untouched.

---

### Step 3 — Seed your calendar (15 meetings) 📅
1. Back at [script.google.com](https://script.google.com), create a second **+ New project** and name it `TechBond Calendar Seeder`.
2. Copy the entire contents of **`Files/calendar_script.js`** and paste it in. **Leave `PARTICIPANTS` empty** — that's student mode: events land on *your* calendar only, and nobody gets invited.
3. Click **💾 Save**, select **`testCreateOneEvent`**, click **▶ Run**, and authorize (this time the scope is your **calendar**).
4. Check tomorrow at 10:00 on [calendar.google.com](https://calendar.google.com) for the test event. ✅
5. Select **`createAllEvents`** and click **▶ Run**. The script creates 15 TechBond meetings across this week and next — standups, customer calls, a QBR, lab visits, the works.

> 🧹 **Undo button:** made a mess? Run `deleteAllWorkshopEvents` to remove every event the script created.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — The function dropdown only shows myFunction</strong></summary>

Make sure you replaced the entire placeholder with the full script from the module's `Files/` folder, then click **💾 Save**. The dropdown should now list the script's functions; refresh the editor once if it still shows the old list.
</details>

<details>
<summary><strong>✅ Show me the full solution route</strong></summary>

1. Create `TechBond Inbox Seeder`, paste the complete `email_seeder_script.js`, and save.
2. Run `testSendOneEmail`, approve only the requested Gmail permission, and confirm the test message arrives.
3. Run `sendAllEmails` and wait for the Execution log to finish.
4. Create `TechBond Calendar Seeder`, paste the complete `calendar_script.js`, keep `PARTICIPANTS` empty, and save.
5. Run `testCreateOneEvent`, approve the Calendar permission, and confirm tomorrow's test event appears.
6. Run `createAllEvents`. Use the two `deleteAllWorkshop...` functions only if you want to remove the seeded data.
</details>

---

## ✅ You did it when...
- Your Gmail inbox shows **30 TechBond emails** (search for `BondMax` or `SecureSeal`).
- The seeded messages carry the Gmail label **`TechBond-Workshop-Seed`**, and `deleteAllWorkshopEmails` is available if you want to remove them.
- Your calendar shows a **full two weeks of TechBond meetings** starting this Monday.
- Bonus: you can explain what an **OAuth consent screen** is — you just clicked through two of them, once for Gmail scope and once for Calendar scope.

---

## 🤯 Wait — what did I just use?

**Google Apps Script** is a free JavaScript platform baked into Google Workspace. The scripts you ran used two of its services: `GmailApp` (send/read email) and `CalendarApp` (manage events). People automate entire businesses with it — auto-replies, report generation, spreadsheet workflows. If you enjoyed this, [developers.google.com/apps-script](https://developers.google.com/apps-script) is the rabbit hole. 🐇

**Next up:** your inbox and calendar are alive — now point an agent at them in **[Lab 6.1 — Live Inbox Agent](./lab-6.1-live-inbox-agent.md)**. 🚀
