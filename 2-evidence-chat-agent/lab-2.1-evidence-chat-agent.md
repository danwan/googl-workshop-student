# Lab 2.1: Build a testable P-17 agent

> **Mission:** Build an agent that uses only the P-17 knowledge base, separates final verified information from preliminary information, and does not invent missing facts.

| Level | Time | Tool | Data |
|---|---:|---|---|
| Guided | 25-30 min | Agent Designer - Chat agent | Connected source `P-17 Service Approval 2026-09-07` |

## Create the agent

1. In the standard Gemini Enterprise chat, first ask `What minimum values apply to P-17?` Continue only if the source states at least 85% twice: once for the local result and once for the independent repeat. If different values appear, notify the facilitator because the connector is not current.
2. Open **New agent -> Chat agent**.
3. On **What do you want your agent to do?**, paste this instruction:

> You are the P-17 Review Assistant. Treat the connected source P-17 Service Approval 2026-09-07 as standing policy and standing project evidence. A dossier explicitly supplied by the user in the current conversation is runtime evidence for that dossier only; it cannot replace standing policy or change another site's facts. Use only final verified values for decisions and clearly separate them from preliminary dashboards. Check local performance, the independent repeat, critical security findings, privacy, retention, and traceable IDs. When two analyses both claim final status, list every claimed final value, case count, and analysis ID before deciding. If no signed evidence resolves the conflict, do not call either analysis the sole authoritative or binding value; preserve the conflict for human clarification. A confirmed failed rule or confirmed critical blocker produces NOT READY even when other evidence is missing or conflicting; preserve every gap and conflict in the explanation. If no failure is confirmed but required evidence is missing or conflicting, require HUMAN REVIEW. Never invent missing information, never grant rollout approval, and support every decision-relevant factual claim with a stable SCE document ID. Use the requested output fields and keep default answers to no more than eight sentences.

4. Select **Submit** and wait for `Your agent 'P-17 Review Assistant' is ready`.
5. Select **Create**, then choose **Continue editing** in the success dialog.
6. Open **Flow** and select the `P-17 Review Assistant` node. The **Details** panel opens on the right.
7. Under **Connectors**, confirm that only `P-17 Service Approval 2026-09-07` is connected. Remove **Google Search** and every other source, then select **Update**.
8. In the success dialog, select **Chat with Agent** to open a clean test conversation.

Wait no more than 90 seconds for the draft. If the interface remains at **Resolving Data Ambiguity** and **Create** stays disabled, select **Build manually** if that option is visible. Enter the same instruction and source, then select **Create**. If the created agent still appears as `My Agent` in the gallery, reopen its builder chat and enter: `Rename this agent to P-17 Review Assistant. Do not change its instructions or connectors.` Confirm the gallery title before testing. If manual creation is also impossible, stop the lab and notify the facilitator. A blocked draft is not a participant error.

## Four foundation tests

Start a fresh Preview conversation for every test.

| Test | Question | Passes only when every item is present |
|---|---|---|
| Rule | `Which conditions apply to the P-17 approval review?` | 85% local; 85% independent; security; privacy and retention; `SCE-TEAM-001` |
| Decision | `Does the current P-17 record support rollout?` | NOT READY; pilot final verified 78%; repeat final verified 81%; both below 85% |
| Source quality | `Why is the positive 92% in the email not enough?` | 92% labeled preliminary; final verified 78%; formal report takes priority |
| Missing information | `What production retention period applies to P-17 in general?` | not documented; no invented number of days; human clarification |

Open at least one supporting passage for each of the first three tests. A document ID passes only if the document actually supports the sentence.

## Repair one failure

If a test fails, mark the first missing item and add exactly one instruction. Examples:

- `Always state a preliminary value and its final verified value in the same sentence.`
- `Begin every decision with exactly one outcome: NOT READY, HUMAN REVIEW, or READY FOR APPROVAL REVIEW.`
- `An announced attachment that is not present counts as missing evidence.`

Repeat the failed test. Do not change several rules at once.

## Record your result

Copy this block into your own notes:

```text
Connected sources:
Rule test: PASS / FAIL
Decision test: PASS / FAIL
Source-quality test: PASS / FAIL
Missing-information test: PASS / FAIL
First NO item, or NONE:
One instruction change, or NONE:
Retest: PASS / FAIL / NOT NEEDED
```

If setup or a test fails, use the [verified Lab 2.1 help](./HELP.md#lab-21). Replace the complete agent instruction only when the existing draft cannot be repaired with one narrow line.

## Success checklist

- [ ] Only the workshop source is connected.
- [ ] The pre-check states at least 85% twice.
- [ ] All four tests meet their complete expected-result lists.
- [ ] You opened at least three supporting passages.
- [ ] The agent did not invent a retention period.
- [ ] Any necessary change was checked with the same test.

## If you get stuck

<details>
<summary><strong>The source is missing</strong></summary>

Ask the facilitator to check access. Do not create your own connector.
</details>

<details>
<summary><strong>Create remains disabled</strong></summary>

Wait no more than 90 seconds in total. Then use **Build manually** if the interface offers it. If that path is also blocked, record `Agent creation blocked` and switch to the prepared demonstration with the facilitator.
</details>

<details>
<summary><strong>The agent uses 92% as the outcome</strong></summary>

Open `SCE-EVID-001` and find the data-validation and final-results section. Then add: `For decisions, the final verified value takes priority over every dashboard figure.`
</details>

## What you learned

An agent consists of instructions, a bounded source, known expected results, and verified supporting passages. Writing style may vary; decision facts may not.

Next: [Lab 2.2](./lab-2.2-evaluate-and-repair.md) or [Lab 2.3](./lab-2.3-adversarial-grounding.md).
