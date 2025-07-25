import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import { DevTool } from "@hookform/devtools";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Zoom, toast } from 'react-toastify';

import Alert from 'react-bootstrap/Alert';
import style from './login.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
   const [serverError, setServerError] = useState(null);
   const { register, handleSubmit, control, formState: { errors } } = useForm();
   const navigate = useNavigate();
 
 
   const onSubmit = async (data) => {
     setIsLoading(true);
     try {
       const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/signin`, data);
    if(response.status == 200){
    //  console.log("Login Response:", response.data);

      localStorage.setItem("userToken",response.data.token);//الموقع بيعرفك من خلال متصفحك
      navigate('/');
    }
     }
     catch (error) {
       setServerError(error.response.data.message);
 
     }
     finally {
       setIsLoading(false);
     }
 
   }
   return (
     <>
       <div className={`${style.item} vh-100 d-flex justify-content-center align-items-center`}>
 
         <Row className="g-0">
           
           <Col>
             <div className={`${style.form} d-flex justify-content-center align-items-center`}>
               <form onSubmit={handleSubmit(onSubmit)} >
               {serverError ? (
         <Alert
           variant="danger"
           onClose={() => setServerError(null)}
           dismissible
        className="position-fixed top-25 end-0 translate-middle-y zindex-1050 w-25"
         >
           <Alert.Heading>Error!</Alert.Heading>
           <p>{serverError}</p>
         </Alert>
       ) : null}
 
                 <h1 className={`${style.head} mb-5 d-flex justify-content-center align-items-center`}>Sign in</h1>
                 <div className={`${style.label}`}>
                 
 
                   <FloatingLabel
                     controlId="floatingInput"
                     label="Email address"
                     className="mb-3"
                   >
                     <Form.Control type="email" placeholder=""  {...register("email", { required: "Email is required" })} />
                     {errors.email ? <span className='text-danger'>{errors.email.message}</span> : null}
                   </FloatingLabel>
 
                   <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                     <Form.Control type="password" placeholder="" {...register("password", { required: "Password is required" })} />
                     {errors.password ? <span className='text-danger'>{errors.password.message}</span> : null}
                   </FloatingLabel>
                 </div>
                   <div className="text-center">
                  <Link to="/auth/forget" className="text-decoration-none text-light">
                    <p className={style.pass}>Forgot Password?</p>
                  </Link>
                </div>
                 <div className=' d-flex justify-content-center align-items-center'>
                   <Button type="submit" variant="outline-light" disabled={isLoading} className={`${style.button} rounded-pill m-4 w-50 p-2`}>
                     {isLoading ? <div className={`${style.load}`}>Loading... </div> : "SIGN IN"}
                   </Button>
                 </div>
                  
               </form>
             </div>
           </Col>
           <Col className={`${style.item2}  d-flex justify-content-center align-items-center `}>
             <div className="text-white d-flex justify-content-center align-items-center  flex-column ">
               <h1 className={`${style.head2} mb-5`}>Hello!, Friend </h1>
               <p className='text-center'>Enter your personal details and start journey with us</p>
 
               <Link to="/auth/register" className='m-2 w-50 p-2 d-flex justify-content-center align-items-center m-2 w-100  text-decoration-none'>
                 <Button type="submit" variant="outline-light" disabled={isLoading} className={`${style.button} rounded-pill m-2 w-50 p-2 `}>
                   SIGN UP
                 </Button>
               </Link>
 
             </div>
           </Col>
         </Row>
 
 
       </div>
       <DevTool control={control} />
     </>
   )
 }
 

