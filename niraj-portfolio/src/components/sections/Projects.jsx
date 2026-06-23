import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects, projectCategories } from '../../data/portfolioData'

function ProjectCard({ proj, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass glass-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className={`h-40 bg-gradient-to-br ${proj.color} flex items-center justify-center text-5xl relative overflow-hidden`}>
        <span className="relative z-10">{proj.emoji}</span>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/30 flex items-center justify-center gap-3"
        >
          <a href={proj.github} target="_blank" rel="noreferrer"
            className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-primary/50 transition-colors">
            <FiGithub size={16} />
          </a>
          <a href={proj.demo} target="_blank" rel="noreferrer"
            className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-primary/50 transition-colors">
            <FiExternalLink size={16} />
          </a>
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1">{proj.type}</p>
        <h3 className="font-bold text-base mb-2">{proj.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{proj.desc}</p>

        {/* Features */}
        <ul className="mt-3 space-y-1">
          {proj.features.slice(0, 2).map(f => (
            <li key={f} className="text-xs text-slate-500 flex items-center gap-1.5">
              <span className="text-primary">▸</span>{f}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {proj.stack.map(t => (
            <span key={t} className="bg-white/4 border border-white/8 text-slate-500 text-[10px] px-2 py-0.5 rounded font-mono">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <a href={proj.github} target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs py-2 rounded-lg bg-primary/10 border border-primary/25 text-primary hover:bg-primary/20 transition-colors font-medium">
            <FiGithub size={13} /> GitHub
          </a>
          <a href={proj.demo} target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs py-2 rounded-lg border border-white/8 text-slate-400 hover:border-primary/30 hover:text-primary transition-colors font-medium">
            <FiExternalLink size={13} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">// projects</p>
        <h2 ref={ref} className="section-title">Things I've shipped</h2>
        <p className="section-sub">A mix of Java backend systems, AI models, and full stack web applications — each solving a real problem.</p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {projectCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                active === cat.id
                  ? 'bg-primary text-white'
                  : 'glass text-slate-400 hover:text-white hover:border-primary/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-600 self-center font-mono">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => (
              <ProjectCard key={proj.id} proj={proj} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
