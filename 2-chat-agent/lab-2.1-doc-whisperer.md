# 🟢 Lab 2.1 — The Doc Whisperer

> **Your mission:** Build an AI agent that reads a product spec sheet and answers *any* question about it — just by chatting. No coding. No data connectors. You'll have it working in about 15 minutes.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 1 · Easy | ~15 min | **Agent Designer** (Chat pane) | Upload `BondMax-500-Technical-Data-Sheet.pdf` |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project, then open the Gemini Enterprise web app URL you created and bookmarked in Step 7.

---

## 🎬 The story

You just joined **TechBond Industries**, a company that makes super-strong industrial glue. 💪 Customers email all day asking the same questions: *"How strong is BondMax 500? How long does it take to dry? What temperature can it handle?"*

Answering by hand is slow. So you're going to build a tiny AI expert that knows the BondMax 500 data sheet by heart and answers instantly. Let's go! 🚀

---

## 🛠️ Build it (follow along)

**Step 1 — Open the builder.**
Open your Gemini Enterprise web app. In the left menu, click **+ Create agent**. A chat box appears — this is Agent Designer's **Chat pane**. You build the agent just by *talking to it*.

**Step 2 — Give the agent its file (the magic step 🪄).**
Click the **Add files** button (paper-clip / upload icon) and upload **`BondMax-500-Technical-Data-Sheet.pdf`**.
> 💡 This is the whole trick to going "connector-free": instead of plugging into Gmail or a database, you just *hand the agent a file*. It now knows everything inside it.

**Step 3 — Tell the agent what to do.**
In the chat box, type (or paste) a prompt like this:

> *"You are a friendly TechBond product expert. Use the uploaded BondMax 500 data sheet to answer customer questions about the product. Always be accurate, keep answers short and clear, and if the data sheet doesn't cover something, say so honestly."*

Press **Submit**. Gemini builds your agent. 🎉

**Step 4 — Test it!**
Open the **Preview** tab on the right and ask it real questions:
- *"What is the shear strength of BondMax 500?"*
- *"How long does it take to cure?"*
- *"What temperature range can it handle?"*
- *"Can I use it underwater?"* (that's not in the sheet — watch it admit it instead of guessing!)

**Step 5 — Make it yours.**
Don't love an answer? Just tell the agent in the chat: *"Make your answers a bit warmer and add a friendly emoji."* Re-test. This is the superpower of the Chat pane — you fix it by chatting, not coding.

**Step 6 — Launch it.**
Happy with it? Click **Create** to save your agent. You built an AI product expert! 🏆

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — I can't find where to upload the file</strong></summary>

Look for an **Add files**, paper-clip 📎, or upload icon near the chat box (usually bottom-left of the prompt area). Uploaded files become the agent's "knowledge." If you only see data *connectors* (Gmail, Drive), you're in the right place — just scroll for the file-upload option.
</details>

<details>
<summary><strong>Hint 2 — The agent makes things up or won't use the file</strong></summary>

Two quick fixes:
1. In your prompt, add: *"Only answer using the uploaded data sheet. Do not guess."*
2. Confirm the PDF actually attached (you should see its name listed). Re-upload if not.
</details>

<details>
<summary><strong>Hint 3 — A great starter prompt to copy</strong></summary>

> *"You are TechBond's BondMax 500 product expert. Answer customer questions using ONLY the uploaded technical data sheet. Rules: (1) Keep answers under 4 sentences. (2) Use bullet points for specs. (3) If the data sheet doesn't have the answer, say 'That's not in the data sheet — let me connect you with our technical team.' Start by greeting the user and asking what they'd like to know about BondMax 500."*
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → the Chat pane opens.
2. **Add files** → upload `BondMax-500-Technical-Data-Sheet.pdf`.
3. Paste the starter prompt from Hint 3 → **Submit**.
4. In **Preview**, ask: *"What is the shear strength?"* → expect **>12 MPa** (on steel) from the sheet. Ask: *"Can I use it underwater?"* → it should say that's not in the data sheet.
5. Refine tone via chat if you like → **Create** to launch.

**That's it — a working, accurate product-expert agent with zero connectors.**
</details>

---

## ✅ You did it when…

- [ ] Your agent answers a real spec question (e.g. shear strength or cure time) **correctly from the file**.
- [ ] When you ask something *not* in the data sheet, it **admits it** instead of guessing.
- [ ] You changed its tone or style **just by chatting** with the builder.

---

## ✨ Level-up challenge (optional, +bragging rights)

Add a **second** file — upload `Adhesive-Application-Guide-Automotive.pdf` too — and update the prompt so your agent becomes a full "BondMax Helpdesk" that answers both *spec* questions **and** *how-to-apply* questions. Then ask it: *"How do I prep a metal surface before applying BondMax 500?"* 🔧

---

## 🧠 What you just learned

You built a real AI agent **without any data connectors** — just by uploading a file and describing the job in plain English. This is the fastest, safest way to make an agent: **upload → describe → test → refine.** Every workshop room can do this, even with no Gmail or database access.

➡️ **Next up:** [Lab 2.2 — Inbox Zero](./lab-2.2-inbox-zero.md), where you hand your agent a whole inbox.
