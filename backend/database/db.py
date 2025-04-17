import os

from dotenv import load_dotenv
from sqlmodel import Session, SQLModel, create_engine

# Load environment variables
load_dotenv()

# Get PostgreSQL connection string from environment variables
DATABASE_URL = os.getenv(
    "DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/vtt_db"
)

# Create an engine to connect to the database
engine = create_engine(
    DATABASE_URL,
    echo=True,  # Set to False in production
)


def create_db_and_tables():
    """Create the database and tables."""
    SQLModel.metadata.create_all(engine)


def get_session():
    """Get a database session."""
    with Session(engine) as session:
        yield session
