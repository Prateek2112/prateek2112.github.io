import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { GithubIcon, LinkedInIcon, EmailIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., send to an API endpoint)
    console.log('Form submitted:', formState);
    alert('Thank you for your message! I will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-slate-900 mt-20">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center text-slate-400">
        {/* Logo and Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold gradient-text">Prateek Mishra</h3>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors duration-300">
            <EmailIcon className="w-8 h-8" />
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows={3}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
