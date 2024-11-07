import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Dumbbell, MessageCircle, Cpu, Database, Globe } from 'lucide-react'

export default function Component() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-100 text-gray-800 font-sans">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 font-mono text-amber-700">Ambati Rajiv</h1>
          <p className="text-xl text-amber-600">Software Developer</p>
        </header>

        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-800">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200">
              <div className="flex items-center mb-4">
                <Cpu className="mr-2 text-amber-600" />
                <h3 className="text-xl font-semibold text-amber-800">Languages</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200">
              <div className="flex items-center mb-4">
                <Globe className="mr-2 text-amber-600" />
                <h3 className="text-xl font-semibold text-amber-800">Web Design</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200">
              <div className="flex items-center mb-4">
                <Database className="mr-2 text-amber-600" />
                <h3 className="text-xl font-semibold text-amber-800">Database</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700">
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-800">Projects</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-amber-200">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleSection('gym')}
                aria-expanded={activeSection === 'gym'}
                aria-controls="gym-details"
              >
                <div className="flex items-center">
                  <Dumbbell className="mr-2 text-amber-600" />
                  <h3 className="text-xl font-semibold text-amber-800">Gym Management System</h3>
                </div>
                {activeSection === 'gym' ? <ChevronUp className="text-amber-600" /> : <ChevronDown className="text-amber-600" />}
              </button>
              {activeSection === 'gym' && (
                <ul id="gym-details" className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                  <li>Developed a gym management web application using PHP and XAMPP, with a relational database setup via phpMyAdmin.</li>
                  <li>Designed and implemented admin and user panels for gym registration, user management, and trainer selection.</li>
                  <li>Created a trainer form entry system, allowing users to select preferred trainers, enhancing user experience and operational efficiency.</li>
                </ul>
              )}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-amber-200">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleSection('telegram')}
                aria-expanded={activeSection === 'telegram'}
                aria-controls="telegram-details"
              >
                <div className="flex items-center">
                  <MessageCircle className="mr-2 text-amber-600" />
                  <h3 className="text-xl font-semibold text-amber-800">Telegram Media Bot</h3>
                </div>
                {activeSection === 'telegram' ? <ChevronUp className="text-amber-600" /> : <ChevronDown className="text-amber-600" />}
              </button>
              {activeSection === 'telegram' && (
                <ul id="telegram-details" className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                  <li>Developed a Telegram-based media compressor that automatically encodes large files, using formats like AV1, HEVC, AVC for video and Opus, AAC for audio.</li>
                  <li>Designed to convert large media files to a smaller size while maintaining lossless quality, making file sharing more efficient for users.</li>
                </ul>
              )}
            </div>
          </div>
        </section>

        <footer className="text-center text-amber-700">
          <p>&copy; 2023 Ambati Rajiv. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}