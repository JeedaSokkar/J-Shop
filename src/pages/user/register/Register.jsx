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
import style from './register.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/signup`, data);
      if (response.status === 201) {
        toast.success('please check your email', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        navigate("/login");
      }
    }
    catch (error) {
      if (error.response.status == 409) {
        setServerError("Email already is use");
      }
      else {
        setServerError(error.response.data.message);
      }

    }
    finally {
      setIsLoading(false);
    }

  }
  return (
    <>
      <div className={`${style.item} vh-100 d-flex justify-content-center align-items-center `}>

        <Row className="g-0">
          <Col className={`${style.item2}  d-flex justify-content-center align-items-center`}>
            <div className="text-white d-flex justify-content-center align-items-center  flex-column ">
              <h1 className={`${style.head2} mb-5`}>Welcome Back !</h1>
              <p className='text-center'>To keep connected with us please login with your personal info</p>

              <Link to="/auth/login" className='m-2 w-50 p-2 d-flex justify-content-center align-items-center m-2 w-100  text-decoration-none'>
                <Button type="submit" variant="outline-light" disabled={isLoading} className={`${style.button} rounded-pill m-2 w-50 p-2 `}>
                  SIGN IN
                </Button>
              </Link>

            </div>
          </Col>
          <Col>
         {serverError && (
  <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1055 }}>
    <Alert 
      variant="danger" 
      onClose={() => setServerError(null)} 
      dismissible 
      className="shadow-lg rounded-4"
    >
      <div className="d-flex align-items-start gap-2">
        <i className="bi bi-exclamation-circle-fill fs-4 text-danger"></i>
        <div>
          <Alert.Heading className="fs-5 mb-1">Something went wrong</Alert.Heading>
          <p className="mb-0">{serverError}</p>
        </div>
      </div>
    </Alert>
  </div>
)}

            <div className={`${style.form} d-flex justify-content-center align-items-center`}>
              
              <form onSubmit={handleSubmit(onSubmit)} >
            
                <h1 className={`${style.head} mb-5 d-flex justify-content-center align-items-center`}>Create Account</h1>
                <div className={`${style.label}`}>
                  <FloatingLabel
                    controlId="username"
                    label="User Name"
                    className="mb-3 "
                  >
                    <Form.Control type="text" placeholder="" {...register("userName", { required: "User Name is required" })} />
                    {errors.userName ? <span className='text-danger'>{errors.userName.message}</span> : null}
                  </FloatingLabel>

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
                <div className=' d-flex justify-content-center align-items-center'>
                  <Button type="submit" variant="outline-light" disabled={isLoading} className={`${style.button} rounded-pill m-4 w-50 p-2`}>
                    {isLoading ? <div className={`${style.load}`}>Loading... </div> : "SIGN UP"}
                  </Button>
                </div>
              </form>
            </div>
          </Col>

        </Row>


      </div>
      <DevTool control={control} />
    </>
  )
}
