# 🔴 Lab 8.2 — Ship Your Agent

> **Your mission:** Deploy the module's ready-to-run **Formula Agent** to **Agent Runtime** — one command, and it's live as a managed cloud agent. 🚀🌐

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Advanced · Developer | ~20–30 min | **Agent Runtime** + **ADK CLI** | Your dedicated billed workshop project and `Files/deployable-agent/` from this module |

> **Starting here or skipped earlier labs?** Use the included secret-free Formula starter; no Module 7 work is required. Work only in your dedicated billed Owner/admin workshop project, where you enable the APIs and create, query, list, and delete the Agent Runtime resources yourself.

> **Naming note:** The current product name is **Agent Runtime**. ADK commands and SDK identifiers retain the literal names `agent_engine` and `agent_engines`, and some Console screens may still show the legacy **Agent Engine** label.

> 🧰 **Easiest path:** run everything in **Cloud Shell**. Upload the three files from `Files/deployable-agent/` into a Cloud Shell folder named `formula_agent/`.
>
> 🎮 **Completed Lab 7.4?** You may deploy your Adventure Agent instead. Keep deployment keyless and replace its local `.env` with a sanitized deployment configuration containing **only** `GOOGLE_GENAI_USE_VERTEXAI=TRUE`, `GOOGLE_CLOUD_PROJECT`, `GOOGLE_CLOUD_LOCATION`, and the non-secret workshop `GAME_URL` (or provide those same values through the runtime configuration supported by your environment). Remove `GOOGLE_API_KEY` and every other raw secret before deployment — your personal `GAME_API_KEY` is a secret too, so supply it through Secret Manager or your runtime's secret configuration, never baked into the image or committed. The Formula starter remains the supported workshop path.

---

## 🎬 The story

So far your agent only runs when *you* start it. That's a demo — not a product. 🧪

Real agents need to **live somewhere always-on**, secure, and reachable. **Agent Runtime** (part of the Gemini Enterprise Agent Platform) does exactly that: it is Google Cloud's fully managed, production-grade hosting service built specifically for AI agents. When you deploy, Google packages your agent code, manages session history, takes care of secure scale-to-zero infrastructure, and provides standard REST endpoints (`:query`, `:streamQuery`) you can invoke securely. 

Let's ship your agent to its new enterprise home. 📦

---

## 🛠️ Build it (step by step)

### Step 1 — Set your project variables

In Cloud Shell, set up your configuration:

```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_CLOUD_LOCATION="europe-west4"
export GOOGLE_GENAI_USE_VERTEXAI=TRUE

gcloud config set project "$GOOGLE_CLOUD_PROJECT"
gcloud auth application-default login
```

> 🔐 **Formula starter path:** use the shell variables above and package no `.env`, API key, or game URL. The optional Adventure path uses only the sanitized non-secret configuration described at the top; neither path may package `GOOGLE_API_KEY` or another raw secret.

### Step 2 — Turn on the APIs Agent Runtime needs

Agent Runtime builds a container for your agent, so it needs both AI platform and standard containerization APIs enabled:

```bash
gcloud services enable \
  aiplatform.googleapis.com \
  storage.googleapis.com \
  cloudresourcemanager.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  agentregistry.googleapis.com
```

> 💡 This is the CLI equivalent of Lab 8.1 Quest 2 (enable an API), enabling the services required to build, host, and scale your agent.

### Step 3 — Prepare your agent files & virtual environment

The module includes `Files/deployable-agent/` with `__init__.py`, `agent.py`, and `requirements.txt`. Upload those three files into `formula_agent/` in Cloud Shell, then create an isolated environment and install its dependencies:

```bash
# Confirm the starter is complete
ls -la formula_agent/

# Create once, then activate
test -d venv || python3 -m venv venv
source venv/bin/activate

# Install the exact starter requirements
pip install --upgrade pip
pip install -r formula_agent/requirements.txt
```

> 💡 **Using `uv`?** Activate `.venv` and run `uv pip install -r formula_agent/requirements.txt` instead.

---

### Step 4 — Deploy with one command 🪄

Run the `adk deploy` command targeting `agent_engine`. The ADK CLI will package your code (including its dependencies) and trigger the Agent Runtime build:

```bash
adk deploy agent_engine \
  --project=$GOOGLE_CLOUD_PROJECT \
  --region=$GOOGLE_CLOUD_LOCATION \
  --display_name="Formula Agent" \
  ./formula_agent
```

- **Wait for completion:** The deployment process containerizes and provisions the backend resources. This typically takes about **5–10 minutes**.
- **Retrieve the Resource ID:** When successful, the terminal will print a **Reasoning Engine Resource ID** that looks like this:
  `projects/YOUR_PROJECT_ID/locations/YOUR_LOCATION/reasoningEngines/YOUR_ENGINE_ID`
  Copy this resource path; you'll need it to query your live agent!

---

### Step 5 — Verify and test your live agent

Since Agent Runtime is an API-first backend service, it doesn't have a visual web chat by default. Let's verify it works by running a Python test script from Cloud Shell inside your active virtual environment.

1. Install the Gemini Enterprise Python SDK (Vertex AI SDK) inside your active virtual environment:

```bash
pip install "google-cloud-aiplatform[agent_engines]"
```

2. Create a verification script `test_agent.py`:

```bash
cat << 'EOF' > test_agent.py
import asyncio
import vertexai

# 1. Connect to Gemini Enterprise in your project
client = vertexai.Client(project="your-project-id", location="europe-west4")

# 2. Load your deployed agent (REPLACE with your actual Resource ID from Step 4)
agent = client.agent_engines.get(
    name="projects/your-project-id/locations/europe-west4/reasoningEngines/YOUR_ENGINE_ID"
)

# 3. Query your live agent in the cloud!
async def main():
    print("Sending test query...")
    async for event in agent.async_stream_query(
        user_id="workshop-student",
        message="Convert 3200 cP to Pa.s.",
    ):
        print(event)

asyncio.run(main())
EOF
```

1. Replace `your-project-id`, `europe-west4`, and `YOUR_ENGINE_ID` in `test_agent.py` with your actual Google Cloud Project ID, location, and the deployed engine ID from Step 4.

2. Run the verification script:

```bash
python3 test_agent.py
```

If the events include the conversion result **3.2 Pa.s**, your managed Agent Runtime backend is operational. 🏆

---

### Step 6 — Manage and Govern with Agent Registry (Preview) 📦

Now that your agent is deployed to the cloud, how do you track and govern it? **Agent Registry is Preview** and provides a centralized fleet catalog for managing AI agents. Deployed Agent Runtime instances are **auto-registered** under the hood. Its current management surface is `gcloud alpha agent-registry`.

The Agent Registry API was enabled in Step 2, before deployment.

1. **List all registered agents:**

```bash
gcloud alpha agent-registry agents list --project=$GOOGLE_CLOUD_PROJECT --location=$GOOGLE_CLOUD_LOCATION
```

- Find `"Formula Agent"` and copy the exact value of its registry **`name`** field.

1. **Describe that exact registry resource:**
Paste the copied registry `name` into `REGISTRY_NAME`, then pass it unchanged to `describe`:

```bash
REGISTRY_NAME="projects/your-project-id/locations/europe-west4/agents/paste-the-registry-agent-id"
gcloud alpha agent-registry agents describe "$REGISTRY_NAME" --project=$GOOGLE_CLOUD_PROJECT --location=$GOOGLE_CLOUD_LOCATION
```

- Use the Agent Registry `name` from the list output — **never** substitute the Reasoning Engine ID from Step 4.
- The output displays the registry metadata and underlying runtime association.

---

### Optional concept — Memory Bank 🧠

Agent Runtime can be extended with **Memory Bank** when an application needs long-term, cross-session memory. This lab does not configure it, and deploying the Formula Agent does not enable memory automatically. Treat it as a separate feature with its own data and privacy decisions. Follow the official **[Memory Bank quickstart](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/memory-bank/quickstart)** when you intentionally add it later.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — "adk: command not found"</strong></summary>

`pip install google-adk` didn't land in the Python you're using. In Cloud Shell, try `python3 -m pip install google-adk`, then `adk --version`. Cloud Shell's Python is 3.10+, which ADK 2.x needs.
</details>

<details>
<summary><strong>Hint 2 — Deploy fails with permissions or "not authenticated"</strong></summary>

Verify that you are logged in (`gcloud auth list`) and that the active project matches (`gcloud config list`). If the error mentions a specific API, re-run Step 2 to enable it, wait ~30 seconds, and try again.
</details>

<details>
<summary><strong>Hint 3 — The deploy fails on "API not enabled" or billing</strong></summary>

Re-run Step 2 to ensure all six APIs are enabled. Also, confirm billing is active on the project:

```bash
gcloud billing projects describe $GOOGLE_CLOUD_PROJECT
```

Both Cloud Build and Gemini Enterprise require active billing. Wait ~30 seconds after enabling APIs, then redeploy.
</details>

<details>
<summary><strong>✅ Show me the full command sequence</strong></summary>

First upload `Files/deployable-agent/__init__.py`, `agent.py`, and `requirements.txt` into a Cloud Shell folder named `formula_agent/`. Then run:

```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_CLOUD_LOCATION="europe-west4"
export GOOGLE_GENAI_USE_VERTEXAI=TRUE
gcloud config set project "$GOOGLE_CLOUD_PROJECT"
gcloud auth application-default login

test -d venv || python3 -m venv venv
source venv/bin/activate
ls -la formula_agent/
pip install --upgrade pip
pip install -r formula_agent/requirements.txt

gcloud services enable \
  aiplatform.googleapis.com \
  storage.googleapis.com \
  cloudresourcemanager.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  agentregistry.googleapis.com

adk deploy agent_engine \
  --project=$GOOGLE_CLOUD_PROJECT \
  --region=$GOOGLE_CLOUD_LOCATION \
  --display_name="Formula Agent" \
  ./formula_agent

gcloud alpha agent-registry agents list \
  --project=$GOOGLE_CLOUD_PROJECT \
  --location=$GOOGLE_CLOUD_LOCATION
REGISTRY_NAME="projects/your-project-id/locations/europe-west4/agents/paste-the-registry-agent-id"
gcloud alpha agent-registry agents describe "$REGISTRY_NAME" \
  --project=$GOOGLE_CLOUD_PROJECT \
  --location=$GOOGLE_CLOUD_LOCATION
```

Copy `REGISTRY_NAME` exactly from the list output; do not use the Reasoning Engine ID.
</details>

## ✨ Level-up challenge — deploy a custom Web UI on Cloud Run

Agent Runtime is built for secure, enterprise-grade agent hosting. But what if you want to deploy a custom, user-facing website or chat UI along with your agent? 

**Cloud Run** is Google's serverless container hosting platform. The ADK CLI can deploy your agent bundled with an interactive web chat UI directly to Cloud Run in one step:

```bash
# Enable the Cloud Run API
gcloud services enable run.googleapis.com compute.googleapis.com

# Deploy to Cloud Run with the --with_ui flag
adk deploy cloud_run \
  --project=$GOOGLE_CLOUD_PROJECT \
  --region=$GOOGLE_CLOUD_LOCATION \
  --service_name=formula-ui \
  --with_ui \
  ./formula_agent \
  -- --allow-unauthenticated
```

- When the command finishes, it will print a **Service URL**. Open it to try the Formula Agent.
- If you created this optional service, complete the Cloud Run cleanup below after testing it.

## 🧹 Clean up Agent Runtime

After verification, open **Vertex AI → Agent Runtime**. If your Console still uses the legacy **Agent Engine** label, open that page. Select the **Formula Agent** instance whose resource ID you copied in Step 4, click **Delete**, and confirm. Delete only your own workshop instance.

If you completed the Cloud Run challenge:

1. Delete **Cloud Run → formula-ui** and confirm.
2. In **Artifact Registry**, delete only the container image versions/tags created for `formula-ui`. Delete the repository itself only when the facilitator confirms it is workshop-owned and it is empty; never delete a shared repository that contains other images.
3. Check the deployment output and **Cloud Storage** to determine whether a staging bucket was actually created for `formula-ui`. If none exists, there is no bucket cleanup. If one exists, delete it only after confirming that no other workshop resource uses it.

---

## ✅ You did it when…

- [ ] `adk deploy agent_engine` printed a **Reasoning Engine Resource ID**.
- [ ] `python3 test_agent.py` returned **3.2 Pa.s** for 3200 cP.
- [ ] Agent Registry (Preview) listed your Formula Agent, and you described it using its exact registry `name` rather than the Reasoning Engine ID.
- [ ] You understand that Memory Bank was **not** enabled by this lab.
- [ ] You deleted the Formula Agent runtime and, if created, the optional `formula-ui` service and images; you removed a verified staging bucket or empty workshop-owned image repository only when safe.

---

## 🧠 What you just learned

You crossed the line from **"runs on my laptop"** to **"runs in the cloud."** You turned on Google Cloud's AI and build APIs, packaged your Python agent, and launched it on **Agent Runtime** — Google's enterprise managed service for AI agents. You also explored how to host custom web endpoints using **Cloud Run**. Same agent, two production homes! 🏠🏠

➡️ **Next up:** [Lab 8.3 — The Agent With Eyes](./lab-8.3-agent-with-eyes.md) — give an agent a brand-new sense using the Cloud Vision API.

⬅️ Back to the **[module overview](./README.md)**.
