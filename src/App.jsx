import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CustomNavbar from "./components/user/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";

import DashboardLayout from "./layouts/DashboardLayout";
import { ToastContainer } from "react-toastify";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/user/home/Home";
import Categories from "./pages/user/category/Categories";
import Products from "./pages/user/products/Products";
import CategoryProducts from "./pages/user/products/CategoryProducts";
import ProductsDetails from "./pages/user/products/ProductsDetails";
import Cart from "./pages/user/cart/Cart";
import ProtectedRoute from "./components/user/protectedroute/ProtectedRoute";
import CartContextProvider from "./components/user/context/CartContext";
import Profile from "./components/user/profile/Profile";
import Info from "./components/user/profile/Info";
import Orders from "./components/user/profile/Orders";
import UserContextProvider from "./components/user/context/UserContext";
export default function App() {
  const router = createBrowserRouter([
    {
      //auth/Register
      //auth/Login
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      //layout to user
      path: "/",
      element:
      <CartContextProvider>
       <UserLayout />
       </CartContextProvider>,
       
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "categories/:categoryId",
          element: (
            <ProtectedRoute>
              <CategoryProducts />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "product/:productId",

          element: (
            <ProtectedRoute>
              <ProductsDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
         {
          path: "profile",
          element:<Profile/>,
          children:[
            { 
              path: "Info",
              element : <Info/>
            },
          {
              path: "Orders",
              element : <Orders/>
          }

          ]
        },
      ],
    },
    {
      //layout dashboard
      path: "/dashboard",
      element: <DashboardLayout />,
    },
  ]);
  return (
    <>
   <UserContextProvider>
      <ToastContainer />
      <RouterProvider router={router} />
</UserContextProvider>
    </>
  );
}
