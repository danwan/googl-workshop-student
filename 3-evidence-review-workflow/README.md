# Module 3: Review workflow

The workflow reviews substantial application dossiers in fixed stages. Three packages represent different outcomes: missing evidence, complete evidence, and conflicting evidence.

## Learning goals

By the end of this module, you can:

- turn free-form documents into verifiable fields;
- check performance, independent repeat, security, privacy, and retention separately;
- distinguish hard failures from missing information;
- produce a reasoned human handoff;
- regression-test a repaired workflow against an earlier case.

## Choose your path

| Lab | Level | Time | Focus | Observable result |
|---|---|---:|---|---|
| [3.1 Incomplete package](./lab-3.1-evidence-review-workflow.md) | Guided | 35-50 min | Build the workflow and detect missing evidence | HUMAN REVIEW with four specific gaps |
| [3.2 Complete package](./lab-3.2-complete-evidence-branch.md) | Practice | 15-20 min | Positive decision boundary | READY FOR APPROVAL REVIEW, not automatically approved |
| [3.3 Conflicting documents](./lab-3.3-conflicting-evidence-escalation.md) | Challenge | 20-30 min | Preserve conflicts and apply outcome precedence | NOT READY for the blocker, with both versions preserved |

Begin with Lab 3.1. The other packages use the same workflow.

## Data model

The PDFs in `Files` are runtime inputs and do not belong in the standing knowledge base. Every workflow output states the outcome, met conditions, missing or conflicting evidence, document IDs, and next human action.

## What good work looks like

A complete package is not approved automatically. An incomplete package names every gap. A conflicting package preserves both values; its confirmed critical blocker determines NOT READY while humans still resolve the conflict.

Next: [Compare](../4-compare/README.md).
