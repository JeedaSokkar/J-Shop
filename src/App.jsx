import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomNavbar from './components/user/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import Login from "./pages/user/login/Login"
import Register from './pages/user/register/Register'

import DashboardLayout from './layouts/dashboardLayout';

export default function App() {
  const router=createBrowserRouter([
    {
      path:"/",
    element:<AuthLayout/>,
    children:[
      {
        path:"register",
        element:<Register/>,
      },
      {
        path:"login",
        element:<Login/>
      }
    ]

    },
    {
      path:"/dashboard",
      element:<DashboardLayout/>
    }
  ]);
  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}
