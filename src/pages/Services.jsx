// src/components/ServicesCards.jsx
import {
  FaYoutube,
  FaGoogle,
  FaSpotify,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPinterest,
  FaGlobe,
  FaSearch,
  FaMoneyBillWave,
} from 'react-icons/fa';
import LetsWorkTogether from '../components/LetsWorkTogether';

const services = [
  {
    icon: <FaYoutube className='text-red-500 text-4xl' />,
    title: 'YouTube Promotion',
    description:
      'Want to grow your YouTube channel faster? I’ll promote your videos to the right audience, boosting views, engagement, and subscribers.',
  },
  {
    icon: <FaSearch className='text-blue-500 text-4xl' />,
    title: 'SEO',
    description:
      'Boost your YouTube channel with expert SEO! I’ll optimize your titles, descriptions, tags, and thumbnails to maximize views and engagement.',
  },
  {
    icon: <FaGoogle className='text-yellow-500 text-4xl' />,
    title: 'Google Ads Campaign',
    description:
      'Reach the right audience and grow your YouTube channel with expert video marketing through Google Ads!',
  },
  {
    icon: <FaMoneyBillWave className='text-green-500 text-4xl' />,
    title: 'YouTube Monetization',
    description:
      'Want to monetize your YouTube channel? I’ll help you meet YouTube’s requirements by increasing watch time and growing subscribers.',
  },
  {
    icon: <FaSpotify className='text-green-400 text-4xl' />,
    title: 'Spotify Promotion',
    description:
      'Boost your Spotify streams and connect with the right audience using organic strategies and targeted ad campaigns.',
  },
  {
    icon: <FaFacebook className='text-blue-700 text-4xl' />,
    title: 'Facebook Ads',
    description:
      'Reach your ideal audience and scale your business with expertly managed Facebook Ads to boost engagement and conversions.',
  },
  {
    icon: <FaInstagram className='text-pink-500 text-4xl' />,
    title: 'Instagram Marketing',
    description:
      'Boost your Instagram growth with targeted marketing strategies, high-performing ads, and organic content strategies.',
  },
  {
    icon: <FaEnvelope className='text-purple-500 text-4xl' />,
    title: 'Email Marketing',
    description:
      'Boost your brand with impactful email marketing campaigns crafted to drive conversions and engage your audience.',
  },
  {
    icon: <FaPinterest className='text-red-600 text-4xl' />,
    title: 'Pinterest Marketing',
    description:
      'Boost your brand’s visibility and traffic with Pinterest marketing through organic strategies and targeted ads.',
  },
  {
    icon: <FaGlobe className='text-indigo-500 text-4xl' />,
    title: 'Website SEO',
    description:
      'Boost your website’s ranking and traffic using proven SEO strategies to improve your visibility on Google.',
  },
];

export default function ServicesCards() {
  return (
    <section className='py-12 px-4 md:px-12 bg-gray-50 dark:bg-gray-900'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500'>
          Top-Notch YouTube Marketing Services to Grow Your Channel
        </h2>
        <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
          From expert SEO and video promotion to channel optimization and content strategies, I’ll
          ensure your channel stands out.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300'
          >
            <div className='flex items-center gap-4 mb-4'>
              <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-700 dark:to-pink-700 p-3 rounded-full'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                {service.title}
              </h3>
            </div>
            <p className='text-gray-600 dark:text-gray-300'>{service.description}</p>
          </div>
        ))}
      </div>
      <div className='mt-12 text-center'>
        <h3 className='text-2xl font-semibold text-gray-800 dark:text-white mb-4'>
          Ready to Boost Your YouTube Channel?
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-6'>
          Contact me today to get started with your YouTube marketing strategy.
        </p>
        <LetsWorkTogether />
      </div>
    </section>
  );
}
// Note: Ensure that the icons are imported correctly and the styles match your design preferences.
