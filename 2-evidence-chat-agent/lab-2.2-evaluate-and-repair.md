# Lab 2.2: Measure and repair

> **Mission:** Evaluate answers with fixed YES/NO criteria, repair exactly one observable failure, and check whether the change is stable.

| Level | Time | Tool | Prerequisite |
|---|---:|---|---|
| Practice | 25-30 min | Agent Designer - Chat agent | P-17 Review Assistant from Lab 2.1 |

## Part A: calibrate on fixed answers

Evaluate two frozen answers first so the whole group works with identical text.

**Answer A**

> P-17 is ready for rollout. The pilot achieved 92%, which is above the required target. The positive result was also confirmed at an external site.

**Answer B**

> OUTCOME: NOT READY. RULE: Both the local result and independent repeat must verify at least 85% (SCE-TEAM-001). EVIDENCE: The pilot verifies 78% (SCE-EVID-001), and the independent repeat verifies 81% (SCE-EVID-002). NEXT STEP: Address the causes of failure and run a new, predefined test.

Mark YES or NO for each answer:

| Criterion | Answer A | Answer B |
|---|---|---|
| Outcome is NOT READY |  |  |
| At-least-85% rule is stated |  |  |
| Pilot final verified 78% is stated |  |  |
| Independent repeat final verified 81% is stated |  |  |
| Preliminary 92% is not used as the final result |  |  |
| `SCE-TEAM-001`, `SCE-EVID-001`, and `SCE-EVID-002` are present |  |  |
| The next step names a human role, action verb, and object |  |  |
| No information is invented |  |  |

<details>
<summary><strong>Calibration solution</strong></summary>

Answer A meets none of the eight criteria. Its claim that an external site confirmed a positive result is unsupported: the external site's final verified result is below the required target. The answer also makes the wrong decision, uses a preliminary value, and includes neither the final verified repeat nor sources. Answer B meets all eight criteria.
</details>

## Part B: three live tests

Use a fresh Preview conversation for each test.

### Test 1: approval decision

`Give the P-17 committee a decision in no more than eight sentences.`

This test passes only with eight YES answers. Use the same table as above.

### Test 2: explain the pilot

`Why does the record report both 92% and 78% for the same pilot? Explain the data-validation record counts, state which value controls the decision, and cite the stable SCE document ID.`

- [ ] 92% is labeled as the preliminary dashboard figure.
- [ ] 78% is labeled as the final verified value.
- [ ] The answer correctly explains 18 invalid records and 102 valid cases.
- [ ] The two figures are not averaged.
- [ ] `SCE-EVID-001` is cited as evidence.

### Test 3: missing information

`State the generally applicable production retention period for P-17.`

- [ ] The answer says it is not documented.
- [ ] No specific number of days is presented as a general rule.
- [ ] A site-specific value is not transferred to the full project.
- [ ] Privacy is identified as the responsible human function.

## Translate the first failure into one change

Do not search for a better overall prompt. Select the first NO item:

| Missing item | Exactly one appropriate instruction |
|---|---|
| Preliminary and final verified values are confused | `State both values with their status and use only the final verified value for decisions.` |
| Source cannot be traced | `Cite SCE-TEAM-001 for the rule, SCE-EVID-001 for the pilot, and SCE-EVID-002 for the repeat.` |
| Outcome is unclear | `Begin with exactly one outcome: NOT READY, HUMAN REVIEW, or READY FOR APPROVAL REVIEW.` |
| Next step is missing | `After every negative or incomplete review, state exactly one human next step.` |
| Answer is unstructured | `Use the four fields OUTCOME, RULE, EVIDENCE, and NEXT STEP.` |

If all live content tests pass, use the final row as a new, objectively testable formatting target.

## Clear improvement rule

1. Record the NO item before the change.
2. Add exactly one instruction.
3. Repeat the target test twice in fresh conversations.
4. Repeat one previously passing test once.

The change is **IMPROVED** only when the NO item becomes YES in both repetitions and the regression test loses no previous YES item. One YES and one NO means **UNSTABLE**, not passed.

## Record your result

Copy this block into your own notes:

```text
Target test:
Before change — first NO item:
One instruction added:
Target repetition 1: PASS / FAIL
Target repetition 2: PASS / FAIL
Regression test and result:
Final classification: IMPROVED / UNSTABLE / NOT IMPROVED / NO CHANGE NEEDED
```

If all three live tests pass, record `NO CHANGE NEEDED`; do not introduce an artificial fault. If a test fails, use the [verified Lab 2.2 help](./HELP.md#lab-22) and change only the matching instruction.

## Success checklist

- [ ] You calibrated the fixed answers against the solution.
- [ ] You evaluated all three live tests with binary criteria.
- [ ] You selected one specific NO item, or recorded `NO CHANGE NEEDED` after all tests passed.
- [ ] You changed exactly one instruction only when a NO item existed.
- [ ] After a change, the target passes twice and the regression test still passes.

## If you get stuck

Do not ask, `Is the answer good?` Ask, `Which exact checkbox is missing?` Then open the named source and choose the one table row that matches the failure. The facilitator can show you the first NO item without rewriting the prompt for you.

## What you learned

Free text is not evaluated by matching exact wording. Stable facts, forbidden failures, sources, and repeated tests still make improvement visible and traceable.

Next: [Lab 2.3](./lab-2.3-adversarial-grounding.md).
