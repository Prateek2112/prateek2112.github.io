import React from 'react';
import { EXPERIENCE_DATA, PROJECTS_DATA, CERTIFICATIONS_DATA } from '../constants';
import { ViewType, Project } from '../types';
import Card from './Card';

interface HomeProps {
    setActiveView: (view: ViewType) => void;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1 flex flex-col">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-sky-400">{project.title}</h3>
            <div className="mt-4 flex-grow">
                <div className="mb-3">
                    <h4 className="font-semibold text-white">Key Targets</h4>
                    <ul className="list-disc list-inside text-slate-400 text-sm">
                        {project.keyTargets.slice(0, 2).map(target => <li key={target}>{target}</li>)}
                    </ul>
                </div>
                <div className="mb-3">
                    <h4 className="font-semibold text-white">Key Libraries</h4>
                    <p className="text-slate-400 text-sm">{project.keyLibraries.join(', ')}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-white">Programming Language</h4>
                    <p className="text-slate-400 text-sm">{project.programmingLanguage}</p>
                </div>
            </div>
        </div>
    </div>
  );
}


const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  return (
    <div className="fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white" style={{
        backgroundImage: `url('https://picsum.photos/seed/hero-bg/1920/1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            PRATEEK MISHRA
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold tracking-wide gradient-text">
            DATA SCIENCE
          </h2>
          <p className="mt-2 text-md sm:text-lg text-slate-300">
            Data Science | Machine Learning Architecture | Natural Language Processing | Data Engineering | Predictive Analytics | Statistical Modeling | Time Series Forecasting
          </p>
          <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
              <div className="text-lg font-light">
                  <p className="text-3xl font-bold gradient-text">Hi, I'm Prateek Mishra and I love to code.</p>
              </div>
              <p className="text-slate-300">
                A data scientist with a Master's degree in Computer Science, skilled in leveraging data to build intelligent solutions. Expertise in predictive modeling, NLP, robust data pipelines, and creating interactive visualizations to drive business insights.
              </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Experience</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.company} className="text-center group">
                <img src={exp.logoUrl} alt={`${exp.company} logo`} className="h-20 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"/>
                <p className="mt-4 font-semibold text-white">{exp.role}</p>
                <p className="text-slate-400 text-sm">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {PROJECTS_DATA.slice(0, 6).map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {CERTIFICATIONS_DATA.map(cert => (
              <div key={cert.title} className="w-full sm:w-1/3 lg:w-1/4">
                 <Card>
                    <img src={cert.imageUrl} alt={cert.title} className="w-full h-auto object-cover rounded-md"/>
                 </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
