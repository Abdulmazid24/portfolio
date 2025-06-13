// src/components/ui/button.jsx

import React from 'react';
import clsx from 'clsx';

export function Button({ children, className = '', size = 'md', variant = 'primary', ...props }) {
  // Size classes
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Stylish variants
  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg hover:brightness-110',
    secondary:
      'bg-gray-100 text-gray-800 shadow-inner hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
    outline:
      'border border-blue-500 text-blue-600 bg-white hover:bg-blue-50 dark:bg-transparent dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-white',
    glass:
      'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition-all shadow-lg',
  };

  return (
    <button
      className={clsx(
        'rounded-xl font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
Button.defaultProps = {
  size: 'md',
  variant: 'primary',
};
