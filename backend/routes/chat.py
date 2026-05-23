from fastapi import APIRouter
from pydantic import BaseModel

from services.llm_service import ask_mistral

router = APIRouter(
    prefix="/chat",
    tags=["AI Wealth Chat"]
)


class ChatRequest(BaseModel):
    question: str


@router.post("/")
async def wealth_chat(
    payload: ChatRequest
):
    response = await ask_mistral(
        payload.question
    )

    return {
        "question": payload.question,
        "response": response
    }