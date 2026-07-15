# 🔵 Lab 5.1 — The Deep Research Engine

> **Your mission:** Preflight Google Search, then use Deep Research to plan and write a cited market report. If Search is unavailable, take the fixed Lab 1.3 document-research route instead. 🔎📊

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 🔵 Explore | ~15 min | **Deep Research** (pre-built agent) | **Google Search**; if unavailable, use the fixed Lab 1.3 fallback below 🌐 |

> **🚪 Google Search preflight:** This lab's Deep Research route requires **Google Search** under **Sources**. Check before submitting a prompt. If Google Search is unavailable, do not use substitute facilitator sources and do not continue this lab; follow the explicit **[Lab 1.3 fallback](../1-warmup-research/lab-1.3-research-detective.md)** in Step 2.

---

## 🎬 The story

The TechBond strategy team is eyeing a big bet: **EV battery adhesives**. Electric cars are exploding, and every battery pack needs bonding that survives heat, vibration, and time. Is there a real opportunity here for a mid-size supplier like TechBond?

Normally you'd hire a consulting firm, wait two weeks, and pay a fortune. 💸 Instead, you're going to point the **Deep Research** agent at the question and let it do the homework with sources you can check. Let's go. 🚀

---

## 🛠️ Build it (follow along)

**Step 1 — Open the pre-built agent (nothing to build! 🎉).**
Open your Gemini Enterprise web app. In the navigation / agent gallery, find and open **Deep Research**. That's it — it's already built. You don't create a new agent.

**Step 2 — Choose sources.**
Click **Sources** and look for **Google Search**.

- **Google Search is available:** select it, then continue to Step 3.
- **Google Search is unavailable:** stop this lab and open **[Lab 1.3 — The Research Detective](../1-warmup-research/lab-1.3-research-detective.md)**. Use its four existing PDFs: [Competitor Analysis](../1-warmup-research/Files/Competitor-Analysis-Adhesives-Market.pdf), [Sustainability Report](../1-warmup-research/Files/Sustainability-Report-2025.pdf), [Customer Testimonials](../1-warmup-research/Files/Customer-Testimonials-Collection.pdf), and [TechBond Customer Emails](../1-warmup-research/Files/TechBond-Customer-Emails.pdf). Complete that lab's cited gap/contradiction briefing instead. Then return to the **[Day 1 guide](../DAY_1.md)**; do not follow Lab 1.3's next link to Module 2. Do not improvise replacement sources here.

**Step 3 — Give it a juicy prompt.**
Deep Research loves a meaty, specific question. Paste this:

> *"Analyze the global market for EV battery adhesives in 2026: market size, growth rate, key players, and the opportunity for a mid-size supplier like TechBond. Include sources."*

Click **Submit**.

**Step 4 — Review the plan, then start.**
Deep Research doesn't just blurt an answer. Watch it:
1. **Plan** — it breaks your question into a research outline (market size, players, trends, opportunity).
2. **You review** — if the plan is off, refine the prompt and submit again.
3. **Start Research** — when the plan looks good, click **Start Research**.
4. **Write** — it synthesizes everything into a structured, multi-section report.

> 💡 This can take a couple of minutes — that's the agent reading *dozens* of sources so you don't have to. Grab your coffee. ☕

**Step 5 — Review the cited report.**
You'll get back a proper report: headings, sections, maybe a market-size figure and a players table. The magic is the **citations** — little numbered links pointing to the exact sources. Click a few. *This is what makes it trustworthy* — you can verify every claim. 🔍

**Step 6 — Ask a follow-up.**
Don't stop at the first report. Deep Research keeps the context, so dig deeper. Try:

> *"Now zoom in on the top 3 competitors. What's each one's main weakness that a nimble supplier like TechBond could exploit?"*

Watch it research *again* and sharpen the answer. 🎯

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — I can't find the Deep Research agent</strong></summary>

It's a Google-made agent, so look in the navigation / agent gallery of your Gemini Enterprise app (not in *your* created agents). Search for **"Deep Research."** If you can't see it, your tenant may not have it enabled; ask your facilitator.
</details>

<details>
<summary><strong>Hint 2 — Google Search is missing from Sources</strong></summary>

That is the decision point, not an error to work around. Stop the Deep Research route and use **[Lab 1.3](../1-warmup-research/lab-1.3-research-detective.md)** with its four named PDFs. Do not continue with unnamed or improvised sources.
</details>

<details>
<summary><strong>Hint 3 — It's taking a while / seems stuck</strong></summary>

Deep Research is *supposed* to be slow-ish. A 1–3 minute wait is normal after you click **Start Research**. If it only answers briefly, your prompt may not have triggered research mode or your selected sources may be too narrow.
</details>

<details>
<summary><strong>Hint 4 — A great prompt recipe</strong></summary>

Deep Research shines when you tell it the **angle**, the **scope**, and ask for **sources**. The recipe:
> *"Analyze [topic] in [year]: [thing 1], [thing 2], [thing 3], and [the decision you're trying to make]. Include sources."*

Specific beats vague. "EV battery adhesives market 2026" gets a far better report than "tell me about glue." 🎯
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

Choose the route that matches the preflight:

**Google Search available**
1. Open **Deep Research** from the navigation / gallery.
2. **Sources** → confirm and select **Google Search**.
3. Paste the EV-battery-adhesives prompt → **Submit**.
4. Review the research plan → **Start Research**.
5. Read the multi-section report; open a couple of **citation** links.
6. Ask the follow-up about competitor weaknesses and review the refined answer.

**Google Search unavailable**
1. Stop the Deep Research route and open **[Lab 1.3](../1-warmup-research/lab-1.3-research-detective.md)**.
2. Upload its four named PDFs from `1-warmup-research/Files/`.
3. Complete the cited gap/contradiction prompts and Briefing doc in that lab.
4. Return to the **[Day 1 guide](../DAY_1.md)** instead of following Lab 1.3's Module 2 next link.

**Either route ends with claims you can inspect against named sources.** 🏆
</details>

---

## ✅ You did it when…

Complete exactly one route:

- [ ] **Google Search route:** the preflight confirmed Google Search, you reviewed the plan, opened citations in the multi-section report, and asked the follow-up.
- [ ] **Fallback route:** Google Search was unavailable, so you used Lab 1.3's four named PDFs and produced its cited gap/contradiction briefing instead of continuing Deep Research with substitute sources.

---

## ✨ Level-up challenge (optional, +bragging rights)

Run **one** of these bonus prompts and compare how it researches a totally different topic:

- 🌱 *"What sustainability regulations in the EU and US in 2026 will affect industrial adhesive manufacturers, and what should a mid-size company do to stay ahead? Include sources."*
- 🏁 *"Profile the 5 biggest global players in automotive structural adhesives in 2026: their flagship products, market share, and recent moves. Include sources."*

Notice how the report's *structure* changes to fit the question. That's the agent planning, not a template. 🤯

---

## 🧠 What you just learned

When Google Search was available, you commanded a **pre-built power agent** to do web-grounded research and write a **cited** report. When it was unavailable, you took a deterministic document-research route instead of pretending substitute sources were equivalent. The real-world skill is the same: inspect the evidence before trusting a claim.

> ✋ The Deep Research route uses the **public web**. The Lab 1.3 fallback uses the four named workshop PDFs. To research *your own* documents, use the grounded agents from Modules 2–4.

➡️ **Next up:** [Lab 5.2 — The Idea Machine](./lab-5.2-idea-generator.md), where a pre-built agent becomes your tireless brainstorming partner. 💡
