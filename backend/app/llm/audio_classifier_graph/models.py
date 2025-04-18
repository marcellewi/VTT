from app.models.transcription import Topic
from pydantic import BaseModel, Field


class AudioClassifierOutput(BaseModel):
    topic: Topic = Field(..., description="The main topic of the audio")
    resume: str = Field(..., description="A concise summary of the audio content")
