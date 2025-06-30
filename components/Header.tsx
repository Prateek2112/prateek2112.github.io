
import React from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const NavItem: React.FC<{
  label: ViewType;
  activeView: ViewType;
  onClick: (view: ViewType) => void;
}> = ({ label, activeView, onClick }) => {
  const isActive = activeView === label;
  return (
    <button
      onClick={() => onClick(label)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out relative
        ${isActive 
          ? 'text-white' 
          : 'text-slate-400 hover:text-white hover:bg-slate-700'
        }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full"></span>
      )}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const navItems: ViewType[] = ['Home', 'Experience', 'Projects', 'Education', 'Blog'];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => setActiveView('Home')} className="text-2xl font-bold gradient-text">
              Prateek Mishra
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavItem key={item} label={item} activeView={activeView} onClick={setActiveView} />
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu could be implemented here */}
            <div className="flex flex-wrap justify-end">
             {navItems.filter(item => item !== 'Home').map((item) => (
                <NavItem key={item} label={item} activeView={activeView} onClick={setActiveView} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
