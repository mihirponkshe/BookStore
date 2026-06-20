import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white mb-8 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Book Store</span>
          </h1>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border dark:border-slate-700 mb-12">
            <div className="p-8 md:p-12 space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Our Mission</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                At Book Store, we believe that reading has the power to change lives. Our mission is to make literature accessible to everyone, from timeless classics to modern bestsellers. We carefully curate our collection to ensure that every reader finds their perfect story.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-8">Our Story</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded in 2026, Book Store started as a small passion project by a group of avid readers. Today, it has grown into a community-driven platform serving thousands of book lovers worldwide. We are constantly expanding our catalog and improving our platform to provide the best possible reading experience.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 border-t dark:border-slate-700 text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Join our community</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Discover new worlds, share your thoughts, and connect with fellow readers.</p>
              <button onClick={() => document.getElementById("my_modal_3").showModal()} className="btn bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white border-none rounded-full px-8">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
