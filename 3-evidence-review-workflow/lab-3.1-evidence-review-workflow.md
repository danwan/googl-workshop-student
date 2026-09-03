# Lab 3.1: Review an incomplete package

> **Mission:** Build a workflow that reviews a multi-page application dossier in fixed stages and hands missing mandatory evidence to a human.

| Level | Time | Tool | Data |
|---|---:|---|---|
| Guided | 60-75 min | Agent Designer - Workflow | `P-17 Service Approval 2026-09-07` and `SCE-INBOX-001-Incoming-Claim.pdf` |

## Set the expectation before building

Begin only if the source pre-check from Lab 2.1 returned at least 85% twice. Otherwise the connector is outdated and the workflow results would be misleading.

The Central District package verifies 89% across 150 valid cases. This satisfies only the local performance condition. The security report, approved privacy assessment, retention rule, and independent repeat are missing.

The expected outcome is **HUMAN REVIEW**. A high performance figure does not replace missing mandatory evidence.

## Design the review stages

The workflow needs five visible stages:

1. **Extract dossier:** Extract figures, status, evidence, and IDs.
2. **Load P-17 rules:** Retrieve conditions only from the connected knowledge base.
3. **Check completeness:** Evaluate each mandatory condition as YES or NO.
4. **Determine outcome:** Distinguish hard failures, missing information, and complete packages.
5. **Create handoff:** Return the outcome, evidence, gaps, and next human action.

## Generate the workflow

1. Open **New agent -> Workflow**.
2. Under **Sources**, enable only `P-17 Service Approval 2026-09-07`. Keep **Google Search** off.
3. Under **Add files**, add `SCE-INBOX-001-Incoming-Claim.pdf` if the interface offers this option.
4. Paste this exact builder instruction:

> Create a manual Workflow named P-17 Dossier Review with the text input review_packet and five sequential agent nodes named Extract Dossier, Load P-17 Rules, Check Completeness, Determine Outcome, and Create Handoff. Extract every claimed final value, case count, independent repeat, security status, privacy status, retention status, missing attachment, and document ID from review_packet without resolving conflicts. Load standing rules only from P-17 Service Approval 2026-09-07. Evaluate each rule separately. A confirmed failed rule or confirmed critical blocker produces NOT READY even if evidence is also missing or conflicting; preserve all gaps and conflicts. If no failure is confirmed but mandatory evidence is missing or conflicting, produce HUMAN REVIEW. Only a complete passing package produces READY FOR APPROVAL REVIEW, which is not approval. Return OUTCOME, LOCAL PERFORMANCE, INDEPENDENT REPEAT, SECURITY, PRIVACY AND RETENTION, MISSING OR CONFLICTING EVIDENCE, EVIDENCE, and NEXT STEP.

5. Select **Submit**.
6. Wait up to 120 seconds for the draft. If only one node was created, send the same exact builder instruction once more. If the interface offers **Build manually**, use it only after the second attempt remains blocked.
7. Regardless of how the five nodes were created, send this exact data-flow repair in the builder chat:

> Repair only the workflow data flow. In Check Completeness, insert the structured output from Extract Dossier and the rules output from Load P-17 Rules. In Determine Outcome, insert the structured output from Check Completeness. In Create Handoff, insert the structured outputs from Extract Dossier, Load P-17 Rules, Check Completeness, and Determine Outcome. Keep every node name, order, source switch, output schema, and existing decision rule unchanged.

8. Wait for **Changes made**, then verify the order of all five nodes.
9. Select **Edit**, then select **Manual Trigger** on the canvas.
10. Expand **Input fields**. If `review_packet` is absent, select **Add field**, name it `review_packet`, and set its type to **Text**.
11. Select **Extract Dossier** on the canvas. Under **Instructions**, confirm that the visible variable chip says **Manual Trigger: review_packet**. If it is absent, place the cursor after `provided in`, select **Insert Variable**, and choose **Manual Trigger -> review_packet**.
12. In **Extract Dossier**, keep **Google Search** off. The node extracts runtime input and does not need a connected standing source.
13. Select **Load P-17 Rules**. Under **Connected apps**, keep only `P-17 Service Approval 2026-09-07` on and keep Google Search and every other source off.
14. Select the workflow title and name it `P-17 Dossier Review` if the builder did not already do so.
15. Select **Test** only after the node order, all input bindings, and source switches match these checks.

If `review_packet` appears in **Test** as an empty selector instead of a text field, copy the current Workflow URL, reload that URL, and select **Test** again. The text field should return. If it remains a selector, return to **Edit**, confirm that Manual Trigger defines `review_packet` as **Text**, and reconnect it to **Extract Dossier**. If the text field still does not appear, stop the test and notify the facilitator. Do not guess input values.

## Standard output

The final stage must return exactly these fields:

```text
OUTCOME: <NOT READY | HUMAN REVIEW | READY FOR APPROVAL REVIEW>
LOCAL PERFORMANCE: <final verified value and case count>
INDEPENDENT REPEAT: <status>
SECURITY: <status>
PRIVACY AND RETENTION: <status>
MISSING OR CONFLICTING EVIDENCE: <list>
EVIDENCE: <document IDs>
NEXT STEP: <human action>
```

## Test the multi-page dossier

Use the complete document as `review_packet`. If **Test** offers file upload, upload `Files/SCE-INBOX-001-Incoming-Claim.pdf`. Otherwise open the [complete text copy](../workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/workflow-input/SCE-INBOX-001-Incoming-Claim.txt), copy all text from the title through the final paragraph, and paste it into the text field. Do not paste only the summary.

If Preview stops at **Human input required** despite a visible variable, paste the same full text into **Input here** and select **Submit**. This second paste is a current Preview behavior, not evidence that the first paste failed. The decisive proof is that the dossier values appear in the extraction stage.

If neither the test field nor **Input here** accepts the complete text, the UI path is blocked. Mark the lab as `NOT EXECUTABLE` and switch to the agent-evaluation edition with the facilitator. Never pass an empty extraction.

The result passes only when:

- [ ] the outcome is `HUMAN REVIEW`;
- [ ] it states 89% and 150 valid cases;
- [ ] it identifies the missing security report;
- [ ] it identifies the unapproved privacy assessment;
- [ ] it identifies the undocumented retention period;
- [ ] it identifies the missing independent repeat;
- [ ] the next step requests exactly those documents;
- [ ] it does not invent approval.

## Record your result

Copy this block into your own notes:

```text
Visible node order:
review_packet connected to Extract Dossier: YES / NO
Complete input reached extraction: YES / NO
Expected-result checks: __ / 8 YES
First NO item, or NONE:
One repair, or NONE:
Retest: PASS / FAIL / NOT NEEDED
```

Use the complete `.txt` fallback linked in the [verified Lab 3.1 help](./HELP.md#lab-31) if PDF upload is unavailable. The same help page contains the exact builder and data-flow instructions.

## Success checklist

- [ ] Five review stages are visible and ordered correctly.
- [ ] The complete dossier reaches extraction.
- [ ] All eight expected-result items pass.
- [ ] At least one source ID supports the rule.
- [ ] Announced but missing attachments are not treated as present.

## If you get stuck

<details>
<summary><strong>The workflow grants approval</strong></summary>

Open **Check completeness** and add: `Every missing mandatory attachment requires HUMAN REVIEW before any performance decision is made.`
</details>

<details>
<summary><strong>Extraction remains empty</strong></summary>

Check **Manual Trigger: review_packet**. If Preview asks for human input, paste the complete dossier text there, then inspect the extracted fields.
</details>

<details>
<summary><strong>Workflow is unavailable</strong></summary>

Notify the facilitator. A prepared agent-evaluation edition is available for this environment.
</details>

## What you learned

Order matters in structured decisions: extract first, check completeness second, and decide last. A reasoned human handoff is a correct result.

Next: [Lab 3.2](./lab-3.2-complete-evidence-branch.md) or [Lab 4.1](../4-compare/lab-4.1-compare-and-evaluate.md).
