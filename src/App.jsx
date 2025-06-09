"use client"
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-72 flex-shrink-0">
              <Sidebar />
            </div>
            <main className="flex-1 w-full">
              <div className="max-w-4xl mx-auto space-y-12 p-0.5 md:p-1 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Achievements />
                <Hackathons />
                <Contact />
              </div>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
} 