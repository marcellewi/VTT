from app.models.transcription import Topic
from pydantic import BaseModel


class AudioClassifierOutput(BaseModel):
    topic: Topic
    resume: str
