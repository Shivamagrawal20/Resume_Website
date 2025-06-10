"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink, Code2, Globe, Star } from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "Resume Website",
    description: "A modern, responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and a clean UI design.",
    image: "/images/project1.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/Shivamagrawal20/resume-website",
    live: "",
    features: [
      "Responsive Design",
      "Dark Mode Support",
      "Smooth Animations",
      "Interactive UI"
    ],
    hackathon: {
      name: "HACKHAZARDS 2025"
    }
  },
  {
    id: 2,
    title: "Interactive AI Tutor",
    description: "A website that uses AI to tutor students",
    image: "/images/project2.png",
    technologies: ["React", "Node.js", "MongoDB", "Express","AI"],
    github: "https://github.com/Shivamagrawal20/AI-powered-eductional-assistant",
    live: "https://shivamagrawal20.github.io/AI-powered-eductional-assistant/",
    features: [
      "User Authentication",
      "User Dashboard",
      "Profile",
      "Payment Integration"
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
    image: "/images/project3.png",
    technologies: ["HTML", "CSS",],
    github: "https://github.com/Shivamagrawal20/informationtaking",
    live: "https://shivamagrawal20.github.io/informationtaking/",
    features: [
      "Real-time Updates",
      "Team Collaboration",
      "Progress Tracking",
      "Task Categories"
    ]
  },
  {
    id: 4,
    title: "MiniShop",
    description: "A simple e-commerce web application with two main tabs — one for submitting products, and one for viewing submitted products with a search feature.",
    image: "/Resume_Website/images/project5.png",
    technologies: ["Express", "PostgreSQL", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Shivamagrawal20/MiniShop",
    live: "https://task-management-shivam.vercel.app",
    features: [
      "Real-time Updates",
      "Team Collaboration",
      "Progress Tracking",
      "Task Categories"
    ]
  },
  {
    id: 5,
    title: "EcoLens",
    description: "Analyze climate data, track pollution levels, and get actionable insights to protect our planet with cutting-edge AI technology powered by MongoDB Atlas.",
    image: "/Resume_Website/images/Project4.png",
    technologies: ["Express", "PostgreSQL", "Node.js", "Tailwind CSS","AI"],
    github: "https://github.com/Shivamagrawal20/EcoLense",
    live: "https://chat-magic-website-builder.lovable.app/",
    features: [
      "Real-time Updates",
      "Made with AI",
      "Integreated with MongoDB Atlas",
      "Used gemini api"
    ]
  }    
]

export default function Projects() {
  return (
    <section className="w-full py-8 px-2 sm:px-4 md:px-8" id="projects">
      <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
        <motion.h2
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 md:mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 dark:bg-dark-bg rounded-xl overflow-hidden border border-gray-100 dark:border-dark-border hover:border-blue-200 dark:hover:border-blue-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
            >
              {/* Project Image */}
              <div className="relative h-32 xs:h-36 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-2 xs:left-3 sm:left-4 right-2 xs:right-3 sm:right-4">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-1 break-words">{project.title}</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded text-white text-xs break-words"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 xs:p-4 sm:p-6">
                {/* Hackathon Badge */}
                {project.hackathon && (
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full gap-2 w-fit mb-2">
                    <span className="text-2xl">🏆</span>
                    <span className="text-[#4169E1] font-bold text-base">{project.hackathon.name}</span>
                  </div>
                )}
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary mb-3 xs:mb-4 line-clamp-3 break-words">{project.description}</p>
                
                {/* Features */}
                <div className="mb-3 xs:mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-dark-text mb-2 flex items-center gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-600 dark:text-dark-text-secondary flex items-center gap-2 break-words">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-dark-text-secondary hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-dark-text-secondary hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats */}
        {/* <motion.div
          className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
              <Code2 className="w-6 h-6" />
              GitHub Statistics
            </h3>
            <a
              href="https://github.com/Shivamagrawal20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
            >
              View Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Repositories", value: "20+" },
              { label: "Contributions", value: "500+" },
              { label: "Stars Earned", value: "15+" },
              { label: "Pull Requests", value: "30+" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-lg p-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
} 