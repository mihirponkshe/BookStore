import React from 'react'
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import  { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider';
import Cart from './Components/Cart';
import BookDetail from './Components/BookDetail';
import Orders from './Components/Orders';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (<>
  <div className='min-h-screen dark:bg-slate-900 dark:text-white bg-white text-slate-900 transition-colors duration-300'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/book/:id" element={<BookDetail/>}/>
    <Route path="/orders" element={<Orders/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  <Toaster />
  </div>
  </>
  );
}

export default App