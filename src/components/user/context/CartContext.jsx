import { useState, createContext ,useEffect} from "react";
import axios from 'axios';



export const CartContext =createContext();


const CartContextProvider =({children})=>{
     const[cartCount,SetCartCount]=useState(0);
       useEffect(()=>{
     getCart();
       },[])
      const getCart=async()=>{
    
      const token = localStorage.getItem("userToken");
      const response=await axios.get("https://ecommerce-node4.onrender.com/cart",
       { headers: {
            Authorization: `Tariq__${token}`
          
          }
        }
      );
SetCartCount(response.data.count);

   }
     return <CartContext.Provider value = {{cartCount ,SetCartCount}}>
        {children}
     </CartContext.Provider>
}
   
export default  CartContextProvider;