#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting VTT (Voice to Tool)..."

# Check required dependencies
if ! command -v poetry &> /dev/null; then
    echo "❌ Poetry is not installed. Please install it first:"
    echo "curl -sSL https://install.python-poetry.org | python3 -"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    exit 1
fi

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
poetry install --no-root

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd ../frontend
pnpm install

# Start both services
echo "🚀 Starting services..."

# Start backend in background
cd ../backend
poetry run python -m app.main &
BACKEND_PID=$!

# Start frontend in background
cd ../frontend
npm run dev &
FRONTEND_PID=$!

# Function to handle script exit
function cleanup {
  echo "🛑 Stopping servers..."
  kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
  exit 0
}

# Set up trap for clean exit
trap cleanup SIGINT SIGTERM

# Keep script running
echo "✅ Servers running!"
echo "📊 Backend: http://localhost:8000"
echo "🌐 Frontend: http://localhost:3000"
echo "Press Ctrl+C to stop all servers"
wait