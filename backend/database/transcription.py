from sqlmodel import Session

from backend.app.models.transcription import Transcription


async def create_transcription(transcription: Transcription, session: Session):
    session.add(transcription)
    await session.commit()
    return transcription
