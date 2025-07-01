
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 fade-in-up">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Professional Experience</h2>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute h-full border-0 border-l-2 border-slate-700 top-0" style={{ left: '50%' }}></div>
        <div className="absolute h-full border-0 border-r-2 border-slate-700 top-0" style={{ right: '50%' }}></div>
        
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-slate-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{EXPERIENCE_DATA.length - index}</h1>
            </div>
            <div className="order-1 bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4 transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1">
              <h3 className="font-bold text-sky-400 text-xl">{exp.role}</h3>
              <p className="text-md font-semibold text-white mb-2">{exp.company}</p>
              <p className="text-sm text-slate-400 mb-3">{exp.period}</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                {exp.description.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
