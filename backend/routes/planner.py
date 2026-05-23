from fastapi import APIRouter
from pydantic import BaseModel

from services.wealth_logic import (
    generate_wealth_plan
)

router = APIRouter(
    prefix="/planner",
    tags=["Planner"]
)


class PlannerRequest(
    BaseModel
):
    age: int
    country: str
    savings: float
    risk: str
    timeline: int


@router.post("/")
def plan_wealth(
    payload:
    PlannerRequest
):

    result = (
        generate_wealth_plan(
            age=payload.age,

            savings=
            payload.savings,

            risk=
            payload.risk,

            timeline=
            payload.timeline,

            country=
            payload.country
        )
    )

    return result