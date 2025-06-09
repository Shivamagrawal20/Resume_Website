"use client"
import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import { Sun, Moon, Menu, X } from "lucide-react"

const navItems = [
  { name: "About Me", id: "about" },
  { name: "Work Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Hackathons", id: "hackathons" },
  { name: "Contact Me", id: "contact" },
]

export default function Sidebar() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-blue-500 text-white shadow-lg md:hidden"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-slate-900 dark:bg-dark-bg border-r border-gray-800 dark:border-dark-border z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-500 shadow-lg">
              <img
                src="/assets/profilefinal.png"
                alt="Shivam Agrawal"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-extrabold tracking-wide text-white text-center leading-tight">
              SHIVAM <span className="text-blue-400">AGRAWAL</span>
            </h1>
            <h2 className="text-blue-200 text-lg font-semibold mt-1 tracking-wide">
              STUDENT
            </h2>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/shivam-agrawal-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 text-2xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Shivamagrawal20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white text-2xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:shivamprfs@gmail.com"
                className="text-blue-200 hover:text-blue-400 text-2xl"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-500 text-white"
                        : "hover:bg-blue-500/20"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-blue-500">•</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle and CV Download */}
          <div className="space-y-4 pt-4 border-t border-gray-800 dark:border-dark-border">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 bg-blue-500/10 text-blue-400 px-5 py-2 rounded-lg font-semibold hover:bg-blue-500/20 transition"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-5 h-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <a
              href="/resume/ShivamAgrawal.pdf"
              download
              className="block w-full text-center px-5 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition flex items-center justify-center gap-2"
            >
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
      </aside>
    </>
  )
} 