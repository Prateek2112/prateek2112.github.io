
import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Blog from './components/Blog';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('Home');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(false);
    // Timeout to allow the old component to fade out before the new one fades in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150); // A bit of delay to ensure smooth transition
    return () => clearTimeout(timer);
  }, [activeView]);

  const renderContent = (): React.ReactNode => {
    switch (activeView) {
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      case 'Education':
        return <Education />;
      case 'Blog':
        return <Blog />;
      case 'Home':
      default:
        return <Home setActiveView={setActiveView}/>;
    }
  };

  return (
    <div className="min-h-screen text-slate-300 flex flex-col">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className={`flex-grow transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
