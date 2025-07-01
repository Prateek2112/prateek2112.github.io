import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { Education as EducationType } from '../types';

const EducationItem: React.FC<{ edu: EducationType; reverse: boolean }> = ({ edu, reverse }) => {
  const content = (
    <div className="text-white">
      <h3 className="text-2xl md:text-3xl font-bold">{edu.institution}</h3>
      <p className="mt-2 text-lg md:text-xl text-slate-300">{edu.degree}</p>
      <p className="mt-1 text-md text-slate-400">{edu.period}</p>
      {/* <p className="mt-2 text-md font-semibold">GPA - {edu.gpa}</p> */}
      
      <div className="mt-4 text-slate-300 text-sm md:text-base space-y-3">
        <div>
          <strong className="font-bold text-white">Coursework</strong> - {edu.coursework}
        </div>
        {/* {edu.thesis && (
          <div>
            <strong className="font-bold text-white">Thesis</strong> - {edu.thesis}
          </div>
        )} */}
        {/* {edu.accolades && (
          <div>
            <strong className="font-bold text-white">Accolades</strong> - {edu.accolades}
          </div>
        )} */}
      </div>
    </div>
  );

  const image = (
    <div className="flex items-center justify-center p-4">
      <img src={edu.logoUrl} alt={`${edu.institution} logo`} className="max-h-48 md:max-h-64 object-contain bg-white rounded-lg p-4" />
    </div>
  );

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}>
      <div className={`${reverse ? 'md:order-last' : ''}`}>
        {content}
      </div>
      <div className={`${reverse ? 'md:order-first' : ''}`}>
        {image}
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 fade-in-up px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-16 sm:mb-24 tracking-widest uppercase">
        <span className="block">Education</span>
      </h2>
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {EDUCATION_DATA.map((edu, index) => (
          <EducationItem key={index} edu={edu} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};

export default Education;