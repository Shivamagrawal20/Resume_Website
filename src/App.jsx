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
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
        <Sidebar />
        <main className="md:ml-64 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </ThemeProvider>
  )
} 