# 🟢 Lab 1.3 — The Research Detective

> **Your mission:** Stop *trusting* your documents and start *interrogating* them. 🕵️ Hunt down what's missing, what contradicts, and what's hype-vs-evidence — and back every finding with a citation.

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 1 · Easy (detective twist) | ~20 min | **NotebookLM** (Chat + Studio → Reports) | Upload `Competitor-Analysis-Adhesives-Market.pdf`, `Sustainability-Report-2025.pdf`, `Customer-Testimonials-Collection.pdf`, and the bundle `TechBond-Customer-Emails.pdf` |

---

## 🎬 The story

The **TechBond** strategy team is about to make a big call — and they've handed you a messy mix of sources: a competitor analysis, a glossy sustainability report, a folder of glowing customer testimonials, and a bundle of real customer emails. 📂 Some of it is solid fact. Some of it is… marketing sparkle. ✨

Your job, Detective: find where the sources **disagree**, where claims have **no evidence**, and what important questions **nobody answered**. Then write it all up in a briefing the team can trust. The truth is in the citations. 🔍🚀

---

## 🛠️ Build it (follow along)

**Step 1 — New notebook for the investigation.**
Go to **[notebooklm.google.com](https://notebooklm.google.com)** → **+ Create new**.

**Step 2 — Load a deliberately MIXED set of sources.**
Click **+ Add source** and upload all four:
- `Competitor-Analysis-Adhesives-Market.pdf`
- `Sustainability-Report-2025.pdf`
- `Customer-Testimonials-Collection.pdf`
- `TechBond-Customer-Emails.pdf` *(a bundle of 9 real customer emails)*

> 💡 The *mix* is the point. Polished reports next to raw customer emails is exactly where contradictions and hype hide. 🕵️

**Step 3 — Interrogate with sharp chat prompts. 🔍**
Open the **chat** box and ask pointed questions — one at a time. Watch every answer come back with **citations** (little numbered source chips you can click to jump to the exact passage):

> *"Which claims in these sources are NOT backed by evidence in the other sources?"*

> *"Where do these sources disagree or contradict each other? Quote both sides."*

> *"What important question do NONE of these sources answer?"*

Click the citation chips to verify each claim at the source. If a claim has no chip — that's a red flag. 🚩

**Step 4 — Catch the hype. ✨🚫**
Push harder. Ask:

> *"Separate marketing hype from evidence-backed facts. List the claims that sound impressive but have no supporting data in these sources."*

The testimonials and sustainability report are prime suspects. Note what you find.

**Step 5 — Write the case file: a Briefing doc. 📝**
Go to **Studio → Reports** and generate a **Briefing doc**. You'll get a structured summary of your sources — a clean foundation. Then in chat, ask it to sharpen the briefing:

> *"Add a section titled 'Open questions & contradictions' listing every gap and conflict you found, each with its citation."*

**Step 6 — Lock in your findings.**
Make sure you've nailed at least **one real gap or contradiction** with a **citation** you can point to. That's the detective's proof. Case closed. 🔒🏆

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — The chat is giving vague answers</strong></summary>

Be ruthless and specific. Instead of "summarize this," ask things it has to *check the sources* to answer:
- *"Quote one claim that appears in only ONE source and is contradicted by another."*
- *"List 3 facts a skeptical executive would demand proof for."*

Specific questions force grounded, cited answers.
</details>

<details>
<summary><strong>Hint 2 — Where are the citations?</strong></summary>

Every chat answer includes small numbered **citation chips** inline. **Click one** to jump straight to the exact sentence in the source PDF. If an answer has *no* chips, NotebookLM is telling you that claim isn't well-supported — which is itself a finding. 🚩
</details>

<details>
<summary><strong>Hint 3 — Great detective prompts to copy</strong></summary>

> *"Act as a skeptical analyst. Compare the customer testimonials and customer emails: where does real customer sentiment differ from the marketing testimonials? Cite both."*

> *"Cross-check the Sustainability Report's claims against the competitor analysis. Which sustainability claims are unique and unverified?"*
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create new** → upload the 4 mixed sources.
2. In **chat**, run the three sharp prompts in Step 3, then the hype prompt in Step 4.
3. Click **citation chips** to verify each claim; flag any claim with no chip.
4. **Studio → Reports → Briefing doc** → generate.
5. Ask chat to add an *"Open questions & contradictions"* section with citations.
6. Confirm you have ≥1 cited gap/contradiction (e.g. a glowing testimonial vs. a less rosy customer email).

**Done — you stress-tested a research pile and produced a trustworthy briefing.** 🕵️‍♂️
</details>

---

## ✅ You did it when…

- [ ] You found **at least one gap or contradiction** across the sources — **with a citation** you can click.
- [ ] You produced a **Briefing doc** in Studio → Reports.
- [ ] You can name one claim that's **hype** (no supporting evidence) vs. one that's **fact** (cited).

---

## ✨ Level-up challenge (optional, +bragging rights)

Go to **Studio → Audio Overview** and generate one in **The Critique** format. 🎙️ Instead of cheerful hosts, you get a critical review that pokes holes in your sources out loud — the perfect companion to your detective work. Listen for whether it catches the same contradictions you did. 👀

---

## 🧠 What you just learned

You used NotebookLM not to summarize, but to **challenge** your sources — finding gaps, conflicts, and hype, all backed by clickable citations. The real-world skill: **AI is only as trustworthy as its evidence, and citations let you verify every claim**. That critical-evaluation instinct is gold once you start building agents that make real business decisions.

➡️ **Next up:** [Module 2 — Agent Designer: Chat pane](../2-chat-agent/README.md), where you stop researching and start *building* your first AI agent. 🤖
