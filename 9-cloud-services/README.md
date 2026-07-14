# ☁️ Module 9 — Cloud Services

> **Workshop role:** Everyone entering Module 9 starts with Lab 9.1. Then choose Lab 9.2 or 9.3 when billing, service setup, and cleanup are confirmed. Lab 9.4 extends the selected environment before final cleanup.

**Take control of your infrastructure** 🛠️ — Start in **Cloud Shell** and use the **gcloud CLI** with **Cloud Storage**. Then choose a virtual machine in **Compute Engine** or a managed development environment in **Cloud Workstations**. Finish by preparing that selected Linux environment for agent development.

> ⚠️ **This module is hands-on and highly practical.** We build the virtual infrastructure that keeps your developer environment standardized and your data secure.

## What you'll need

- A **dedicated billed Google Cloud workshop project for each participant**. Do not create these resources in a shared project.
- Your dedicated billed workshop project with Project Owner/admin access. You enable APIs and create, use, stop, and delete the selected resources yourself. If the correct project is unavailable, stop and ask the facilitator.
- A **browser**. No local installation required.
- The **Antigravity CLI (`agy`)** terminal companion.

## The labs

| Lab | Tier | What you do |
|---|---|---|
| **[Lab 9.1 — Cloud Shell, agy & Storage](./lab-9.1-cloud-shell-agy-storage.md)** | 🟢 Foundations · start here | Generate **5 TXT reports**, create a Cloud Storage bucket, and upload the reports. |
| **[Lab 9.2 — Compute Engine with Ubuntu](./lab-9.2-gce-ssh.md)** | 🟡 Intermediate · choose one | Create an **e2-standard-2 (8 GB RAM)** Compute Engine VM running **Ubuntu** and connect through **SSH**. |
| **[Lab 9.3 — Cloud Workstations](./lab-9.3-cloud-workstations.md)** | 🔴 Advanced · choose one | Provision a **Cloud Workstations** cluster, configuration, and **Ubuntu workstation** with web Code OSS. |
| **[Lab 9.4 — agy on Managed Linux](./lab-9.4-agy-managed-linux.md)** | 🔴 Advanced · optional | In the running Ubuntu environment from Lab 9.2 or 9.3, install and verify `agy`, Agent CLI skills, and grounded Google Developer Knowledge. |

## Why it's here

As you build enterprise-grade agents, you quickly realize they need secure compute resources, uniform team workspaces, and scalable file storage. This module transitions you from static code to **live infrastructure automation**, ensuring you have the infrastructure skills to build, compile, test, and host anything. 🏗️

📚 Official docs: **[cloud.google.com/docs](https://cloud.google.com/docs)** · Console: **[console.cloud.google.com](https://console.cloud.google.com)**.

⬅️ Back to the **[student materials](../README.md)**.
