import React, { useEffect, useState } from "react";
import firstImage from "../assets/cover.jpeg";
import Navbar from "../Components/Navbar";

function Hero() {
  const [animations, setAnimations] = useState({
    title: false,
    subtitle: false,
    description: false,
    buttons: false
  });

  useEffect(() => {
    // Stagger the animations
    setTimeout(() => setAnimations(prev => ({ ...prev, title: true })), 200);
    setTimeout(() => setAnimations(prev => ({ ...prev, subtitle: true })), 400);
    setTimeout(() => setAnimations(prev => ({ ...prev, description: true })), 600);
    setTimeout(() => setAnimations(prev => ({ ...prev, buttons: true })), 800);
  }, []);


  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat animate-slow-zoom"
          style={{
            backgroundImage: `url(${firstImage})`,
            backgroundPosition: '50% 20%', // This controls positioning for background images
            // Try these values:
            // '50% 0%' - shows top part
            // '50% 20%' - shows 20% from top
            // '50% 30%' - shows 30% from top (good middle-ground)
            // '50% 50%' - shows center
            // '50% 70%' - shows 70% from top (more bottom)
            // '50% 100%' - shows bottom part
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <Navbar />
        <div className="max-w-3xl">
          {/* Title with Slide Animation */}
          <h1
            className={`transform transition-all duration-1000 ease-out ${animations.title
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
              }`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              I'm Sufiyan Azmat
            </span>
          </h1>

          {/* Subtitle with Slide Animation (delayed) */}
          <h1
            className={`transform transition-all duration-1000 ease-out delay-200 ${animations.subtitle
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
              }`}
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-400">
              A Front-end Developer
            </span>
          </h1>

          {/* Description with Slide Animation (delayed) */}
          <p
            className={`transform transition-all duration-1000 ease-out delay-500 ${animations.description
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
              } text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl`}
          >
            A passionate developer creating amazing web experiences
          </p>

          {/* Buttons with Slide Animation (delayed) */}
          <div
            className={`flex flex-wrap gap-4 transform transition-all duration-1000 ease-out delay-700 ${animations.buttons
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
              }`}
          >
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv/SufiyanAzmat_CV.pdf'; 
                link.download = 'SufiyanAzmat_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-6 py-3 bg-red-600 text-white rounded-lg 
              hover:cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-red-500 
              transition-all duration-300 hover:scale-105 text-sm sm:text-base
              relative overflow-hidden group"
            >
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>

            {/* <a href="#contact">
              <button className="px-6 py-3 bg-white text-black border-2 border-black hover:cursor-pointer 
              hover:bg-red-600 hover:text-white hover:border-0 rounded-lg transition-all duration-300 hover:scale-105
              relative overflow-hidden group">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </a> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Fade In Animation */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2  transition-all duration-1000 delay-1000 ${animations.buttons ? 'opacity-100' : 'opacity-0'
        }`}>
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;