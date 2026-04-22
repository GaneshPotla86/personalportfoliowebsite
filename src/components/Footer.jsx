import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { personalInfo } from '../data/portfolioData'

const links = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />
      <div className="section-container relative">
        {/* Top section */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white shadow-lg shadow-primary-500/30">
                GP
              </div>
              <span className="font-bold text-white text-lg">
                Ganesh <span className="text-primary-400">Potla</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full Stack Developer passionate about building beautiful, performant web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    smooth
                    duration={600}
                    offset={-64}
                    className="text-slate-500 hover:text-primary-400 transition-colors text-sm cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-card text-slate-400 hover:text-primary-400 hover:border-primary-500/30 transition-all rounded-xl"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-slate-600 text-xs mt-4">📍 {personalInfo.location}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Ganesh Potla. Made with{' '}
            <FiHeart className="text-red-500" size={14} /> using React & Tailwind
          </p>

          {/* Back to top */}
          <Link to="hero" smooth duration={800}>
            <motion.button
              whileHover={{ scale: 1.1, y: -3, boxShadow: '0 0 20px rgba(14,165,233,0.4)' }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium hover:bg-primary-500/20 transition-all cursor-pointer"
            >
              <FiArrowUp size={16} />
              Back to Top
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
