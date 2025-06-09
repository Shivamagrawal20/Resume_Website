"use client"
import { Code2, PlayCircle, Calendar, Users, User } from "lucide-react"

const hackathons = [
  {
    img: "/assets/HARACARDS.png",
    alt: "HACKHAZARS",
    title: "HACKHAZARS 2025",
    date: "11-17 April 2025",
    teamSize: 4,
    role: "Leader",
    // result: "Finalist",
    desc: "Participated in HACKHAZARDS '25, the world's largest independent community-run hackathon organized by The NAMESPACE Community during 11-27 April 2025. The event brought together over 17,000 hackers across 25+ countries for cutting-edge projects across AI, Web3, Software, Infra and more..",
    projectLink: "https://github.com/Shivamagrawal20/AI-powered-eductional-assistant",
    videoLink: "https://www.youtube.com/watch?v=4p5BH5IKX8E"
  },
  {
    img: "/assets/technexus.jpeg",
    alt: "Clash of codes 2.0",
    title: "Clash of codes 2.0",
    date: "10 Nov 2024",
    teamSize: 4,
    role: "Full Stack Developer",
    desc: "Participated in Round 1 of the Clash of Codes v1.0, held on 10th November 2024, organized by the TechNexus Community.",
    projectLink: "",
    videoLink: " "
  },
  {
    img: "/assets/oddo.png",
    alt: "Oddo 2024",
    title: "Oddo 2024",
    date: "30 June 2024",
    teamSize: 5,
    role: "Information taking webpage",
    desc: "Participated in Oddo 2024, a 24-hour hackathon organized by the Oddo Community.",
    projectLink: "https://github.com/Shivamagrawal20/informationtaking",
    videoLink: "https://shivamagrawal20.github.io/informationtaking/"
  }
]

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="py-10 xs:py-12 sm:py-16 px-2 xs:px-4 max-w-6xl mx-auto">
      <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-[#4169E1] text-center mb-6 xs:mb-8 sm:mb-10 break-words">Hackathons</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 xs:gap-6 pb-2 xs:pb-4">
          {hackathons.map((hack, idx) => (
            <div key={idx} className="min-w-[220px] xs:min-w-[260px] sm:min-w-[340px] max-w-[90vw] sm:max-w-[340px] bg-white rounded-2xl shadow-lg flex flex-col">
              <div className="hacathon-image p-2 xs:p-4">
                <img
                  src={hack.img}
                  alt={hack.alt}
                  className="rounded-lg w-full h-28 xs:h-36 sm:h-44 object-cover bg-white border border-gray-200 shadow-sm p-1 xs:p-2"
                  onError={e => { e.target.src = "/assets/default-hackathon.png"; }}
                />
              </div>
              <div className="hacathon-content px-3 xs:px-4 pb-3 xs:pb-4 flex flex-col flex-1">
                <h3 className="text-base xs:text-lg font-bold text-[#4169E1] mb-1 xs:mb-2 break-words">{hack.title}</h3>
                <div className="hacathon-meta flex flex-wrap gap-2 xs:gap-3 mb-1 xs:mb-2 text-xs xs:text-sm text-gray-600">
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3 xs:w-4 xs:h-4" /><span>{hack.date}</span></div>
                  <div className="flex items-center gap-1"><Users className="w-3 h-3 xs:w-4 xs:h-4" /><span>Team Size: {hack.teamSize}</span></div>
                  <div className="flex items-center gap-1"><User className="w-3 h-3 xs:w-4 xs:h-4" /><span>Role: {hack.role}</span></div>
                  {/* {hack.result && (
                    <div className="flex items-center gap-1 text-yellow-600 font-semibold"><Trophy className="w-4 h-4" /><span>{hack.result}</span></div>
                  )} */}
                </div>
                <p className="text-gray-700 text-xs xs:text-sm mb-2 xs:mb-3 break-words">{hack.desc}</p>
                <div className="hacathon-links flex flex-wrap gap-2 xs:gap-3 mt-auto">
                  {hack.projectLink && hack.projectLink.trim() !== "" && hack.projectLink !== "#" ? (
                    <a href={hack.projectLink} className="hacathon-link project-link-btn flex items-center gap-1 xs:gap-2 text-white bg-[#4169E1] hover:bg-[#3158d3] px-2.5 xs:px-3 py-1.5 xs:py-2 rounded-lg font-medium transition text-xs xs:text-sm" target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-4 h-4" /> <span>View Project</span>
                    </a>
                  ) : (
                    <span className="hacathon-link project-link-btn flex items-center gap-1 xs:gap-2 text-white bg-gray-400 px-2.5 xs:px-3 py-1.5 xs:py-2 rounded-lg font-medium text-xs xs:text-sm cursor-not-allowed">
                      <Code2 className="w-4 h-4" /> <span>View Project</span>
                    </span>
                  )}
                  {hack.videoLink && hack.videoLink.trim() !== "" ? (
                    <a href={hack.videoLink} className="hacathon-link video-link-btn flex items-center gap-1 xs:gap-2 text-white bg-[#388e3c] hover:bg-[#256029] px-2.5 xs:px-3 py-1.5 xs:py-2 rounded-lg font-medium transition text-xs xs:text-sm" target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="w-4 h-4" /> <span>Watch Demo</span>
                    </a>
                  ) : (
                    <span className="hacathon-link video-link-btn flex items-center gap-1 xs:gap-2 text-white bg-gray-400 px-2.5 xs:px-3 py-1.5 xs:py-2 rounded-lg font-medium text-xs xs:text-sm cursor-not-allowed">
                      <PlayCircle className="w-4 h-4" /> <span>Watch Demo</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 