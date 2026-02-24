import React from "react";
import todoImage from "../assets/todo.png";  
import weatherImage from "../assets/weather.png";
import twitterImage from "../assets/twitter.png";
import ramadanImage from "../assets/third.png";
import stopwatchImage from "../assets/stopwatch2.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Todo List App",
      description: "A clean and intuitive task management app with features like add, edit, delete, and mark tasks as complete. Built with React and local storage for data persistence.",
      image: todoImage,
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://poetic-palmier-f2268a.netlify.app/",
      codeLink: "https://github.com/MdSufiyanAzmat/ToDo-App-Using-JS"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application that provides current conditions, 5-day forecast, and location-based weather data using OpenWeatherMap API.",
      image: weatherImage,
      tech: ["HTML", "API Integration", "CSS"],
      liveLink: "https://euphonious-kitten-de84e5.netlify.app/",
      codeLink: "https://github.com/MdSufiyanAzmat/Weather-app-project"
    },
    {
      id: 3,
      title: "Twitter Clone",
      description: "A simplified Twitter replica with tweet posting, likes, retweets, and user profiles. Features responsive design and real-time updates.",
      image: twitterImage,
      tech: ["HTML", "Tailwind CSS"],
      liveLink: "https://697f52452f57c949c1fd07d4--mellifluous-kitten-4e1aab.netlify.app/",
      codeLink: "https://github.com/MdSufiyanAzmat/x_clone"
    },
    {
      id: 4,
      title: "Ramadan Kareem",
      description: "A playful Ramadan website featuring a commitment question with a twist—the 'Maybe' button playfully repels when hovered, encouraging users to commit to fasting. Built with interactive JavaScript and smooth animations.",
      image: ramadanImage,
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://ramadan-kareem-2026.netlify.app/",
      codeLink: "https://github.com/yourusername/ramadan-app"
    },
     {
      id: 5,
      title: "Stop Watch",
      description: "A clean and functional stopwatch with Start, Stop, and Reset buttons. Perfect for tracking time with precision and a simple, intuitive interface.",
      image: stopwatchImage,
      tech: ["HTML", "JavaScript", "CSS"],
      liveLink: "https://melodious-syrniki-254e67.netlify.app/",
      codeLink: "https://github.com/MdSufiyanAzmat/StopWatch"
    }
  ];

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-900 to-gray-800" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one reflects my passion for 
            creating functional, user-friendly applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-900 text-red-400 border border-red-500/30 rounded-full text-xs font-medium hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 text-sm font-medium transform hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12">
          <a
            href="https://github.com/MdSufiyanAzmat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-medium group"
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;