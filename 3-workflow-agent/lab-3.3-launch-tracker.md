# 🟡 Lab 3.3 — The Launch Tracker

> **Your mission:** Build an agent that reports the SecureSeal EV launch status, milestones, risks, and next steps across four documents. 🚀📊

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 2 · Moderate | ~25 min | **Agent Designer** (Flow) | Your `techbond-docs` data store and TechBond document bucket |

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** and confirm your bucket and `techbond-docs` data store are visible.

---

## 🎬 The story

The SecureSeal EV launch spans a master plan, campaign calendar, trade-show playbook, and R&D portfolio. Leadership needs one grounded status report, not four document summaries.

---

## 🎯 Your challenge

Build a Launch Tracker in the Flow tab. Connect the Cloud Storage library and make the agent:

- synthesize overall status, milestones, risks, and next steps;
- compare dates and dependencies across all four launch sources;
- distinguish grounded risks from guesses;
- cite the evidence behind every important point.

Design the report format, test it with the SecureSeal EV launch, and refine it until a leader can scan it in 30 seconds.

## ✅ You did it when…

- [ ] “Give me the SecureSeal EV launch status” returns all four required sections.
- [ ] Citations show use of all four launch documents.
- [ ] At least one risk comes from a real date or dependency in the sources.
- [ ] The report contains no unsupported risk filler.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Identify the four views</strong></summary>

Use `SecureSeal-EV-Series-Launch-Plan`, `Marketing-Campaign-Calendar-2026`, `Trade-Show-Playbook-AutoExpo`, and `R&D-Project-Portfolio-2026`.
</details>

<details>
<summary><strong>Hint 2 — Risks hide between documents</strong></summary>

Ask the agent to compare timelines and flag milestones that depend on unfinished work or have tight, conflicting dates.
</details>

<details>
<summary><strong>Hint 3 — Starter structure</strong></summary>

Require four short, bulleted sections and a citation for every milestone, risk, and next step.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. In **Flow**, name the agent `Launch Tracker`.
2. In the instructions, name the four documents from Hint 1 and require **Overall status**, **Key milestones**, **Risks**, and **Next steps**.
3. Add: *“Compare timelines across sources; flag only grounded dependencies or conflicts; cite every point.”*
4. Attach the TechBond bucket through **Add data sources & tools → Cloud sources → Cloud Storage**.
5. In **Preview**, ask: *“Give me the SecureSeal EV launch status.”*
6. Confirm all four sources and at least one grounded risk, then refine and click **Create**.
</details>

---

## ✨ Level-up challenge

Ask for a one-paragraph executive update that preserves the most important risk and its citation.

## 🧠 What you just learned

You built an agent that reasons across plans instead of summarizing the first matching file.

➡️ **Next up:** [Module 4 — Multi-step Agent Crews](../4-workflow-pro/README.md).
