# 🔵 Lab 5.3 — Ask Anything 🎁

> **Your mission:** Ask one plain-English question across account data and customer emails — using either a shared tenant data agent or two PDF snapshots in the Chat pane — and get an insight that combines a hard number with a real reason. 🔍📊

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 🔵 Explore (🎁 Bonus) | ~10 min | Shared agent or **Agent Designer** (Chat pane) | Shared agent, or two PDFs from `5-explore/Files/` |

> 💡 **Choose one route:** If your facilitator shared the tenant-wide **TechBond Data Insights** agent, use **Option A**. Otherwise use **Option B**, a Chat-pane exercise over two uploaded PDFs. Option B practices the same reasoning pattern, but it is **not** a live tenant data agent or connector.

---

## 🎬 The story

Most questions in business aren't *just* about a number, and they're *not* just about a document — they're about both. *"Which customers are at risk?"* lives in an account table. *"…and why?"* lives in an email or a report. Usually you'd open two tools and stitch the answer together yourself.

A tenant analytics/data agent can do the stitching for you across connected data. In the fallback route, Agent Designer reasons over a **tabular PDF** and an **email PDF** you upload in the Chat pane. That is file-grounded reasoning, not live tenant analytics, but it lets you test the same combined question. 🚀

---

## 🛠️ Build and run it (follow along)

### Option A — Use the Shared Tenant Agent

*Use this route only if your facilitator shared the tenant analytics/data agent in your gallery.*

**Option A1 — Open the shared agent.**
1. Open your **Gemini Enterprise** web app.
2. In the navigation or agent gallery, open **TechBond Data Insights**.
3. Continue directly to **[Shared Query: Find At-Risk Customers](#shared-query-find-at-risk-customers)**.

---

### Option B — Build a File-Grounded Chat-Pane Agent

*If the shared agent is absent, use this upload-only route. It reasons over two PDFs; it does not connect to live tenant tables, databases, or email.*

**Option B1 — Open the Chat pane.**
Open your **Gemini Enterprise** web app. In the left menu, click **+ Create agent** to open Agent Designer's **Chat pane**.

**Option B2 — Upload the two PDFs.**
Click the **Add files** button (paper-clip / upload icon) and select the following two files from `5-explore/Files/`:
1. **`Customer-Account-Overview-Top20.pdf`** *(a tabular account-data PDF)*
2. **`TechBond-Customer-Emails.pdf`** *(an email-bundle PDF)*

**Option B3 — Give the file-grounded instructions.**
In the chat box, type (or paste) these instructions:

> *"You are the TechBond Analytics Agent. Use the uploaded files to analyze key accounts and customer emails. Always cross-reference the structured customer table with the email logs to answer combined questions. Always be accurate, and name the specific source document you are citing."*

Press **Submit** (or **Send**). Gemini builds your agent. 🎉

---

### Shared Query: Find At-Risk Customers

**Shared Step 1 — Ask a question that needs both sources.**
Paste this prompt into the agent's chat box (or the **Preview** tab if you built your own):

> *"Which customers are at risk, and what's driving it? Use both our account data and any related notes or reports."*

Press **Send**.

**Shared Step 2 — Read the combined answer.**
Watch for the magic move: the agent pulls a **number or list** from the account table (e.g. accounts flagged at risk, renewal dates) *and* a **reason** from an email (e.g. a quality complaint, a delayed shipment). One clean answer, both worlds. 🔗

**Shared Step 3 — Drill in.**
Pick one finding and go deeper:

> *"Tell me more about the top at-risk customer — what's the specific issue and which document is it from?"*

You should get a pointed answer that names the cause and where it came from. 🎯

### Option B Finish: Save After Preview

If you built Option B, run both shared prompts in **Preview**. After the answers use both PDFs and name their sources, click **Create** to save the tested agent.

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

Nudge it to use both: *"Combine the account table with the related emails — give me the number AND the reason behind it."* If only one source is used, check that both PDFs were uploaded in Option B2.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. Choose one route: open the shared **TechBond Data Insights** tenant agent, or create an Agent Designer Chat-pane agent.
2. For Option B, upload `Customer-Account-Overview-Top20.pdf` and `TechBond-Customer-Emails.pdf`, then submit the file-grounded instructions.
3. At **Shared Query: Find At-Risk Customers**, send the at-risk prompt.
4. Confirm the answer pairs a **number/list** from the account table with a **reason** from the emails.
5. Drill in on the top at-risk customer and confirm the answer names the cause and source.
6. For Option B, complete both tests in **Preview**, then click **Create**.

**Result: one plain-English insight that combines a tabular fact with an email-backed reason.** 🏆
</details>

---

## ✅ You did it when…

- [ ] You used the shared **TechBond Data Insights** tenant agent, or you uploaded both PDFs to a file-grounded Chat-pane agent.
- [ ] You asked **one plain-English question** that needed both a table and an email.
- [ ] The answer **combined a number/list from the account table with a reason from the emails**.
- [ ] You drilled into a finding and it **named the cause and its source**.
- [ ] If you used Option B, both prompts passed in **Preview** and you clicked **Create**.

---

## 🧠 What you just learned

You practiced the pattern of bridging tabular and unstructured evidence — the gap people usually cross by hand. Option A used a shared tenant agent; Option B used two uploaded PDFs in the Chat pane and did not become a live tenant data agent. The real-world skill is asking one question across both kinds of evidence and checking the sources. 🔍

🎉 **That's a wrap on Module 5.** You've explored pre-built agents and a small file-grounded fallback. From here, return to the workshop guide and choose your next route.
