# 🟣 Lab 7.2.1 — ADK Under the Hood

> **Your mission:** Follow one Formula Assistant request through the **Agent Development Kit (ADK) Web** interface and explain what the agent, model, tool, runtime, session, and events each do. 🔎🤖

| 🏆 Role | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Day 2 core | ~25 min | **ADK Web** | The working `formula/` project from Lab 7.2 and the same active Python environment |

---

## 🎬 The story

Lab 7.2 focused on the result. This lab reveals the steps ADK performs after you press Enter.

In this lab, you will send two contrasting requests and one follow-up. You will inspect where the language model makes a decision, where regular Python performs the calculation, and how ADK records the exchange.

You will not build another agent. The smallest useful way to understand ADK is to open the agent you already have and watch it work.

> **A teaching map, not a package diagram:** The layers below group ADK concepts for this workshop. Google documents them as components and primitives rather than one official layer model.

---

## 🧰 Before you start

> 🚪 **Starting here or skipped earlier labs?** Complete **[Lab 7.2 — The Formula Assistant](./lab-7.2-formula-assistant.md)** first. You need a `formula/` folder whose agent can convert `2500 cP` to `2.5 Pa·s` with `adk run formula`.

Open the terminal where you created `formula/`, activate the same environment, and confirm both the folder and ADK are available:

```bash
cd ~
source venv/bin/activate
test -f formula/agent.py && printf 'PASS: formula agent found\n'
adk --version
```

> 💡 **Using `uv`?** Activate the environment you used in Lab 7.2, for example `source .venv/bin/activate`.

Do not continue until the terminal prints `PASS: formula agent found` and an ADK version.

---

## 🗺️ The ADK map

| Part | Its job | Where you meet it |
|---|---|---|
| **Agent definition** | Combines a name, model, instruction, and available tools | `root_agent` in `formula/agent.py` |
| **Model** | Interprets the request and decides whether to answer or request a tool | `model="gemini-3.5-flash"` |
| **Tool** | Performs a defined action with normal, testable code | `convert_viscosity()` |
| **Runtime** | Runs the agent and coordinates model calls, tool calls, and results | Started for you by `adk run` or `adk web` |
| **Event** | Records one step, such as a user message, function call, function result, or answer | The **Events** view in ADK Web |
| **Session** | Holds one conversation's event history and temporary context | The current ADK Web chat session |

Remember this boundary: **the model chooses; the tool calculates; the ADK runtime coordinates and records the exchange.**

---

## 🔬 Follow one request

### Step 1 — Start the development interface

Run ADK Web from the directory **above** `formula/`:

```bash
cd ~
adk web --port 8000
```

Keep this terminal running.

- **In Cloud Shell:** click **Web Preview** and choose **Preview on port 8000**.
- **On your own computer:** open `http://localhost:8000`.

Select **formula** in the agent menu.

> ADK Web is a local development and debugging interface, not a production application.

### Step 2 — See a request without a tool

Send this prompt:

> *What can you help me with?*

Open **Events**. The exact labels can vary slightly between ADK versions, but you should see the user message and a model response. There should be no call to `convert_viscosity`, because no calculation was requested.

### Step 3 — Trigger the Python tool

Now send:

> *Convert 2500 cP of BondMax 500 into Pa·s. Use the conversion tool.*

Open **Events** again and inspect the entries for this turn. Find these three moments:

1. **Function call:** the model requests `convert_viscosity` with `cp` set to `2500`.
2. **Function response:** the Python function returns the converted value and formula.
3. **Final model response:** the model turns that structured result into a clear answer.

The request followed this path:

```text
User message
  → ADK runtime and session
  → Formula Assistant and Gemini model
  → function call: convert_viscosity(cp=2500)
  → Python result: 2.5 Pa·s
  → final model response
```

ADK generated the tool schema from the function name, type hint, and docstring. It then handled the model call, tool dispatch, result handoff, and event history. Your code only defined the agent's instructions and the deterministic calculation.

### Step 4 — Inspect the trace

Choose the conversion turn and open **Trace**. Look for the model and tool steps and compare their durations.

Ask your partner:

- Which step contained probabilistic model behavior?
- Which step was deterministic Python?
- Which step would you test with a normal assertion?

The conversion function is the deterministic part. Agent response quality and tool-choice behavior need agent evaluation rather than an exact-text assertion.

### Step 5 — See the session boundary

Without creating a new session, send a follow-up:

> *Now convert 1250 cP too.*

ADK keeps both turns in the current session's event history. That is different from custom state or long-term memory:

| Context concept | Meaning | Used explicitly in this lab? |
|---|---|:---:|
| **Session** | One conversation thread and its events | ✅ |
| **State** | Key-value data attached to the current session | No |
| **Memory** | Searchable information available across sessions | No |

The Formula Assistant does not need custom state or memory yet. Add them only when a real use case must retain structured values or recall information beyond the current conversation.

When you finish, return to the terminal and press `Ctrl+C` to stop ADK Web.

---

## 🏗️ How ADK grows beyond one agent

You have now seen the smallest ADK system. The same kit can grow in several directions:

| Need | ADK building block |
|---|---|
| One reasoning agent with tools | `Agent` / `LlmAgent` |
| Fixed common sequence, parallel work, or iteration loop | `SequentialAgent`, `ParallelAgent`, or `LoopAgent` |
| Explicit nodes, edges, branches, and deterministic routing | Graph-based `Workflow` |
| Loops and branches controlled directly in Python | Dynamic workflow |
| A coordinator delegating to specialists | Collaborative workflow with subagents |
| Repeatable quality checks | ADK evaluation sets and criteria |
| A managed production service | Deploy to Agent Runtime, Cloud Run, or GKE |

You do not need those pieces for every agent. Start with one agent and one useful tool, then add orchestration only when the task actually has multiple steps or specialists.

In this workshop:

- **[Lab 7.3](./lab-7.3-agy-coding-companion.md)** adds and deterministically checks another tool.
- **[Lab 7.4](./lab-7.4-adventure-agent.md)** explores iterative agent behavior and evaluation.
- **[Lab 8.2](../8-cloud-toolkit/lab-8.2-ship-your-agent.md)** covers deployment to Agent Runtime.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — Formula does not appear in the agent menu</strong></summary>

Stop ADK Web with `Ctrl+C`. Run `pwd` and `ls formula/agent.py`. You must start `adk web --port 8000` from the directory that contains the `formula/` folder, not from inside `formula/`.
</details>

<details>
<summary><strong>Hint 2 — The browser cannot open localhost</strong></summary>

In Cloud Shell, leave `adk web` running and use **Web Preview → Preview on port 8000**. `localhost:8000` works directly only when ADK is running on your own computer.
</details>

<details>
<summary><strong>Hint 3 — There is no function call</strong></summary>

Use the exact conversion prompt from Step 3. If the tool still does not appear, stop ADK Web and confirm `formula/agent.py` contains `tools=[convert_viscosity]`, a typed `cp: float` parameter, and the function's docstring from Lab 7.2.
</details>

<details>
<summary><strong>✅ Show me the full route</strong></summary>

1. Complete Lab 7.2 and verify `adk run formula` can convert `2500 cP` to `2.5 Pa·s`.
2. From the directory containing `formula/`, activate the same environment and run `adk web --port 8000`.
3. Open port 8000, select **formula**, and ask *What can you help me with?*
4. Ask *Convert 2500 cP of BondMax 500 into Pa·s. Use the conversion tool.*
5. In **Events**, find the `convert_viscosity` function call, its structured response, and the final model answer. Open **Trace** and compare the model and tool steps.
6. In the same session, ask *Now convert 1250 cP too.* Confirm that the session contains both turns.
</details>

---

## ✅ You did it when…

- [ ] ADK Web loads the Formula Assistant.
- [ ] You can distinguish a turn with no tool call from a conversion turn.
- [ ] You found the function call, function response, and final response in **Events**.
- [ ] You opened **Trace** and identified the model step and deterministic tool step.
- [ ] You can explain the difference between an agent, tool, runtime, event, session, state, and memory.
- [ ] You can name one reason to use a workflow and one reason to keep a single agent.

---

## ✨ Optional level-up — predict before you inspect

Start a new session. Before sending each prompt, predict whether the agent will call a tool. Test one conversion request, one general chemistry question, and one request outside the agent's purpose. Then inspect **Events** and compare the result with your predictions.

---

## 🧠 What you just learned

You moved from *using* an ADK agent to understanding its execution. You saw the runtime coordinate a model and deterministic Python through events, keep those events in a session, and expose the full path for debugging.

📚 Go deeper in the official ADK documentation: [technical overview](https://adk.dev/get-started/about/), [runtime event loop](https://adk.dev/runtime/event-loop/), [sessions, state, and memory](https://adk.dev/sessions/), [workflows](https://adk.dev/workflows/), and [evaluation](https://adk.dev/evaluate/).

➡️ Continue to **[Lab 7.3 — Coding with agy](./lab-7.3-agy-coding-companion.md)** · Back to the **[module overview](./README.md)**.
