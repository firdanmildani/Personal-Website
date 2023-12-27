import React from 'react'
import MainRoute from '../routes/MainRoute'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='layout'>
        {/* <div className="menu">
            <Sidebar/>
        </div> */}
        <Sidebar/>
        <div className="content">            
            <MainRoute/>
        <Footer/>
        </div>
  </div>
  )
}

export default Layout