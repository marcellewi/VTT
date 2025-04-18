"""Create transcription table

Revision ID: d671f7e2aae0
Revises:
Create Date: 2025-04-17 18:45:00.000000

"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects.postgresql import UUID

# revision identifiers, used by Alembic.
revision: str = "d671f7e2aae0"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Create the transcription table."""
    # First check if the table already exists
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    tables = inspector.get_table_names()

    if "transcription" in tables:
        # Table already exists, no need to create it again
        return

    # Create the enum type first
    op.execute(
        """
        CREATE TYPE topic AS ENUM (
            'product', 'technology', 'marketing', 'sales', 'support', 'recurrent_meeting'
        )
        """
    )

    # Now create the table with the enum type
    op.create_table(
        "transcription",
        sa.Column("id", UUID(), primary_key=True),
        sa.Column("name", sa.String(), nullable=True),
        sa.Column("text", sa.Text(), nullable=False),
        sa.Column("confidence", sa.Float(), nullable=True),
        sa.Column("model_name", sa.String(), nullable=False, server_default="base"),
        sa.Column("audio_file_name", sa.String(), nullable=True),
        sa.Column("created_at", sa.DateTime(), nullable=False),
        sa.Column("is_deleted", sa.Boolean(), nullable=False, server_default="false"),
        sa.Column("topic", sa.String(), nullable=True),  # Start with string column
        sa.PrimaryKeyConstraint("id"),
    )

    # Alter the column to use the enum type
    op.execute(
        "ALTER TABLE transcription ALTER COLUMN topic TYPE topic USING topic::text::topic"
    )


def downgrade() -> None:
    """Drop the transcription table."""
    op.drop_table("transcription")
    op.execute("DROP TYPE IF EXISTS topic")
