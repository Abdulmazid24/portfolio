import { motion } from 'framer-motion';
import { FaYoutube, FaSpotify, FaSearch, FaGlobe, FaTag } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'YouTube Channel Optimization',
    icon: <FaYoutube className='text-red-500 text-3xl' />,
    description:
      'Veonz64’s YouTube ads have 77.2K impressions, 23.6K views, and a 30.50% view rate at $0.20 CPC. Campaigns like "Melody Davis" and "The world in short" show high engagement.',
    image: '/public/image/5kl-e1740807587763.png',
  },
  {
    title: 'Spotify Brand Promotion',
    icon: <FaSpotify className='text-green-500 text-3xl' />,
    description:
      'Boosted Harold Thomas’ Spotify brand. "Chemistry" hit over 454K plays. Strategic promotion led to massive engagement.',
    image: '/public/image/Untitled-design.png',
  },
  {
    title: 'Search Engine Optimization',
    icon: <FaSearch className='text-blue-500 text-3xl' />,
    description:
      'SEO score improved from 22.4 to 96.2 with keyword research, tags, and metadata optimization.',
    image: '/public/image/14.png',
  },
  {
    title: 'YouTube Channel Monetization',
    icon: <FaYoutube className='text-yellow-500 text-3xl' />,
    description:
      'Helped a client reach YouTube monetization by improving watch hours, subscribers, and meeting all policies.',
    image: '/public/image/1.png',
  },
  {
    title: 'YouTube Video Promotion',
    icon: <FaTag className='text-pink-500 text-3xl' />,
    description:
      'Promoted a client video to get 2,000+ views in 3 days using SEO and targeted marketing.',
    image: '/public/image/3-1.png',
  },
  {
    title: 'Website SEO, ON/OFF Page',
    icon: <FaGlobe className='text-indigo-500 text-3xl' />,
    description:
      'Full website SEO overhaul: keywords, technical fixes, backlinks, content optimization.',
    image: '/public/image/image.png',
  },
  {
    title: 'Keyword Research',
    icon: <FaSearch className='text-purple-500 text-3xl' />,
    description: 'Identified low-competition, high-volume keywords to increase organic traffic.',
    image: '/public/image/Best-Keyword-Research-Tool.jpeg',
  },
];

export default function Portfolio() {
  return (
    <div className='px-4 py-10 md:px-10 max-w-screen-xl mx-auto'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>My Projects</h2>

      <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              className='rounded-xl shadow-xl'
            >
              <div className='bg-white/90 dark:bg-gray-900 backdrop-blur-lg p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full md:w-1/2 rounded-lg object-cover'
                />
                <div className='flex-1 space-y-2'>
                  <div className='flex items-center gap-2'>
                    {project.icon}
                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 text-sm'>{project.description}</p>
                  <button className='mt-2 text-blue-500 hover:underline'>Read More</button>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <div className='text-center mt-10'>
        <Link
          to={'/view-all-projects'}
          className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition'
        >
          View All
        </Link>
      </div>
    </div>
  );
}
