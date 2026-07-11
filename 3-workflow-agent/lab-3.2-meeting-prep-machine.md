# 🟡 Lab 3.2 — The Meeting Prep Machine

> **Your mission:** Build an agent that cross-references four different documents and hands you a perfect one-page brief before your big AutoParts call — in one click. 📋⚡

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 2 · Moderate | ~25 min | **Agent Designer** (Flow builder) | Your `techbond-docs` data store and TechBond document bucket from Lab 0.1 |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project. Open the app URL you created, then confirm your TechBond bucket and `techbond-docs` data store are visible before continuing.

---

## 🎬 The story

It's 14:55 (2:55 PM). At 15:00 (3:00 PM) you're on a call with **AutoParts Inc** (Michael Torres, big BondMax 500 order, Detroit). 😰 You need to know: who are they, what's our history, what do they want, what pricing can you offer, and what should you actually *say*?

The answers are spread across the sales report, the account overview, the pricing guide, and the product spec sheet. Reading all four now? No chance. So you'll build **The Meeting Prep Machine** — point it at the library, and it correlates everything into a clean one-pager. Coffee still hot. ☕🏆

---

## 🛠️ Build it (follow along)

**Step 1 — Open the flow builder.**
**+ Create agent** → **Proceed to builder** → you're on the **Flow** tab with your agent node. (You know this dance now. 💃)

**Step 2 — Name your agent.**
Click the agent node and set:
- **Name:** `Meeting Prep Machine`
- **Description:** `Builds a one-page brief for a customer meeting by cross-referencing company documents.`

**Step 3 — Write the instructions (the secret sauce 🧪).**
This is where the magic happens — you tell it *which* docs to correlate and *what* the brief should look like. Paste:

> *"You are a sales-prep assistant for TechBond. When asked to prep for a meeting with a customer, pull and cross-reference these documents from the connected Cloud Storage library:*
> - *`Customer-Account-Overview-Top20` — who they are and our account history*
> - *`Pricing-Guidelines-B2B-Adhesives` — pricing guardrails and discount limits*
> - *`Q3-2025-Sales-Report-EMEA` — recent sales activity and trends*
> - *`BondMax-500-Technical-Data-Sheet` — product specs they may ask about*
>
> *Output a ONE-PAGE brief with these exact sections: (1) **Who they are** (2) **Our history with them** (3) **What they want** (4) **Pricing guardrails** (5) **3 talking points**. Cite the document behind each section. Keep it tight and skimmable."*

**Step 4 — Plug in the library.**
Click **Add data sources & tools** → **Cloud sources** → **Cloud Storage** → pick the **TechBond document library bucket**. Confirm. All four docs (and more) are now reachable. 📦

**Step 5 — Test it!**
Open the **Preview** tab and type:

> *"Prep me for the AutoParts Inc meeting."*

Watch it hunt across multiple documents and assemble your brief — who AutoParts is, your history, what Michael Torres wants, your pricing limits, and three things to say. 🎯

**Step 6 — Check the correlation.**
A great brief proves it read **more than one doc** — you should see citations to **at least three** of the four named documents. The pricing guardrails come from the pricing guide; the history from the account overview; the specs from the data sheet. That's *cross-referencing*, not just summarizing one file. ✅

**Step 7 — Launch it.**
Love it? Click **Create**. You just automated meeting prep for the whole sales team. 🏆

> 📨 *Want this brief emailed to you automatically every morning before the meeting? That needs the Gmail connector — **Module 6** makes this actually send.*

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — It only used one document</strong></summary>

Your instructions need to *name* the documents and tell it to **cross-reference** them. Make sure all four filenames are listed (Step 3) and add a line: *"You MUST consult all four documents before writing the brief."* Naming the docs is what forces correlation.
</details>

<details>
<summary><strong>Hint 2 — The brief is rambling, not one page</strong></summary>

Add structure to the instructions: *"Use the five numbered sections exactly. Max 2-3 bullets per section. The whole brief must fit on one page."* The clearer your output template, the tighter the brief.
</details>

<details>
<summary><strong>Hint 3 — It can't find AutoParts or the pricing limits</strong></summary>

Confirm the **Cloud Storage** bucket is attached to the node and contains `Customer-Account-Overview-Top20` and `Pricing-Guidelines-B2B-Adhesives`. If a doc is missing from the bucket, the agent can't cite it. Ask your facilitator if anything's absent.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → **Proceed to builder** → **Flow** tab.
2. Agent node → **Name:** `Meeting Prep Machine` + description.
3. Paste the Step 3 instructions (the four named docs + the five-section output template).
4. **Add data sources & tools** → **Cloud sources** → **Cloud Storage** → TechBond bucket.
5. **Preview** → *"Prep me for the AutoParts Inc meeting."*
6. Expect a one-pager: AutoParts = Michael Torres / Detroit / BondMax 500 bulk order, history from the account overview, pricing limits from the pricing guide, 3 talking points — with citations to **≥3** docs.
7. **Create** to launch.

**Done — a one-click meeting-prep agent that correlates across the document library.**
</details>

---

## ✅ You did it when…

- [ ] *"Prep me for the AutoParts Inc meeting."* returns a **structured one-page brief** with all five sections.
- [ ] The brief **cites at least three** of the four named documents.
- [ ] The **pricing guardrails** and **3 talking points** are specific and actually useful — not generic.

---

## ✨ Level-up challenge (optional, +bragging rights)

Change the question to a different customer — *"Prep me for the MegaAuto meeting."* 🤔 Then tweak the instructions to also **flag any open risks or concerns** it finds for that customer. (Heads-up: the juiciest MegaAuto drama — quality incident QI-2025-0087 — lives in the *email export*, which this agent can't see yet. In **Module 4** you'll connect it and catch it.) One agent, every customer, fully prepped. 🥷

---

## 🧠 What you just learned

You built an agent that **correlates information across multiple documents** to produce a structured deliverable — not just an answer, but a *brief*. Real-world skill: turning a scattered pile of company docs into instant, reliable meeting prep. This is the move that makes salespeople look like mind-readers. 🔮

➡️ **Next up:** [Lab 3.3 — Launch Tracker](./lab-3.3-launch-tracker.md), where you track a whole product launch across four documents — milestones, risks, and all.
