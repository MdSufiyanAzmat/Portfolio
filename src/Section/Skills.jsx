import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const frontendSkills = [
    { name: 'HTML5', level: 'Advanced', percentage: 90 },
    { name: 'CSS3', level: 'Advanced', percentage: 85 },
    { name: 'JavaScript', level: 'Intermediate', percentage: 60 },
    { name: 'React.js', level: 'Intermediate', percentage: 55 },
    { name: 'Tailwind CSS', level: 'Advanced', percentage: 85 },
  ];

  const otherSkills = [
    { name: 'Git & GitHub', level: 'Beginner' },
    { name: 'Responsive Design', level: 'Intermediate' },
    { name: 'UI/UX Principles', level: 'Intermediate' },
    { name: 'Problem Solving', level: 'Beginner' },
    { name: 'Team Collaboration', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">
            Continuously learning and improving my craft
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 
            hover:border-red-500/50 transition-all duration-500
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">🎨</span> Frontend Development
            </h3>
            
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-red-400 text-sm">{skill.level}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-linear-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000"
                      style={{ 
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 
            hover:border-red-500/50 transition-all duration-500 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">🛠️</span> Other Skills
            </h3>
            
            <div className="space-y-4">
              {otherSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg 
                    hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 
                    hover:border-l-4 hover:border-red-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-red-500 text-xl">▹</span>
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="ml-auto text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className={`mt-12 text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700
          transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400">
            Currently diving deeper into{' '}
            <span className="text-red-400 font-semibold">React</span> and exploring{' '}
            <span className="text-red-400 font-semibold">Next.js</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;