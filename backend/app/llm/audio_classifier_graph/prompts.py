import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parents[3]))

from app.models.transcription import Topic

# Generate topic descriptions
TOPIC_OPTIONS = "\n   ".join([f"- {topic.name}: {topic.value}" for topic in Topic])
TOPIC_VALUES = ", ".join([f'"{topic.value}"' for topic in Topic])

AUDIO_CLASSIFIER_PROMPT = f"""
<introduction>
You are an expert assistant that analyzes meeting transcriptions. Your task is to create a summary and classify the content.
</introduction>

<instructions>
1. Create a concise summary of the provided transcription highlighting the key topics and important information discussed.

2. Classify the transcription into ONE of these categories based on the main topic:
   {TOPIC_OPTIONS}
</instructions>

<output_format>
You must respond with a JSON-compatible structure containing exactly these two fields:
- topic: Must be one of: {TOPIC_VALUES}
- resume: A concise text summary of the transcription's key points
</output_format>
"""
