// HeroSection.jsx

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { FaFacebookF, FaYoutube, FaSearch, FaBullhorn } from 'react-icons/fa';
import { TbSeo } from 'react-icons/tb';
import { FaSketch } from 'react-icons/fa';
import { SiGoogleads } from 'react-icons/si';
import AliImage from '../assets/images/Ali_nawaz.png';

const Hero = () => {
  return (
    <section className='relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6'>
      <motion.div
        className='max-w-5xl mx-auto text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* 🟢 Orbit Container */}
        <div className='relative w-64 h-64 mx-auto mb-10'>
          {/* 🔵 Spinning Orbit */}
          <motion.div
            className='absolute inset-0'
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {/* 🔴 YouTube (Red) */}
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
              <div className='bg-[#FF0000]/10 p-4 rounded-full shadow-lg backdrop-blur-md'>
                <FaYoutube className='text-4xl text-[#FF0000]' />
              </div>
            </div>

            {/* 🔵 SEO (using generic blue) */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
              <div className='bg-[#1E90FF]/10 p-4 rounded-full shadow-lg backdrop-blur-md'>
                <TbSeo className='text-4xl text-[#1E90FF]' />
              </div>
            </div>

            {/* 🟢 Sketch (Yellow-Orange tone) */}
            <div className='absolute top-1/2 left-0 transform -translate-y-1/2'>
              <div className='bg-[#F7B500]/10 p-4 rounded-full shadow-lg backdrop-blur-md'>
                <FaSketch className='text-4xl text-[#F7B500]' />
              </div>
            </div>

            {/* 🟡 Google Ads (Green-Blue Mix) */}
            <div className='absolute top-1/2 right-0 transform -translate-y-1/2'>
              <div className='bg-[#4285F4]/10 p-4 rounded-full shadow-lg backdrop-blur-md'>
                <SiGoogleads className='text-4xl text-[#4285F4]' />
              </div>
            </div>
          </motion.div>

          {/* 🟣 Center Profile Image */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
              <motion.div
                className='relative w-40 h-40 rounded-full overflow-hidden border-4 border-white z-10'
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src={AliImage} alt='Ali NawaZ' className='w-full h-full object-cover' />
              </motion.div>
            </Tilt>
          </div>
        </div>

        {/* 🟠 Typewriter Name */}
        <motion.h1
          className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <TypeAnimation
            sequence={["Hello, I'm Ali NawaZ", 2000, '']}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>

        {/* 🔵 Short Bio */}
        <motion.p
          className='text-base md:text-lg text-gray-300 mb-6 leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          A digital marketing expert with 6+ years of experience. <br className='hidden md:block' />
          Specialized in YouTube SEO, Keyword Research, Website SEO, Facebook Ads, and Social Media
          Management.
        </motion.p>
        {/* 🔘 CTA Buttons (Modern & Stylish) */}
        <motion.div
          className='flex justify-center gap-6 mt-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {/* Contact Button */}
          <Link to='/contact'>
            <button className='px-6 py-3 rounded-xl  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-md bg-opacity-80 border border-white/10'>
              📞 Contact Me
            </button>
          </Link>

          {/* View Projects Button */}
          <a href='#projects'>
            <button className='px-6 py-3 rounded-xl   border border-white text-white hover:bg-white hover:text-black font-semibold shadow-md hover:scale-105 transition-transform duration-300 backdrop-blur-md bg-opacity-20'>
              🧩 View Projects
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
