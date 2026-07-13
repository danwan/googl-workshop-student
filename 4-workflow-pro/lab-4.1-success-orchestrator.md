# 🔴 Lab 4.1 — The Success Orchestrator

> **Your mission:** Build a main agent and three specialists that turn one AutoParts request into a grounded account brief and a drafted follow-up email. 🤖

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 3 · Hard | ~30 min | **Agent Designer** (Flow: main agent + subagents) | Cloud Storage library + `TechBond-Customer-Emails.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** and confirm your bucket and `techbond-docs` data store are visible.

---

## 🎬 The story

AutoParts wants 500 drums of BondMax 500. The request, account history, and readiness evidence live in different sources. Build a small agent crew in which each specialist owns one job.

---

## 🎯 Your challenge

Create a multi-step agent that accepts *“Handle the AutoParts account”* and returns:

1. collected facts from Cloud Storage and the email export;
2. a concise account brief;
3. a customer-ready email draft to Michael Torres.

Use a main agent to coordinate three single-responsibility subagents. Decide their instructions and handoffs yourself. Build and test one specialist at a time before running the full chain.

## ✅ You did it when…

- [ ] One command returns both the account brief and drafted email.
- [ ] Separate subagents gather, brief, and draft instead of one agent doing everything.
- [ ] The output correctly includes Michael Torres, 500 × 25 kg drums, Detroit, and the BondMax 500 request.
- [ ] The email remains a draft and is not sent.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Design the handoff</strong></summary>

Use three roles: a factual Gatherer, a concise Briefer, and an Email Drafter. Tell the main agent to pass each output to the next role.
</details>

<details>
<summary><strong>Hint 2 — Attach both evidence sources</strong></summary>

Cloud Storage contains account and product documents; `TechBond-Customer-Emails.pdf` contains Michael's request.
</details>

<details>
<summary><strong>Hint 3 — Debug one specialist at a time</strong></summary>

Test the Gatherer first, then the Gatherer-to-Briefer chain, then add the Email Drafter. This isolates the broken handoff.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. In **Flow**, name the main agent `Success Orchestrator`. Tell it to delegate in order: Gatherer → Briefer → Email Drafter, pass outputs forward, and return the final brief plus email.
2. Attach the TechBond Cloud Storage library and upload `TechBond-Customer-Emails.pdf`.
3. Add `Gatherer`: collect contact, request, quantity, deadline, pricing, product, and lab facts without opinions. Test AutoParts.
4. Add `Briefer`: turn the findings into Account & Contact, Request, Key facts, Readiness, and Next step. Test the chain.
5. Add `Email Drafter`: write a warm plain-text email with Subject, Michael's request, confirmed facts, and a next step; do not send it.
6. In **Preview**, run *“Handle the AutoParts account.”* Refine failures, then click **Create**.
</details>

---

## ✨ Level-up challenge

Add a Risk Spotter that contributes one grounded competitive or delivery warning.

## 🧠 What you just learned

Small specialists with explicit handoffs are easier to test and repair than one giant instruction block.

➡️ **Next up:** [Lab 4.2 — Complaint Commander](./lab-4.2-complaint-commander.md).
