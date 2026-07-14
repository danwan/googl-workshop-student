from google.adk import Agent


def convert_viscosity(cp: float) -> dict:
    """Convert viscosity from centipoise (cP) to Pascal-seconds (Pa.s).

    Args:
        cp: The viscosity value in centipoise.
    """
    return {"centipoise": cp, "pascal_seconds": cp / 1000.0}


root_agent = Agent(
    name="formula_agent",
    model="gemini-3.5-flash",
    instruction="Use convert_viscosity for viscosity conversions and explain the result.",
    tools=[convert_viscosity],
)
