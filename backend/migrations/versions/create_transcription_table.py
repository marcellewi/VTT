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
    # Create enum type for Topic
    op.execute(
        """
        CREATE TYPE topic AS ENUM (
            'product', 'technology', 'marketing', 'sales', 'support', 'recurrent_meeting'
        )
        """
    )

    # Create transcription table
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
        sa.Column(
            "topic",
            sa.Enum(
                "product",
                "technology",
                "marketing",
                "sales",
                "support",
                "recurrent_meeting",
                name="topic",
                native_enum=True,
            ),
            nullable=True,
        ),
        sa.PrimaryKeyConstraint("id"),
    )


def downgrade() -> None:
    """Drop the transcription table."""
    op.drop_table("transcription")
    op.execute("DROP TYPE topic")
