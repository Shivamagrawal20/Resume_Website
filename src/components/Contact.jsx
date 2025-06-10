"use client"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-[#4169E1] mb-4">Let's Connect!</h2>
      <p className="text-gray-700 text-lg mb-8">
        I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology and innovation. Let's build something amazing together!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="mailto:shivamprfs@gmail.com"
          className="connect-btn connect-btn--primary flex items-center justify-center gap-2 bg-[#4169E1] hover:bg-[#3158d3] text-white font-semibold px-6 py-3 rounded-lg transition text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-5 h-5" />
          <span>Send Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-agrawal-profile/"
          className="connect-btn connect-btn--outline flex items-center justify-center gap-2 border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white font-semibold px-6 py-3 rounded-lg transition text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
          <span>Connect on LinkedIn</span>
        </a>
        <a
          href="https://github.com/Shivamagrawal20"
          className="connect-btn connect-btn--outline flex items-center justify-center gap-2 border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white font-semibold px-6 py-3 rounded-lg transition text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
          <span>Follow on GitHub</span>
        </a>
      </div>
    </section>
  )
} 