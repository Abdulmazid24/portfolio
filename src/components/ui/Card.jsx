// src/components/ui/card.jsx

export const Card = ({ children, className = '' }) => {
  return <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className = '' }) => {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
};
