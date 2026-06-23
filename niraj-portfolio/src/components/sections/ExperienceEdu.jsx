import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education, achievements } from '../../data/portfolioData'

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="experience" className="py-24 px-6 bg-dark-200/40">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">// experience</p>
        <h2 ref={ref} className="section-title">Where I've worked</h2>
        <p className="section-sub">Real-world exposure that shaped how I think about software and content at scale.</p>
        <div className="flex flex-col gap-4">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-6 grid sm:grid-cols-[auto_1fr] gap-5 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center font-mono text-sm font-bold text-primary flex-shrink-0">
                {exp.logo}
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="font-semibold text-base">{exp.role}</h3>
                    <p className="text-primary text-sm">{exp.company} · {exp.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-slate-500">{exp.date}</span>
                    <br/>
                    <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">{exp.type}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 mb-3">{exp.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map(t => (
                    <span key={t} className="bg-emerald-500/8 border border-emerald-500/15 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">// education</p>
        <h2 ref={ref} className="section-title">Academic background</h2>
        <div className="max-w-2xl">
          <div className="relative pl-6 border-l border-white/8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="absolute left-[-1.6rem] top-1.5 w-3 h-3 bg-primary rounded-full border-2 border-dark-100" />
                <p className="font-mono text-xs text-primary mb-1">{edu.year}</p>
                <h3 className="font-semibold text-base mb-0.5">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mb-1">{edu.institution}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="achievements" className="py-24 px-6 bg-dark-200/40">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">// achievements</p>
        <h2 ref={ref} className="section-title">Beyond the code</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">{ach.icon}</div>
              <h3 className="font-semibold text-sm mb-1.5">{ach.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{ach.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
