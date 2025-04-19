import {
  ArrowRight,
  Braces,
  ChevronRight,
  Code,
  FileCode,
  FileText,
  Lightbulb,
  MessageSquare,
  Mic,
  Sparkles,
  Users,
  Zap
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
    
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black -z-10" />

     
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10 -z-10" />

     
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl">VTT</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#integrations" className="text-gray-300 hover:text-white transition-colors">
            Integrations
          </Link>
          <Link href="#meeting-types" className="text-gray-300 hover:text-white transition-colors">
            Meeting Types
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
            Get Started
          </Button>
        </div>
      </header>

  
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
      
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium text-violet-300">AI-Powered Meeting Assistant</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-indigo-200">
            Transform Your Meetings Into Actionable Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Automatically transcribe, summarize, and route your meeting insights to the right tools based on meeting
            type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-lg py-6 px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-700 text-lg py-6 px-8 bg-white hover:bg-gray-100">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">Watch Demo</span>
            </Button>
          </div>
        </div>
      </section>

   
      <section className="container mx-auto px-4 py-20" id="features">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform streamlines your meeting workflow from voice to actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 relative group hover:border-violet-500/50 transition-all duration-300">
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Mic className="w-8 h-8" />
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-bold mb-3 mt-4">Voice Transcription</h3>
              <p className="text-gray-400">
                Upload your meeting recording or connect in real-time for instant voice-to-text transcription with
                speaker recognition.
              </p>
            </div>
          </div>

         
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 relative group hover:border-violet-500/50 transition-all duration-300">
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8" />
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-bold mb-3 mt-4">AI Summarization</h3>
              <p className="text-gray-400">
                Our AI analyzes the transcription to extract key points, action items, and decisions based on meeting
                type.
              </p>
            </div>
          </div>

         
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 relative group hover:border-violet-500/50 transition-all duration-300">
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-8 h-8" />
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-bold mb-3 mt-4">Smart Routing</h3>
              <p className="text-gray-400">
                Send your meeting insights to the right tools automatically based on meeting type and your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="container mx-auto px-4 py-20 relative" id="meeting-types">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimized for Every Meeting Type</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Different meetings need different approaches. Our AI adapts to extract the most relevant information.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-violet-900/50 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-violet-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Product Meetings</h3>
            <p className="text-gray-400 mb-4">
              Captures feature requests, prioritization decisions, and product roadmap updates.
            </p>
            <div className="flex items-center text-violet-400 font-medium">
              <span>Integrates with</span>
              <div className="flex ml-2">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center -ml-1 first:ml-0">
                  N
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center -ml-1">V</div>
              </div>
            </div>
          </div>

         
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-indigo-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Engineering Meetings</h3>
            <p className="text-gray-400 mb-4">
              Extracts technical decisions, architecture plans, and development tasks.
            </p>
            <div className="flex items-center text-indigo-400 font-medium">
              <span>Integrates with</span>
              <div className="flex ml-2">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center -ml-1 first:ml-0">
                  G
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center -ml-1">J</div>
              </div>
            </div>
          </div>

         
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Team Meetings</h3>
            <p className="text-gray-400 mb-4">Identifies action items, responsibilities, and team decisions.</p>
            <div className="flex items-center text-blue-400 font-medium">
              <span>Integrates with</span>
              <div className="flex ml-2">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center -ml-1 first:ml-0">
                  C
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center -ml-1">S</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="container mx-auto px-4 py-20 relative" id="integrations">
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with your favorite tools to streamline your workflow
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {integrationItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 flex flex-col items-center justify-center hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-gray-700">
            View All Integrations
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

     
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-violet-900/20 to-indigo-900/20 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">See It In Action</h2>
              <p className="text-gray-300 mb-8">
                Watch how VTT transforms a product meeting recording into actionable insights and automatically routes
                them to Notion.
              </p>
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 w-fit text-white">
                Watch Demo
              </Button>
            </div>
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center cursor-pointer border border-gray-700">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Demo video thumbnail"
                width={600}
                height={400}
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </section>

    
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-indigo-200">
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams using VTT to capture and utilize meeting insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-lg py-6 px-8">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-700 text-lg py-6 px-8">
              Contact Sales
            </Button>
          </div>
          <p className="text-gray-500 mt-4">No credit card required. 14-day free trial.</p>
        </div>
      </section>

     
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">VTT</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered meeting assistant that transforms conversations into actionable insights.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} VTT. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const integrationItems = [
  { name: "Notion", icon: <MessageSquare className="w-5 h-5 text-gray-300" /> },
  { name: "V0", icon: <Braces className="w-5 h-5 text-gray-300" /> },
  { name: "Claude", icon: <Sparkles className="w-5 h-5 text-gray-300" /> },
  { name: "GitHub", icon: <Code className="w-5 h-5 text-gray-300" /> },
  { name: "Slack", icon: <MessageSquare className="w-5 h-5 text-gray-300" /> },
  { name: "Drive", icon: <FileCode className="w-5 h-5 text-gray-300" /> },
  { name: "More to come", icon: <Users className="w-5 h-5 text-gray-300" /> },
]
