# 🟡 Lab 3.1 — The Company Brain

> **Your mission:** Build an ask-me-anything agent connected to TechBond's full Cloud Storage library, with a citation for every answer. 🧠📚

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 2 · Moderate | ~20 min | **Agent Designer** (Chat pane + Flow) | Your `techbond-docs` data store and TechBond document bucket |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** and confirm your bucket and `techbond-docs` data store are visible.

---

## 🎬 The story

A new TechBond colleague has questions scattered across 20+ specifications, reports, plans, and handbooks. One grounded agent should find the answer and show the receipt.

---

## 🎯 Your challenge

Start in Agent Designer's Chat pane: describe the Company Brain you want in your own words and inspect what Gemini creates. Then choose **Proceed to builder**, open the **Flow** tab, and finish the agent manually:

- refine its instructions and guardrails;
- connect the full TechBond Cloud Storage library;
- require citations and honest “not found” answers;
- test two unrelated questions before launch.

Do not rebuild the same agent twice. Use the prompt-generated draft as your starting point and Flow for the parts that need precise control.

## ✅ You did it when…

- [ ] “What's the cure time of BondMax 500?” returns **4–6 hours to handle and 24 hours for full cure**.
- [ ] The answer cites **BondMax-500-Technical-Data-Sheet**.
- [ ] A SecureSeal EV summary cites **SecureSeal-EV-Series-Launch-Plan**.
- [ ] A question unsupported by the library produces an honest “not found” response.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Chat and Flow are one Agent Designer</strong></summary>

The Chat pane can draft the agent. **Proceed to builder** opens the same agent in the Designer pane, where the **Flow** tab exposes sources and detailed settings.
</details>

<details>
<summary><strong>Hint 2 — Find the library</strong></summary>

Select the main agent node, open **Add data sources & tools**, then look under **Cloud sources** for Cloud Storage.
</details>

<details>
<summary><strong>Hint 3 — Make grounding explicit</strong></summary>

Require the agent to use only the connected library, cite every answer, combine relevant sources, and admit when evidence is missing.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. In **+ Create agent**, describe: *“Build a TechBond internal knowledge agent that answers only from company documents, cites every answer, and says when information is missing.”*
2. Inspect the generated draft, then choose **Proceed to builder**.
3. In **Flow**, name it `Company Brain` and tighten the instructions with the four grounding rules from Hint 3.
4. Select **Add data sources & tools → Cloud sources → Cloud Storage** and attach the TechBond bucket.
5. In **Preview**, run the cure-time and SecureSeal tests plus one deliberately unsupported question.
6. Refine failures and click **Create**.
</details>

---

## ✨ Level-up challenge

Ask one question that requires both the BondMax technical sheet and the pricing guide. A strong answer cites both.

## 🧠 What you just learned

Prompt-first and manual Flow editing are complementary paths inside one Agent Designer: generate quickly, inspect, then configure precisely.

➡️ **Next up:** [Lab 3.2 — Meeting Prep Machine](./lab-3.2-meeting-prep-machine.md).
