import React from 'react'

import { Outlet } from 'react-router-dom'
import CustomNavbar from '../components/user/navbar/Navbar'
import Footer from '../components/user/footer/Footer'

// الصفحات العامة للمستخدم
export default function UserLayout() {
  return (
    <>
    <CustomNavbar/>
    <Outlet/>

    <Footer/>
    </>
  )
}
