"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, GraduationCap, Network, ChevronDown, Calendar, MapPin } from "lucide-react"

const workExperience = [
  {
    id: 1,
    company: "Abacus Society",
    period: "2023 to Present",
    role: "Social Media Associate",
    icon: Code,
    color: "bg-purple-500",
    location: "Hybrid",
    responsibilities: ["Social Media Associate", "Designing and Editing Videos", "Canva Creator"],
    achievements: [
      "Increased social media engagement by 150% across all platforms",
      "Created 50+ video content pieces for marketing campaigns",
      "Designed brand-consistent graphics using Canva and Adobe Creative Suite",
    ],
    technologies: ["Canva", "Adobe Premiere", "After Effects", "Figma"],
  },
  {
    id: 2,
    company: "Rinex",
    period: "2024 (2 months)",
    role: "Web Developer",
    icon: Code,
    color: "bg-blue-500",
    location: "Remote",
    responsibilities: ["Web Development", "Frontend Development", "UI/UX Design"],
    achievements: [
      "Built responsive web applications using React and Next.js",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Improved website performance by 40% through optimization techniques",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    company: "Devtown",
    period: "2024 (2 months)",
    role: "Student Ambassador",
    icon: GraduationCap,
    color: "bg-green-500",
    location: "Remote",
    responsibilities: ["Student Ambassador", "Technical Content Creation", "Community Management"],
    achievements: [
      "Mentored 100+ students in web development fundamentals",
      "Created technical blog posts with 10K+ total views",
      "Organized virtual coding workshops and hackathons",
    ],
    technologies: ["Community Building", "Content Writing", "Event Management"],
  },
  {
    id: 4,
    company: "Intershalla",
    period: "2024 (3 months)",
    role: "Technical Support Specialist",
    icon: Network,
    color: "bg-orange-500",
    location: "On-site",
    responsibilities: ["Internet Service Provider", "Network Management", "Customer Support"],
    achievements: [
      "Resolved 95% of customer issues within first contact",
      "Managed network infrastructure for 500+ clients",
      "Reduced average response time by 30% through process optimization",
    ],
    technologies: ["Network Administration", "Customer Service", "Technical Support"],
  },
]

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <section className="w-full py-8 px-2 sm:px-4 md:px-8" id="experience">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-12">
        <motion.h2
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-4 sm:mb-8 text-center break-words"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-400/30" />
          <div className="space-y-6 sm:space-y-8">
            {workExperience.map((item, index) => {
              const Icon = item.icon
              const isExpanded = expandedItem === item.id
              const isHovered = hoveredItem === item.id

              return (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${item.color} border-2 sm:border-4 border-white z-10`}
                    animate={{
                      scale: isHovered ? 1.3 : 1,
                      boxShadow: isHovered ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Content card */}
                  <motion.div
                    className="ml-8 sm:ml-16"
                    animate={{
                      scale: isHovered ? 1.02 : 1,
                      y: isHovered ? -2 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="rounded-xl bg-gray-50 border border-blue-100 hover:border-blue-400/50 transition-all duration-300 cursor-pointer shadow-md mb-2 w-full max-w-full overflow-hidden"
                      onClick={() => toggleExpanded(item.id)}
                    >
                      <div className="p-3 sm:p-6">
                        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-0">
                          <div className="flex items-center gap-2 sm:gap-4 w-full flex-wrap">
                            <motion.div
                              className={`p-2 sm:p-3 rounded-full ${item.color} shrink-0`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </motion.div>
                            <div className="min-w-0">
                              <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 break-words">
                                {item.company}
                              </h3>
                              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-blue-600 text-xs sm:text-sm mb-1 sm:mb-2">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="break-words">{item.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="break-words">{item.location}</span>
                                </div>
                              </div>
                              <span className="inline-block bg-blue-100 text-blue-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs font-semibold break-words">
                                {item.role}
                              </span>
                            </div>
                          </div>
                          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                          </motion.div>
                        </div>
                        {/* Basic responsibilities - always visible */}
                        <div className="mt-3 sm:mt-4">
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {item.responsibilities.map((resp, idx) => (
                              <motion.span
                                key={idx}
                                className="text-gray-700 text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded break-words"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                • {resp}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        {/* Expanded content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 sm:mt-6 space-y-2 sm:space-y-4"
                            >
                              <div>
                                <h4 className="text-green-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Key Achievements</h4>
                                <ul className="space-y-1">
                                  {item.achievements.map((achievement, idx) => (
                                    <motion.li
                                      key={idx}
                                      className="text-gray-700 text-xs sm:text-sm flex items-start gap-2 break-words"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                    >
                                      {achievement}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-blue-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Technologies Used</h4>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                  {item.technologies.map((tech, idx) => (
                                    <span
                                      key={idx}
                                      className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs sm:text-sm font-medium break-words"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 