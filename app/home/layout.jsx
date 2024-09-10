import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayout = ({children}) => {
  return (
    <div><Navbar/>{children}</div>
  )
}
export default HomeLayout