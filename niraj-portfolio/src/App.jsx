import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import { Experience, Education, Achievements } from './components/sections/ExperienceEdu'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <div className="border-t border-white/5" />
          <About />
          <div className="border-t border-white/5" />
          <Skills />
          <div className="border-t border-white/5" />
          <Projects />
          <div className="border-t border-white/5" />
          <Experience />
          <div className="border-t border-white/5" />
          <Education />
          <div className="border-t border-white/5" />
          <Achievements />
          <div className="border-t border-white/5" />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
