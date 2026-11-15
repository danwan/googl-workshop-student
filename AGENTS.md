# googl-workshop-student

Public participant materials for the one-day workshop “Reliable Agents with Enterprise Data.” The tree holds the Markdown labs, help pages, exercise PDFs, and the synthetic workshop-data backup.

Participants read these files and use Gemini Enterprise in the browser. A facilitator provides the tenant link and the standing data source. The materials are not an application that is installed, served, or deployed.

Out of scope: application code, secrets, and machine-local setup.

## Stack and commands

Markdown and PDF. N/A — project has no language runtime, package manager, dev server, test runner, linter, or build.

N/A — project has no test infrastructure, so W1 does not require a failing test for edits in this repository.

<!-- house-rules -->
## House rules

- **W1** A bug fix starts with a test that reproduces it and fails. A feature names
  the one observable check that proves it works.
- **W2** Documentation states the present state only: no changelogs, no dated
  entries, no "formerly" / "no longer" wording. When something changes, rewrite the
  sentence and delete what it replaced.
- **E4** `main` is the published participant branch; never commit directly to
  `main`. This repository has no application deployment. Every other branch is
  unpublished.
- PRs open as draft, flip to ready exactly once, and merge only after the review
  has arrived.
- Before any merge, ahead/behind or `[gone]` claim, run `git fetch` and judge it by
  its exit code; keychain write-back noise printed with exit 0 is not a failure.
- Apply stack-specific rules only when the stack is detected in the repo; otherwise
  state "N/A — project has no X".
<!-- /house-rules -->


## Documentation map

- `README.md` — participant entry point and learning path.
- `SCHEDULE.md` — workshop timetable.
- `CHEAT_SHEET.md` — terminology and navigation for participants.
- `0-core/`, `1-gemini-notebook/`, `2-evidence-chat-agent/`, `3-evidence-review-workflow/`, `4-compare/` — module labs, help pages, and exercise files.
- `workshop-data/README.md` — synthetic Cloud Storage backup. The facilitator uses it to provision or recover the shared source. Participants do not upload the whole package.
- `CLAUDE.md` — imports this file.
