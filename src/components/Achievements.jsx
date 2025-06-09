"use client"
import { ExternalLink } from "lucide-react"

const achievements = [
  {
    img: "/assets/google ai workshop.png",
    alt: "Bring ai Workspace",
    title: "Bring ai Workspace",
    desc: "A detailed workshop on how to use AI in your workspace",
    issuer: "Google Workspace",
    year: "5 June 2025",
    link: ""
  },
  {
    img: "/assets/NPTEL.png",
    alt: "Introduction to Environmental Engineering and Science - Fundamental and Sustainability Concepts",
    title: "Introduction to Environmental Engineering and Science - Fundamental and Sustainability Concepts",
    desc: "A detailed workshop on how to use AI in your workspace",
    issuer: "NPTEL",
    year: "2025",
    link: ""
  },
  {
    img: "/assets/udemy.jpg",
    alt: "Udemy Certificate",
    title: "The Complete Python Bootcamp",
    desc: "Python programming fundamentals, data structures, and object-oriented programming.",
    issuer: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-96af47ef-b91d-41b2-a89e-6c8af50a93df/"
  },
  {
    img: "/assets/postman.png",
    alt: "Postman Certificate",
    title: "Postman API Fundamentals Student Expert",
    desc: "API testing, documentation, and automation using Postman.",
    issuer: "Postman",
    year: "2025",
    link: "https://badgr.com/public/assertions/your-postman-certificate-id"
  },
  {
    img: "/assets/hacklikeapro.png",
    alt: "Postman Certificate",
    title: "",
    desc: "HACK LIKE A PRO- WIN THE ULTIMATE CTF BATTLE A 5 DAY BATTLE",
    issuer: "Devtown",
    year: "2 June 2025",
    link: ""
  },
  {
    img: "/assets/oneroadmap.png",
    alt: "Data Analyst Certification",
    title: "One Roadmap Skill Certification Test",
    desc: "Data Analysis fundamentals including statistics, SQL, data visualization, and analytical tools.",
    issuer: "oneroadmap",
    year: "2025",
    link: "https://oneroadmap.io/skills/da/certificate/CERT-0AA9720D"
  },
  {
    img: "/assets/unstop-min.jpg",
    alt: "Unstop Certificate",
    title: "E-Commerce & Tech Quiz",
    desc: "Flipkart GRiD 6.0 - Software Development Track participation certificate.",
    issuer: "Unstop",
    year: "2025",
    link: "https://unstop.com/certificate-preview/0572ade8-61ea-45b3-b1f3-325083f78ffd"
  },
  {
    img: "/assets/mastry.png",
    alt: "mastry certificate",
    title: "UI/UX DESIGN",
    desc: "UI/UX design for begginers",
    issuer: "Mastry",
    year: "2025",
    link: "#"
  }
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-10 xs:py-12 sm:py-16 px-2 xs:px-4 max-w-6xl mx-auto">
      <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-[#4169E1] text-center mb-6 xs:mb-8 sm:mb-10 break-words">Achievements & Certificates</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 xs:gap-6 pb-2 xs:pb-4">
          {achievements.map((ach, idx) => (
            <div key={idx} className="min-w-[220px] xs:min-w-[260px] sm:min-w-[320px] max-w-[90vw] sm:max-w-[320px] bg-white rounded-2xl shadow-lg flex flex-col">
              <div className="certificate-image p-2 xs:p-4">
                <img src={ach.img} alt={ach.alt} className="rounded-lg w-full h-28 xs:h-36 sm:h-40 object-cover" />
              </div>
              <div className="achievement-content px-3 xs:px-4 pb-3 xs:pb-4 flex flex-col flex-1">
                <h3 className="text-base xs:text-lg font-bold text-[#4169E1] mb-1 break-words">{ach.title}</h3>
                <p className="text-xs xs:text-sm text-gray-700 mb-1 xs:mb-2 break-words">{ach.desc}</p>
                <span className="issuer text-[#4169E1] font-semibold text-xs xs:text-sm">{ach.issuer}</span>
                <span className="year text-gray-500 text-xs mb-1 xs:mb-2">{ach.year}</span>
                {ach.link && (
                  <a
                    href={ach.link}
                    className="certificate-link mt-auto inline-flex items-center gap-2 text-white bg-[#4169E1] hover:bg-[#3158d3] px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg font-medium transition text-xs xs:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" /> Verify Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="view-more-badges text-center mt-8 xs:mt-12">
        <p className="text-gray-600 text-base xs:text-lg mb-3 xs:mb-4">View more of my certifications and badges</p>
        <a
          href="https://www.credly.com/users/shivam-agrawal.21"
          className="credly-link inline-block w-full max-w-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="credly-box bg-[#388e3c] hover:bg-[#256029] px-6 xs:px-12 py-2.5 xs:py-3 rounded-xl flex items-center justify-center">
            <span className="credly-text text-white font-bold text-lg xs:text-2xl">Credly</span>
          </div>
        </a>
      </div>
    </section>
  )
} 