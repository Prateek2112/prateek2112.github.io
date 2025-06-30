
import React from 'react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 fade-in-up">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="flex items-center bg-slate-800/50 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/80 hover:shadow-lg">
            <img src={edu.logoUrl} alt={`${edu.institution} logo`} className="w-16 h-16 rounded-full mr-6" />
            <div>
              <h3 className="text-xl font-bold text-sky-400">{edu.institution}</h3>
              <p className="text-lg text-white">{edu.degree}</p>
              <p className="text-slate-400">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
