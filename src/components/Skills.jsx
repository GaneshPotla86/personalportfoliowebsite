import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data/portfolioData'

const categoryColors = {
  Frontend: 'from-blue-500 to-cyan-400',
  Backend: 'from-purple-500 to-violet-400',
  Database: 'from-green-500 to-emerald-400',
  Other: 'from-orange-500 to-amber-400',
}

const categoryBg = {
  Frontend: 'bg-blue-500/10 border-blue-500/20 hover:border-blue-500/50',
  Backend: 'bg-purple-500/10 border-purple-500/20 hover:border-purple-500/50',
  Database: 'bg-green-500/10 border-green-500/20 hover:border-green-500/50',
  Other: 'bg-orange-500/10 border-orange-500/20 hover:border-orange-500/50',
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...Object.keys(skills)]

  const filteredSkills = activeCategory === 'All'
    ? Object.entries(skills).flatMap(([cat, items]) => items.map(s => ({ ...s, category: cat })))
    : (skills[activeCategory] || []).map(s => ({ ...s, category: activeCategory }))

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="section-container" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-heading gradient-text inline-block">Technical Skills</h2>
          <p className="section-subheading">Technologies I work with</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass-card text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, type: 'spring' }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className={`skill-card group border rounded-2xl p-5 text-center cursor-default transition-all duration-300 ${categoryBg[skill.category]}`}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-3">{skill.name}</h3>

              {/* Level indicator */}
              <div className="relative w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.8, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${categoryColors[skill.category]} rounded-full`}
                />
              </div>
              <div className="text-slate-500 text-xs mt-2 group-hover:text-primary-400 transition-colors">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              whileHover={{ y: -5 }}
              className={`glass-card p-5 rounded-2xl border ${categoryBg[category]}`}
            >
              <div className={`text-sm font-bold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent mb-3`}>
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s.name} className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-lg">
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
