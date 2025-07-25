import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Loading from "../../loading/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "react-bootstrap/Container";

// Import Swiper styles
import "swiper/css";

export default function Category() {
  const [Categories, setGetCategories] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BURL}/categories/active`
      );
      setGetCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <Swiper
        className="pt-5"
        spaceBetween={50}
        slidesPerView={3.4}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Categories?.categories?.map((item) => (
          <div className="col-md-3" key={item._id}>
            <div className="category">
              <SwiperSlide>
                <img
                  style={{ width: "290px", height: "330px" }}
                  src={item.image.secure_url}
                  alt={item.name}
                />
              </SwiperSlide>
            </div>
          </div>
        ))}
      </Swiper>
    </Container>
  );
}
