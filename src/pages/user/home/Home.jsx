import React from 'react'
import Category from '../../../components/user/category/Category'
import Product from '../../../components/product/Product'
import Products from '../products/Products'
import style from './home.module.css'
import imgbackground from '../../../assets/Img/homebackground.png'
export default function Home() {
  return (
    <div>
       <div className={`${style.homecontainer} mb-5`}>
       </div>
      <Category/>
 <Products/>
    </div>
  )
}
