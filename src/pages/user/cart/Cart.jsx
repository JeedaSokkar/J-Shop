import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';


import axios from 'axios';
import Loading from '../../../components/loading/Loading';
import style from './Cart.module.css'

export default function cart() {
  const[cart,setCart]=useState(null);
  const[isLoading,SetIsLoadin]=useState(true);

  const getCart=async()=>{
    try{
      const token = localStorage.getItem("userToken");
      const response=await axios.get("https://ecommerce-node4.onrender.com/cart",
       { headers: {
            Authorization: `Tariq__${token}`
          
          }
        }
      );
setCart(response.data.products);
console.log(response.data.products);
    }catch(error){
      console.log("error",error);
    }
    finally{
      SetIsLoadin(false);
    }
  }

  useEffect(()=>{
getCart();
  },[])

    if(isLoading){
   return <Loading/>
  }
  return (
  <section className='cart'>
<div className='container'>
        <div className={`${style.head} d-flex justify-content-center align-items-center mt-5 mb-3`}>
          <h1>Your Cart</h1>
        </div>
        <Table  bordered hover>

      <thead className={style.headTable}  >
        <tr>
          <th  >#</th>
          <th>Image</th>
          <th>Product Name</th>
           <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
       {cart && cart.map((item, index) => (
  <tr key={item._id}>
    <td>{index + 1}</td>
    <td>
      <img src={item.details.mainImage.secure_url} alt={item.details.name} width="50" />
    </td>
    <td>{item.details.name}</td>
    <td>{item.details.finalPrice}$</td>
    <td>{item.quantity}</td>
      <td>{item.quantity * item.details.finalPrice}$</td>
  </tr>
))}


        
      </tbody>
    </Table>
        </div>
  </section>
  )
}
