import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loading from "../../loading/Loading";
import { toast, Bounce } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { MdBrowserUpdated } from "react-icons/md";

export default function EditImg() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const{user}=useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
    const [ImagePreview, setImagePreview] = useState(null);


  const updateImage = async (data) => {
    console.log(data);
    const formData = new FormData();
    const token = localStorage.getItem("userToken");
    formData.append("image", data.Image[0]);
    try {
      const response = await axios.put(
        "https://ecommerce-node4.onrender.com/user/update-image",
        formData,
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );
      if(response.status == 200){
toast.success('image update successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
setImagePreview(null);
document.getElementById("updateImg").value = ""; // لإعادة تعيين حقل الملف

      }
    } catch (error) {
      console.log("ERROR", error);
      toast.error("error of upate image", {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    } finally {
      setIsLoading(false);
    }
  };

const handleImgChange =(event)=>{
  const file=event.target.files[0];
setImagePreview(URL.createObjectURL(file));
}
  return (

    <Form onSubmit={handleSubmit(updateImage)} encType="multipart/form-data">
                <div className="pt-5 d-flex flex-column justify-content-center align-items-center">

      <Form.Group className="mb-3 text-center" controlId="updateImg">
        <Form.Label className="mb-4 fw-bold"><MdBrowserUpdated /> Update profile picture</Form.Label>
        <Form.Control
          type="file"
          {...register("Image", {
            required: "Please select an image to upload.",

          })}
         onChange={handleImgChange}/>
      </Form.Group>
      {ImagePreview ? <img src={ImagePreview} alt="profile" className="rounded-circle mb-3" style={{ width: "190px", height: "190px" }}/> : <img src={user?.image?.secure_url} alt="profile" className="rounded-circle mb-3" style={{ width: "190px", height: "190px" }}/>}

 <br/>
  <Button type="submit" variant="outline-danger" disabled={isLoading}>
  {isLoading ? (
    <>
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>
      Updating...
    </>
  ) : (
    "Update"
  )}
</Button>


      </div>
    </Form>
  );
}
