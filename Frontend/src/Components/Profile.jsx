import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '../context/AuthProvider';
import Logout from './logout';

function Profile() {
  const [authUser] = useAuth();

  if (!authUser) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center dark:bg-slate-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold dark:text-white mb-4">Please login to view your profile</h2>
            <button onClick={() => document.getElementById("my_modal_3").showModal()} className="btn bg-pink-500 text-white hover:bg-pink-600">Login</button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-12">
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border dark:border-slate-700">
          <div className="bg-gradient-to-r from-pink-500 to-violet-500 h-32 w-full"></div>
          <div className="px-8 flex flex-col items-center -mt-16 relative mb-8">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center shadow-lg">
              <span className="text-5xl font-bold text-slate-500 dark:text-slate-300">
                {authUser.fullname ? authUser.fullname.charAt(0).toUpperCase() : 'U'}
              </span>
            </div>
            <h1 className="text-3xl font-bold mt-4 text-slate-800 dark:text-white">{authUser.fullname}</h1>
            <p className="text-slate-500 dark:text-slate-400">{authUser.email}</p>
          </div>

          <div className="px-8 pb-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400">Account Status</p>
                <p className="font-semibold text-green-500">Active</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400">Member Since</p>
                <p className="font-semibold dark:text-white">June 2026</p>
              </div>
            </div>

            <div className="border-t dark:border-slate-700 pt-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold dark:text-white">Security</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage your account access</p>
              </div>
              <Logout />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
