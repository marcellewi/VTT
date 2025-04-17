import axios from 'axios';
import { useState } from 'react';

const AudioUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please select an audio file');
      return;
    }

    const formData = new FormData();
    formData.append('audio', file);

    setLoading(true);
    setTranscription('');
    setError('');

    try {
      const response = await axios.post('/api/transcription', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTranscription(response.data.text);
    } catch (err) {
      setError('Failed to transcribe audio. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Audio Transcription</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Audio File
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
        >
          {loading ? 'Transcribing...' : 'Transcribe Audio'}
        </button>
      </form>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {transcription && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Transcription Result</h3>
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <p className="text-gray-700">{transcription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioUploader; 