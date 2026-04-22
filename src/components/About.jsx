import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { personalInfo } from '../data/portfolioData'
import { FiCode, FiTarget, FiZap, FiAward } from 'react-icons/fi'

const stats = [
  { icon: FiCode, label: 'Projects Built', value: '10+' },
  { icon: FiAward, label: 'Certificates', value: '6+' },
  { icon: FiZap, label: 'Technologies', value: '12+' },
  
]

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />
      <div className="section-container" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text inline-block">About Me</h2>
          <p className="section-subheading">Get to know me better</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(14,165,233,0.2)' }}
              className="glass-card p-6 text-center rounded-2xl cursor-default"
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="text-primary-400" size={22} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-slate-500 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Who <span className="text-primary-400">I Am</span>
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              {personalInfo.bio}
            </p>
            <div className="glass-card p-5 rounded-2xl border-l-4 border-primary-500">
              <div className="flex items-start gap-3">
                <FiTarget className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-2">Career Goal</h4>
                  <p className="text-slate-400 leading-relaxed">{personalInfo.goal}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills overview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick <span className="text-primary-400">Skills Overview</span>
            </h3>
            {[
              { skill: 'Frontend Development', pct: 90, color: 'from-blue-500 to-cyan-400' },
              { skill: 'Backend Development', pct: 80, color: 'from-purple-500 to-pink-400' },
              { skill: 'Database Management', pct: 78, color: 'from-green-500 to-teal-400' },
              { skill: 'Version Control & APIs', pct: 85, color: 'from-orange-500 to-yellow-400' },
            ].map(({ skill, pct, color }, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">{skill}</span>
                  <span className="text-primary-400 font-semibold">{pct}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${pct}%` } : {}}
                    transition={{ delay: 0.7 + i * 0.1, duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
