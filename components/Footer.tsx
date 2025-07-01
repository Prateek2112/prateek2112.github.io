import React, { useState } from 'react';
import emailjs from 'https://esm.sh/@emailjs/browser';
import { CONTACT_INFO } from '../constants';
import { GithubIcon, LinkedInIcon, EmailIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage('');
    setIsError(false);

    // IMPORTANT: 
    // 1. Sign up for a free account at https://www.emailjs.com/
    // 2. Create an email service and a template.
    // 3. In the template settings, set the "To Email" address to "prateekm2112@gmail.com".
    // 4. Replace the placeholder values below with your actual credentials from your EmailJS dashboard.
    const serviceID = 'service_xj22hzj';
    const templateID = 'template_t1qqie3'; 
    const publicKey = 'BesH03AY_QWmvd5QJ';

    // Prevent submission if credentials are not set
    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        setSubmitMessage("Contact form is not configured. Please add EmailJS credentials.");
        setIsError(true);
        setIsSubmitting(false);
        console.error("EmailJS credentials are not set in components/Footer.tsx");
        return;
    }

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setIsError(false);
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Failed to send message. Please try again later or contact me directly.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 mt-20">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start text-slate-400">
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
              disabled={isSubmitting}
              className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50"
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
              disabled={isSubmitting}
              className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50"
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
              disabled={isSubmitting}
              className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {submitMessage && (
            <p className={`text-sm text-center mt-2 ${isError ? 'text-red-400' : 'text-green-400'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </footer>
  );
};

export default Footer;