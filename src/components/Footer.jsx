import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10 px-4 md:px-20 mt-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Column 1 */}
        <div>
          <h2 className='text-2xl font-bold text-white mb-4'>Nawazsbio</h2>
          <p className='text-sm text-gray-400'>
            Helping businesses and individuals grow their online presence with smart strategies.
          </p>
          <div className='flex gap-4 mt-4'>
            <a href='#' className='hover:text-white'>
              <Facebook size={20} />
            </a>
            <a href='#' className='hover:text-white'>
              <Twitter size={20} />
            </a>
            <a href='#' className='hover:text-white'>
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-2'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#home' className='hover:text-blue-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#portfolio' className='hover:text-blue-400'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#services' className='hover:text-blue-400'>
                Services
              </a>
            </li>
            <li>
              <a href='#pricing' className='hover:text-blue-400'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-blue-400'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-2'>Legal</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#disclaimer' className='hover:text-blue-400'>
                Disclaimer
              </a>
            </li>
            <li>
              <a href='#terms' className='hover:text-blue-400'>
                Terms & Services
              </a>
            </li>
            <li>
              <a href='#affiliate' className='hover:text-blue-400'>
                Affiliate Disclosure
              </a>
            </li>
            <li>
              <a href='#privacy' className='hover:text-blue-400'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-10 text-center text-sm text-gray-500'>
        <p>Copyright © 2025 Nawazsbio. All rights reserved.</p>
      </div>
    </footer>
  );
}
