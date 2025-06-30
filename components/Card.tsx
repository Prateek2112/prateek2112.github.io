
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-slate-800/50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1 relative group p-px
        before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-br before:from-transparent before:via-transparent before:to-sky-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
        ${className}`}
    >
      <div className="relative bg-slate-900 rounded-lg h-full w-full p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
