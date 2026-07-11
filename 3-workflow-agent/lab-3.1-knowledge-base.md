# 🟡 Lab 3.1 — The Company Brain

> **Your mission:** Build an "ask-me-anything" agent that knows TechBond's *entire* document library — and proves it by citing the exact docs its answers came from. 🧠📚

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 2 · Moderate | ~20 min | **Agent Designer** (Flow builder) | Your `techbond-docs` data store and TechBond document bucket from Lab 0.1 |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project. Open the app URL you created, then confirm your TechBond bucket and `techbond-docs` data store are visible before continuing.

---

## 🎬 The story

In Module 2 your agent knew *one* file. Useful — but a new hire at TechBond has a hundred questions, and the answers are scattered across **20+ documents**: spec sheets, sales reports, launch plans, pricing guides, quality handbooks. 😵‍💫

Nobody has time to read all that. So you're going to build **The Company Brain** — one agent wired straight into the whole document library in **Cloud Storage**. Ask it anything; it finds the answer *and* shows you the receipt. 🧾 Let's build it. 🚀

---

## 🛠️ Build it (follow along)

**Step 1 — Open the flow builder.**
Open your Gemini Enterprise web app. In the left menu, click **+ Create agent**. This time, *don't* type in the chat box — click **Proceed to builder**. You land on the **Flow** tab: a visual canvas with a single **agent node** in the middle. Welcome to the **Flow builder**! 🎨

**Step 2 — Name your agent.**
Click the agent node to open its settings. Set:
- **Name:** `Company Brain`
- **Description:** `Answers questions using TechBond's document library.`

**Step 3 — Give it its instructions (the brains 🧠).**
In the **Instructions** box, paste:

> *"You are TechBond's internal knowledge expert. Answer employee questions using ONLY the connected Cloud Storage document library. Rules: (1) Always cite the document(s) you used. (2) If multiple documents are relevant, pull from all of them. (3) Keep answers clear and concise. (4) If the answer isn't in the library, say so honestly — don't guess."*

**Step 4 — Plug in the whole library (the magic step 🪄).**
Click **Add data sources & tools**. Choose **Cloud Storage** from the **Cloud sources** category. Pick the TechBond document library bucket you created in Lab 0.1. Confirm.
> 💡 *This* is the move the chat pane couldn't do. You just connected a whole bucket of documents in one click — no uploading file-by-file.

**Step 5 — Preview it!**
Open the **Preview** tab and ask real questions:
- *"What's the cure time of BondMax 500?"*
- *"Summarize the SecureSeal EV launch plan."*

Watch it search the library, answer, and — most importantly — **show citations** under each answer. 🔍

**Step 6 — Check the receipts.**
Click a citation. It should point to the right source — the **BondMax-500-Technical-Data-Sheet** for the cure time (4–6 hours to handle, 24 hours for full cure), the **SecureSeal-EV-Series-Launch-Plan** for the launch summary. Different questions, different docs, every claim traceable. That's *grounded* answering. ✅

**Step 7 — Launch it.**
Happy? Click **Create** to save your agent. You just built a company-wide brain. 🏆

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — I don't see "Add data sources & tools"</strong></summary>

Make sure you clicked **Proceed to builder** (not the chat box) and you're on the **Flow** tab. Click the **agent node** to select it — the **Add data sources & tools** button appears in its panel. If you only see file *upload*, you're still in the chat pane; start over with **+ Create agent → Proceed to builder**.
</details>

<details>
<summary><strong>Hint 2 — I can't find the Cloud Storage bucket</strong></summary>

Under **Add data sources & tools**, look in the **Cloud sources** category (alongside BigQuery and Cloud SQL). Pick **Cloud Storage**, then choose the bucket you created in Lab 0.1. If it does not appear, return to Lab 0.1 and confirm that `techbond-docs` finished importing and is connected to your app.
</details>

<details>
<summary><strong>Hint 3 — It answers but shows no citations</strong></summary>

Two checks:
1. Make sure your **Instructions** explicitly say *"Always cite the document(s) you used."*
2. Confirm the Cloud Storage source actually attached to the node (you should see it listed). Re-add it if not. Citations come from the grounded source, so no source = no receipts.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → **Proceed to builder** → land on the **Flow** tab.
2. Click the agent node → **Name:** `Company Brain`, add the description.
3. Paste the Step 3 instructions into **Instructions**.
4. **Add data sources & tools** → **Cloud sources** → **Cloud Storage** → pick the TechBond bucket.
5. **Preview** → ask *"What's the cure time of BondMax 500?"* → expect ~4–6 hours to handle (24 hours for full cure), cited to the **BondMax-500-Technical-Data-Sheet**.
6. Ask *"Summarize the SecureSeal EV launch plan."* → expect a tidy summary cited to the **SecureSeal-EV-Series-Launch-Plan**.
7. **Create** to launch.

**Done — a grounded company knowledge agent with citations, powered by a whole Cloud Storage library.**
</details>

---

## ✅ You did it when…

- [ ] Your agent answers *"What's the cure time of BondMax 500?"* **correctly (4–6 h to handle, 24 h full cure)** from the library.
- [ ] It summarizes the **SecureSeal EV launch plan** by pulling from the right document.
- [ ] Each answer shows a **citation** that points to the actual source document.

---

## ✨ Level-up challenge (optional, +bragging rights)

Ask a question that forces it to **combine two documents** — e.g. *"How does BondMax 500's temperature range compare to what our pricing guidelines say about premium products?"* A great answer cites **both** the technical data sheet **and** the pricing guide. Two receipts, one answer. 🧾🧾

---

## 🧠 What you just learned

You moved from the chat pane to the **flow builder** and connected a **whole Cloud Storage library** — something the chat pane simply can't do. The payoff: **grounded answers with citations** across dozens of documents. Real-world skill: building a trustworthy internal knowledge agent your whole team can ask anything.

➡️ **Next up:** [Lab 3.2 — Meeting Prep Machine](./lab-3.2-meeting-prep-machine.md), where your agent reads *across* documents to brief you before a big customer call.
