from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.chat import router as chat_router
from routes.compare import router as compare_router
from routes.planner import router as planner_router
from routes.faq import router as faq_router


app = FastAPI(
    title="NRI Wealth Copilot"
)

# CORS FIX
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(chat_router)
app.include_router(compare_router)
app.include_router(planner_router)
app.include_router(faq_router)


@app.get("/")
async def home():
    return {
        "service": "NRI Wealth Copilot",
        "status": "healthy"
    }