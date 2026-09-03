# Module 4 verified help

Use the result records from your completed modules. In the fallback edition, use the agent-evaluation result wherever the primary edition refers to Workflow.

## Lab 4.1

**Copy this prompt exactly in Notebook and the Chat agent:**

> Using only the four selected workshop sources, answer in exactly four fields: OUTCOME, RULE, EVIDENCE, and NEXT STEP. Decide whether the standing P-17 record is ready for approval review. State the at-least-85% rule and cite SCE-TEAM-001. State the final verified North Site and independent-repeat values and cite SCE-EVID-001 and SCE-EVID-002. Do not use preliminary values as decision values and do not invent a general retention period. In NEXT STEP, name one human role, one action verb, and the evidence or decision object. Write no more than eight sentences.

The result passes only when each answer meets all eight checks. The Workflow or agent-evaluation result is compared as a process result from Module 3, not as the same standing-record task.

## Lab 4.2

**Copy this evaluator prompt exactly after replacing the placeholder with one anonymized answer:**

> Evaluate the anonymous answer against these eight criteria: (1) correct outcome NOT READY; (2) correct at-least-85% rule; (3) pilot final verified 78%; (4) independent repeat final verified 81%; (5) preliminary figures are not used as decision values; (6) SCE-TEAM-001, SCE-EVID-001, and SCE-EVID-002 are all present; (7) no general retention period is invented; (8) NEXT STEP names a human role, action verb, and object. Return exactly eight numbered rows. For each row, write YES or NO and quote the exact supporting phrase or state MISSING. Do not guess which tool produced the answer. ANONYMOUS ANSWER: <PASTE ONE ANONYMIZED ANSWER>

The result passes only when you verify the evaluator's rows yourself against the sources and your final matrix matches the eight objective criteria. In the solo examples, X must receive eight YES answers and Y must receive eight NO answers. The frozen solo solution remains the tie-breaker if the evaluator is wrong.

## Lab 4.3

**Copy this negative test exactly after completing the six fields:**

> This is a mechanical structure check of the pasted text; do not search connected sources and do not assess whether its business facts are true. Check exactly four requirements: (1) ALLOWED SOURCES names a document type, not only a system or department; (2) EXPECTED FACT OR RULE names one fact and says that a person can open or inspect its source; (3) SAFETY BOUNDARY contains the words must never approve; (4) HUMAN HANDOFF contains a named role, the word must, an action verb, and an object. Return exactly four numbered lines in the form N. PASS — <exact phrase> or N. FAIL — MISSING. Then write either NO REVISION NEEDED or one replacement sentence for the first FAIL. BLUEPRINT: <PASTE THE COMPLETE SIX-FIELD BLOCK>

The result passes only when all four rows receive PASS and the final negative test contains INPUT, FORBIDDEN, REQUIRED, SOURCE, and HUMAN HANDOFF. Apply one focused revision at a time and rerun the complete check until it passes.
