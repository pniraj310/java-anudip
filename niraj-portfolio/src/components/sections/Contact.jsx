import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolioData'

const contactItems = [
  { icon: <FiMapPin size={15} />, label: 'Location', value: personalInfo.location },
  { icon: <FiMail size={15} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FiLinkedin size={15} />, label: 'LinkedIn', value: 'linkedin.com/in/nirajpatel', href: personalInfo.linkedin },
  { icon: <FiGithub size={15} />, label: 'GitHub', value: 'github.com/nirajpatel', href: personalInfo.github }
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const field = (key, label, type = 'text', placeholder = '') => (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-xs text-slate-500">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
        placeholder={placeholder}
        className={`bg-white/3 border ${errors[key] ? 'border-red-500/50' : 'border-white/8'} rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-primary/4 transition-all`}
      />
      {errors[key] && <p className="text-red-400 text-xs">{errors[key]}</p>}
    </div>
  )

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">// contact</p>
        <h2 ref={ref} className="section-title">Let's work together</h2>
        <p className="section-sub">Open to full-time Java developer roles, internships, and freelance projects. Response within 24 hours.</p>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            {contactItems.map(item => (
              <a
                key={item.label}
                href={item.href || '#'}
                target={item.href?.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="glass glass-hover rounded-xl px-4 py-3.5 flex items-center gap-3 transition-all duration-200 group no-underline"
              >
                <div className="w-9 h-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 font-mono">{item.label}</p>
                  <p className="text-sm text-slate-300 group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-xl p-4 mt-2">
              <p className="text-xs font-mono text-slate-500 mb-2">// response time</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-300">Usually within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <FiCheckCircle size={48} className="text-emerald-400" />
                <h3 className="text-lg font-semibold">Message sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-outline text-sm py-2 px-5 mt-2">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {field('name', 'name', 'text', 'Your name')}
                  {field('email', 'email', 'email', 'your@email.com')}
                </div>
                {field('subject', 'subject', 'text', 'Java Developer role / Freelance project')}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-500">message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell me about the role or project..."
                    rows={5}
                    className={`bg-white/3 border ${errors.message ? 'border-red-500/50' : 'border-white/8'} rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-primary/4 transition-all resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><FiSend size={14} /> Send message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
