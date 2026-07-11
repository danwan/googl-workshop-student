# 🟢 Lab 9.1 — Compute Engine with Ubuntu

> **Your mission:** Spin up an enterprise-grade virtual machine on **Google Compute Engine** with 8 GB of RAM and **Ubuntu**, and connect to it securely via **SSH** to run shell commands in the cloud. 🚀🖥️

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Foundations | ~15–20 min | **Compute Engine** + **SSH** | Your dedicated billed workshop project with Project Owner/admin access |

> 🚪 **Permission preflight:** Confirm your assigned project is selected. If you cannot enable Compute Engine or **Create instance** is unavailable, stop and ask your facilitator.

---

## 🎬 The story

As an agent developer, your models often require dedicated backends, specialized tooling, or running long processes in a reliable environment. Local laptops can go to sleep, lose power, or have varying operating systems.

Enter **Google Compute Engine (GCE)**. GCE lets you provision on-demand Virtual Machines (VMs) in seconds. For this lab, TechBond Industries needs a standardized **Ubuntu** server equipped with **8 GB of RAM** to run test workloads. You will configure, boot, and securely connect to this server right from your browser. 💻⚡

---

## 🛠️ Build it (step by step)

### Step 1 — Navigate to Compute Engine

1. Open the [Google Cloud Console](https://console.cloud.google.com).
2. Click the hamburger menu (☰) in the top-left, or use the search bar at the top to type **"Compute Engine"**.
3. Select **VM instances**.
4. If this is your first time in the project, click **Enable** to turn on the Compute Engine API and wait ~1 minute.

---

### Step 2 — Create the VM Instance

We need an **e2-standard-2** instance, which provides exactly **2 vCPUs and 8 GB of RAM**, running **Ubuntu**.

1. Click **Create Instance** at the top of the VM instances screen.
2. Configure the following details:
   - **Name:** `techbond-agent-host-jd` — replace `jd` with your initials.
   - **Region:** `europe-west4` (or your preferred region)
   - **Zone:** `europe-west4-a` (or any zone)
   - **Machine configuration:** Choose **General-purpose** -> **E2**.
   - **Machine type:** Select **e2-standard-2** (2 vCPU, 8 GB memory).
3. Scroll down to **Boot disk** and click **Change**:
   - **Operating system:** Select **Ubuntu**.
   - **Version:** Select **Ubuntu 22.04 LTS** (or Ubuntu 24.04 LTS).
   - **Boot disk type:** Balanced persistent disk (default 10 GB is fine).
   - Click **Select** to confirm.
4. Keep other settings at their defaults and click **Create** at the bottom.

> ⏱️ **Wait for the green checkmark:** GCE will configure and boot your Ubuntu server in about 30 to 60 seconds!

---

### Step 3 — Connect Securely via SSH 🔑

Google Cloud provides an incredibly convenient, secure browser-based SSH terminal. No need to manage private keys or install local terminal clients.

1. Once your participant-suffixed VM displays a green status checkmark, locate the **Connect** column on the right.
2. Click the **SSH** button.
3. A separate secure browser window will open, generate SSH keys automatically, and log you into the VM.
4. Welcome to your Ubuntu shell in the cloud! 🚀

---

### Step 4 — Run VM Verification Commands

Once connected, run these basic commands to verify your environment has the correct specs:

1. Check the operating system version:
```bash
lsb_release -a
```
- Verify it shows **Ubuntu**.

2. Check the available RAM (it should show around **8 GB** total):
```bash
free -h
```

3. Update the package list to ensure you can install dependencies:
```bash
sudo apt-get update
```

4. Close the session when done:
```bash
exit
```

### Step 5 — Delete the VM

Back on **Compute Engine → VM instances**, select the VM you created, click **Delete**, and confirm. `exit` closes SSH; it does not stop or delete the VM.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Compute Engine API is taking too long to enable</strong></summary>

Enabling GCE can take up to 2 minutes on a fresh project. Do not refresh the page; let it finish. If it stalls, ensure that your project has an active billing account linked.
</details>

<details>
<summary><strong>Hint 2 — The SSH window fails to open or is blocked</strong></summary>

Browser pop-up blockers can sometimes prevent the SSH window from opening. Ensure pop-ups are allowed for `console.cloud.google.com`.
</details>

<details>
<summary><strong>✅ Show me the gcloud CLI equivalent (No-GUI path)</strong></summary>

If you prefer using **Cloud Shell** (or your local terminal with `gcloud` initialized), you can accomplish this entire lab in two terminal commands:

1. Create the e2-standard-2 VM running Ubuntu (replace the suffix):
```bash
VM_NAME="techbond-agent-host-your-initials"
gcloud compute instances create "$VM_NAME" \
    --project=$GOOGLE_CLOUD_PROJECT \
    --zone=europe-west4-a \
    --machine-type=e2-standard-2 \
    --image-project=ubuntu-os-cloud \
    --image-family=ubuntu-2204-lts
```

2. SSH directly into the instance from your shell:
```bash
gcloud compute ssh "$VM_NAME" --zone=europe-west4-a
```
</details>

---

## ✅ You did it when…

- [ ] Your participant-suffixed VM ran and displayed a green status checkmark in GCE.
- [ ] You are able to open a browser-based SSH session into the VM.
- [ ] Running `free -h` inside the SSH session confirms you have ~8 GB of RAM.
- [ ] After verification, you deleted the VM.

---

## 🧠 What you just learned

You've successfully provisioned a virtual server in Google Cloud with 8 GB of RAM running **Ubuntu**. You learned how Compute Engine hosts on-demand virtualized hardware and how to securely access its interactive terminal using secure **SSH keys** fully managed by GCP. You're ready to deploy custom backends, databases, or orchestrators! 🖥️⛓️

➡️ **Next up:** [Lab 9.2 — Cloud Workstations](./lab-9.2-cloud-workstations.md) — spin up a fully containerized, enterprise browser-IDE workspace.

⬅️ Back to the **[module overview](./README.md)**.
