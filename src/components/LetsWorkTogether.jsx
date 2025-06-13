// src/components/LetsWorkTogether.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function LetsWorkTogether() {
  return (
    <section className='relative py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-3xl shadow-2xl overflow-hidden'>
      <div className='max-w-4xl mx-auto text-center space-y-6'>
        <motion.h2
          className='text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          className='text-lg sm:text-xl text-white/90 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Ready to grow your brand? Let’s make it happen! Click below to get started and achieve the
          results you deserve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href='/contact'
            className='inline-flex items-center gap-3 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 hover:text-black transition-all duration-300 text-lg'
          >
            <FaPaperPlane className='text-xl' />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Optional: glowing blob background */}
      <div className='absolute top-[-60px] left-[-60px] w-60 h-60 bg-pink-500 opacity-30 blur-3xl rounded-full animate-pulse'></div>
      <div className='absolute bottom-[-60px] right-[-60px] w-60 h-60 bg-yellow-400 opacity-20 blur-3xl rounded-full animate-pulse'></div>
    </section>
  );
}
// Note: Ensure to import this component in your main App or relevant page file to display it.
// You can customize the colors, text, and styles as per your design preferences.
