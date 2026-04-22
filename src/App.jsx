import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => setDarkMode(d => !d)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-slate-950 text-white min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
