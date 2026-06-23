import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolioData'
import profile from '../../assets/profile.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay }
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 glass border-indigo-500/25 text-primary px-4 py-2 rounded-full text-xs font-mono mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-2">
            {personalInfo.name}
          </motion.h1>

          <motion.div {...fadeUp(0.3)} className="text-2xl md:text-3xl font-bold mb-4 h-10">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Java Backend Engineer', 2000,
                'AI Enthusiast', 2000,
                'Problem Solver', 2000,
              ]}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
            Building full-stack applications with Java, React, and PostgreSQL. Passionate about software engineering, AI, and creating solutions that make an impact.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-8">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View Projects →
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-outline">
              Get in touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-outline flex items-center gap-2"
            >
              <FiDownload size={14} /> Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex gap-3">
            {[
              { icon: <FiGithub size={16} />, href: personalInfo.github, label: 'GitHub' },
              { icon: <FiLinkedin size={16} />, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: <FiMail size={16} />, href: `mailto:${personalInfo.email}`, label: 'Email' }
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-16px] rounded-full border border-indigo-500/25"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-30px] rounded-full border border-dashed border-cyan-500/12"
            />

            {/* Avatar circle */}
            <div className="w-full h-full rounded-full glass border-2 border-white/8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-600/10" />
              <span className="gradient-text font-mono font-bold text-6xl md:text-7xl relative z-10"><img src={profile} alt="Niraj Patel" className="w-full h-full object-cover relative z-10 brightness-75" /></span>
            </div>

            {/* Status chip */}
<div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 bg-black/80 border border-emerald-500/60 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md whitespace-nowrap">
  🟢 Open to work
</div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 right-[-20px] glass px-3 py-1.5 rounded-xl text-xs font-mono text-primary"
            >
              Java ☕
            </motion.div>
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-12 left-[-20px] glass px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-400"
            >
              AI 🤖
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
