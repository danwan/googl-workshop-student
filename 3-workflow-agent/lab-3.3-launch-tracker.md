# 🟡 Lab 3.3 — The Launch Tracker

> **Your mission:** Build an agent that watches the **SecureSeal EV** launch across four documents and reports back: where we stand, what's next, and what could go wrong. 🚀📊

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 2 · Moderate | ~25 min | **Agent Designer** (Flow builder) | Your `techbond-docs` data store and TechBond document bucket from Lab 0.1 |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project. Open the app URL you created, then confirm your TechBond bucket and `techbond-docs` data store are visible before continuing.

---

## 🎬 The story

**SecureSeal EV** is TechBond's hottest launch — the new adhesive built for electric vehicles. ⚡🚗 But "the launch" isn't one document. It's a launch plan, a marketing calendar, a trade-show playbook, and an R&D portfolio, all moving at once. The VP wants a status update *now*, and nobody wants to read four files to write it.

So you'll build **The Launch Tracker** — an agent that synthesizes all four into one crisp status report: where we are, what's coming, and the risks hiding between the lines. Be the person who always knows. 🥇

---

## 🛠️ Build it (follow along)

**Step 1 — Open the flow builder.**
**+ Create agent** → **Proceed to builder** → **Flow** tab, agent node ready. 🎨

**Step 2 — Name your agent.**
Click the agent node and set:

- **Name:** `Launch Tracker`
- **Description:** `Synthesizes the SecureSeal EV launch across documents into a status report with risks.`

**Step 3 — Write the instructions (the synthesizer 🧬).**
Tell it exactly which docs to weave together and what the report must contain. Paste:

> *"You are TechBond's launch program manager. When asked about a launch, synthesize these documents from the connected Cloud Storage library:*
>
> - *`SecureSeal-EV-Series-Launch-Plan` — the master plan and timeline*
> - *`Marketing-Campaign-Calendar-2026` — campaign dates and channels*
> - *`Trade-Show-Playbook-AutoExpo` — event presence and demos*
> - *`R&D-Project-Portfolio-2026` — product readiness and technical status*
>
> *Produce a status report with these exact sections: (1) **Overall status** (2) **Key milestones** (3) **Risks** (4) **Next steps**. Pull risks from anywhere the docs hint at delays, dependencies, or gaps. Cite the source document for each point."*

**Step 4 — Plug in the library.**
Click **Add data sources & tools** → **Cloud sources** → **Cloud Storage** → pick the **TechBond document library bucket**. Confirm. 📦

**Step 5 — Test it!**
Open the **Preview** tab and ask:

> *"Give me the SecureSeal EV launch status."*

Watch it pull the plan, the marketing calendar, the trade-show playbook, and the R&D portfolio together into one report — status, milestones, risks, next steps. 🎯

**Step 6 — Hunt the risks.**
The real test is the **Risks** section. A good Launch Tracker doesn't just list dates — it *notices* when a marketing date depends on an R&D milestone that isn't locked, or a trade-show demo that needs final samples. Check that the risks are grounded and cited, not invented. 🕵️

**Step 7 — Launch it.**
Nailed it? Click **Create**. You just built a launch command center. 🏆

> 📨 *Want this status checked every Monday morning? The **Schedule** tab can run this agent automatically on a recurring schedule — and in **Module 6** you'll unlock ways to deliver the report automatically.*

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — It misses some of the documents</strong></summary>

List all four filenames explicitly in the instructions and add: *"You MUST consult all four documents before writing the report."* Naming the docs is what makes the agent synthesize *across* them instead of grabbing the first match.
</details>

<details>
<summary><strong>Hint 2 — The Risks section is empty or generic</strong></summary>

Risks rarely say "RISK" out loud — they hide in mismatched dates and dependencies. Add to your instructions: *"Infer risks by comparing timelines across documents — flag any milestone that depends on another that isn't yet complete, and any tight or conflicting dates."* That tells it to *reason*, not just copy.
</details>

<details>
<summary><strong>Hint 3 — The report is one giant wall of text</strong></summary>

Reinforce the template: *"Use the four numbered sections. Bullet points only. Keep each section to 3-5 bullets."* A status report should be skimmable in 30 seconds.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. **+ Create agent** → **Proceed to builder** → **Flow** tab.
2. Agent node → **Name:** `Launch Tracker` + description.
3. Paste the Step 3 instructions (four named docs + the four-section report template + the risk-inference rule).
4. **Add data sources & tools** → **Cloud sources** → **Cloud Storage** → TechBond bucket.
5. **Preview** → *"Give me the SecureSeal EV launch status."*
6. Expect: **Overall status**, **Key milestones**, **Risks**, **Next steps**, with citations spanning the launch plan, marketing calendar, trade-show playbook, and R&D portfolio.
7. **Create** to launch.

**Done — a multi-document launch status agent that even surfaces the risks.**
</details>

---

## ✅ You did it when…

- [ ] *"Give me the SecureSeal EV launch status."* returns a report with all four sections: **status, milestones, risks, next steps**.
- [ ] The report **synthesizes all four** named documents (check the citations).
- [ ] The **Risks** section names at least one real, grounded risk — not a generic placeholder.

---

## ✨ Level-up challenge (optional, +bragging rights)

Ask for the executive cut: *"Now give me a one-paragraph exec update on the SecureSeal EV launch."* 📝 Your agent should compress the whole report into a single, confident paragraph a VP could read in the elevator. Same data, two audiences — that's a pro move. 🛗

---

## 🧠 What you just learned

You built an agent that **synthesizes a complex, multi-document program** into a structured status report — and even *infers* risks by comparing documents against each other. Real-world skill: turning four scattered planning docs into the one update leadership actually wants. You've officially graduated the flow builder. 🎓

➡️ **Next up:** [Module 4 — Workflow Pro](../4-workflow-pro/README.md), where single agents become multi-step teams with subagents that each do one job.
