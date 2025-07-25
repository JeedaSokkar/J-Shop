import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { IoIosPerson } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import Loading from "../../loading/Loading";
import { MdEdit } from "react-icons/md";


export default function Info() {
    const{user ,isLoading}=useContext(UserContext);
  console.log(user);
  return (
    
  <div className="pt-5 d-flex flex-column justify-content-center align-items-center">
 

 <div className="mb-2"> 
  

  <img src= {isLoading?<Loading/> :user.image.secure_url} className="rounded-circle mb-4" alt="Profile" style={{ width: "260px", height: "260px" }}  />
  </div>
 

  <p>Full Name:  {isLoading?<Loading/> : user.userName} </p>
  <p>Email  {isLoading?<Loading/> :user.email}</p>
  <p>Role:  {isLoading?<Loading/> :user.role}</p>
</div>
    
  )
}
