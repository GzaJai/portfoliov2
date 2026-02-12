import React from 'react'
import { motion } from 'framer-motion'

const AnimatedLink = ({ href, className = '', children }) => {
  return (
    <motion.a
      href={href}
      target='_blank'
      className={`inline-block ${className}`}

      animate={{
        scale: [1, 1.02, 1],
        filter: [
          "drop-shadow(0 0 0px rgba(255,255,255,0))",
          "drop-shadow(0 0 5px rgba(255,255,255,0.5))",
          "drop-shadow(0 0 0px rgba(255,255,255,0))"
        ]
      }}

      transition={{
        duration: 1.1,
        repeat: Infinity,
        repeatDelay: 2.5,
        ease: "linear",
      }}

      whileHover={{
        scale: 1.05,
        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.6))",
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
