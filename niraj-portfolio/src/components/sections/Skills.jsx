import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../../data/portfolioData'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6 bg-dark-200/40">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">// tech stack</p>
        <h2 ref={ref} className="section-title">What I build with</h2>
        <p className="section-sub">Comfortable across the full stack — from database schema design to UI component architecture.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-6 transition-all duration-200"
            >
              <div className="text-2xl mb-3">{group.icon}</div>
              <p className="font-mono text-xs text-primary mb-4">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-white/4 border border-white/8 hover:bg-primary/10 hover:border-primary/25 hover:text-primary text-slate-400 text-xs px-3 py-1.5 rounded-lg font-mono transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
