from fastapi import APIRouter, File, UploadFile
from pydantic import BaseModel

router = APIRouter(prefix="/transcription", tags=["transcription"])


class TranscriptionResponse(BaseModel):
    text: str
    confidence: float


@router.post("/", response_model=TranscriptionResponse)
async def transcribe_audio(audio: UploadFile = File(...)):
    """
    Transcribe an audio file to text
    """
    # This would call a service to handle the actual transcription
    # For now just return a placeholder
    return TranscriptionResponse(
        text="This is a placeholder transcription.", confidence=0.95
    )
