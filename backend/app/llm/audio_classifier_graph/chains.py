import logging
import os
import traceback

from app.llm.audio_classifier_graph.models import AudioClassifierOutput
from app.llm.audio_classifier_graph.prompts import AUDIO_CLASSIFIER_PROMPT
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

load_dotenv()

logger = logging.getLogger(__name__)


class AudioClassifierChain:
    def __init__(self, text: str, model: str = "gpt-4o"):
        self.API_KEY = os.getenv("OPENAI_API_KEY")
        self.text = text
        self.llm = ChatOpenAI(model=model, api_key=self.API_KEY)
        self.prompt_template = self.get_prompt()
        self.chain = self.get_audio_classifier_chain()

    def get_prompt(self):
        prompt = ChatPromptTemplate.from_messages(
            [("system", AUDIO_CLASSIFIER_PROMPT), ("user", self.text)]
        )
        return prompt

    def classify(self) -> AudioClassifierOutput:
        try:
            return self.chain.invoke({"text": self.text})
        except Exception as e:
            logger.error(f"Error during classification: {e}")
            logger.error(traceback.format_exc())
            raise

    def get_audio_classifier_chain(self):
        try:
            chain = self.prompt_template | self.llm.with_structured_output(
                AudioClassifierOutput,
            )
            return chain
        except Exception as e:
            logger.error(f"Error creating chain: {e}")
            logger.error(traceback.format_exc())
            raise
