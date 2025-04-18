import datetime
import uuid
from enum import Enum

from sqlalchemy import Column
from sqlalchemy import Enum as SQLAlchemyEnum
from sqlmodel import Field, SQLModel


class Topic(str, Enum):
    PRODUCT = "product"
    TECHNOLOGY = "technology"
    MARKETING = "marketing"
    SALES = "sales"
    SUPPORT = "support"
    RECURRENT_MEETING = "recurrent_meeting"


class Transcription(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str | None = Field(default=None)
    text: str = Field(nullable=False)
    confidence: float | None = Field(default=None)
    model_name: str = Field(default="base")
    audio_file_name: str | None = Field(default=None)
    resume: str | None = Field(default=None)

    created_at: datetime.datetime = Field(default_factory=datetime.datetime.now)
    is_deleted: bool = Field(default=False)

    topic: Topic | None = Field(
        default=None,
        sa_column=Column(
            SQLAlchemyEnum(
                Topic,
                name="topic",
                values_callable=lambda obj: [e.value for e in obj],
                native_enum=False,
            )
        ),
    )


class TranscriptionResponse(SQLModel):
    id: uuid.UUID
    name: str | None = None
    text: str
    confidence: float | None = None
    model_name: str
    created_at: datetime.datetime
