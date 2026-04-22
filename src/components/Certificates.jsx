import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { certificates } from '../data/portfolioData'
import { FiExternalLink, FiAward } from 'react-icons/fi'

export default function Certificates() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="certificates" className="py-24 bg-slate-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text inline-block">Certifications</h2>
          <p className="section-subheading">Credentials & achievements</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              className="group glass-card rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-sm leading-tight mb-1 group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 text-xs mb-1">{cert.provider}</p>
                  <span className="text-xs text-slate-600 bg-white/5 px-2 py-0.5 rounded-md">{cert.date}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <FiAward size={12} />
                  <span>Verified</span>
                </div>
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 font-medium transition-colors px-3 py-1.5 rounded-lg bg-primary-500/10 hover:bg-primary-500/20"
                >
                  <FiExternalLink size={12} />
                  View Certificate
                </motion.a>
              </div>

              {/* Bottom gradient bar */}
              <div className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${cert.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
