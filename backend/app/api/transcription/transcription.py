import os
import tempfile

from app.models.transcription import TranscriptionResponse
from app.services import transcription_service
from database.db import get_session
from fastapi import APIRouter, Depends, File, UploadFile
from sqlmodel import Session

router = APIRouter()


@router.post("", response_model=TranscriptionResponse)
async def transcribe_audio(
    audio: UploadFile = File(...),
    model_size: str = "base",
    session: Session = Depends(get_session),
):
    """
    Transcribe an audio file to text and save to database
    """
    with tempfile.NamedTemporaryFile(
        delete=False, suffix=os.path.splitext(audio.filename)[1]
    ) as temp_file:
        return await transcription_service.transcribe_audio(audio, model_size, session)
