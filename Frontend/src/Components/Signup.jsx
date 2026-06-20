import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import api from "../api/axiosInstance"
import toast from 'react-hot-toast'

function Signup() {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await api.post("/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Signup Successful !!');
                    localStorage.setItem("Users", JSON.stringify(res.data.user))
                    navigate(from, { replace: true })
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            })
    }
  return (
    <>
      <div className='flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8'>
        <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border dark:border-slate-700 relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">✕</Link>
            
            <div className="text-center mb-8">
                <h3 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">Create Account</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Join us to explore thousands of books</p>
            </div>

            <div className='space-y-5'>
              <div>
                <label className="label">
                  <span className="label-text font-medium text-slate-700 dark:text-slate-300">Full Name</span>
                </label>
                <input 
                  type="text" 
                  placeholder='Enter your full name' 
                  className='input input-bordered w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all'
                  {...register("fullname", { required: true })} 
                />
                {errors.fullname && <span className='text-xs text-red-500 mt-1 block'>This field is required</span>}
              </div>

              <div> 
                <label className="label">
                  <span className="label-text font-medium text-slate-700 dark:text-slate-300">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  className='input input-bordered w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all' 
                  {...register("email", { required: true })}
                />
                {errors.email && <span className='text-xs text-red-500 mt-1 block'>This field is required</span>}
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium text-slate-700 dark:text-slate-300">Password</span>
                </label>
                <input 
                  type="password" 
                  placeholder='Create a password' 
                  className='input input-bordered w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all'
                  {...register("password", { required: true })} 
                />
                {errors.password && <span className='text-xs text-red-500 mt-1 block'>This field is required</span>}
              </div>
            </div>

            <div className='mt-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
                <button className='w-full sm:w-auto bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-8 py-2.5 rounded-lg font-medium shadow-md transition-transform hover:-translate-y-0.5'>
                    Sign up
                </button>
                <div className='text-sm text-slate-600 dark:text-slate-400'>
                    Already have an account?{' '}
                    <button type="button" className='text-pink-500 hover:text-pink-600 font-medium hover:underline'
                        onClick={() => document.getElementById("my_modal_3").showModal()}>
                        Login
                    </button>
                    <Login/>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup