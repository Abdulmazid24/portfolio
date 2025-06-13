// src/pages/About.jsx

import React from 'react';
import { BadgeCheck, Star, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className='max-w-5xl mx-auto px-4 py-16'>
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-bold mb-4'>About Me</h1>
        <p className='text-gray-600 text-lg'>
          I'm <span className='text-blue-600 font-semibold'>Ali Nawaz</span> — a passionate YouTube
          marketing expert & growth strategist helping creators reach their goals.
        </p>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-10 mb-16'>
        <img
          src='/ali-nawaz.jpg'
          alt='Ali Nawaz'
          className='w-72 h-72 object-cover rounded-xl shadow-lg'
        />
        <div className='space-y-4 text-gray-700 text-lg'>
          <p>
            With over <span className='text-blue-600 font-bold'>5 years of experience</span> in
            digital marketing, I’ve helped more than 100 creators grow organically and successfully.
          </p>
          <p>
            My mission is simple — to help you shine on YouTube and turn your content into a brand.
          </p>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
        <div className='bg-white shadow-md rounded-lg p-6 text-center'>
          <BadgeCheck className='mx-auto text-green-500 mb-3' size={40} />
          <h3 className='text-xl font-semibold'>100+ Happy Clients</h3>
          <p className='text-gray-500 mt-2'>Worldwide creators & brands</p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 text-center'>
          <Star className='mx-auto text-yellow-500 mb-3' size={40} />
          <h3 className='text-xl font-semibold'>Top Rated Seller</h3>
          <p className='text-gray-500 mt-2'>5-star reviews on Fiverr</p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 text-center'>
          <Trophy className='mx-auto text-purple-500 mb-3' size={40} />
          <h3 className='text-xl font-semibold'>Results That Matter</h3>
          <p className='text-gray-500 mt-2'>Proven strategies, real growth</p>
        </div>
      </div>

      <div className='text-center'>
        <h2 className='text-3xl font-bold mb-4'>Let’s Work Together</h2>
        <p className='text-gray-600 mb-6'>
          Ready to grow your YouTube channel or brand? I’m here to help.
        </p>
        <a
          href='/contact'
          className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition'
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default About;
