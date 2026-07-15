# 🟡 Lab 9.2 — Compute Engine with Ubuntu

> **Your mission:** Spin up an enterprise-grade virtual machine on **Google Compute Engine** with 8 GB of RAM and **Ubuntu**, and connect to it securely via **SSH** to run shell commands in the cloud. 🚀🖥️

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Intermediate | ~15–20 min | **Compute Engine** + **SSH** | Your dedicated billed workshop project with Project Owner/admin access |

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
   - **Region:** `europe-west4`
   - **Zone:** `europe-west4-a`
   - **Machine configuration:** Choose **General-purpose** -> **E2**.
   - **Machine type:** Select **e2-standard-2** (2 vCPU, 8 GB memory).
3. Scroll down to **Boot disk** and click **Change**:
   - **Operating system:** Select **Ubuntu**.
   - **Version:** Select **Ubuntu 22.04 LTS** (or Ubuntu 24.04 LTS).
   - **Boot disk type:** Balanced persistent disk (default 10 GB is fine).
   - Click **Select** to confirm.
4. Under **Identity and API access**, choose **No service account** and **No access scopes**.
5. Keep other settings at their defaults and click **Create** at the bottom.

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

1. Check the available RAM (it should show around **8 GB** total):

```bash
free -h
```

1. Update the package list to ensure you can install dependencies:

```bash
sudo apt-get update
```

1. Keep the session open if you are continuing to Lab 9.4. Otherwise, close it:

```bash
exit
```

### Step 5 — Continue to Lab 9.4 or delete the VM

Choose one path:

1. **Continue to Lab 9.4:** Keep the VM running and use its SSH terminal for [Lab 9.4 — agy on Managed Linux](./lab-9.4-agy-managed-linux.md). If you closed SSH, reconnect to the same VM.
2. **Stop here:** Back on **Compute Engine → VM instances**, select the VM you created, click **Delete**, and confirm.

Closing SSH does not stop or delete the VM. Do not leave the VM running after your final lab.

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

If you prefer using **Cloud Shell** (or your local terminal with `gcloud` initialized), run the route below in one subshell. Replace both placeholders first; `EXPECTED_PROJECT_ID` must be the exact project ID assigned to you for the workshop.

```bash
(
PROJECT_ID="$(gcloud config get-value project 2>/dev/null)"
EXPECTED_PROJECT_ID="your-assigned-workshop-project-id"
VM_NAME="techbond-agent-host-your-initials"

if [ -z "$PROJECT_ID" ] || [ "$PROJECT_ID" = "(unset)" ] \
  || [ "$PROJECT_ID" != "$EXPECTED_PROJECT_ID" ]; then
  printf 'STOP: active project does not match your workshop assignment.\n' >&2
  exit 1
fi

gcloud compute instances create "$VM_NAME" \
    --project="$PROJECT_ID" \
    --zone=europe-west4-a \
    --machine-type=e2-standard-2 \
    --image-project=ubuntu-os-cloud \
    --image-family=ubuntu-2204-lts \
    --no-service-account \
    --no-scopes \
  || { printf 'STOP: VM creation failed; not connecting via SSH.\n' >&2; exit 1; }

if ! gcloud compute ssh "$VM_NAME" \
    --project="$PROJECT_ID" \
    --zone=europe-west4-a; then
  printf 'SSH failed. The VM is still running and billable. Retry the SSH command, or delete the VM with:\n' >&2
  printf '  gcloud compute instances delete %s --project=%s --zone=europe-west4-a\n' "$VM_NAME" "$PROJECT_ID" >&2
  exit 1
fi
)
```

</details>

---

## ✅ You did it when…

- [ ] Your participant-suffixed VM ran and displayed a green status checkmark in GCE.
- [ ] You are able to open a browser-based SSH session into the VM.
- [ ] Running `free -h` inside the SSH session confirms you have ~8 GB of RAM.
- [ ] You continued directly to Lab 9.4 on the running VM, or deleted the VM if you stopped here.

---

## 🧠 What you just learned

You've successfully provisioned a virtual server in Google Cloud with 8 GB of RAM running **Ubuntu**. You learned how Compute Engine hosts on-demand virtualized hardware and how to securely access its interactive terminal using secure **SSH keys** fully managed by GCP. You're ready to deploy custom backends, databases, or orchestrators! 🖥️⛓️

➡️ **Continue on this VM:** [Lab 9.4 — agy on Managed Linux](./lab-9.4-agy-managed-linux.md).

⬅️ Back to the **[module overview](./README.md)**.
