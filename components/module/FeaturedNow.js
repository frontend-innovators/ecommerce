"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import FeaturedNowSlide from "./FeaturedNowSlide";

const FeaturedNow = ({ productsData }) => {
  return (
    <div>
      <div className="font-bold text-2xl">پیشنهادهای ویژه امروز</div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // for mobile
        breakpoints={{
            //for tablets
            640:{
                slidesPerView:1.5
            } ,

            800:{
                slidesPerView:2
            },
            1500:{
                slidesPerView:3
            }
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {productsData.slice(0, 4).map((item) => (
          <SwiperSlide key={item._id}>
            <FeaturedNowSlide data={item} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default FeaturedNow;
