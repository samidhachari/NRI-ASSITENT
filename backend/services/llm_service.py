import os

from dotenv import load_dotenv
from mistralai import Mistral

from services.prompt_templates import (
    WEALTH_SYSTEM_PROMPT
)

load_dotenv()

api_key = os.getenv(
    "MISTRAL_API_KEY"
)

model = os.getenv(
    "MODEL_NAME",
    "mistral-small-latest"
)

client = Mistral(
    api_key=api_key
)


async def ask_mistral(
    question: str
):

    try:

        response = (
            client.chat.complete(
                model=model,

                messages=[
                    {
                        "role":
                        "system",

                        "content":
                        WEALTH_SYSTEM_PROMPT
                    },

                    {
                        "role":
                        "user",

                        "content":
                        question
                    }
                ]
            )
        )

        return (
            response
            .choices[0]
            .message.content
        )

    except Exception as e:

        print(
            "Mistral Error:",
            str(e)
        )

        return (
            "Something went wrong while "
            "generating a response."
        )