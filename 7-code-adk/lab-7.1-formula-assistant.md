# 🟣 Lab 7.1 — The Formula Assistant

> **Your mission:** Build a simple **Python** agent with Google's **Agent Development Kit (ADK 2.x)** that helps TechBond chemists by automatically converting viscosity measurements. 🧪📊

| 🏆 Role | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Day 2 core | ~15–20 min | **ADK 2.x** (`google-adk`, Python) | Python 3.11+, your dedicated Owner/admin workshop project, and access to a Gemini model |

---

## 🎬 The story

At TechBond Industries, our chemists specify adhesive viscosity in **centipoise (cP)** on data sheets, but our manufacturing reactors measure it in **Pascal-seconds (Pa·s)**. Converting back and forth by hand leads to typos and quality issues.

To solve this, you'll write a simple Python agent using the **Agent Development Kit (ADK 2.x)**. You will give the agent a custom Python tool that does the math, and let the agent decide when and how to use it. No more human calculation errors! 🚀

---

## 🧰 Before you start (2-minute setup)

> 🚪 **Prep Gate:** This lab assumes you completed **[Lab 7.0 — Developer Setup](./lab-7.0-developer-setup.md)** (Cloud Shell + an isolated Python virtual environment). If you haven't, run it first; allow 25–35 minutes.

Open **Cloud Shell** (or your local terminal), activate your virtual environment from Lab 7.0, and install the ADK into it:

```bash
# 1. Activate the virtual environment created in Lab 7.0
source venv/bin/activate

# 2. Install the Agent Development Kit (ADK)
pip install --upgrade pip
pip install google-adk

# 3. Confirm the CLI is available
adk --version
```

> 💡 **Using `uv`?** If you created your environment with `uv` in Lab 7.0, run this instead:
> ```bash
> source .venv/bin/activate && uv pip install google-adk
> ```

---

## 🛠️ Build it (step by step)

**Step 1 — Create the project directory.**
ADK expects a python module structure. Create a folder named `formula/` with an empty `__init__.py` and an `agent.py`:

```bash
mkdir -p formula
touch formula/__init__.py
touch formula/agent.py
touch formula/.env
```

**Step 2 — Configure your credentials.**
To use your agent, it needs access to a **Gemini model**. You have two options depending on your setup:

### 🔑 Option A: Google AI Studio (Easiest & Free)
1. Go to **[aistudio.google.com](https://aistudio.google.com)**.
2. Click **Get API Key** and create a new key.
3. Open `formula/.env` in your editor and add:
   ```bash
   GOOGLE_GENAI_USE_VERTEXAI=FALSE
   GOOGLE_API_KEY="YOUR_AI_STUDIO_API_KEY"
   ```

### ☁️ Option B: Vertex AI / Agent Platform (Keyless Cloud Integration)
If you are running in Cloud Shell with access to your workshop's Google Cloud project, you can authenticate keylessly:
1. In Cloud Shell, run:
   ```bash
   gcloud auth application-default login
   ```
2. Open `formula/.env` in your editor and add (replace with your project ID):
   ```bash
   GOOGLE_GENAI_USE_VERTEXAI=TRUE
   GOOGLE_CLOUD_PROJECT="your-project-id"
   GOOGLE_CLOUD_LOCATION="europe-west4"
   ```

**Step 3 — Write the agent and the tool.**
Open `formula/agent.py` in the Cloud Shell editor and paste the following Python code. This defines a custom math tool, `convert_viscosity`, and registers it with our `Agent` object:

```python
from google.adk import Agent

def convert_viscosity(cp: float) -> dict:
    """Convert viscosity from centipoise (cP) to Pascal-seconds (Pa·s).

    Args:
        cp: The viscosity value in centipoise (cP) to be converted.
    """
    pas = cp / 1000.0
    return {
        "centipoise": cp,
        "pascal_seconds": pas,
        "formula": "Pa·s = cP / 1000"
    }

root_agent = Agent(
    name="formula_assistant",
    model="gemini-2.5-flash",
    instruction=(
        "You are a helpful TechBond chemical lab assistant. "
        "When a user asks to convert viscosity, always use the convert_viscosity tool "
        "to calculate the value, and present the result clearly with the formula used."
    ),
    tools=[convert_viscosity],
)
```

**Step 4 — Wire up the module.**
Open `formula/__init__.py` and expose the agent to the ADK runner:

```python
from . import agent
```

**Step 5 — Run your agent!**
From the folder *above* `formula/`, launch your agent in the terminal using the ADK CLI:

```bash
adk run formula
```

Once the interactive session starts, chat with your agent! Try:
> *"Hi, can you convert 2500 cP of BondMax 500 into Pa·s?"*

Watch as the agent recognizes the need to convert viscosity, calls your custom Python function, gets the dictionary result, and prints a clear explanation back to you! Type `exit` (or press `Ctrl+C`) to close the session.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — The agent is failing to run</strong></summary>

Make sure you are running the `adk run formula` command from the parent directory of `formula/` (not inside `formula/` itself). Also confirm your `formula/.env` has the correct `GOOGLE_API_KEY`.
</details>

<details>
<summary><strong>Hint 2 — The agent doesn't use the tool</strong></summary>

The model reads the docstring of the Python function to understand when and how to call it. Ensure your `convert_viscosity` function has a clear docstring with type annotations and `Args:` documentation so the Gemini model can map the parameters correctly.
</details>

---

## ✅ You did it when…

- [ ] Your agent runs successfully with `adk run formula`.
- [ ] You ask it to convert viscosity, and it executes your `convert_viscosity` function.
- [ ] It prints the converted result in Pascal-seconds (Pa·s) with the correct formula.

---

## ✨ Level-up challenge — add another tool!

Chemists also need temperature conversions since adhesive curing is temperature-sensitive. Add a second tool, `convert_temperature(fahrenheit: float) -> dict`, which converts Fahrenheit to Celsius. Update the agent's instructions to handle both temperature and viscosity conversions, and run it to verify!

---

## 🧠 What you just learned

You've built your first **fully custom agent in code** using the Google ADK! You learned that:
1. An agent is defined programmatically with its model and instructions.
2. Custom capabilities are just regular Python functions (tools) with standard docstrings.
3. The ADK CLI (`adk run`) lets you immediately test your code in an interactive loop.
