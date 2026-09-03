# Lab 3.3: Escalate conflicting documents

> **Mission:** Make the workflow preserve conflicting final versions and hard security problems instead of selecting the more favorable figure.

| Level | Time | Tool | Data | Prerequisite |
|---|---:|---|---|---|
| Challenge | 20-30 min | Agent Designer - Workflow | `SCE-INBOX-003-Conflicting-Claim.pdf` | Working `P-17 Dossier Review` from Lab 3.1 |

## Set the expectation before testing

The dossier contains:

- 91% across 200 dashboard records in the management file;
- 79% across 184 valid cases in the later audit attachment;
- an open critical security finding;
- an expired privacy approval;
- no approved retention policy.

The expected outcome is **NOT READY** because an open critical security finding is a confirmed blocker and confirmed failure takes precedence. The workflow must still preserve the unresolved 91%/79% conflict and route that conflict to human clarification.

## Run the test

Select **Reset**. If `review_packet` appears as an empty selector, reload the current Workflow URL and select **Test** again. Paste the entire [complete text copy](../workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/workflow-input/SCE-INBOX-003-Conflicting-Claim.txt) into `review_packet`; this browser-verified text path is the standard test input. If Test also offers file upload, the supplied PDF is an equivalent optional input. Use the same text at **Human input required**. In the extraction node, confirm that both figures and both analysis IDs are visible.

The test passes only when:

- [ ] 91% across 200 and `ANA-P17-COAST-200-SUMMARY` are preserved;
- [ ] 79% across 184 and `ANA-P17-COAST-184-AUDIT` are preserved;
- [ ] the version conflict is stated explicitly;
- [ ] the open critical security finding is stated;
- [ ] expired privacy approval and missing retention approval are stated;
- [ ] the outcome is `NOT READY` because the critical finding is open;
- [ ] Quality, Security, Privacy, and Site Management are named for the next clarification.

Selecting only 79% and then returning NOT READY is wrong: the outcome is correct for the security blocker, but the workflow would still be resolving the version conflict by itself.

## Focused repair and regression

If necessary, add this rule to **Check completeness**:

> For Check Completeness, Determine Outcome, and Create Handoff, add this exact conflict rule without changing other logic or bindings: When two analyses both claim final status, list every claimed final value, case count, and analysis ID. If no signed evidence resolves the conflict, neither analysis is the sole authoritative or binding value; do not label either one as the verified final result and do not use either disputed value alone to mark performance passed or failed. Preserve the unresolved conflict for human clarification. Apply NOT READY only from a separate confirmed failed rule or critical blocker when one exists.

Repeat the conflicting package. Then test the complete package from Lab 3.2 again. The repair passes only if the conflicting package escalates and the complete package remains READY FOR APPROVAL REVIEW.

## Record your result

Copy this block into your own notes:

```text
Both analysis values and IDs preserved: YES / NO
Open critical finding visible: YES / NO
Outcome: NOT READY / OTHER
All gaps and responsible functions visible: YES / NO
Complete-package regression: PASS / FAIL
```

If the outcome or conflict handling fails, use the [verified Lab 3.3 help](./HELP.md#lab-33) and apply only its focused repair.

## Success checklist

- [ ] All seven expected-result items pass.
- [ ] Neither final version was invented or removed.
- [ ] The conflict test passes after the repair.
- [ ] The complete regression test still passes.

## If you get stuck

Check only the two analysis IDs first. If one is missing from extraction, a later node cannot detect the conflict. Repair extraction, not the decision.

## What you learned

Conflicts and hard security findings must be checked before performance decisions. A safe workflow keeps uncertainty visible and hands it to the right people.

Next: [Lab 4.1](../4-compare/lab-4.1-compare-and-evaluate.md).
