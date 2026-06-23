import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolioData'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-primary text-sm hover:text-indigo-400 transition-colors"
        >
          niraj.dev
        </button>
        <p className="text-slate-600 text-xs flex items-center gap-1">
          Built with <FiHeart size={12} className="text-primary" /> by Niraj Patel · {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          {[
            { icon: <FiGithub size={15} />, href: personalInfo.github },
            { icon: <FiLinkedin size={15} />, href: personalInfo.linkedin },
            { icon: <FiMail size={15} />, href: `<mailto:1>pniraj310@gmail.com</mailto:1>` }
          ].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              className="text-slate-600 hover:text-slate-300 transition-colors">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
