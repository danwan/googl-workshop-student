# Gemini Enterprise Workshop: Reliable Agents with Enterprise Data

In this one-day workshop, you build and test agents for an easy-to-understand business case. TechBond wants to introduce the new P-17 support process in customer service. Some documents sound very positive, while others contain verified figures, missing approvals, or conflicting versions.

You do not need statistics or programming knowledge. Every decision rule is stated explicitly in the documents. Your job is to limit the sources, define verifiable expectations, test answers against clear YES/NO criteria, and repair failures in a focused way.

## Your learning path

| Area | Guided | Practice | Challenge |
|---|---|---|---|
| Foundations | [0.1 Interface and source checks](./0-core/lab-0.1-interface-and-grounding.md) | - | - |
| Gemini Notebook | [1.1 P-17 evidence set](./1-gemini-notebook/lab-1.1-evidence-notebook.md) | [1.2 Citation detective](./1-gemini-notebook/lab-1.2-citation-detective.md) | [1.3 Decision under pressure](./1-gemini-notebook/lab-1.3-decision-briefing-stress-test.md) |
| Chat agent | [2.1 Build a testable agent](./2-evidence-chat-agent/lab-2.1-evidence-chat-agent.md) | [2.2 Measure and repair](./2-evidence-chat-agent/lab-2.2-evaluate-and-repair.md) | [2.3 Resist manipulation](./2-evidence-chat-agent/lab-2.3-adversarial-grounding.md) |
| Workflow | [3.1 Review an incomplete package](./3-evidence-review-workflow/lab-3.1-evidence-review-workflow.md) | [3.2 Complete package](./3-evidence-review-workflow/lab-3.2-complete-evidence-branch.md) | [3.3 Conflicting documents](./3-evidence-review-workflow/lab-3.3-conflicting-evidence-escalation.md) |
| Compare | [4.1 Compare results](./4-compare/lab-4.1-compare-and-evaluate.md) | [4.2 Blind evaluation](./4-compare/lab-4.2-blind-evaluation-scorecard.md) | [4.3 Transfer to your case](./4-compare/lab-4.3-transfer-blueprint.md) |

Everyone completes the guided labs. During flex time, choose another exercise based on your pace. The additional labs add meaningful depth; they are not waiting tasks.

## The three possible outcomes

- **NOT READY:** A verified mandatory condition is not met.
- **HUMAN REVIEW:** Required evidence is missing or apparently valid documents conflict.
- **READY FOR APPROVAL REVIEW:** Every condition is documented. This is not automatic approval.

Apply the outcomes in that order. A confirmed failure takes precedence over missing or conflicting information. The answer must still show every gap and conflict and identify the human action needed to resolve it.

Start with the [schedule](./SCHEDULE.md), then open [Lab 0.1](./0-core/lab-0.1-interface-and-grounding.md). The [cheat sheet](./CHEAT_SHEET.md) provides terminology and navigation help.

The facilitator provides the tenant-specific Gemini Enterprise link and connects the standing Cloud Storage source before the workshop. Participants upload only the four Notebook PDFs and, later, one runtime dossier at a time when a lab says so. The complete [workshop data package](./workshop-data/README.md) is included as a transparent backup; participants do not create or reconfigure the shared data store.
