'use client'

import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  },
  exit: { 
    opacity: 0, 
    y: 15,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

export default function AnimatedElement({ children, delay = 0 }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.1, margin: "-20px" }}
      transition={{ delay }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}
