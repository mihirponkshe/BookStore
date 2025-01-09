import React from 'react'
import Navbar from '../Components/Navbar';
import Banner from '../Components/banner';
import Freebook from '../Components/Freebook';
import Footer from '../Components/footer';

function Home() {
  return (
    <>
     <Navbar/>
     <Banner/>
     <Freebook/>
     <Footer/>
    </>
  )
}

export default Home