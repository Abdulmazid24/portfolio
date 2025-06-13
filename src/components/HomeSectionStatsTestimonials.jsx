import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Medal, Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeSectionStatsTestimonials() {
  return (
    <section className='bg-gray-100 py-16'>
      {/* 🏆 Section Heading */}
      <div className='text-center mb-16'>
        <h2 className='text-5xl font-extrabold text-gray-800 mb-4'>My Professional Journey</h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          A glimpse into the experience, achievements, and client feedback I've proudly earned
          throughout my career.
        </p>
      </div>

      {/* 📊 Stats Section */}
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
        <StatCard icon={<Medal className='text-blue-500' />} target={650} label='Projects Done' />
        <StatCard icon={<Star className='text-yellow-500' />} target={800} label='Top Reviews' />
        <StatCard
          icon={<Clock className='text-green-500' />}
          target={500}
          label='Years Experience'
        />
        <StatCard icon={<Users className='text-purple-500' />} target={6} label='Team Members' />
      </div>

      {/* 💬 Testimonials */}
      <div className='mt-20 max-w-6xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-10'>What Clients Say</h2>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className='bg-white rounded-xl shadow-lg p-6 transition-all duration-300'
            >
              <p className='text-gray-700 italic mb-4'>“{item.message}”</p>
              <div className='flex items-center gap-4'>
                <img
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className='rounded-full w-[50px] h-[50px] object-cover'
                />
                <div>
                  <h4 className='font-semibold'>{item.name}</h4>
                  <p className='text-sm text-gray-500'>{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 📩 CTA Section - Enhanced Design */}
      <div className='relative mt-24 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-white py-20 px-6 rounded-3xl shadow-xl overflow-hidden'>
        {/* ✨ Decorative Glow Circle */}
        <div className='absolute -top-10 -left-10 w-64 h-64 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse'></div>

        {/* 🌀 Inner Content */}
        <div className='relative z-10 text-center max-w-3xl mx-auto'>
          <h3 className='text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-wide'>
            🚀 Let’s Build Something Great Together!
          </h3>
          <p className='text-lg text-white/90 mb-8'>
            Ready to take your brand to the next level? Let’s turn your vision into results. Tap the
            button below and let's start our journey together!
          </p>

          {/* 💥 Animated Button */}
          <Button
            size='lg'
            className='bg-white text-blue-700 hover:bg-blue-100 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full flex items-center justify-center gap-3 shadow-md hover:shadow-xl animate-bounce'
          >
            <ArrowRight className='w-5 h-5' /> Let’s Talk
          </Button>

          {/* Decorative Divider Line */}
          <div className='mt-12 h-1 w-24 bg-white/40 mx-auto rounded-full'></div>
        </div>
      </div>
    </section>
  );
}

// ✅ Animated StatCard Component
function StatCard({ icon, target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total time in ms
    const frameRate = 30;
    const totalFrames = duration / frameRate;
    const increment = Math.ceil(target / totalFrames);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(start);
    }, frameRate);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl'
    >
      <div className='w-12 h-12 flex items-center justify-center text-3xl mb-3'>{icon}</div>
      <h2 className='text-4xl font-extrabold text-gray-800'>
        {count}
        {target > 0 && '+'}
      </h2>
      <p className='text-gray-600'>{label}</p>
    </motion.div>
  );
}

// 🌟 Testimonials Data
const testimonials = [
  {
    name: 'Veonz64',
    role: 'Virtual YouTuber',
    image: '/image/Veonz64-1.png',
    message:
      "Nawaz kept his promise, boosting my video views and subscribers. My engagement has greatly improved since working with him. He's a reliable and skilled YouTube promotion expert on Fiverr. I highly recommend his services for increasing channel visibility and engagement. Extremely satisfied, I’ll definitely return. Thank you, Nawaz!",
  },
  {
    name: 'Tahsin Hannan',
    role: 'Blogger',
    image: '/image/hahsin_hannah.jpg',
    message:
      'This was by far my best experience on Fiverr. The seller delivered within a week and I could immediately see the results. I was apprehensive since my previous experience with another seller resulted with the views being taken away. This was not the case with Nawaz. I would highly recommend working with this seller. It was a great experience.',
  },
  {
    name: 'SFG',
    role: 'YouTuber',
    image: '/image/sfg.jpg',
    message:
      'Nawaz was an exceptional freelancer to work with. Their attention to detail was remarkable, ensuring every aspect of the project was polished. They brought innovative ideas that elevated the final product. Communication was proactive, keeping me updated and addressing concerns promptly. Nawaz also delivered ahead of schedule without compromising quality. Highly recommended for future projects!',
  },
  {
    name: 'Gort Gaming',
    role: 'Gaming content creator',
    image: '/image/gort_gaming.jpg',
    message:
      "Nawaz truly impressed in the video marketing project! His innovative approach and in-depth data analysis not only exceeded our expectations but also showcased remarkable understanding and responsiveness. Working with him felt seamless, and I can't recommend him enough! 👏",
  },
  {
    name: 'Magneoie',
    role: 'Musician Brand',
    image: '/image/Magneoie.png',
    message:
      "The video marketing service was exceptional, with precision and innovative strategies. Communication was proactive, making collaboration seamless. The video was delivered on time and exceeded expectations. Highly recommended, and I'll definitely be working with them again!",
  },
];
// Add more testimonials as needed
// Feel free to customize the testimonials data with your own content
