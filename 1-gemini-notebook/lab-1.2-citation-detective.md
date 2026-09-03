# Lab 1.2: Citation detective

> **Mission:** Check five specific claims against the multi-page original sources and assign unambiguous verdicts.

| Level | Time | Tool | Prerequisite |
|---|---:|---|---|
| Practice | 15-20 min | Gemini Notebook | Notebook from Lab 1.1 |

## Verdict rules

Exactly one verdict is allowed for each claim:

- **SUPPORTED:** The opened source supports the complete claim.
- **CONTRADICTED:** The source contains an opposing final verified fact.
- **NOT DOCUMENTED:** No selected source supports the information.

## Check the claims

Copy each claim into Notebook separately. Use the exact prompt from the [verified Lab 1.2 help](./HELP.md#lab-12), replacing its final placeholder with one claim:

1. `The pilot confirmed that P-17 achieved 92%.`
2. `The pilot's final verified 78% meets the project rule.`
3. `The independent repeat supports rollout with 81%.`
4. `The external study's preliminary 88% proves that the package is ready for approval review.`
5. `A production retention period of 180 days applies to every P-17 site.`

Record the verdict, document ID, and a one-sentence reason. Notebook may show only a small citation number beside the answer. Open that passage and confirm the printed `SCE-...` ID yourself. A citation number alone does not meet the criterion.

## Expected result

<details>
<summary><strong>Open only after your own attempt</strong></summary>

1. CONTRADICTED: 92% is preliminary; the final verified result is 78% (`SCE-EVID-001`).
2. CONTRADICTED: The named pilot report states final verified 78%, which is below the rule (`SCE-EVID-001`).
3. CONTRADICTED: 81% is below 85% (`SCE-EVID-002`).
4. CONTRADICTED: The final verified result is 83%, and the study provides additional context only (`SCE-EVID-003`).
5. CONTRADICTED: The standing project record explicitly says that no binding production retention period applies generally and that Privacy must confirm one for each site (`SCE-TEAM-001`).
</details>

## Record your result

Copy this table into your own notes and fill every cell before opening the solution:

```text
Claim | Verdict | Printed SCE ID | One-sentence reason
1     |         |                |
2     |         |                |
3     |         |                |
4     |         |                |
5     |         |                |
```

If a verdict remains unclear, use the [verified Lab 1.2 help](./HELP.md#lab-12) for that claim only.

## Success checklist

- [ ] Every claim has exactly one verdict.
- [ ] All five complete claims are marked CONTRADICTED.
- [ ] Every reason includes a verified document ID.

## If you get stuck

Open the source first and search for `preliminary`, `final verified`, or `not documented`. Then compare the claim's exact subject, figure, status, and scope. The fifth claim is contradicted because the source explicitly rejects a general binding period; it is not merely silent. A partially matching sentence is not enough for SUPPORTED. If the answer does not include an `SCE-...` ID, read it from the opened passage.

## What you learned

Source verification is not a matter of style. Subject, figure, status, and scope must all match the supporting passage.

Next: [Lab 1.3](./lab-1.3-decision-briefing-stress-test.md) or [Lab 2.1](../2-evidence-chat-agent/lab-2.1-evidence-chat-agent.md).
