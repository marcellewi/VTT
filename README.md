# VTT - Voice to Tool

VTT (Voice to Tool) is a project that translates voice commands into tool actions. It consists of a FastAPI backend for voice processing and a Next.js frontend for user interaction.

## Project Structure

```
VTT/
├── backend/                 # FastAPI app
│   ├── app/
│   │   ├── api/             # API routes
│   │   ├── services/        # Business logic (transcription, classification, summarization)
│   │   ├── llm/             # LangChain, LangGraph, prompts
│   │   ├── models/          # Pydantic models
│   │   ├── utils/           # Helper functions
│   │   └── main.py          # FastAPI application entry point
│   └── pyproject.toml       # Poetry dependencies
├── frontend/                # Next.js app
│   ├── components/          # React components
│   ├── pages/               # Next.js pages
│   ├── lib/                 # API utils, classification, etc.
│   ├── styles/              # CSS styles
│   └── tailwind.config.js   # Tailwind CSS configuration
├── README.md                # Project documentation
└── .env                     # Environment variables
```

## Prerequisites

- Python 3.10 or higher
- Poetry (Python dependency manager)
- Node.js 18 or higher
- npm or yarn

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd VTT
```

### 2. Set up the backend

```bash
cd backend

# Install dependencies with Poetry
poetry install

# Activate the virtual environment
poetry shell

# Run the development server
python -m app.main
```

The backend will be running at http://localhost:8000

### 3. Set up the frontend

```bash
cd frontend

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

The frontend will be running at http://localhost:3000

### 4. Configure environment variables

Copy the `.env.example` file to `.env` and update the values:

```bash
cp .env.example .env
```

Then edit the `.env` file to include your API keys and other settings.

## Features

- **Voice Transcription**: Upload audio files to convert speech to text
- **Command Classification**: Identify the intent and entities in the transcribed text
- **Tool Integration**: Execute actions based on the classified commands
- **Modern UI**: Clean, responsive interface built with Tailwind CSS

## Development

### Adding new tools

To add new tools:

1. Create a new service in `backend/app/services/`
2. Add routes in `backend/app/api/`
3. Update the frontend to support the new tool

### Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key for transcription and LLM tasks
- `BACKEND_PORT`: Port for the FastAPI backend (default: 8000)
- `NEXT_PUBLIC_API_URL`: URL for the frontend to access the backend API

## License

MIT
