import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomNavbar from './components/user/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'; 

import AuthLayout from './layouts/AuthLayout';
import Login from "./pages/user/login/Login"
import Register from './pages/user/register/Register'

import DashboardLayout from './layouts/dashboardLayout';
import { ToastContainer} from 'react-toastify';
import UserLayout from './layouts/UserLayout';
import Home from './pages/user/home/Home';
import Categories from './pages/user/category/Categories';
import Products from './pages/user/products/Products';
import CategoryProducts from './pages/user/products/CategoryProducts';
import ProductsDetails from './pages/user/products/ProductsDetails';
import Cart from './pages/user/cart/Cart';
export default function App() {
  const router=createBrowserRouter([
    {
      path:'/auth',
    element:<AuthLayout/>,
    children:[
      {
        path:'register',
        element:<Register/>,
      },
      {
        path:'login',
        element:<Login/>
      }
    ]

    },
    {
        path:'/',
          element:<UserLayout/>,
          children:[{
            path:'/home',
            element:<Home/>
          },
          {
            path:'/categories',
            element:<Categories/>
          },
          {
            path:'/categories/:categoryId',
            element:<CategoryProducts/>
          },
          {
            path:'/products',
            element:<Products/>
          },
          {
            path:'product/:productId',
            element:<ProductsDetails/>
          },
          {
            path:'cart',
            element:<Cart/>
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
      <ToastContainer />
<RouterProvider router={router}/>
    </>
  )
}
