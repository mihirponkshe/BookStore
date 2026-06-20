import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import toast from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white mb-4 text-center">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Touch</span>
          </h1>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12">We'd love to hear from you. Please fill out this form or use our contact details.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border dark:border-slate-700">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold dark:text-white mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label"><span className="label-text dark:text-slate-300">Name</span></label>
                  <input type="text" placeholder="Your Name" className="input input-bordered dark:bg-slate-900 dark:border-slate-700 dark:text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text dark:text-slate-300">Email</span></label>
                  <input type="email" placeholder="your@email.com" className="input input-bordered dark:bg-slate-900 dark:border-slate-700 dark:text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text dark:text-slate-300">Message</span></label>
                  <textarea placeholder="How can we help you?" className="textarea textarea-bordered h-32 dark:bg-slate-900 dark:border-slate-700 dark:text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                </div>
                <button type="submit" className="btn w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white border-none mt-4">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8 bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border dark:border-slate-700">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Our Location
                </h3>
                <p className="text-slate-600 dark:text-slate-400 pl-7">123 Bookworm Lane, Knowledge City, World 10101</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Email Us
                </h3>
                <p className="text-slate-600 dark:text-slate-400 pl-7">support@bookstore.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Us
                </h3>
                <p className="text-slate-600 dark:text-slate-400 pl-7">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
