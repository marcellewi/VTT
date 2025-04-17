#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting VTT (Voice to Tool) setup..."
echo ""

# Ensure .env file exists
if [ ! -f .env ]; then
    echo "📄 Creating .env file..."
    cat > .env << EOL
# Backend settings
BACKEND_PORT=8000
BACKEND_HOST=localhost

# Frontend settings
NEXT_PUBLIC_API_URL=http://localhost:8000

# OpenAI API (for transcription and LLM)
OPENAI_API_KEY=your_openai_api_key_here
EOL
    echo "⚠️  Please edit .env file and add your OpenAI API key"
fi

# Check if Poetry is installed
if ! command -v poetry &> /dev/null; then
    echo "❌ Poetry is not installed. Please install it first:"
    echo "curl -sSL https://install.python-poetry.org | python3 -"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    exit 1
fi

# Setup backend
echo "🔧 Setting up backend..."
cd backend || mkdir -p backend && cd backend

# Install dependencies
echo "📦 Installing backend dependencies..."
poetry install --no-root

# Setup frontend
echo "🔧 Setting up frontend..."
cd ../frontend || mkdir -p ../frontend && cd ../frontend

# Install dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Create run script for both services
echo "🔧 Creating start script..."
cd ..
cat > run.sh << EOL
#!/bin/bash

# Start backend in background
echo "🚀 Starting backend server..."
cd backend
poetry run python -m app.main &
BACKEND_PID=\$!

# Start frontend in background
echo "🚀 Starting frontend server..."
cd ../frontend
npm run dev &
FRONTEND_PID=\$!

# Function to handle script exit
function cleanup {
  echo "🛑 Stopping servers..."
  kill \$BACKEND_PID \$FRONTEND_PID 2>/dev/null
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
EOL

chmod +x run.sh

echo "✅ Setup complete!"
echo "📝 To start the application, run: ./run.sh"