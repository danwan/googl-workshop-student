# Lab 4.1: Compare tools and results

> **Mission:** Compare Notebook and Chat agent on one identical decision task, then compare their work pattern with the Workflow or agent-evaluation path from Module 3.

| Level | Time | Tools | Prerequisite |
|---|---:|---|---|
| Guided | 15-20 min | Notebook, Chat agent, Workflow or agent-evaluation suite | Results from Modules 1 to 3 |

## Compare the tools

Complete the table with one concrete example from your exercises:

| Question | Notebook | Chat agent | Workflow or agent-evaluation suite |
|---|---|---|---|
| What was this tool best at? |  |  |  |
| Where was source verification visible? |  |  |  |
| Which failure occurred? |  |  |  |
| Which human control remained necessary? |  |  |  |

## Use the same decision task

Ask Notebook and the Chat agent to complete this task:

> Using only the four selected workshop sources, answer in exactly four fields: OUTCOME, RULE, EVIDENCE, and NEXT STEP. Decide whether the standing P-17 record is ready for approval review. State the at-least-85% rule and cite SCE-TEAM-001. State the final verified North Site and independent-repeat values and cite SCE-EVID-001 and SCE-EVID-002. Do not use preliminary values as decision values and do not invent a general retention period. In NEXT STEP, name one human role, one action verb, and the evidence or decision object. Write no more than eight sentences.

Evaluate both answers against the same list:

- [ ] Outcome is NOT READY.
- [ ] Rule states at least 85%.
- [ ] Pilot states final verified 78%.
- [ ] Repeat states final verified 81%.
- [ ] Preliminary figures are not used for the decision.
- [ ] `SCE-TEAM-001`, `SCE-EVID-001`, and `SCE-EVID-002` are present.
- [ ] Missing general retention is not invented.
- [ ] The next step names one human role, action verb, and object.

An answer passes only with eight YES answers. There does not need to be a winner; both answers may pass or both may fail.

## Explain the tool choice

Write exactly one sentence for each situation:

- one-time examination of several long documents;
- recurring questions against the same knowledge base;
- repeatable review of many application dossiers.

Assign Notebook, Chat agent, and Workflow appropriately. Justify each choice from the work pattern, not personal preference.

In the fallback edition, replace Workflow with the **agent-evaluation suite**. Explain that it validates repeated Chat-agent behavior when the visual process builder is unavailable; it is not a third implementation of the same tool.

## Record your result

Copy this block into your own notes:

```text
Notebook checklist: __ / 8 YES
Chat-agent checklist: __ / 8 YES
Module 3 path: Workflow / agent-evaluation
Best tool for one-time document analysis:
Best tool for repeated questions:
Best tool for a fixed process, or fallback used:
Observed failed test, or NONE OBSERVED:
```

If either decision answer fails, use the [verified Lab 4.1 help](./HELP.md#lab-41) and rerun only that answer.

## Success checklist

- [ ] The comparison table contains real observations.
- [ ] Both answers were checked against the same eight-item list.
- [ ] Every tool choice has a task-based reason.
- [ ] You name one failed test or record `NONE OBSERVED`; you do not create an artificial failure.

## If you get stuck

Separate tool choice from answer quality. Ask first: one-time analysis, repeated conversation, or fixed process? Then evaluate the answer independently against the eight YES/NO criteria.

## What you learned

The best tool depends on the work pattern. Quality rules remain consistent across tools.

Next: [Lab 4.2](./lab-4.2-blind-evaluation-scorecard.md) or [Lab 4.3](./lab-4.3-transfer-blueprint.md).
