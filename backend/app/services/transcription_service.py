import os
import tempfile
import uuid

import whisper
from app.models.transcription import Transcription, TranscriptionResponse
from database.db import get_session
from fastapi import Depends, UploadFile
from sqlmodel import Session

from backend.database.transcription import create_transcription


async def transcribe_audio(
    audio: UploadFile, model_size: str = "base", session: Session = Depends(get_session)
) -> TranscriptionResponse:
    """
    Transcribe an audio file to text using OpenAI's Whisper model
    and store the result in the database.

    Args:
        audio: The uploaded audio file
        model_size: The Whisper model size to use (tiny, base, small, medium, large)
        db: Database session

    Returns:
        TranscriptionResponse with the transcription results
    """
    # Create a temporary file to store the uploaded audio
    # Unfortunately, Whisper requires a file path and can't work directly with bytes
    with tempfile.NamedTemporaryFile(
        delete=False, suffix=os.path.splitext(audio.filename)[1]
    ) as temp_file:
        # Write the uploaded file content to the temporary file
        contents = await audio.read()
        temp_file.write(contents)
        temp_file_path = temp_file.name

    try:
        # Load the Whisper model
        model = whisper.load_model(model_size)

        # Transcribe the audio file
        result = model.transcribe(temp_file_path)

        # Create database record
        transcription = Transcription(
            id=uuid.uuid4(),
            name=audio.filename,
            text=result["text"],
            confidence=result.get("confidence", 0.0),
            model_name=model_size,
            audio_file_name=audio.filename,
        )

        await create_transcription(transcription, session)

        # Return API response
        return TranscriptionResponse(
            id=transcription.id,
            name=transcription.name,
            text=transcription.text,
            confidence=transcription.confidence,
            model_name=transcription.model_name,
            created_at=transcription.created_at,
        )
    finally:
        # Clean up the temporary file
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)
