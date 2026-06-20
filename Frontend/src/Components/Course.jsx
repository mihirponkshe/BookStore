import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import {Link, useLocation} from "react-router-dom"
import api from "../api/axiosInstance"
function Course() {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
             const res = await api.get("/book");
             console.log(res.data)
             setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    const filteredBooks = searchQuery 
      ? book.filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()))
        ) 
      : book;
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-32 items-center justify-center text-center space-y-8'>
            <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100'>We're delighted to have you <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>here!! :)</span></h1>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed'>Browse our extensive collection of premium courses and books. Whether you are looking to learn a new skill, dive into a gripping novel, or expand your professional knowledge, we have carefully curated content just for you.</p>
            <Link to="/">
            <button className='bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-violet-600 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-1 font-medium'>Back to Home</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {
                filteredBooks.length > 0 ? (
                  filteredBooks.map((item)=>(
                      <Cards key={item._id} item={item}/>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20 text-slate-500">
                    No books found matching your search.
                  </div>
                )
            }
        </div>
    </div>
    </>
  )
}

export default Course