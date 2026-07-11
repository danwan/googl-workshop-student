# 🔵 Lab 5.3 — Ask Anything 🎁

> **Your mission:** Quiz an agent across **both** structured data *and* unstructured documents — in plain English — and get back an insight that combines a hard number with a real reason. No connectors to wire. 🔍📊

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 🔵 Explore (🎁 Bonus) | ~10 min | **Agent Designer** (Chat pane) | Upload files from `5-explore/Files/` |

> 💡 **Tenant Setup Options:** If your facilitator has already pre-built and shared a tenant-wide "TechBond Data Insights Agent" for you, you can use that directly (**Option A**). Otherwise, **you'll build your own in just 2 minutes!** (**Option B**). 🚀

---

## 🎬 The story

Most questions in business aren't *just* about a number, and they're *not* just about a document — they're about both. *"Which customers are at risk?"* lives in a spreadsheet. *"…and why?"* lives in an email or a report. Usually you'd open two tools and stitch the answer together yourself.

An analytics/data agent can do the stitching for you. It reasons over **structured** data (tables, spreadsheets) **and** **unstructured** docs at the same time — and answers in plain English. Let's give it a real TechBond question. 🚀

---

## 🛠️ Build and run it (follow along)

### Option A — Use a Pre-Built Tenant Agent
*If your facilitator has prepared a pre-built analytics/data agent in your gallery, use this option:*

1. Open your **Gemini Enterprise** web app.
2. In the navigation or agent gallery, look for the agent named **TechBond Data Insights** (or as specified by your facilitator).
3. Skip to **Step 3** below to run your queries!

---

### Option B — Build Your Own in 2 Minutes!
*If no pre-built agent is in your gallery, build it yourself using the Agent Designer's Chat pane:*

**Step 1 — Open the builder.**
Open your **Gemini Enterprise** web app. In the left menu, click **+ Create agent** to open Agent Designer's **Chat pane**.

**Step 2 — Upload your data files.**
Click the **Add files** button (paper-clip / upload icon) and select the following two files from `5-explore/Files/`:
1. **`Customer-Account-Overview-Top20.pdf`** *(Structured account data)*
2. **`TechBond-Customer-Emails.pdf`** *(Unstructured customer communications)*

**Step 3 — Train your agent.**
In the chat box, type (or paste) these instructions:

> *"You are the TechBond Analytics Agent. Use the uploaded files to analyze key accounts and customer emails. Always cross-reference the structured customer table with the email logs to answer combined questions. Always be accurate, and name the specific source document you are citing."*

Press **Submit** (or **Send**). Gemini builds your agent. 🎉

---

### Run Your Queries (Both Options)

**Step 3 — Ask a question that needs BOTH data types.**
Paste this prompt into the agent's chat box (or the **Preview** tab if you built your own):

> *"Which customers are at risk, and what's driving it? Use both our account data and any related notes or reports."*

Press **Send**.

**Step 4 — Read the combined answer.**
Watch for the magic move: the agent pulls a **number or list** from the structured data (e.g. accounts flagged at risk, renewal dates) *and* a **reason** from a document (e.g. a quality complaint, a delayed shipment). One clean answer, both worlds. 🔗

**Step 5 — Drill in.**
Pick one finding and go deeper:

> *"Tell me more about the top at-risk customer — what's the specific issue and which document is it from?"*

You should get a pointed answer that names the cause and where it came from. 🎯

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — I can't find the files to upload</strong></summary>

The files are in your cloned/downloaded workshop directory at `5-explore/Files/`:
- `Customer-Account-Overview-Top20.pdf`
- `TechBond-Customer-Emails.pdf`
</details>

<details>
<summary><strong>Hint 2 — The answer only used one data source</strong></summary>

Nudge it to use both: *"Combine the structured account data with the related documents — give me the number AND the reason behind it."* Naming both worlds explicitly tells the agent to bridge them. If only one type of data is loaded, check that both files were uploaded in Step 2.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. Open/build the **TechBond Data Insights** agent.
2. If building, upload `Customer-Account-Overview-Top20.pdf` and `TechBond-Customer-Emails.pdf` from `5-explore/Files/`.
3. Paste the "which customers are at risk, and what's driving it" prompt → **Send**.
4. Confirm the answer pairs a **number/list** (from the table) with a **reason** (from the emails).
5. Drill in on the top at-risk customer to see the specific cause and its source.

**Result: one plain-English insight that fused a spreadsheet number with a document reason.** 🏆
</details>

---

## ✅ You did it when…

- [ ] You have access to a **TechBond Data Insights** agent (either pre-built or built by you).
- [ ] You asked **one plain-English question** that needed both a table and an email.
- [ ] The answer **combined a number/list with a reason** from a doc.
- [ ] You drilled into a finding and it **named the cause and its source**.

---

## 🧠 What you just learned

You met the pattern of an agent that bridges structured and unstructured data — the gap people usually cross by hand. The real-world skill: many of your best questions live in *both* a spreadsheet and a doc, and the right agent answers them together. 🔍

🎉 **That's a wrap on Module 5 — and on the ready-made power agents.** You've seen what's possible with zero building. From here, the agents you create are limited only by your imagination.
