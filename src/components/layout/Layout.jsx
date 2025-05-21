import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div>
      <div className='pb-16'>
      <Navbar/>
      </div>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
