import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiCamera } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import profilePic from '../assets/profilepic.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated dots-bg"
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-500/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-600/5 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 py-24 flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text neon-text block sm:inline">
              Ganesh Potla
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6 h-12">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'React Specialist', 2000,
                'Node.js Developer', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-primary-400"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            {personalInfo.tagline} — crafting scalable web applications with modern technologies and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14,165,233,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 transition-all"
            >
              <FiDownload size={18} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-card text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
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
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass-card text-slate-400 hover:text-primary-400 hover:border-primary-500/30 transition-all rounded-xl"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="flex-shrink-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Rotating ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary-500/30 animate-spin"
              style={{ animationDuration: '20s' }} />
            <div className="absolute -inset-6 rounded-full border border-accent-500/20 animate-spin"
              style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

            {/* Image container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary-500/40 shadow-2xl shadow-primary-500/20 neon-border">
              
                <img src={profilePic} alt="Ganesh Potla" className="w-full h-full object-cover" />
              

              {/* Edit overlay */}
             
            </div>

            {/* Hidden file input */}
            

            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            >
              Full Stack Dev
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-transparent" />
      </motion.div>
    </section>
  )
}
