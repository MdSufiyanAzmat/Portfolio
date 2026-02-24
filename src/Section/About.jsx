import React from "react";
import aboutImage from "../assets/first.png";

function About() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-900 to-gray-800" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Image with decorative elements - updated to red theme */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 group">
            <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity -rotate-6"></div>
            <div className="absolute inset-0 bg-red-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity rotate-6"></div>
            <div className="absolute inset-0 bg-linear-to-r from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
            <img 
              src={aboutImage} 
              alt="Sufiyan" 
              className="relative w-full h-full object-cover rounded-full border-4 border-red-500/50 shadow-xl shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-300"
            />
          </div>
          
          {/* Content - updated text colors */}
          <div className="flex-1 space-y-4">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-red-400 font-semibold">Front-End Web Developer</span> with a passion for turning ideas into interactive, 
                live applications. My toolkit includes HTML5, CSS, JavaScript, Tailwind CSS, and 
                React.js—technologies I use to bring modern web designs to life.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 delay-75">
              <p className="text-lg text-gray-300 leading-relaxed">
                What drives me is the constant evolution of web development. I'm always exploring 
                new trends, experimenting with emerging technologies, and taking on projects that 
                push me beyond my comfort zone. Every line of code I write is an opportunity to 
                create something that's not just visually appealing, but <span className="text-red-400">accessible and efficient</span> too.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 delay-150">
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech has been shaped by challenges that turned into learning 
                opportunities. I believe the best web solutions come from understanding both the 
                technical and human sides of development—crafting experiences that users genuinely 
                enjoy. I'm always excited to connect with fellow developers and collaborate on 
                projects that push the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Skills Tags - updated to red theme */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
              {['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React.js', 'Responsive Design'].map((skill, index) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-gray-800 text-red-400 border border-red-500/30 rounded-full text-sm font-medium hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats/Highlights - matching skills section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-red-500 mb-2">2+</div>
            <div className="text-gray-400 text-sm">Years Learning</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-red-500 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-red-500 mb-2">0</div>
            <div className="text-gray-400 text-sm">Happy Client</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-red-500 mb-2">∞</div>
            <div className="text-gray-400 text-sm">Tea Cups</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;