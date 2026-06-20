import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import api from "../api/axiosInstance"
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
          email:data.email,
          password:data.password
        }
      await api.post("/user/login",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success('Login Successful !!');
          document.getElementById("my_modal_3").close()
          setTimeout(()=>{
            window.location.reload()
            localStorage.setItem("Users",JSON.stringify(res.data.user))
          },1500)
        }
      }).catch((err)=>{
        if(err.response){
          console.log(err);
          toast.error("Error: "+err.response.data.message);
        }
      })
      }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border dark:border-slate-700">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
          
            <h3 className="font-bold text-2xl tracking-tight text-slate-800 dark:text-slate-100 mb-6">Welcome Back</h3>
            
            <div className='space-y-4'>
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
                    placeholder='Enter your password' 
                    className='input input-bordered w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all'
                    {...register("password", { required: true })} 
                  />
                  {errors.password && <span className='text-xs text-red-500 mt-1 block'>This field is required</span>}
              </div>
            </div>

            <div className='flex items-center justify-between mt-8'>
                <button className='bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-transform hover:-translate-y-0.5 w-full md:w-auto'>
                    Login
                </button>
                <p className="text-sm text-slate-600 dark:text-slate-400">Not registered?
                <Link to="/signup" className='ml-1 text-pink-500 hover:text-pink-600 font-medium hover:underline' onClick={() => document.getElementById("my_modal_3").close()}>Sign up</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}
export default Login