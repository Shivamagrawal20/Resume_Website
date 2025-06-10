import React from 'react';

export default function About() {
  return (
    <section className="w-full py-12 px-2 md:px-4" id="about">
      <div className="bg-white rounded-2xl shadow-lg p-2 md:p-4 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4 p-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2 text-center md:text-left">About Me</h2>
          <p className="text-lg font-medium text-gray-700 mb-4 text-center md:text-left">Full Stack Developer & Tech Enthusiast</p>
          <p className="text-gray-700">
            I'm a passionate Computer Science student with a keen interest in web development and software engineering. My journey in tech is driven by a constant desire to learn and create impactful solutions. I specialize in building modern, responsive web applications using cutting-edge technologies.
          </p>
          <p className="text-gray-700">
            Beyond coding, I'm deeply involved in the tech community. I actively participate in hackathons, mentor fellow developers, and contribute to open-source projects. My approach combines technical expertise with creative problem-solving, always focusing on delivering exceptional user experiences.
          </p>
          <ul className="flex flex-wrap gap-4 mt-4 text-gray-700">
            <li className="flex items-center gap-2"><span role="img" aria-label="cap">🎓</span> B.Tech in Computer Science</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="calendar">📅</span> Open to Opportunities</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="location">📍</span> Mathura, Uttar Pradesh</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="email">✉️</span> shivamprfs@gmail.com</li>
          </ul>
        </div>
        <div className="flex-1 w-full max-w-xs">
          <div className="bg-gray-50 rounded-xl shadow p-2">
            <h3 className="text-lg font-bold text-center mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-2 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                <span className="block text-2xl font-bold text-blue-600 group-hover:text-blue-700">6.7</span>
                <span className="text-gray-600 group-hover:text-gray-700">CPI</span>
              </div>
              <div className="bg-white rounded-lg p-2 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                <span className="block text-2xl font-bold text-blue-600 group-hover:text-blue-700">4+</span>
                <span className="text-gray-600 group-hover:text-gray-700">Projects</span>
              </div>
              <div className="bg-white rounded-lg p-2 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                <span className="block text-2xl font-bold text-blue-600 group-hover:text-blue-700">100+</span>
                <span className="text-gray-600 group-hover:text-gray-700">GitHub Commits</span>
              </div>
              <div className="bg-white rounded-lg p-2 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                <span className="block text-2xl font-bold text-blue-600 group-hover:text-blue-700">3</span>
                <span className="text-gray-600 group-hover:text-gray-700">Hackathons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 