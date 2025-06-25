"use client"
import { Mail, Linkedin, Github, Heart, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: "Email",
      url: "mailto:shivamprfs@gmail.com",
      icon: Mail,
      color: "hover:text-red-500"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shivam-agrawal-profile/",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/Shivamagrawal20",
      icon: Github,
      color: "hover:text-gray-800"
    }
  ]

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="text-center sm:text-left order-1 sm:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#4169E1] mb-2">
              Shivam Agrawal
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-1">
              Full Stack Developer & Tech Enthusiast
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Building innovative solutions with modern technologies
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center order-3 sm:order-2 lg:order-2">
            <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="flex flex-col space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <a 
                href="#about" 
                className="text-gray-600 hover:text-[#4169E1] transition-colors duration-200 py-1"
              >
                About Me
              </a>
              <a 
                href="#experience" 
                className="text-gray-600 hover:text-[#4169E1] transition-colors duration-200 py-1"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 hover:text-[#4169E1] transition-colors duration-200 py-1"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-[#4169E1] transition-colors duration-200 py-1"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center sm:text-right order-2 sm:order-3">
            <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Connect With Me</h4>
            <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 ${social.color} group`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-600 text-xs sm:text-sm order-2 sm:order-1">
              © {currentYear} Shivam Agrawal. All rights reserved.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600 order-1 sm:order-2">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
              <span>using React & Vite</span>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 order-3 sm:order-3">
              <a 
                href="/resume/ShivamAgrawal.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-[#4169E1] transition-colors duration-200"
              >
                <span>Resume</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 