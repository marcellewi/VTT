#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting VTT (Voice to Tool) API..."

# Check required dependencies
if ! command -v poetry &> /dev/null; then
    echo "❌ Poetry is not installed. Please install it first:"
    echo "curl -sSL https://install.python-poetry.org | python3 -"
    exit 1
fi

# Install backend dependencies
echo "📦 Installing backend dependencies..."
poetry install --no-root

# Start backend service
echo "🚀 Starting FastAPI backend..."

# Start backend
poetry run python -m app.main &
BACKEND_PID=$!

# Function to handle script exit
function cleanup {
  echo "🛑 Stopping server..."
  kill $BACKEND_PID 2>/dev/null
  exit 0
}

# Set up trap for clean exit
trap cleanup SIGINT SIGTERM

# Keep script running
echo "✅ Server running!"
echo "📊 Backend: http://localhost:8000"
echo "Press Ctrl+C to stop the server"
wait