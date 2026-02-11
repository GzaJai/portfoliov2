import React from 'react'
import { motion } from 'framer-motion'

const AnimatedLink = ({ href, children }) => {
  return (
    <motion.a
        href={href}
        target='_blank'
        animate={{
            rotate: [0, -2, 2, 0],
            scale: [1, 1.04, 1],
        }}
        transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        whileHover={{
            rotate: 0,
            scale: 1.08,
        }}
        >
        {children}
    </motion.a>
  )
}

export default AnimatedLink