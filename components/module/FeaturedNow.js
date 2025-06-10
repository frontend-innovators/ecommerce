"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useState, useEffect } from "react";
import FeaturedNowSlide from "./FeaturedNowSlide";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const FeaturedNow = ({ productsData }) => {
  const limitedProducts = productsData.slice(0, 4);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // the number of slides per view - it is 1 for mobile devices

  useEffect(() => {
    // update the number of slides based on user's device screen size
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1500) setVisibleCount(3);
      else if (width >= 1024) setVisibleCount(2);
      else if (width >= 640) setVisibleCount(1.5);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="mb-20">
      <div className="w-full flex items-center justify-between px-4 md:px-24 mb-6">
        <h1 className="text-lg md:text-3xl font-bold">پیشنهادهای ویژه</h1>
        <div className="flex gap-x-1">
          <Link href="/" className="text-lg">مشاهده همه</Link>
          <IoIosArrowBack className="mt-1.5 size-4" />
        </div>
      </div>

      <div className="mx-4 md:mr-14 lg:mx-24">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={25}
          slidesPerView={1}
          speed={1000}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            850: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
            1500: {
              slidesPerView: 3,
            },
          }}
        >
          {limitedProducts.map((item, index) => {
            // محاسبه فاصله اندیس اسلاید با اسلاید فعال
            let diff = index - activeIndex;
            if (diff < 0) diff += limitedProducts.length; // برای حلقه

            // اگر اسلاید در رنج ویوپورت هست اوپاسیتی ۱ بگیر، وگرنه کمتر
            const isVisible = diff < Math.ceil(visibleCount);

            return (
              <SwiperSlide key={item._id}>
                <div
                  className={`transition-opacity duration-700 ${
                    isVisible ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <FeaturedNowSlide data={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedNow;
