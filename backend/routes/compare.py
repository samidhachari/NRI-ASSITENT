from fastapi import APIRouter

from services.wealth_logic import (
    compare_investments
)

router = APIRouter(
    prefix="/compare",
    tags=["Compare"]
)


@router.post("/")
def compare():

    scenarios = (
        compare_investments()
    )

    return {
        "scenarios":
        scenarios
    }