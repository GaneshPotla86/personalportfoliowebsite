import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FiDownload, FiEye, FiFileText, FiCalendar, FiBriefcase } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'



export default function Resume() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="resume" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text inline-block">Resume</h2>
          <p className="section-subheading">My professional journey</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 items-start">
          {/* Resume card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Preview header */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
                  backgroundSize: '10px 10px'
                }} />
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="relative"
                >
                  <FiFileText size={60} className="text-white/80 mx-auto mb-3" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Ganesh Potla</h3>
                <p className="text-white/70 text-sm">Full Stack Developer Resume</p>
              </div>

              {/* Quick info */}
              <div className="p-6 space-y-3">
                {[
                  { icon: FiBriefcase, text: 'Full Stack Developer (MERN)' },
                  { icon: FiCalendar, text: 'Available for Full-time / Freelance' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-primary-400" />
                    </div>
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="p-6 pt-0 flex gap-3">
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(14,165,233,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 transition-all"
                >
                  <FiDownload size={18} />
                  Download PDF
                </motion.a>
                <motion.a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 glass-card text-slate-300 hover:text-white rounded-xl font-medium transition-all"
                >
                  <FiEye size={18} />
                </motion.a>
              </div>

              <div className="px-6 pb-6">
                <p className="text-slate-600 text-xs text-center">
                  💡 Replace <code className="text-primary-500">/public/resume.pdf</code> with your actual resume file
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          
        </div>
      </div>
    </section>
  )
}
