from app.models.transcription import Transcription
from sqlmodel import Session


async def create_transcription(
    transcription: Transcription, session: Session
) -> Transcription:
    session.add(transcription)
    session.commit()
    return transcription
