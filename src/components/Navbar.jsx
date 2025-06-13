import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['Home', 'Portfolio', 'Services', 'Pricing', 'Contact'];

  return (
    <header className='bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md mb-10'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-blue-600 dark:text-white'>Nawazsbio</h1>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium'>
          {navItems.map((item) => (
            <NavLink
              to={`/${item.toLowerCase()}`}
              key={item}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition hover:text-blue-500 ${isActive ? 'text-blue-600 font-semibold' : ''}`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-gray-700 dark:text-gray-200 focus:outline-none transition'
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='md:hidden bg-white dark:bg-gray-800 px-4 pb-4 shadow-lg rounded-b-xl overflow-hidden'
          >
            <nav className='flex flex-col gap-3 text-gray-700 dark:text-gray-100 font-medium'>
              {navItems.map((item) => (
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  key={item}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-1 transition hover:text-blue-500 ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
