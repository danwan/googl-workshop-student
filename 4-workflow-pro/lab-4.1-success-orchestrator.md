# 🔴 Lab 4.1 — The Success Orchestrator

> **Your mission:** Build a **team of agents** — one manager and three specialists — that runs a complete "customer success" assembly line for the AutoParts account: it **gathers** everything we know, writes a crisp **account brief**, and drafts a friendly **follow-up email**. One command in. A brief + an email out. 🤖➡️🤖➡️🤖

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 3 · Hard | ~30 min | **Agent Designer** (Flow builder) | **Cloud Storage** doc library + upload `TechBond-Customer-Emails.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project. Open the app URL you created, then confirm your TechBond bucket and `techbond-docs` data store are visible before continuing.

---

## 🎬 The story

AutoParts Inc. (Michael Torres, Detroit) wants a **500-drum bulk order of BondMax 500**. 💰 Big deal. But the answer is scattered everywhere — his email, the lab test report, account overviews. A human would spend an hour digging.

You're going to build a **3-person robot team** instead. The **Gatherer** finds everything. The **Briefer** turns it into a tidy account brief. The **Email Drafter** writes Michael a warm follow-up. The **main agent** just says "go team" and assembles the result. Let's build your first agent crew! 🚀

---

## 🛠️ Build it (follow along)

> 🐢 **The golden rule of this lab:** build **one subagent, test it, *then* add the next.** Don't build all three and hope. Slow is smooth, smooth is fast.

**Step 1 — Open the flow builder.**
In Agent Designer, click **+ Create agent**, then **Proceed to builder**. You land on the **Flow** tab — a visual canvas with one node (your **main agent**). This is the **Flow builder**.

**Step 2 — Set up the main agent (the manager).**
Click the main node and fill in:
- **Name:** `Success Orchestrator`
- **Description:** `Runs the customer success workflow for an account.`
- **Instructions:** paste the orchestration prompt:

> *"You are the manager of a customer-success team. When given an account name, run this assembly line in order: (1) ask the Gatherer to collect every relevant fact about the account, (2) pass those facts to the Briefer to write an account brief, (3) pass the brief to the Email Drafter to write a follow-up email. Finally, present the account brief AND the drafted email to the user. Do not do the specialists' work yourself — delegate each step and pass the output down the chain."*

- **Model:** leave the default.

**Step 3 — Plug in the knowledge (Cloud Storage + the emails file).**
Click **Add data sources & tools**.
- Under **Cloud sources**, add **Cloud Storage** and select the TechBond document bucket you created in Lab 0.1.
- Also **upload** `TechBond-Customer-Emails.pdf` so the team can read Michael's actual email.
> 💡 Cloud Storage holds the big doc library (account overviews, lab reports). The uploaded PDF holds the live customer emails. Together = the whole picture.

**Step 4 — Add Subagent #1: the Gatherer.** 🔍
Hover the main node → click **Add subagent**. Configure it:
- **Name:** `Gatherer`
- **Description:** `Finds everything we know about one account.`
- **Instructions:**

> *"You are a research specialist. Given an account name, search the Cloud Storage documents AND the uploaded customer emails for every relevant fact: who the contact is, what they want, quantities, deadlines, pricing notes, product details, and any quality or lab info. Return a plain, organized list of findings with no opinions — just the facts. If something isn't found, say so."*

✅ **Test it now.** Open **Preview** and run: *"Gather everything about AutoParts."* You should see Michael Torres, 500 × 25kg drums, Detroit, 4-week delivery, the BondMax 500 lab pass, etc. **Don't move on until this works.**

**Step 5 — Add Subagent #2: the Briefer.** 📝
Hover the node → **Add subagent** again:
- **Name:** `Briefer`
- **Description:** `Turns raw findings into a crisp account brief.`
- **Instructions:**

> *"You write account briefs for sales leadership. Take the Gatherer's findings and write a SHORT brief with these headings: **Account & Contact**, **What they want**, **Key facts** (quantities, deadlines, location), **Status / readiness** (e.g. is the product lab-cleared?), **Recommended next step**. Keep it under one page. Be factual and skimmable — use bullets."*

✅ **Test the chain so far.** In **Preview**, run *"Brief me on AutoParts."* The Gatherer feeds the Briefer, and you get a tidy brief. Working? Great — last specialist.

**Step 6 — Add Subagent #3: the Email Drafter.** ✉️
Hover the node → **Add subagent** one more time:
- **Name:** `Email Drafter`
- **Description:** `Drafts a friendly follow-up email to the customer.`
- **Instructions:**

> *"You draft warm, professional follow-up emails for the sales team. Using the account brief, write a short email to the account's contact. Include: a friendly greeting by name, acknowledge their specific request, confirm the good news (e.g. product is lab-cleared and available), and propose a clear next step. Sign off as 'The TechBond Sales Team'. Output the email as plain text with a Subject line — do NOT try to send it."*

> ✋ **Connector-free note:** the email is *drafted as text*, not sent. That's by design. **Got the Gmail connector? Module 6 makes this actually send.** 📨

**Step 7 — Run the whole team.** 🎬
Open **Preview** and type the magic command:

> *"Handle the AutoParts account."*

Watch the chain fire: Gatherer → Briefer → Email Drafter. The main agent hands you **an account brief AND a drafted follow-up email to Michael Torres.** 🏆

**Step 8 — Launch it.** Happy? Click **Create**. You just shipped a multi-agent workflow!

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — My main agent does everything itself instead of delegating</strong></summary>

That means the orchestration instructions aren't firm enough. In the **main agent's** instructions, spell out the steps explicitly and add: *"Do NOT answer directly — you MUST delegate each step to the named subagent and pass its output to the next."* Naming each subagent (Gatherer, Briefer, Email Drafter) in the manager's prompt helps it route the work.
</details>

<details>
<summary><strong>Hint 2 — The Gatherer can't find the AutoParts facts</strong></summary>

Two checks:
1. Did you add **both** sources? Cloud Storage (for account/lab docs) **and** the uploaded `TechBond-Customer-Emails.pdf` (for Michael's email). Michael Torres lives in the emails file.
2. Tell the Gatherer to search *both* knowledge sources explicitly. If Cloud Storage isn't connected yet, ask your facilitator — the uploaded PDF alone still covers Michael's request.
</details>

<details>
<summary><strong>Hint 3 — Build order saves you</strong></summary>

If the chain breaks, test subagents **individually** in Preview: *"Gatherer: list facts about AutoParts."* Then *"Briefer: brief AutoParts."* Isolate which step fails. This is why we build and test one subagent at a time — debugging a team is easy when each member works alone first.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → **Proceed to builder** → **Flow** tab.
2. **Main agent** `Success Orchestrator` with the orchestration prompt from Step 2.
3. **Add data sources & tools** → **Cloud Storage** (doc library) + upload `TechBond-Customer-Emails.pdf`.
4. **Add subagent** `Gatherer` (Step 4 prompt) → test *"Gather everything about AutoParts."*
5. **Add subagent** `Briefer` (Step 5 prompt) → test *"Brief me on AutoParts."*
6. **Add subagent** `Email Drafter` (Step 6 prompt) → test the chain.
7. **Preview** → *"Handle the AutoParts account."* → expect a brief (Michael Torres, 500 × 25kg drums, Detroit, 4-week delivery, BondMax 500 lab-cleared) **and** a drafted follow-up email with a Subject line.
8. **Create** to launch.

**Result:** distinct subagents produce a brief AND an email from one command. That's a working agent crew.
</details>

---

## ✅ You did it when…

- [ ] You ran **"Handle the AutoParts account"** and got back **both** an account brief **and** a drafted email.
- [ ] The brief and the email were produced by **distinct subagents** (Briefer vs. Email Drafter), not one giant blob.
- [ ] The drafted email correctly addresses **Michael Torres** and references his **BondMax 500 bulk order**.

---

## ✨ Level-up challenge (optional, +bragging rights)

Add a **4th subagent — the "Risk Spotter"** 🚨 — that scans the docs/emails for anything the sales team should worry about (e.g., the **AdheTech 12% competitor price cut** targeting automotive accounts) and adds a one-line "Heads up" to the brief. Now your team also watches the competition.

---

## 🧠 What you just learned

You built a **multi-agent workflow**: a main agent coordinating single-responsibility subagents that pass work down a chain — and you tested each one before adding the next. This is exactly how real automation teams are designed: small specialists, assembled into a pipeline.

➡️ **Next up:** [Lab 4.2 — Complaint Commander](./lab-4.2-complaint-commander.md), where your agents stop only *thinking* and start proposing **actions**.
