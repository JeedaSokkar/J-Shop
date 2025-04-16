import React from 'react'
import CustomNavbar from '../components/user/navbar/Navbar'
import { Outlet } from 'react-router-dom'
// عرض صفحات المتخصصة بتسجيل الدخول
export default function AuthLayout() {
  return (
    <>
    <Outlet/>
    </>
  )
}
