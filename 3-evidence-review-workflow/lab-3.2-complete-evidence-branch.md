# Lab 3.2: Review a complete package

> **Mission:** Prove that the workflow recognizes a complete dossier without turning completeness into automatic approval.

| Level | Time | Tool | Data | Prerequisite |
|---|---:|---|---|---|
| Practice | 15-20 min | Agent Designer - Workflow | `SCE-INBOX-002-Complete-Claim.pdf` | Working `P-17 Dossier Review` from Lab 3.1 |

## Set the expectation before testing

Read the complete PDF and mark the five conditions. The expected outcome is **READY FOR APPROVAL REVIEW**, not approved.

| Condition | Expected fact |
|---|---|
| Local performance | 88% across 300 valid cases |
| Independent repeat | 88% across 180 valid cases |
| Security | no open critical finding |
| Privacy | approved |
| Retention | 180 days approved for Central Site |

## Run the test

Select **Reset**. If `review_packet` appears as an empty selector, reload the current Workflow URL and select **Test** again. Paste the entire [complete text copy](../workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/workflow-input/SCE-INBOX-002-Complete-Claim.txt) into `review_packet`; this browser-verified text path is the standard test input. If Test also offers file upload, the supplied PDF is an equivalent optional input. Use the same complete text at **Human input required**.

The test passes only when:

- [ ] all five expected facts are extracted correctly;
- [ ] both performance figures are compared with at least 85%;
- [ ] the outcome is `READY FOR APPROVAL REVIEW`;
- [ ] the output explicitly does not say approved, automatically approved, or start rollout;
- [ ] the relevant evidence IDs are included;
- [ ] the next action names the human Steering Committee.

## If the workflow decides too much

Add only this rule to the final node:

> READY FOR APPROVAL REVIEW means complete and suitable for human deliberation. Never use the words approved, automatically approved, or rollout started.

Repeat the same test after the repair. The repaired run must preserve the decision boundary. If no repair was needed, one passing run is sufficient; do not repeat work only to manufacture a change.

## Record your result

Copy this block into your own notes:

```text
Five expected facts present: YES / NO
Checklist: __ / 6 YES
Initial run outcome:
Repaired run outcome, or NOT NEEDED:
Automatic approval language present: YES / NO
```

If a field or boundary fails, use the [verified Lab 3.2 help](./HELP.md#lab-32) and change only the final node rule that matches the failure.

## Success checklist

- [ ] You recorded the expectation before running the test.
- [ ] All six criteria pass.
- [ ] The complete PDF content was processed.
- [ ] The passing run preserves the human decision.

## If you get stuck

Check the fields one at a time. If all five conditions are YES, the package is ready for review. If the workflow additionally grants approval, narrow only the wording rule in the final node.

## What you learned

Completeness and approval are different states. Automation prepares the decision; the responsible human makes it.

Next: [Lab 3.3](./lab-3.3-conflicting-evidence-escalation.md).
