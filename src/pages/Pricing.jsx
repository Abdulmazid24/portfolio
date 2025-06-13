// PricingPage.jsx

import { motion } from 'framer-motion';

const pricingPackages = [
  {
    category: 'Promotional Services',
    packages: [
      {
        title: 'YouTube Video Promotion Service',
        price: '$20',
        label: 'Basic Package',
        features: [
          '2k Niche related audience',
          '5 Low KD Keyword Research',
          'No Social Media Share',
        ],
        tag: '',
      },
      {
        title: 'YouTube Video Promotion Service',
        price: '$50',
        label: 'Standard Package',
        features: [
          '5k Niche related audience',
          '10 Low KD Keyword Research',
          '2 Social Media Share',
        ],
        tag: 'Popular',
      },
      {
        title: 'YouTube Video Promotion Service',
        price: '$100',
        label: 'Premium Package',
        features: [
          '10k+ Niche related audience',
          '20 Top Keyword Research',
          '5+ Social Media Share',
        ],
        tag: 'Recommend',
      },
    ],
  },
  {
    category: 'SEO Services',
    packages: [
      {
        title: 'SEO - Optimize Your video with SEO',
        price: '$10',
        label: 'Basic Package',
        features: ['Title + Keyword Research', 'Description + metadata', '1 Video optimization'],
        tag: 'Best Selling',
      },
      {
        title: 'SEO - Optimize Your video with SEO',
        price: '$50',
        label: 'Standard Package',
        features: ['Title + Keyword Research', 'Description + metadata', '5 Video optimization'],
        tag: 'Popular',
      },
      {
        title: 'SEO - Optimize Your video with SEO',
        price: '$90',
        label: 'Premium Package',
        features: [
          'Title + Keyword Research',
          'Description + metadata',
          '10 Video optimization + Bonus',
        ],
        tag: 'Recommend',
      },
    ],
  },
  {
    category: 'Monthly Services',
    packages: [
      {
        title: 'SEO - Monthly Package for SEO',
        price: '$250',
        label: 'For 1 Month management',
        features: [
          'I’ll manage channel for 1 month.',
          'Title + Key.. Research + Des...',
          'Metadata + Bonus + Everything.',
        ],
        tag: 'Recommend',
      },
      {
        title: 'PROMOTION - Channel Monetization',
        price: '$400',
        label: 'Until fill the requirement',
        features: [
          'Achieve 1000+ Subscribers',
          '4000 Hours+ watchtime',
          'Compliance with YouTube policies',
        ],
        tag: 'Recommend',
      },
      {
        title: '1M+ Views - Viral Promotion',
        price: '$4000',
        label: 'Viral Within 1 Month',
        features: ['1M+ YouTube Views', 'Title + Keyword Research', 'Thumbnail design + more'],
        tag: 'Recommend',
      },
    ],
  },
  {
    category: 'More Services',
    packages: [
      {
        title: 'Pinterest - Optimize your brand with Pinterest',
        price: '$30',
        label: 'Basic Package',
        features: ['60 pins 3 Board', 'Engagement with followers', 'Appealing Images'],
        tag: 'Recommend',
      },
      {
        title: 'Spotify - Optimize your spotify brand with us',
        price: '$50',
        label: 'Basic Package',
        features: ['15,000+ Organic audiences', '1 Promoted track', 'By social media'],
        tag: 'Recommend',
      },
      {
        title: 'Facebook - Optimize Your brand with facebook',
        price: '$20',
        label: 'Basic Package',
        features: ['1 Highly Targeted Facebook ads', 'Target audience research', 'Campaign setup'],
        tag: 'Recommend',
      },
      {
        title: 'Website - Optimize Your website with SEO',
        price: '$30',
        label: 'Basic Package',
        features: [
          'On page SEO + Title optimization',
          '1 Page optimized + Meta description',
          '10 keywords researched',
        ],
        tag: 'Recommend',
      },
      {
        title: 'Instagram - Optimize Your instagram with ads',
        price: '$20',
        label: 'Basic Package',
        features: [
          'Promote your reel to 50K people',
          '1 platform only',
          'Engagement with prospects',
        ],
        tag: 'Recommend',
      },
      {
        title: 'Email - Email marketing flows for ecommerce',
        price: '$20',
        label: 'Basic Package',
        features: ['Account setup + 2 flows', 'Email template setup', 'Automation planning'],
        tag: 'Recommend',
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <section className='bg-base-100 text-base-content py-16 px-4 sm:px-8 lg:px-20'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='text-center mb-12'
      >
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4'>
          Promotional & SEO Service Pricing
        </h2>
        <p className='max-w-2xl mx-auto text-lg text-gray-500'>
          We appreciate you! Choose a package to begin.
        </p>
      </motion.div>

      {pricingPackages.map((section, sectionIndex) => (
        <div key={sectionIndex} className='mb-16'>
          <h3 className='text-2xl font-semibold text-primary mb-6'>{section.category}</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {section.packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-800'
              >
                {pkg.tag && (
                  <span className='bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3'>
                    {pkg.tag}
                  </span>
                )}
                <h4 className='text-xl font-bold text-gray-800 dark:text-white mb-1'>
                  {pkg.title}
                </h4>
                <p className='text-primary text-2xl font-bold mb-2'>{pkg.price}</p>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 mb-3'>
                  {pkg.label}
                </p>
                <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mb-4'>
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
                <button className='bg-primary text-white font-semibold px-4 py-2 rounded-xl hover:shadow-lg transition'>
                  Place Order
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <div className='text-center mt-16'>
        <p className='text-lg text-gray-500 max-w-2xl mx-auto'>
          Apart from these packages, if you wish to order a different amount or a custom package,
          feel free to contact me via Email or WhatsApp.
        </p>
      </div>
    </section>
  );
}
