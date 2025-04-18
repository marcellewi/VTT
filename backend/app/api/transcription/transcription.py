import logging

from app.models.transcription import Transcription, TranscriptionResponse
from app.services import transcription_service
from database.db import get_session
from fastapi import APIRouter, Depends, File, UploadFile
from sqlmodel import Session

router = APIRouter()

logger = logging.getLogger(__name__)


@router.post("", response_model=TranscriptionResponse)
async def transcribe_audio(
    audio: UploadFile = File(...),
    model_size: str = "base",
    session: Session = Depends(get_session),
):
    """
    Transcribe an audio file to text and save to database
    """

    logger.info(f"Transcribing audio file: {audio.filename}")
    return await transcription_service.transcribe_audio(audio, model_size, session)


@router.get("", response_model=list[Transcription])
async def get_transcriptions(
    session: Session = Depends(get_session),
):
    """
    Get all transcriptions from the database
    """
    return await transcription_service.get_transcriptions(session)
