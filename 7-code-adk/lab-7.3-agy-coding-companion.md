# 🟣 Lab 7.3 — Coding with agy (The CLI Companion)

> **Your mission:** Use the terminal-based **Antigravity CLI (`agy`)** to programmatically enhance your agent with a temperature conversion tool without writing the code by hand. 💻🤖

| 🏆 Role | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Day 2 core | ~15 min | **Antigravity CLI** (`agy`) | Python 3.11+, Cloud Shell, and the `formula/` project from Lab 7.2 |

> **Starting here or skipped earlier labs?** Complete **[Lab 7.0 — Developer Setup](./lab-7.0-developer-setup.md)** first. If you already built `formula/` in Lab 7.2, reuse it and continue with Step 1. Otherwise run this one-time bootstrap from your home directory, then continue with Step 1:
>
> ```bash
> cd "$HOME"
> source "$HOME/venv/bin/activate"
> pip install google-adk
> gcloud auth application-default login
> PROJECT_ID="$(gcloud config get-value project)"
> mkdir -p formula
> printf 'from . import agent\n' > formula/__init__.py
> printf 'GOOGLE_GENAI_USE_VERTEXAI=TRUE\nGOOGLE_CLOUD_PROJECT="%s"\nGOOGLE_CLOUD_LOCATION="europe-west4"\n' "$PROJECT_ID" > formula/.env
> cat > formula/agent.py <<'PY'
> from google.adk import Agent
>
> def convert_viscosity(cp: float) -> dict:
>     """Convert viscosity from centipoise (cP) to Pascal-seconds (Pa.s).
>
>     Args:
>         cp: The viscosity value in centipoise.
>     """
>     return {"centipoise": cp, "pascal_seconds": cp / 1000.0}
>
> root_agent = Agent(
>     name="formula_assistant",
>     model="gemini-3.5-flash",
>     instruction="Use convert_viscosity for viscosity conversions and explain the result.",
>     tools=[convert_viscosity],
> )
> PY
> ```

> ⚠️ **Agents CLI Preview fallback:** If the Lab 7.0 gate failed or `google-agents-cli-adk-code` is absent, stay in this lab. Run only the `cd` and `source` commands in Step 1, skip launching `agy` and skip `/skills`, then copy the complete manual temperature-tool code from Step 3 into `formula/agent.py`. Continue with Steps 4 and 5, including the deterministic checks.

---

## 🎬 The story

As developers, switching back and forth between writing code, reading documentation, and testing can break our flow. 

**Google Antigravity (`agy`)** brings an AI coding pair programmer directly to your terminal. In this lab, instead of writing Python code by hand, you will launch the `agy` CLI right in your Cloud Shell and instruct it to build the **temperature conversion tool** for your Formula Assistant agent. Let the terminal assistant do the heavy lifting! 🪄

---

## 🛠️ Build it (step by step)

**Step 1 — Prepare your terminal & start the Antigravity CLI.**
You installed `agy` in [Lab 7.0 — Developer Setup](./lab-7.0-developer-setup.md). If you opened a new terminal session or your Cloud Shell timed out, return to your home directory and reactivate your virtual environment first so ADK is available (and re-run Lab 7.0's install steps if `agy` is missing):

```bash
# 1. Activate your virtual environment
cd "$HOME"
source "$HOME/venv/bin/activate"

# 2. Launch the Antigravity CLI from the parent directory of formula/
agy
```

> 💡 This opens an interactive terminal UI session with your AI programming companion. It is fully aware of your workspace and can run terminal commands or write code directly.

**Step 2 — Prompt agy to add the temperature converter.**
Before asking for an edit, open the skill list:

```text
/skills
```

Confirm that `google-agents-cli-adk-code` is available. Then ask `agy` to use that skill, read your existing `formula/agent.py`, and make only the smallest change needed for the level-up challenge:

> *"Use the `google-agents-cli-adk-code` skill. Read `formula/agent.py`, then make the smallest change needed to add a second tool called `convert_temperature` that converts Fahrenheit to Celsius: C = (F - 32) * 5/9. Update only the root_agent instructions and tool list needed to support both viscosity and temperature. Preserve the existing viscosity behavior and write the changes back to `formula/agent.py`."*

Watch as the assistant plans, writes the Python function, updates the `Agent` configuration, and saves the file directly.

**Step 3 — Inspect the changes.**
Exit `agy` by pressing `Ctrl+D` twice (or typing `/exit`). Let's inspect the code that `agy` wrote! Open `formula/agent.py` or run:

```bash
cat formula/agent.py
```

It should look something like this:

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

def convert_temperature(fahrenheit: float) -> dict:
    """Convert temperature from Fahrenheit to Celsius.

    Args:
        fahrenheit: The temperature in Fahrenheit to be converted.
    """
    celsius = (fahrenheit - 32.0) * 5.0 / 9.0
    return {
        "fahrenheit": fahrenheit,
        "celsius": celsius,
        "formula": "C = (F - 32) * 5/9"
    }

root_agent = Agent(
    name="formula_assistant",
    model="gemini-3.5-flash",
    instruction=(
        "You are a helpful TechBond chemical lab assistant. "
        "When a user asks to convert viscosity or temperature, always use the "
        "appropriate tool to calculate the value, and present the result clearly with the formula."
    ),
    tools=[convert_viscosity, convert_temperature],
)
```

**Step 4 — Test your updated agent.**
Launch the ADK CLI again to verify both tools are fully functional:

```bash
adk run formula
```

Try asking it:
> *"What is 100 degrees Fahrenheit in Celsius?"*
> *"Also, convert 3200 cP of adhesive into Pa·s."*

Watch it execute both tools flawlessly! Type `exit` (or press `Ctrl+C`) to close the session.

**Step 5 — Run the smallest useful evaluation.**
The chat run proves the agent can respond. These deterministic checks prove both Python tools still calculate the expected values without calling a model:

```bash
python3 - <<'PY'
from formula.agent import convert_temperature, convert_viscosity

assert convert_viscosity(3200)["pascal_seconds"] == 3.2
assert round(convert_temperature(100)["celsius"], 6) == 37.777778
print("PASS: both conversion tools returned the expected values")
PY
```

If an assertion fails, inspect `formula/agent.py`, correct the smallest calculation error, and rerun the checks.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — agy command not found</strong></summary>

The `agy` CLI is part of your Antigravity environment. Check it before installing:

```bash
agy --version
```

If that check fails, download and inspect the official installer:

```bash
curl --max-time 10 -fsSL https://antigravity.google/cli/install.sh -o install-agy.sh
less install-agy.sh
```

Read the installer and press `q` after you reach the end. If you cannot assess what it will do, stop and ask the facilitator to review it with you. Then run the reviewed local file:

```bash
bash install-agy.sh
rm install-agy.sh
source "$HOME/.local/bin/env"
agy --version
```

</details>

<details>
<summary><strong>Hint 2 — agy didn't write to the file</strong></summary>

If `agy` only outputs the code in the chat but doesn't write it, you can ask it: *"Please save these changes to formula/agent.py"* or simply copy-paste the code from the terminal into your Cloud Shell editor yourself.
</details>

<details>
<summary><strong>✅ Show me the full route</strong></summary>

1. If you did not complete Lab 7.2, run the one-time `formula/` bootstrap above. Otherwise reuse that project.
2. On the regular route, run `cd "$HOME"`, activate `$HOME/venv/bin/activate`, and start `agy` from the directory above `formula/`. On the Preview fallback, run only `cd` and `source`, skip `agy` and `/skills`, and manually copy the complete Step 3 temperature-tool code into `formula/agent.py`.
3. On the regular route, run `/skills`, verify `google-agents-cli-adk-code`, and paste the Step 2 prompt to add and register `convert_temperature` while preserving `convert_viscosity`.
4. Exit with `Ctrl+D` twice or `/exit`, then run `cat formula/agent.py` and compare it with the Step 3 example.
5. Run `adk run formula` and test both prompts from Step 4, then run the Step 5 Python assertions and require the `PASS` message.
</details>

---

## ✅ You did it when…

- [ ] You used the regular `agy` route, or followed the named Preview fallback without leaving Lab 7.3.
- [ ] On the regular route, `/skills` showed `google-agents-cli-adk-code`.
- [ ] `agy` wrote the `convert_temperature` tool, or you copied the complete Step 3 code manually, and the tool is registered to your `Agent`.
- [ ] You ran `adk run formula` and verified both viscosity and temperature conversions work.
- [ ] The deterministic Python checks printed `PASS`.

---

## 🧠 What you just learned

You learned how to use **Antigravity CLI (`agy`)** and its `google-agents-cli-adk-code` skill as a coding companion directly in your shell! You saw how it can read files, make a focused edit, and save you from manual repetitive boilerplate.
