import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from '../api/axiosInstance';
import Cards from './Cards';
function Freebook() {
  const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
             const res = await api.get("/book");
             const data=res.data.filter((data)=>data.category==="Free")
             console.log(data)
             setBook(data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-extrabold text-3xl pb-4 text-slate-800 dark:text-slate-100 tracking-tight'>Free Offered Books</h1>
        <p className='text-slate-600 dark:text-slate-400 font-light max-w-2xl'>Discover a selection of premium books available for free. Dive into these amazing stories without spending a dime. Perfect for exploring new genres or finding your next favorite author.</p>
        </div>
    <div>
    <Slider {...settings}>
       {book.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
      </Slider>
      </div>
    </div>
    </>
  )
}

export default Freebook