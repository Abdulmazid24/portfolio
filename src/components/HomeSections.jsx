import { motion } from 'framer-motion';
import { FaSearch, FaYoutube, FaGoogle, FaGlobe } from 'react-icons/fa';
import { Download } from 'lucide-react';

export default function HomeSections() {
  const services = [
    {
      title: 'SEO',
      desc: 'Boost Organic Traffic, Gain Long-Term Growth',
      detail:
        'SEO helps your brand rank higher, attract targeted audiences, and grow organically over time.',
      icon: <FaSearch className='text-white text-3xl' />,
      bg: 'bg-indigo-500',
    },
    {
      title: 'YouTube Management',
      desc: 'Grow Subscribers, Not Just Views',
      detail:
        'From content planning to YouTube ads — scale your channel while staying authentic to your niche.',
      icon: <FaYoutube className='text-white text-3xl' />,
      bg: 'bg-red-500',
    },
    {
      title: 'Google Ads',
      desc: 'Targeted Ads That Deliver Results',
      detail:
        'High-converting Google Ads campaigns using data-driven strategies to ensure traffic and conversions.',
      icon: <FaGoogle className='text-white text-3xl' />,
      bg: 'bg-yellow-500',
    },
    {
      title: 'Web 2.0 Traffic',
      desc: 'More Visitors, More Visibility',
      detail:
        'Drive quality traffic to your website with SEO, social media, and content strategies.',
      icon: <FaGlobe className='text-white text-3xl' />,
      bg: 'bg-green-500',
    },
  ];

  return (
    <div className='space-y-20 px-4 md:px-20 py-16 bg-white text-gray-900'>
      {/* Services Section */}
      <section>
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-bold text-gray-800'>My Services</h2>
          <p className='text-gray-600 mt-2'>What I Can Do to Grow Your Brand</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center'
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${service.bg} shadow-md`}
              >
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-md font-medium text-gray-700 mb-1'>{service.desc}</p>
              <p className='text-sm text-gray-600'>{service.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-center max-w-3xl mx-auto'
      >
        <h2 className='text-3xl font-bold mb-4'>Why Hire Me for Your Next Campaign?</h2>
        <ul className='space-y-2 text-left text-gray-700'>
          <li>✔ Increased brand engagement by 200%+</li>
          <li>✔ Doubled followers and ROI with data-driven social strategies</li>
        </ul>
        <p className='mt-4 text-gray-600'>
          I don’t just follow trends—I create them, while staying true to your brand’s identity.
          Let’s turn your followers into loyal fans and convert your goals into real success.
        </p>

        {/* ✅ Working Download Button */}
        <a
          href='/cv.pdf'
          download='My_CV.pdf'
          className='mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 group'
        >
          <Download className='w-5 h-5 group-hover:animate-bounce' />
          <span>Download CV</span>
        </a>
      </motion.section>

      {/* Projects Section */}
      <section className='space-y-12'>
        {[
          {
            title: 'YouTube Channel Optimization',
            content:
              '77.2K Impressions, 23.6K Views, 30.5% View Rate at $0.20 CPC. High engagement on campaigns like "Melody Davis" and "The World in Short".',
          },
          {
            title: 'Spotify Brand Promotion',
            content:
              "Promoted Harold Thomas’ Spotify profile — 'Chemistry' track reached 454K+ plays. Result of targeted digital music promotion.",
          },
          {
            title: 'Search Engine Optimization',
            content:
              'Full YouTube SEO strategy: keyword research, metadata optimization, thumbnails, and traffic boosting with retention techniques.',
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl shadow-lg p-6 border border-gray-200'
          >
            <h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
            <p className='text-gray-700 mb-2'>{project.content}</p>
            <button className='mt-2 px-4 py-2 rounded border text-sm hover:bg-gray-100 transition'>
              Read More
            </button>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
//       <textarea
