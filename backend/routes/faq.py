import json

from fastapi import APIRouter

router = APIRouter(
    prefix="/faqs",
    tags=["FAQs"]
)


@router.get("/")
def get_faqs():

    with open(
        "data/faq.json",
        "r"
    ) as file:
        faq_data = json.load(file)

    return faq_data