import React from "react";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="w-full my-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" className=" rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" className="rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" className="rounded-3xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
