"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Book, ChevronDown, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    id: "edu-1",
    type: "education",
    title: "B.Tech - Computer Science",
    institution: "GLA University",
    period: "2023-2027",
    status: "Currently Pursuing",
    icon: GraduationCap,
    color: "bg-emerald-500",
    location: "Mathura, India",
    details: ["Computer Science Engineering", "Software Development Focus", "Data Structures & Algorithms"],
    achievements: [
      "Maintaining 8.5+ CGPA in core computer science subjects",
      "Active member of coding club and tech societies",
      "Participated in multiple hackathons and coding competitions",
      "Leading student projects in web development and AI/ML",
    ],
    subjects: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "Machine Learning",
    ],
  },
  {
    id: "edu-2",
    type: "education",
    title: "Higher Secondary Education",
    institution: "PRFS Mathura",
    period: "2020-2023",
    status: "Completed",
    icon: Book,
    color: "bg-indigo-500",
    location: "Mathura, India",
    details: ["Science Stream", "Mathematics & Computer Science", "Academic Excellence"],
    achievements: [
      "Graduated with distinction in Mathematics and Computer Science",
      "Secured 90%+ marks in board examinations",
      "Won inter-school coding competition",
      "Led school's computer science club",
    ],
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"],
  },
]

export default function Education() {
  const [expandedItem, setExpandedItem] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <section className="w-full py-8 px-2 sm:px-2 md:px-4" id="education">
      <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-2 md:p-4">
        <motion.h2
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-4 sm:mb-8 text-center break-words"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-400/30" />
          <div className="space-y-6 sm:space-y-8">
            {educationData.map((item, index) => {
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
                                {item.title}
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
                                {item.status}
                              </span>
                            </div>
                          </div>
                          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                          </motion.div>
                        </div>
                        {/* Basic details - always visible */}
                        <div className="mt-3 sm:mt-4">
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {item.details.map((detail, idx) => (
                              <motion.span
                                key={idx}
                                className="text-gray-700 text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded break-words"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                • {detail}
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
                                      <span className="text-green-600 mt-1">✓</span>
                                      {achievement}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-purple-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Subjects & Skills</h4>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                  {item.subjects.map((subject, idx) => (
                                    <motion.span
                                      key={idx}
                                      className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs sm:text-sm break-words"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: idx * 0.05 }}
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      {subject}
                                    </motion.span>
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