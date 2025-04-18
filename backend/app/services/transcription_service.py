import logging
import os
import tempfile
import uuid

import whisper
from app.llm.audio_classifier_graph.chains import AudioClassifierChain
from app.models.transcription import Transcription, TranscriptionResponse
from database.db import get_session
from database.transcription import get_all_transcriptions
from fastapi import Depends, HTTPException, UploadFile
from sqlmodel import Session

logger = logging.getLogger(__name__)


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

    if audio.size > 2 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="File too large")

    with tempfile.NamedTemporaryFile(
        delete=False, suffix=os.path.splitext(audio.filename)[1]
    ) as temp_file:
        contents = await audio.read()
        temp_file.write(contents)
        temp_file_path = temp_file.name

    try:
        model = whisper.load_model(model_size)

        result = model.transcribe(temp_file_path)

        transcription = Transcription(
            id=uuid.uuid4(),
            name=audio.filename,
            text=result["text"],
            confidence=result.get("confidence", 0.0),
            model_name=model_size,
            audio_file_name=audio.filename,
        )

        classifier = AudioClassifierChain(result["text"])
        classification = classifier.classify()

        transcription.topic = classification.topic
        transcription.resume = classification.resume

        print(f"Transcription: {transcription}")
        print(f"Classification: {classification}")
        print(f"classifier: {classifier}")

        # Create the transcription in the database
        # await create_transcription(transcription, session)

        return TranscriptionResponse(
            id=transcription.id,
            name=transcription.name,
            text=transcription.text,
            confidence=transcription.confidence,
            model_name=transcription.model_name,
            created_at=transcription.created_at,
        )
    except Exception as e:
        logger.error(f"Error transcribing audio: {e}")
        raise HTTPException(status_code=500, detail=f"Error transcribing audio: {e}")
    finally:
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)


async def get_transcriptions(session: Session) -> list[Transcription]:
    """
    Get all transcriptions from the database
    """
    try:
        return await get_all_transcriptions(session)
    except Exception as e:
        logger.error(f"Error getting transcriptions: {e}")
        raise HTTPException(status_code=500, detail=str(e))
