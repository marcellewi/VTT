from app.models.transcription import Transcription
from sqlmodel import Session


async def create_transcription(transcription: Transcription, session: Session):
    session.add(transcription)
    await session.commit()
    return transcription
