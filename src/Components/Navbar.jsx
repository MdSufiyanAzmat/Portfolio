import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b-2 border-gray-300 ' : 'bg-transparent'
                }`}>
                <nav className='sticky top-0 z-50'>
                    <div className={`flex justify-between md:px-10 px-4 text-white items-center transition-all duration-500 ease-in-out ${isScrolled ? 'h-14' : 'h-20'
                        }`}>
                        {/* Logo with animated text size */}
                        <div className='md:px-10 px-2 hover:cursor-pointer transition-all duration-500'>
                            <span className={`font-bold text-red-500 transition-all duration-500 inline-block ${isScrolled ? 'md:text-3xl text-xl' : 'md:text-4xl text-xl'
                                }`}>S</span>
                            <span className={`font-bold transition-all duration-500 inline-block ${isScrolled ? 'md:text-2xl text-lg' : 'md:text-3xl text-xl'
                                }`}>ufiyan</span>
                            <span className={`font-bold text-red-500 transition-all duration-500 inline-block ${isScrolled ? 'md:text-3xl text-xl' : 'md:text-4xl text-xl'
                                }`}>A</span>
                            <span className={`font-bold transition-all duration-500 inline-block ${isScrolled ? 'md:text-2xl text-lg' : 'md:text-3xl text-xl'
                                }`}>zmat</span>
                        </div>

                        {/* Desktop Menu with animated text */}
                        <div className='md:block hidden'>
                            <ul className='flex gap-6'>
                                <li className="relative group">
                                    <a href="#" className={`text-white hover:text-red-500 transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg font-bold'
                                        }`}>
                                        Home
                                    </a>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li className="relative group">
                                    <a href="#about" className={`text-white hover:text-red-500 transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg font-bold'
                                        }`}>
                                        About
                                    </a>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li className="relative group">
                                    <a href="#projects" className={`text-white hover:text-red-500 transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg font-bold'
                                        }`}>
                                        Projects
                                    </a>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li className="relative group">
                                    <a href="#contact" className={`text-white hover:text-red-500 transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg font-bold'
                                        }`}>
                                        Contact Me
                                    </a>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                </li>
                            </ul>
                        </div>

                        {/* Hire Me Button with animation */}
                        {/* <div className='md:block hidden'>
                            <button className={`bg-red-800 hover:bg-black hover:border-2 hover:border-red-800 text-white font-bold rounded transition-all duration-500 ${
                                isScrolled ? 'py-1 px-3 text-sm' : 'py-2 px-4'
                            }`}>
                                Hire Me
                            </button>
                        </div> */}
                        <div className="md:flex gap-3 hidden">
                            <a
                                href="https://github.com/MdSufiyanAzmat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-900 text-gray-400 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-sufiyan-azmat-2880721b1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-900 text-gray-400 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='md:hidden block px-6'>
                            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                                <span className="material-symbols-outlined text-white text-3xl">
                                    {isMenuOpen ? 'close' : 'menu'}
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu with animation */}
                <div className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex flex-col space-y-4 p-4 text-xl font-bold border-t border-gray-700">
                        <a href="#home" className="hover:bg-gray-800 p-2 rounded transition-all" onClick={toggleMenu}>Home</a>
                        <a href="#about" className="hover:bg-gray-800 p-2 rounded transition-all" onClick={toggleMenu}>About</a>
                        <a href="#projects" className="hover:bg-gray-800 p-2 rounded transition-all" onClick={toggleMenu}>Projects</a>
                        <a href="#contact" className="hover:bg-gray-800 p-2 rounded transition-all" onClick={toggleMenu}>Contact</a>
                        {/* <button className='bg-red-800 hover:bg-black hover:border-2 hover:border-red-800 text-white font-bold py-2 px-5 rounded w-1/3 my-2 transition-all'>
                            Hire Me
                        </button> */}
                    </div>
                </div>
            </header>
            {/* Add padding to body to prevent content from hiding under fixed navbar */}
            <div className={`transition-all duration-500 ${isScrolled ? 'h-14' : 'h-20'
                }`}></div>
        </div>
    )
}

export default Navbar