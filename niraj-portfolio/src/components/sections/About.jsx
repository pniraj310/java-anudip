import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../../data/portfolioData'

function StatCard({ num, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="glass rounded-2xl p-5 text-center"
    >
      <div className="text-3xl font-bold font-mono gradient-text mb-1">{num}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="section-label"
        > About Me</motion.p>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          The person behind the code
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-4">
            {personalInfo.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                className="text-slate-400 leading-relaxed text-[0.95rem]"
              >
                {para}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="glass border-l-2 border-primary rounded-r-xl p-4 mt-4"
            >
              <p className="text-slate-300 text-sm leading-relaxed">
                🎯 <span className="text-primary font-medium">Goal:</span>{' '}
                {personalInfo.goal}
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {personalInfo.stats.map((s, i) => (
              <StatCard key={s.label} {...s} delay={0.1 * i + 0.3} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="col-span-2 glass rounded-2xl p-5"
            >
              <p className="text-xs font-mono text-slate-500 mb-3"> currently learning</p>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'Microservices', 'Docker', 'AWS Basics', 'System Design'].map(t => (
                  <span key={t} className="bg-primary/10 border border-primary/20 text-primary/90 text-xs px-3 py-1 rounded-full font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
