import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <>
    <div className="infinite-scrolling">
    </div>
    <Navbar />
    <div className='main'>
 
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default MainLayout; 