# Workshop cheat sheet

Keep this page open for navigation, terminology, and recovery steps. It does not contain the exercise answers. Each module has a separate help page with exact prompts and objective pass criteria; open it only after your own attempt.

## What the names mean

- **P-17 evidence set:** the four reports used in Gemini Notebook and the standing source used by the Chat agent.
- **P-17 application dossier:** one site-specific runtime package reviewed by Workflow or by the fallback agent-evaluation suite.
- **Final verified value:** a result after the document's stated validation steps.
- **Preliminary value:** an early dashboard or email figure that may provide context but cannot support a decision.
- **Standing source:** policy and reusable project evidence connected to the agent.
- **Runtime dossier:** the single package supplied for the current review; it cannot rewrite standing policy or another site's facts.

## Where to find the files

- Notebook PDFs: `1-gemini-notebook/Files`
- Browser-verified Notebook text sources: `workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/corpus`
- Primary-edition Workflow PDFs: `3-evidence-review-workflow/Files`
- Fallback-edition evaluation PDFs: `3-agent-evaluation/Files`
- Complete text copies: `workshop-data/cloud-storage/editions/2026-09-07-service-approval-v2/workflow-input`
- Complete Cloud Storage backup: `workshop-data/cloud-storage`
- Workshop schedule: `SCHEDULE.md`

Add the four complete Notebook text sources through **Add sources -> Copied text**, one document per source. If local upload is available, the four equivalent PDFs are an optional alternative. Use exactly four sources, not both representations. Use one application dossier at a time as runtime input. Do not add the application dossiers to the standing Gemini Enterprise data store.

## Module help pages

- [Foundations help](./0-core/HELP.md)
- [Gemini Notebook help](./1-gemini-notebook/HELP.md)
- [Chat-agent help](./2-evidence-chat-agent/HELP.md)
- Module 3 help: open `HELP.md` inside the Module 3 folder shown in your edition. The primary edition shows `3-evidence-review-workflow`; the fallback edition shows `3-agent-evaluation`.
- [Compare and transfer help](./4-compare/HELP.md)

Every help entry contains a prompt labeled **Copy this prompt exactly** and a sentence beginning **The result passes only when**. Copy the prompt unchanged first. If it fails, mark the first failed criterion before changing an instruction.

## Where to find each tool

- **Gemini Notebook:** examine the four uploaded evidence documents together and open supporting passages.
- **New agent -> Chat agent:** create the reusable `P-17 Review Assistant`.
- **New agent -> Workflow:** create the visual `P-17 Dossier Review` process.
- **Deep Research:** research current external sources; do not use it for the controlled P-17 evidence set.

In Agent Designer, **Edit** opens the flow and node settings, and **Test** runs the current draft. Select a node to see its Instructions, Connected apps, input variables, model, and output settings.

## Source and outcome rules

1. Use final verified values for decisions.
2. Check local performance, independent repeat, security, privacy, retention, and traceability separately.
3. Preserve missing information and conflicting versions; do not estimate or select a convenient version.
4. Apply outcome precedence: a confirmed failed condition or critical blocker produces `NOT READY`; otherwise missing or conflicting mandatory evidence produces `HUMAN REVIEW`; a complete passing package produces `READY FOR APPROVAL REVIEW`.
5. `READY FOR APPROVAL REVIEW` is not approval. A human committee makes the decision.

## How to record and evaluate

Each lab contains **Record your result** with a copyable text block. Paste that block into your own notes. GitHub checkboxes on the instructions page are reference criteria and are not your saved record.

- Mark every criterion **YES** or **NO**.
- Record the first NO item, or `NONE`.
- Make exactly one instruction change only when a NO item exists.
- Repeat the target test twice in fresh conversations after a change.
- Repeat one different test that passed before the change.
- Mark a change **IMPROVED** only when both target repetitions pass and the regression loses no previous YES item.
- Mark mixed repetitions or a lost regression item **UNSTABLE**.
- If every test already passes, record `NO CHANGE NEEDED`; do not manufacture a failure.

## Agent Designer recovery

If automatic Chat-agent generation remains blocked for 90 seconds, choose **Build manually** when that option is available. Allow up to 120 seconds for the first Workflow draft before using its manual path. If a Chat agent still appears as `My Agent`, reopen its builder conversation and enter:

> Rename this agent to P-17 Review Assistant. Do not change its instructions or connectors.

For Workflow input, create `review_packet` as **Text** in **Manual Trigger**. Select **Extract Dossier**, choose **Insert Variable**, and insert **Manual Trigger: review_packet** into the node instruction. In **Test**, paste the complete dossier text. If the run pauses at **Human input required**, paste the same text into **Input here** and select **Submit**. If `review_packet` appears as an empty selector after **Reset**, reload the current Workflow URL and select **Test** again. Extraction values—not a generic success message—prove that the input arrived.

## If something does not work

1. Confirm the correct source and complete input are selected.
2. Open the supporting passage or extraction output for the first failed criterion.
3. Record the first NO item.
4. Open only that lab's help entry and copy its verified prompt exactly.
5. Apply one matching repair, then repeat the target and regression tests.

If a connected source returns a different rule from the lab, stop and notify the facilitator. Do not adapt the expected answer to an outdated source.

Fluent writing is not proof. The pass criteria are visible facts, correct source use, explicit rules, repeated tests, and a preserved human decision boundary.
