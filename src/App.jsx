import './index.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Section/Hero'
import About from './Section/About'
import Projects from './Section/Projects'
import Contact from './Section/Contact'
import Skills from './Section/Skills'

function App() {

  return (
    <>
     {/* <Navbar />   */}
     <section>
         <Hero />
         <About />
         <Projects />
         <Skills />
          <Contact />
     </section>
     <Footer />
    </>
  )
}

export default App
