import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLoadingIcon from './icons/AnimatedLoadingIcon'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState(null)

    const showNotification = (type, message) => {
        setNotification({ type, message })
        setTimeout(() => setNotification(null), 4000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        
        emailjs.sendForm(
            'service_hs6ps4f',
            'template_aoq4bap',
            e.target,
            'jTFZklZ-jAIojeWrg',
        )
        .then(() => {
            showNotification('success', 'Message sent successfully! 🎉')
            e.target.reset();
            setLoading(false)
        })
        .catch((error) => {
            console.error(error);
            showNotification('error', 'Error sending the message 😔')
            setLoading(false)
        })
    }

    return (
        <>
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, y: 0, x: 100 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`fixed top-28 right-4 z-10 p-4 rounded-lg shadow-2xl backdrop-blur-sm border ${
                            notification.type === 'success' 
                                ? 'bg-indigo-600/90 border-slate-300 text-white' 
                                : 'bg-red-500/90 border-red-300 text-white'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            {notification.type === 'success' ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                            <p className="font-semibold">{notification.message}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <h3 className='w-[60%] mx-auto mb-7 font-bold text-3xl text-indigo-300 md:w-[50%]'>Contact me</h3>
            <form onSubmit={handleSubmit} className="flex flex-col w-[90%] mx-auto bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-transparent backdrop-blur-md rounded-[39px] shadow-2xl py-12 px-6 items-center">
                <h4 className='font-bold text-xl pb-8'>Send me a message</h4>
                <div className="p-4 flex flex-col w-[90%] gap-3">
                    <label htmlFor="from_name" className='font-bold'>Name</label>
                    <input type="text" name="from_name" id="from_name" className='h-8 rounded-md max-w-70 p-3 border border-indigo-100/40' placeholder='John Doe'  />
                </div>
                <div className="p-4 flex flex-col w-[90%] gap-3">
                    <label htmlFor="reply_to" className='font-bold'>Email</label>
                    <input type="text" name="reply_to" id="reply_to" className='h-8 rounded-md max-w-70 p-3 border border-indigo-100/40' placeholder='johndoe@example.com'  />
                </div>
                <div className="p-4 flex flex-col w-[90%] gap-3">
                    <label htmlFor="message" className='font-bold'>Message</label>
                    <textarea name="message" id="message" className='h-24 rounded-md p-3 border border-indigo-100/40' />
                </div>

                <button 
                    type='submit' 
                    disabled={loading}
                    className='flex items-center justify-center w-1/2 h-16 font-bold text-center bg-indigo-600 duration-500 ease-in-out  hover:bg-indigo-200/70 hover:text-indigo-600 hover:cursor-pointer rounded-lg p-4 mt-6 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {loading ? <AnimatedLoadingIcon /> : 'Send Message'}
                </button>
            </form>
        </>
    )
}

export default ContactForm