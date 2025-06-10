"use client"
import { motion } from "framer-motion"
import { Code, Database, Palette, Server, Smartphone, Globe } from "lucide-react"

const skillsData = {
  "Frontend Development": {
    icon: Palette,
    color: "bg-blue-500",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3/Tailwind", level: 90 },
      
    ]
  },
  "Backend Development": {
    icon: Server,
    color: "bg-green-500",
    skills: [
      { name: "Python", level: 75 },
      ]
  },
  "Database & Cloud": {
    icon: Database,
    color: "bg-purple-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ]
  
  },
  
  
}

export default function Skills() {
  return (
    <section className="w-full py-8 px-2 sm:px-4 md:px-8" id="skills">
      <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-2 md:p-4">
        <motion.h2
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-4 sm:mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {Object.entries(skillsData).map(([category, data], index) => {
            const Icon = data.icon
            return (
              <motion.div
                key={category}
                className="bg-gray-50 rounded-xl p-3 sm:p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${data.color}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold text-gray-800">{category}</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {data.skills.map((skill, idx) => (
                    <div key={skill.name} className="space-y-1 sm:space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-8 sm:mt-12 bg-blue-50 rounded-xl p-4 sm:p-8 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base sm:text-xl font-semibold text-blue-800 mb-3 sm:mb-4">Additional Skills</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Problem Solving",
              "Team Leadership",
              "Project Management",
              "Technical Writing",
              "Public Speaking",
              "UI/UX Design",
              "Agile Methodologies",
              "Code Review",
              "Documentation",
              "Mentoring",
              "Research",
              "Innovation"
            ].map((skill, idx) => (
              <motion.span
                key={skill}
                className="px-2.5 py-1 sm:px-4 sm:py-2 bg-white rounded-full text-blue-600 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-default break-words"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "white" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 