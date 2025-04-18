from app.llm.audio_classifier_graph.models import AudioClassifierOutput
from app.llm.audio_classifier_graph.prompts import AUDIO_CLASSIFIER_PROMPT
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import Runnable
from langchain_openai import ChatOpenAI

load_dotenv()


class AudioClassifierChain:
    def __init__(self, text: str, model: str = "gpt-4o"):
        self.text = text
        self.llm = ChatOpenAI(model=model)
        self.chain = self.get_audio_classifier_chain()
        self.prompt_template = self.get_prompt()

    def get_prompt(self):
        return ChatPromptTemplate.from_messages(
            [("system", AUDIO_CLASSIFIER_PROMPT), ("user", f"{self.text}")]
        )

    def classify(self) -> AudioClassifierOutput:
        return self.chain.invoke({"text": self.text})

    def get_audio_classifier_chain(self) -> Runnable:
        return self.prompt_template | self.llm.with_structured_output(
            AudioClassifierOutput
        )
