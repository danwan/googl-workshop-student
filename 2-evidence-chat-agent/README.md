# Module 2: Testable chat agent

This module turns the P-17 rules into a reusable agent. The central skill is not writing a very long prompt. It is running a controlled loop of expected result, test, observable failure, one change, and repetition.

## Learning goals

By the end of this module, you can:

- restrict an agent to an approved source;
- express decision and source rules in plain English;
- evaluate variable free-text answers with fixed YES/NO criteria;
- derive exactly one instruction from an observable failure;
- resist manipulation attempts and invented assumptions.

## Choose your path

| Lab | Level | Time | Focus | Observable result |
|---|---|---:|---|---|
| [2.1 Build a testable agent](./lab-2.1-evidence-chat-agent.md) | Guided | 25-30 min | Build, restrict, and test against expected facts | Four passing foundation tests |
| [2.2 Measure and repair](./lab-2.2-evaluate-and-repair.md) | Practice | 25-30 min | Binary evaluation and one change | Before-and-after record with regression test |
| [2.3 Resist manipulation](./lab-2.3-adversarial-grounding.md) | Challenge | 20-30 min | Safe behavior under pressure | Three stable attack tests and one custom test |

Everyone completes Lab 2.1. Faster participants then choose Lab 2.2 or Lab 2.3.

## Authoritative expected facts

P-17 requires at least 85%. The pilot dashboard showed a preliminary 92%, but the final verified result was 78%. The independent repeat verified 81%. A general production retention period is not documented. These facts—not the agent's writing style—are the evaluation standard.

## What good work looks like

The agent states the decisive verified figures, supports factual claims with stable SCE IDs, separates preliminary messages from final reports, and refuses to invent details.

Next: [workshop schedule](../SCHEDULE.md).
