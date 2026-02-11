import React from 'react'
import { motion } from 'framer-motion'

const AnimatedLink = ({ href, className = '', children }) => {
  return (
    <motion.a
        href={href}
        target='_blank'
        className={`inline-block ${className}`}
        animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 2.5,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
        >
        {children}
    </motion.a>
  )
}

export default AnimatedLink