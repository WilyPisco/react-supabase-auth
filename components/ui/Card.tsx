
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-lg p-8 space-y-8 bg-dark-800 border border-dark-700 rounded-xl shadow-2xl shadow-black/20">
      {children}
    </div>
  );
};

export default Card;
