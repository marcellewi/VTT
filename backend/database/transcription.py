from app.models.transcription import Transcription
from sqlmodel import Session, select


async def create_transcription(
    transcription: Transcription, session: Session
) -> Transcription:
    session.add(transcription)
    session.commit()
    return transcription


async def get_all_transcriptions(session: Session) -> list[Transcription]:
    return session.exec(select(Transcription)).all()
