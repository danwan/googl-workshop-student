# Module 3 Workflow verified help

Use the complete text from the matching `.txt` file in `workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/workflow-input/`. Never paste only the summary.

## Lab 3.1

**Copy this builder instruction exactly:**

> Create a manual Workflow named P-17 Dossier Review with the text input review_packet and five sequential agent nodes named Extract Dossier, Load P-17 Rules, Check Completeness, Determine Outcome, and Create Handoff. Extract every claimed final value, case count, independent repeat, security status, privacy status, retention status, missing attachment, and document ID from review_packet without resolving conflicts. Load standing rules only from P-17 Service Approval 2026-09-07. Evaluate each rule separately. A confirmed failed rule or confirmed critical blocker produces NOT READY even if evidence is also missing or conflicting; preserve all gaps and conflicts. If no failure is confirmed but mandatory evidence is missing or conflicting, produce HUMAN REVIEW. Only a complete passing package produces READY FOR APPROVAL REVIEW, which is not approval. Return OUTCOME, LOCAL PERFORMANCE, INDEPENDENT REPEAT, SECURITY, PRIVACY AND RETENTION, MISSING OR CONFLICTING EVIDENCE, EVIDENCE, and NEXT STEP.

**After all five nodes appear, copy this data-flow repair exactly:**

> Repair only the workflow data flow. In Check Completeness, insert the structured output from Extract Dossier and the rules output from Load P-17 Rules. In Determine Outcome, insert the structured output from Check Completeness. In Create Handoff, insert the structured outputs from Extract Dossier, Load P-17 Rules, Check Completeness, and Determine Outcome. Keep every node name, order, source switch, output schema, and existing decision rule unchanged.

The result passes only when the editor shows Manual Trigger plus the five named nodes, `review_packet` reaches Extract Dossier, only the workshop source is enabled for rule loading, and the incomplete dossier meets all eight result checks.

## Lab 3.2

**Use the complete Central Site text as `review_packet`. If Preview asks for human input, paste the same complete text again. Then copy this instruction exactly only if the final output needs repair:**

> In Create Handoff only, use Steering Committee for the human review body. When the outcome is READY FOR APPROVAL REVIEW, NEXT STEP must explicitly state that this status is not approval and cannot start rollout. Keep every other instruction, variable binding, source switch, node, and output schema unchanged.

The result passes only when the workflow extracts both 88% results with their case counts, recognizes security, privacy, and retention as complete, returns READY FOR APPROVAL REVIEW, and names the human Steering Committee without granting approval.

## Lab 3.3

**Copy this focused repair exactly if either analysis disappears or the outcome is wrong:**

> For Check Completeness, Determine Outcome, and Create Handoff, add this exact conflict rule without changing other logic or bindings: When two analyses both claim final status, list every claimed final value, case count, and analysis ID. If no signed evidence resolves the conflict, neither analysis is the sole authoritative or binding value; do not label either one as the verified final result and do not use either disputed value alone to mark performance passed or failed. Preserve the unresolved conflict for human clarification. Apply NOT READY only from a separate confirmed failed rule or critical blocker when one exists.

The result passes only when both Coast analyses remain visible, the open critical finding is visible, the outcome is NOT READY, all unresolved privacy and retention issues are named, and the complete-package regression still returns READY FOR APPROVAL REVIEW.
