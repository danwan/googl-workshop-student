# 🟡 Lab 3.2 — The Meeting Prep Machine

> **Your mission:** Build an agent that cross-references four documents and creates a useful one-page AutoParts meeting brief. 📋⚡

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 2 · Moderate | ~25 min | **Agent Designer** (Flow) | Your `techbond-docs` data store and TechBond document bucket |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** and confirm your bucket and `techbond-docs` data store are visible.

---

## 🎬 The story

The AutoParts call begins in five minutes. Account history, pricing limits, recent sales, and product facts live in different documents. Your agent must correlate them into one brief.

---

## 🎯 Your challenge

In the Flow tab, build a Meeting Prep Machine connected to Cloud Storage. Its AutoParts brief must contain:

- who the customer and contact are;
- account history and current request;
- pricing guardrails;
- three concrete talking points;
- citations showing that multiple documents were consulted.

Define the output contract yourself, test it in Preview, and tighten the agent until the result fits on one page.

## ✅ You did it when…

- [ ] “Prep me for the AutoParts Inc meeting” returns all five required sections.
- [ ] The brief cites at least three of the four relevant documents.
- [ ] Pricing guidance and talking points are specific rather than generic.
- [ ] The result is concise enough to scan immediately before a call.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Name the evidence</strong></summary>

The useful sources are `Customer-Account-Overview-Top20`, `Pricing-Guidelines-B2B-Adhesives`, `Q3-2025-Sales-Report-EMEA`, and `BondMax-500-Technical-Data-Sheet`.
</details>

<details>
<summary><strong>Hint 2 — Force correlation</strong></summary>

Tell the agent to consult all four sources before writing and cite the source behind each section.
</details>

<details>
<summary><strong>Hint 3 — Control the length</strong></summary>

Use five headings and no more than two or three bullets per heading.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. In **Flow**, name the agent `Meeting Prep Machine`.
2. In its instructions, name the four documents from Hint 1 and require sections for customer, history, request, pricing, and three talking points, each with citations and 2–3 bullets maximum.
3. Attach the TechBond bucket through **Add data sources & tools → Cloud sources → Cloud Storage**.
4. In **Preview**, ask: *“Prep me for the AutoParts Inc meeting.”*
5. Confirm Michael Torres, the Detroit BondMax order, grounded pricing limits, useful talking points, and citations to at least three sources.
6. Refine failures and click **Create**.
</details>

---

## ✨ Level-up challenge

Prepare for MegaAuto and add an “Open risks” section without inventing information.

## 🧠 What you just learned

You turned scattered evidence into a compact deliverable by specifying its purpose, shape, and proof.

➡️ **Next up:** [Lab 3.3 — Launch Tracker](./lab-3.3-launch-tracker.md).
