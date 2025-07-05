import React, { useEffect, useState } from 'react'
import Loading from '../../loading/Loading';
import axios from 'axios';


export default function Cart() {
  
  const [cart, setCart] = useState(null);
 const [isLoading, setIsLoading] = useState(true);

  const getCart = async () => {
    try {
      const token = localStorage.getItem("userToken");
      console.log("Token:", token); 
      const response = await axios.get('https://ecommerce-node4.onrender.com/cart',
        {
          headers: {
            Authorization: `Tariq__${token}`,
          
          }
        }
      );
  console.log(response);

    }
    catch (error) {
      console.log("error", error);
    }
    finally {
      setIsLoading(false);
    }
  }
 useEffect(() => {
  getCart(); 
  }, [])

  if (isLoading) {
     return <Loading />
   }

  return (
    <div>
hhhhhhh
    </div>
  )
}
