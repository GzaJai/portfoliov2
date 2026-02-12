import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CircleArrowUp from './icons/CircleArrowUp'

const ScrollToTop = ({ isVisible }) => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 100 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 left-4 z-9999 p-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl backdrop-blur-sm border border-indigo-400/30"
                    aria-label="Scroll to top"
                >
                <CircleArrowUp width={40} height={40} stroke={'#FFFFFF'} strokeWidth={2} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTop