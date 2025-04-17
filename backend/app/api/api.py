from app.api.transcription.transcription import router as transcription_router
from fastapi import APIRouter

api_router = APIRouter()

api_router.include_router(
    transcription_router, prefix="/transcription", tags=["transcription"]
)
