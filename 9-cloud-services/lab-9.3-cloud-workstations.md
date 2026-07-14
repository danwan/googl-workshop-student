# 🔴 Lab 9.3 — Cloud Workstations

> **Your mission:** Provision a fully managed, secure cloud development workspace using **Google Cloud Workstations** with a web-based **VS Code (Code OSS)** IDE. 🚀🖥️

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Advanced | ~20–25 min | **Cloud Workstations** | Your dedicated billed workshop project with Project Owner/admin access |

> 🚪 **Permission and network preflight:** Confirm your assigned project is selected and you can enable **Cloud Workstations**. Open **VPC network → VPC networks** and verify a `default` network with a subnet in your chosen region exists. If it is missing, or a Create/Delete control is unavailable, stop and ask your facilitator; do not create substitute networking.

---

## 🎬 The story

Standardizing developer environments is hard. One developer might run Mac, another Windows, and another Linux, leading to the infamous *"it works on my machine"* problem. On top of that, writing code locally poses security risks if sensitive company data or API keys are stored on physical laptops.

**Cloud Workstations** solves both issues. It provides fully managed, secure development environments on Google Cloud. Workstations are containerized development boxes running in your VPC. They start in seconds, are pre-configured with all necessary tools, and let developers code securely using a familiar web-based **VS Code (Code-OSS)** editor directly in their browser. 🌐💻

---

## 🛠️ Build it (step by step)

### Step 1 — Enable the Cloud Workstations API

1. Open the [Google Cloud Console](https://console.cloud.google.com).
2. Search for **"Cloud Workstations"** in the top search bar and click the product.
3. Click **Enable** to turn on the Cloud Workstations API and wait for it to process (~1 minute).

---

### Step 2 — Create a Workstation Cluster

Before launching workstations, you need a **Workstation Cluster** (which coordinates the workstation instances within a VPC network).

1. In the Cloud Workstations menu on the left, click **Cluster management**.
2. Click **Create Workstation Cluster** at the top.
3. Configure the cluster:
   - **Name:** `techbond-dev-cluster-jd` — replace `jd` with your initials.
   - **Region:** `europe-west4` (or your nearest region)
   - **Network settings:** Keep **default** (it will auto-detect your project's default VPC network and subnets).
4. Click **Create**.
> ⏱️ **Wait:** Refresh until the cluster status is **Active** before creating the configuration. Initial provisioning can take several minutes.

---

### Step 3 — Create a Workstation Configuration

A **Workstation Configuration** acts as the blueprint/template for your workspace, specifying machine size, operating system, and editor options.

1. Click **Workstation configurations** in the left menu.
2. Click **Create Workstation Configuration** at the top.
3. Configure the template details:
   - **Configuration name:** `ubuntu-vscode-jd` — replace `jd` with your initials.
   - **Workstation cluster:** Select your participant-suffixed cluster.
   - Click **Next**.
4. Configure hardware:
   - **Machine type:** Choose a cost-effective type, like **e2-standard-2** (2 vCPU, 8 GB RAM) or **e2-medium** (1 vCPU, 4 GB RAM).
   - Click **Next**.
5. Configure environment/software (This is where we set up **Ubuntu + VS Code**):
   - **Environment:** Choose **Code OSS (VS Code compatible)** from the pre-configured base images (this is an Ubuntu-based image optimized for remote web development).
   - Click **Next**.
6. Keep default storage/security options and click **Create**.

---

### Step 4 — Launch and Access Your Workstation 🚀

Now we create a real, live workstation instance using our configuration.

1. Click **Workstations** in the left menu.
2. Click **Create Workstation** at the top.
3. Configure the instance:
   - **Workstation name:** `dev-box-jd` — replace `jd` with your initials.
   - **Configuration:** Select your participant-suffixed configuration.
4. Click **Create**.
5. Once your workstation is created, click the **Start** button to boot it up.
6. Once it transitions to the **Running** state, click **Launch** (or the web link).

> 🎉 **Boom!** A full VS Code editor running inside a secure Ubuntu container is now displayed in your browser tab. You can open a terminal inside VS Code, install extensions, and start writing agentic code!

### Step 5 — Continue to Lab 9.4 or delete resources

Choose one path:

1. **Continue to Lab 9.4:** Keep the workstation running, open **Terminal → New Terminal** in Code OSS, and continue with [Lab 9.4 — agy on Managed Linux](./lab-9.4-agy-managed-linux.md).
2. **Stop here:** Delete **your workstation first**, then **your workstation configuration**, then **your workstation cluster** in the Cloud Workstations Console. Wait for each deletion to finish before deleting its parent.

Disabling the API does not delete these billable resources. Do not leave the workstation running after your final lab.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — The workstation cluster takes a few minutes to create</strong></summary>

Provisioning a workstation cluster handles networking and VM orchestration behind the scenes, so it can take up to 3–5 minutes. This is normal. You can configure your Workstation Configurations ahead of time, and once the cluster is active, the configurations and workstations will boot immediately.
</details>

<details>
<summary><strong>Hint 2 — The workstation starts but "Launch" is disabled</strong></summary>

Ensure the workstation instance is fully booted and showing a green "Running" status before attempting to Launch. If it gets stuck, stop the instance and restart it.
</details>

<details>
<summary><strong>✅ Show me the gcloud CLI equivalent (No-GUI path)</strong></summary>

You can perform the cluster, configuration, and workstation setup directly from Cloud Shell:

```bash
SUFFIX="your-initials"
CLUSTER="techbond-dev-cluster-${SUFFIX}"
CONFIG="ubuntu-vscode-${SUFFIX}"
WORKSTATION="dev-box-${SUFFIX}"

# 1. Create Workstation Cluster
gcloud workstations clusters create "$CLUSTER" \
    --region=europe-west4

# Re-run until the output reports state: ACTIVE; only then continue.
gcloud workstations clusters describe "$CLUSTER" --region=europe-west4

# 2. Create Configuration with Code-OSS image
gcloud workstations configs create "$CONFIG" \
    --cluster="$CLUSTER" \
    --region=europe-west4 \
    --machine-type=e2-standard-2

# 3. Create the Workstation
gcloud workstations create "$WORKSTATION" \
    --cluster="$CLUSTER" \
    --config="$CONFIG" \
    --region=europe-west4

# 4. Start the Workstation
gcloud workstations start "$WORKSTATION" \
    --cluster="$CLUSTER" \
    --config="$CONFIG" \
    --region=europe-west4
```
</details>

---

## ✅ You did it when…

- [ ] Your participant-suffixed cluster reached **Active** before you created the configuration.
- [ ] You have configured a workstation profile using the prebuilt **Code OSS** image.
- [ ] You started your participant-suffixed workstation and launched web VS Code.
- [ ] You continued directly to Lab 9.4 in the running workstation, or deleted workstation, configuration, and cluster if you stopped here.

---

## 🧠 What you just learned

You've built a secure, consistent cloud development workplace with **Cloud Workstations**. You learned how to provision workstation clusters, define container blueprints using pre-configured **Code-OSS** images, and start web-accessible VS Code workspaces. Every team member can now have the exact same environment with zero configuration drift! 🧑‍💻☁️

➡️ **Continue in this workstation:** [Lab 9.4 — agy on Managed Linux](./lab-9.4-agy-managed-linux.md).

⬅️ Back to the **[module overview](./README.md)**.
