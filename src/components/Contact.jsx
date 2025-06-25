"use client"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  }

  const containerVariants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#4169E1] mb-4"
        >
          Let's Connect!
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-700 text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology and innovation. Let's build something amazing together!
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 w-full max-w-2xl mx-auto"
        >
          <motion.a
            href="mailto:shivamprfs@gmail.com"
            className="connect-btn connect-btn--primary flex items-center justify-center gap-2 bg-[#4169E1] hover:bg-[#3158d3] text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px] group"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Send Email</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/shivam-agrawal-profile/"
            className="connect-btn connect-btn--outline flex items-center justify-center gap-2 border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px] group"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          
          <motion.a
            href="https://github.com/Shivamagrawal20"
            className="connect-btn connect-btn--outline flex items-center justify-center gap-2 border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px] group"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Follow on GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 md:mt-12 text-sm md:text-base text-gray-500"
        >
          <p>Available for freelance opportunities and full-time positions</p>
        </motion.div>
      </motion.div>
    </section>
  )
} 