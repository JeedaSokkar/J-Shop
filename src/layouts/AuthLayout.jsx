import React from 'react'
import CustomNavbar from '../components/user/navbar/Navbar'
import { Outlet } from 'react-router-dom'
// عرض صفحات المتخصصة بتسجيل الدخول
 //بس اعرض الصفحة الي طلبها المستخدم 
  //بس عرض صفحة تسجيل الدخول الخروج
export default function AuthLayout() {
  return (
    <>
    
 
    <Outlet/>
    </>
  )
}
