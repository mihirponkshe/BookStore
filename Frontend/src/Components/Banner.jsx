import React from 'react'
const banner = "/banner.png";
function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 min-h-[70vh] items-center'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-0 z-10'>
          <div className='space-y-8 md:pr-10'>
            <h1 className='text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-800 dark:text-slate-100'>
              Discover your next great read at{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                Book Store !!!
              </span>
            </h1>
            <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light'>
              Escape into new worlds. We offer a curated collection of literary masterpieces, hidden gems, and contemporary bestsellers. Find your perfect story today.
            </p>
            <div className="form-control w-full max-w-sm relative group">
              <label className="input input-bordered flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200 dark:focus-within:ring-pink-900 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-400">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow text-slate-700 dark:text-slate-200 placeholder-slate-400" placeholder="Enter your email to subscribe" />
              </label>
            </div>
            <button className="btn bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 border-none text-white px-8 rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-1 mt-4">
              Get Started
            </button>
          </div>
        </div>
        <div className='order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center relative'>
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-violet-300 dark:from-pink-900 dark:to-violet-900 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img src={banner} className='w-full max-w-lg object-contain relative z-10 hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl' alt="Books Illustration" />
        </div>
      </div>
    </>
  )
}

export default Banner