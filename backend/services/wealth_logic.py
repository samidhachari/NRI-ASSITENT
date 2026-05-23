import json


def load_rules():

    with open(
        "data/nri_rules.json",
        "r"
    ) as file:

        return json.load(
            file
        )


def load_returns():

    with open(
        "data/mock_returns.json",
        "r"
    ) as file:

        return json.load(
            file
        )


def get_risk_profile(
    risk_level: str
):

    rules = load_rules()

    risk_profiles = (
        rules[
            "risk_profiles"
        ]
    )

    return (
        risk_profiles.get(
            risk_level.lower(),

            risk_profiles[
                "moderate"
            ]
        )
    )


def compare_investments():

    returns_data = (
        load_returns()
    )

    return [

        returns_data[
            "us_etf"
        ],

        returns_data[
            "indian_mutual_funds"
        ],

        returns_data[
            "hybrid"
        ]
    ]


def generate_wealth_plan(
    age: int,
    savings: float,
    risk: str,
    timeline: int,
    country: str
):

    rules = load_rules()

    profile = (
        get_risk_profile(
            risk
        )
    )

    allocation = (
        profile[
            "allocation"
        ]
    )

    explanation = (
        build_reasoning(
            risk,
            timeline
        )
    )

    risks = (
        generate_risk_notes(
            risk
        )
    )

    return {

        "profile": risk,

        "country":
        country,

        "timeline":
        timeline,

        "allocation":
        allocation,

        "reasoning":
        explanation,

        "risks":
        risks,

        "disclaimer":
        (
            "Educational "
            "simulation only. "
            "Not financial advice."
        )
    }


def build_reasoning(
    risk: str,
    timeline: int
):

    if (
        risk.lower()
        == "aggressive"
    ):

        return (
            "Higher equity "
            "allocation chosen "
            "for stronger "
            "long-term growth."
        )

    elif (
        risk.lower()
        == "conservative"
    ):

        return (
            "More stable assets "
            "selected to reduce "
            "volatility and "
            "protect capital."
        )

    return (
        "Balanced allocation "
        "between growth "
        "and stability "
        "based on your "
        "risk profile."
    )


def generate_risk_notes(
    risk: str
):

    notes = [

        "Currency fluctuations between USD and INR may affect returns.",

        "Market volatility can impact short-term performance.",

        "Diversification reduces concentration risk."
    ]

    if (
        risk.lower()
        == "aggressive"
    ):

        notes.append(

            "Higher equity exposure increases volatility."
        )

    return notes