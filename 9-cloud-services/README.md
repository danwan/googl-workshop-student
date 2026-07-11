# ☁️ Module 9 — Cloud Services

> **Workshop role:** Day 2 choice with Lab 9.3. Labs 9.1 and 9.2 are bonus paths when billing, service setup, and cleanup are confirmed.

**Take control of your infrastructure** 🛠️ — Building agents is only half the battle; hosting, development workspaces, and cloud storage complete the puzzle. In this module, you learn to provision and interact with core Google Cloud infrastructure services: virtual machines (**Compute Engine**), enterprise-grade remote development workspaces (**Cloud Workstations**), and secure object storage (**Cloud Storage**) using both the Console and **gcloud CLI** in **Cloud Shell**.

> ⚠️ **This module is hands-on and highly practical.** We build the virtual infrastructure that keeps your developer environment standardized and your data secure.

## What you'll need

- A **dedicated billed Google Cloud workshop project for each participant**. Do not create these resources in a shared project.
- Your dedicated billed workshop project with Project Owner/admin access. You enable APIs and create, use, stop, and delete the selected resources yourself. If the correct project is unavailable, stop and ask the facilitator.
- A **browser**. No local installation required.
- The **Antigravity CLI (`agy`)** terminal companion.

## The labs

| Lab | Tier | What you do |
|---|---|---|
| **[Lab 9.1 — Compute Engine with Ubuntu](./lab-9.1-gce-ssh.md)** | 🟢 Foundations | Spin up an **e2-standard-2 (8 GB RAM)** Google Compute Engine instance running **Ubuntu**, configure firewall/access, and connect securely via **SSH** for shell access. |
| **[Lab 9.2 — Cloud Workstations](./lab-9.2-cloud-workstations.md)** | 🟢 Foundations | Provision a **Cloud Workstations** cluster, configure a workstation creator with basic settings, and start an **Ubuntu workstation** loaded with **web VS Code** directly in your browser. |
| **[Lab 9.3 — Cloud Shell, agy & Storage](./lab-9.3-cloud-shell-agy-storage.md)** | 🟡 Intermediate | Generate **5 TXT reports**, create a Cloud Storage bucket, and upload the reports. |
| **[Lab 9.4 — agy on Managed Linux](./lab-9.4-agy-managed-linux.md)** | 🔴 Advanced · optional | From the Ubuntu terminal created in Lab 9.1 or 9.2, install and verify `agy`, Agent CLI skills, and grounded Google Developer Knowledge. |

## Why it's here

As you build enterprise-grade agents, you quickly realize they need secure compute resources, uniform team workspaces, and scalable file storage. This module transitions you from static code to **live infrastructure automation**, ensuring you have the infrastructure skills to build, compile, test, and host anything. 🏗️

📚 Official docs: **[cloud.google.com/docs](https://cloud.google.com/docs)** · Console: **[console.cloud.google.com](https://console.cloud.google.com)**.

⬅️ Back to **[START HERE](../START_HERE.md)**.
