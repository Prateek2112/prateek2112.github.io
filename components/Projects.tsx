import React from 'react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 fade-in-up">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1 flex flex-col h-full">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-sky-400 mb-2">{project.title}</h3>
                <p className="text-slate-300 my-4 flex-grow">{project.description}</p>
                <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <div className="mb-3">
                        <h4 className="font-semibold text-white text-sm">Key Targets</h4>
                        <ul className="list-disc list-inside text-slate-400 text-sm space-y-1 mt-1">
                            {project.keyTargets.map(target => <li key={target}>{target}</li>)}
                        </ul>
                    </div>
                    <div className="mb-3">
                        <h4 className="font-semibold text-white text-sm">Key Libraries</h4>
                        <p className="text-slate-400 text-sm mt-1">{project.keyLibraries.join(', ')}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white text-sm">Programming Language</h4>
                        <p className="text-slate-400 text-sm mt-1">{project.programmingLanguage}</p>
                    </div>
                </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
