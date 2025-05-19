"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ProductModal = ({ setIsOpen, selectedProduct, isOpen }) => {
  //disable screen scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  //props
  const { gallery, title, price } = selectedProduct;
  const rate = 4.7;
  const number = 12;

  return (
    <div className="relative">
      <div className="inset-0 z-60 fixed h-[100svh] bg-gray-500/30 backdrop-blur-sm p-[15px] md:p-0">
        <div className="relative bg-white shadow-lg p-3 w-full h-full flex flex-col justify-between items-start md:top-1/2 md:-translate-y-1/2 md:h-[450px] md:flex-row md:pr-0">
          <div className="absolute top-3 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
              onClick={() => setIsOpen(false)}
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </div>
          <Swiper
            className="w-[330px] md:w-[950px] "
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Image
                src={gallery[0]}
                width={373}
                height={373}
                alt="product image"
                className="m-auto mt-8 md:w-[376px] md:h-[376px] md:m-0"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={gallery[1]}
                width={373}
                height={373}
                alt="product image"
                className="m-auto mt-8 md:w-[376px] md:h-[376px] md:m-0"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={gallery[2]}
                width={373}
                height={373}
                alt="product image"
                className="m-auto mt-8   md:m-0"
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute flex flex-col z-10 top-15 right-7 gap-4 md:top-7 md:right-4">
            <Image
              src={gallery[0]}
              width={50}
              height={50}
              alt="product image"
              className="m-auto md:m-0 border border-white"
            />
            <Image
              src={gallery[1]}
              width={50}
              height={50}
              alt="product image"
              className="m-auto md:m-0 border border-white"
            />
            <Image
              src={gallery[2]}
              width={50}
              height={50}
              alt="product image"
              className="m-auto md:m-0 border border-white"
            />
          </div>

          <div>
            <div className="md:mr-3 border-b border-gray-600 h-[376px] pt-1 mb-4">
              <span className="bg-black text-white rounded-md font-bold mt-6 inline-block px-2 md:mt-0">
                20% تخفیف
              </span>
              <h1 className="font-bold text-2xl mt-3 mb-3">{title}</h1>
              <div className="flex flex-row  gap-3 mb-2">
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#F4BB00"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#F4BB00"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#F4BB00"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e4e5e8"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e4e5e8"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
                  </svg>
                </div>
                <div>
                  <span>{rate.toLocaleString("fa-IR")}</span>
                  <span>(امتیاز {number.toLocaleString("fa-IR")} خریدار)</span>
                </div>
              </div>

              <p className=" md:mt-3">
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
              </p>
              <div className="grid grid-cols-2 mt-4 mb-6">
                <span className="font-bold text-xl">قیمت</span>
                <span className="font-bold text-xl">تعداد</span>
                <span className="text-xl">{price.toLocaleString("fa-IR")}</span>
                <div className="flex flex-row gap-1">
                  <span className="bg-black text-white flex justify-center items-center rounded-full w-7 h-7 text-center md:w-8 md:h-8 md:text-2xl">
                    -
                  </span>
                  <input
                    type="number"
                    className="w-10 border rounded-2xl text-center appearance-none"
                    defaultValue={1}
                  />
                  <span className="bg-black text-white flex justify-center items-center rounded-full w-7 h-7 text-center md:w-8 md:h-8 md:text-2xl">
                    +
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-2 mb-6 flex-row justify-around">
                <button className="px-4 py-2 bg-black text-white rounded-xl text-sm ">
                  افزودن به سبد خرید
                </button>
                <button className="px-4 py-2 border text-black bg-white rounded-xl text-sm">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path>
                    </svg>
                    افزودن به علاقه مندیها
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center">
              <Image
                alt="logo"
                width={21}
                height={21}
                src="/icons/social-media/facebook.svg"
              />
              <Image
                alt="logo"
                width={25}
                height={25}
                src="/icons/social-media/instagram.svg"
              />
              <Image
                alt="logo"
                width={25}
                height={25}
                src="/icons/social-media/linkedin.svg"
              />
              <Image
                alt="logo"
                width={27}
                height={27}
                src="/icons/social-media/youtube.svg"
              />
              <Image
                alt="logo"
                width={25}
                height={25}
                src="/icons/social-media/twitter.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
