# googl-workshop-student

<One sentence: what this project is and what it does.>
<One sentence: who uses it and where it runs.>
<One sentence: what is explicitly out of scope.>

## Stack and commands

<Languages, frameworks, package manager and runtime versions.>
<Commands: install, dev server, test, lint, build — one line each.>

<!-- house-rules -->
## House rules

- **W1** A bug fix starts with a test that reproduces it and fails. A feature names
  the one observable check that proves it works.
- **W2** Documentation states the present state only: no changelogs, no dated
  entries, no "formerly" / "no longer" wording. When something changes, rewrite the
  sentence and delete what it replaced.
- **E4** `main` deploys to production; never commit directly to `main`. Every other
  branch is preview.
- PRs open as draft, flip to ready exactly once, and merge only after the review
  has arrived.
- Before any merge, ahead/behind or `[gone]` claim, run `git fetch` and judge it by
  its exit code; keychain write-back noise printed with exit 0 is not a failure.
- Apply stack-specific rules only when the stack is detected in the repo; otherwise
  state "N/A — project has no X".
<!-- /house-rules -->


## Documentation map

- `docs/` — <what lives here: overview, runbooks, decisions>
- `docs/secrets-architecture.md` — the 1Password secrets standard: `op://` references in `.env`, `op run` start commands, rotation.
- ADRs: `docs/decisions/`, written from `docs/adr-template.md`.
- Feature specs: `docs/features/`, written from `docs/spec-template.md`.
