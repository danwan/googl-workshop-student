# Lab 1.1: Examine the P-17 evidence set

> **Mission:** Combine information from four multi-page sources and derive a traceable P-17 decision.

| Level | Time | Tool | Files |
|---|---:|---|---|
| Guided | 35-45 min | Gemini Notebook | Four supplied evidence documents |

## Create the notebook

1. Open **Gemini Notebook** and create a new notebook.
2. Name it `P-17 Approval Review`.
3. Select **Add sources -> Copied text**.
4. Open each complete text source below, copy everything from the title through the final line, and add it as a separate source:
   - [Project brief](../workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/corpus/team-site/SCE-TEAM-001-Project-Brief.txt)
   - [North Site pilot](../workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/corpus/evidence-library/SCE-EVID-001-Pilot-Report.txt)
   - [Independent repeat](../workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/corpus/evidence-library/SCE-EVID-002-Replication-Report.txt)
   - [East Site external study](../workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/corpus/evidence-library/SCE-EVID-003-External-Study.txt)
5. Wait until all four sources are processed and selected. Confirm that their titles name the project brief, pilot, repeat, and external study.
6. Do not add web sources or personal files.

If local file upload is available, you may instead upload the four equivalent PDFs from `Files`. Do not combine copied text and PDFs in the same notebook; the source count must remain four.

The documents are deliberately multi-section sources. Their opening sections do not contain the final answer.

## Find the rules first

Ask:

> Create a YES/NO checklist of every approval-review condition in the project brief. Include the document ID for every condition and open the supporting passage.

Compare the answer with this expected checklist:

- [ ] final verified local result of at least 85%;
- [ ] independent repeat of at least 85%;
- [ ] no open critical security finding;
- [ ] approved privacy and retention;
- [ ] complete, traceable document IDs.

## Compare the three reports

Ask:

> Compare the pilot, independent repeat, and external site study. For each study, separate the preliminary figure from the final verified figure. Use a table, then evaluate every approval condition as YES, NO, or NOT DOCUMENTED.

The result passes only if the table contains these facts:

| Evidence | Preliminary | Final verified | Expected interpretation |
|---|---:|---:|---|
| North Site pilot | 92% | 78% | Performance condition not met |
| Independent repeat | - | 81% | Repeat condition not met |
| East Site external study | 88% | 83% | Additional context, also below the target |

Open a supporting passage for every final verified value. Confirm that the displayed passage explains the final verified value, not only the preliminary value.

## Write the decision

Ask:

> Answer only with the following structure and use each heading exactly once. Write no more than eight sentences in total. Use only the four selected sources.
>
> OUTCOME: <one of the three outcome categories>
>
> RULE: <the decisive conditions>
>
> EVIDENCE: <final verified figures with document IDs>
>
> NEXT STEP: <one human role, one action verb, and the evidence or decision to act on>

The briefing passes when:

- [ ] it states `NOT READY` or an unambiguous equivalent;
- [ ] it explains the 85% rule;
- [ ] it identifies 78% and 81% as final verified values;
- [ ] it does not invent a general retention period;
- [ ] it includes `SCE-TEAM-001`, `SCE-EVID-001`, and `SCE-EVID-002`;
- [ ] the next step names a human role, an action verb, and the evidence or decision to act on.

If a heading is missing, the output fails. Send exactly one correction:

> Reformat the same answer. Add no facts. Use OUTCOME, RULE, EVIDENCE, and NEXT STEP exactly once each.

## Optional: create a briefing document

Open **Studio -> Reports -> Briefing doc**. Generate a document, then verify two factual claims again in Notebook Chat. Attractive formatting does not replace source verification.

## Record your result

Copy this block into your own notes:

```text
Sources selected: 4 / 4
Final verified values found:
First failed checklist item, or NONE:
Opened source IDs:
Final outcome:
```

If a required fact is missing, use the [verified Lab 1.1 help](./HELP.md#lab-11) and rerun the final prompt.

## Success checklist

- [ ] Exactly four sources are selected.
- [ ] You found the five project conditions.
- [ ] You compared all three reports correctly.
- [ ] You opened three supporting passages.
- [ ] The briefing meets all six YES/NO criteria.

## If you get stuck

<details>
<summary><strong>Notebook uses only the positive figure</strong></summary>

Ask: `Which figure appears after data validation in the final-results section?` Then open the supporting passage.
</details>

<details>
<summary><strong>Notebook shows only a citation number</strong></summary>

The small citation number in the interface is not the document ID. Open the passage and copy the printed ID, such as `SCE-EVID-001`, into your checklist.
</details>

<details>
<summary><strong>I do not understand the decision</strong></summary>

Compare only two facts. The rule requires at least 85%. The pilot and repeat verify 78% and 81%. Both are below the target, so the current outcome is NOT READY.
</details>

## What you learned

Notebook can combine long sources. You stay in control by establishing the rules first, finding final verified values second, and checking every claim against a passage last.

Next: [Lab 1.2](./lab-1.2-citation-detective.md) or [Lab 2.1](../2-evidence-chat-agent/lab-2.1-evidence-chat-agent.md).
