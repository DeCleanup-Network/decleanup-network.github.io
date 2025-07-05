import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full h-[1px] block bg-black  ${className}`}
      aria-hidden="true" 
    />
  );
};

export default Divider; 