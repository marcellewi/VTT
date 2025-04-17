import type { NextPage } from 'next'
import Head from 'next/head'
import AudioUploader from '../components/AudioUploader'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>VTT - Voice to Tool</title>
        <meta name="description" content="Convert voice commands to tool actions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Voice to Tool
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Upload audio to transcribe, classify, and convert voice commands into tool actions.
        </p>
        
        <AudioUploader />
      </main>

      <footer className="py-8 text-center text-gray-500">
        <p>VTT - Voice to Tool &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default Home