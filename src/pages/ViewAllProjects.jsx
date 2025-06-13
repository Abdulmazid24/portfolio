// ViewAllProjects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/public/screenshort/32.png',
  '/public/screenshort/2_.png',
  '/public/screenshort/3_.png',
  '/public/screenshort/4_.png',
  '/public/screenshort/5.png',
  '/public/screenshort/6.png',
  '/public/screenshort/7.png',
  '/public/screenshort/8.png',
  '/public/screenshort/9.png',
  '/public/screenshort/10.png',
  '/public/screenshort/11.png',
  '/public/screenshort/12.png',
  '/public/screenshort/13.png',
  '/public/screenshort/14.png',
  '/public/screenshort/15.png',
  '/public/screenshort/16.png',
  '/public/screenshort/17.png',
  '/public/screenshort/18.png',
  '/public/screenshort/19.png',
  '/public/screenshort/20.png',
];

const ViewAllProjects = () => {
  return (
    <section className='py-16 px-4 md:px-12 bg-white dark:bg-gray-950'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
          All Project Screenshots
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {images.map((src, index) => (
            <motion.div
              key={index}
              className='rounded-xl overflow-hidden shadow-lg group relative'
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className='w-full h-64 object-cover group-hover:brightness-90 duration-300'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewAllProjects;
// Note: Ensure that the image paths are correct and accessible in your project structure.
// You may need to adjust the paths based on your project's setup.
