# Cloud Storage workshop data

This folder contains the complete, ready-to-upload backup of the synthetic workshop data. It contains no participant data or confidential company data.

The facilitator uses this backup to provision or recover the shared source. Participants do not upload this entire folder and do not create a data store. Participant labs use only the specific PDFs or text files linked from their instructions.

The edition payload is stored under:

```text
cloud-storage/editions/2026-09-07-service-approval-v2/
├── corpus/
│   ├── mailbox/
│   ├── team-site/
│   └── evidence-library/
├── workflow-input/
└── hashes.json
```

Create the unstructured Gemini Enterprise data store from `corpus/` only, including all its subfolders. Do not select the complete edition directory: `workflow-input/` contains three runtime test packages that deliberately remain outside the standing knowledge base.

The three corpus folders simulate different source systems in one Cloud Storage bucket. Document headers identify the simulated source system and a stable document ID.

The package contains 11 standing corpus documents and three workflow test packages. `hashes.json` records the file size and SHA-256 checksum of every uploadable text object and must not be included in the data store.
