# Lab 4.2: Blind evaluation

> **Mission:** Evaluate two anonymized answers for content and evidence without knowing which tool produced them.

| Level | Time | Material |
|---|---:|---|
| Practice | 15-20 min | Two answers from Lab 4.1 or the solo examples below |

## Choose a test path

**Partner path:** Person A copies the Notebook answer and Person B copies the Chat-agent answer. Remove tool names and label them only Answer X and Answer Y.

**Solo path:** Evaluate these frozen answers. The tool names are deliberately hidden.

**Answer X**

> OUTCOME: NOT READY. RULE: Both the local result and the independent repeat require at least 85% (SCE-TEAM-001). EVIDENCE: The pilot verifies 78%, not the preliminary 92% (SCE-EVID-001); the independent repeat verifies 81% (SCE-EVID-002). A general retention period is not documented. NEXT STEP: Address the process failures, run a new predefined test, and ask Privacy to resolve the missing retention approval.

**Answer Y**

> P-17 can launch. The pilot reports 92%, the external study 88%, and the independent repeat 81%, which is convincing overall. Retention is 180 days. The positive project email and project documents support the recommendation.

## Binary evaluation matrix

| Criterion | X YES/NO | Y YES/NO |
|---|---|---|
| Clear correct outcome: NOT READY |  |  |
| 85% rule is correct |  |  |
| Pilot final verified 78% |  |  |
| Repeat final verified 81% |  |  |
| Preliminary figures are classified correctly |  |  |
| `SCE-TEAM-001`, `SCE-EVID-001`, and `SCE-EVID-002` |  |  |
| No invented retention period |  |  |
| Human role, action verb, and object in the next step |  |  |

Open at least one supporting passage for each answer. A criterion is YES only when the source supports the specific claim.

<details>
<summary><strong>Solo solution after your own evaluation</strong></summary>

Answer X receives eight YES answers and passes. Answer Y receives eight NO answers and fails. Its bare 81% does not satisfy the criterion because it never identifies that value as the final verified independent-repeat result. It also has the wrong outcome, omits the 85% rule and stable IDs, uses preliminary values as decision evidence, invents general retention, and provides no human next step.
</details>

## Interpret the result

- Eight YES answers: PASSED.
- One or more NO answers: FAILED; mark the first missing item.
- Equal scores: a tie is allowed. Do not invent a winner based on tone.

If two answers contain the same facts but one uses better headings, record structure as an observation. It does not change any content-based YES/NO item.

## Record your result

Copy this block into your own notes:

```text
Path: PARTNER / SOLO
Answer X: __ / 8 YES — PASS / FAIL
Answer Y: __ / 8 YES — PASS / FAIL
First NO in X, or NONE:
First NO in Y, or NONE:
Opened source IDs:
```

If a row remains unclear, use the [verified Lab 4.2 help](./HELP.md#lab-42), then verify the evaluator's judgment against the source yourself.

## Success checklist

- [ ] Tool names were hidden during evaluation; Partner path or Solo path is documented.
- [ ] You completed all eight criteria for both answers.
- [ ] You opened at least two supporting passages in total.
- [ ] The verdict follows the criteria rather than writing style.

## If you get stuck

Evaluate only one table row at a time. Find the exact figure or claim in the answer and open the relevant source. If it is absent, the result is NO; plausible wording does not replace evidence.

## What you learned

Blind evaluation reduces preference for a tool or a confident tone. Content contracts make different free-text answers comparable.

Next: [Lab 4.3](./lab-4.3-transfer-blueprint.md).
