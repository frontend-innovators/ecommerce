"use client";

import Image from "next/image"; // Optimized image component from Next.js
import React, { useState, useEffect } from "react"; // React core and hooks
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Navigation, Autoplay, Pagination, Controller } from "swiper/modules"; // Swiper modules for functionality
import "swiper/css"; // Swiper base styles
import "swiper/css/navigation"; // Navigation-specific styles
import "swiper/css/pagination"; // Pagination-specific styles
import { digitsEnToFa } from "@persian-tools/persian-tools"; // Converts English digits to Persian
import { FaArrowLeft } from "react-icons/fa"; // Left arrow icon
import RotateText from "./RotateText"; // Custom rotating text component

const Slider = ({ slides }) => {
    const [imageSwiper, setImageSwiper] = useState(null); // Reference to image swiper instance
    const [textSwiper, setTextSwiper] = useState(null); // Reference to text swiper instance
    const [activeIndex, setActiveIndex] = useState(0); // Tracks current active index for scaling

    useEffect(() => {
        // Sync controllers once both swipers are initialized
        if (imageSwiper && textSwiper) {
            imageSwiper.controller.control = textSwiper;
            textSwiper.controller.control = imageSwiper;
        }
    }, [imageSwiper, textSwiper]);

    return (
        <div className="full-screen-height flex flex-col lg:flex-row w-full bg-[#fdf7f1] p-6 md:p-10 gap-6 md:gap-10 lg:mt-[120px] relative overflow-hidden">
            {/* Decorative spinning sparkle image at top center */}
            <div className="max-lg:hidden absolute top-5 left-1/2 transform -translate-x-[65px] z-40 animate-spinSlow">
                <Image src="/images/sparkle-1.png" width={1920} height={1080} alt="sparkle" className="w-30 h-auto" />
            </div>
            {/* Decorative sparkle on the left */}
            <div className="max-lg:hidden absolute top-0 left-2/12 transform -translate-x-[65px] z-40 animate-spinSlow">
                <Image src="/images/sparkle.png" width={1920} height={1080} alt="sparkle" className="w-28 h-auto" />
            </div>

            {/* Text Slider Section */}
            <div className="flex-1 max-w-full lg:max-w-[50%] flex flex-col justify-evenly lg:justify-between">
                <Swiper
                    modules={[Navigation, Pagination, Controller]} // Modules used in this swiper
                    onSwiper={setTextSwiper} // Capture swiper instance
                    loop // Enable infinite looping
                    className="w-full"
                    breakpoints={{
                        320: {
                            spaceBetween: 80
                        },
                    }}
                >
                    {/* Loop through each slide for text content */}
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-right">
                                <div>
                                    {/* Slide Title */}
                                    <h1 className="text-2xl md:text-5xl font-bold md:mb-8">
                                        {slide.title}
                                    </h1>
                                    {/* Pricing Section */}
                                    <div className="mt-4 md:mt-10">
                                        <p className="text-lg md:mb-2">قیمت</p>
                                        {/* <p className="text-2xl font-bold mb-6">{slide.price}</p> */}
                                        <p className="text-2xl font-bold mb-6">
                                            {`${digitsEnToFa(9000000)} تومان`} {/* Static example in Persian */}
                                        </p>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="flex gap-4 justify-center md:justify-start mt-4 md:mt-20">
                                        <button className="bg-black text-white px-6 py-2 rounded text-sm">
                                            افزودن به سبد خرید
                                        </button>
                                        <button className="border border-black px-6 py-2 rounded">
                                            جزئیات محصول
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom Info Section */}
                <div className="max-md:hidden flex justify-start">
                    <div className="ml-4">
                        <Image src="/images/medical-star.png" width={1920} height={1080} alt="star" className="w-16 h-auto" />
                    </div>
                    <div>
                        <h4 className="font-bold text-md mb-3">کالکشن تابستانی</h4>
                        <p className="font-bold text-2xl">کلاسیک و مد روز برای فصل جدید</p>
                    </div>
                </div>
            </div>

            {/* Image Slider Section */}
            <div className="relative flex-1 max-sm:min-w-[500px] max-lg:min-w-[1000px] md:max-w-[70%] h-auto rounded-3xl overflow-visible">
                {/* Custom navigation button that acts like autoplay (next slide) */}
                <button
                    onClick={() => imageSwiper?.slideNext()}
                    className="custom-prev absolute bottom-[450px] right-1/2 z-40"
                >
                    <FaArrowLeft className="text-white bg-black rounded-full p-2 w-10 h-10 md:w-12 md:h-12 transform translate-x-[40px]" />
                </button>

                {/* Decorative image overlay */}
                <div
                    className="absolute left-0 bottom-10 w-[41px] h-[160px] bg-no-repeat bg-contain bg-center opacity-100 z-10"
                    style={{ backgroundImage: `url('/images/download.png')` }}
                />

                <Swiper
                    modules={[Autoplay, Controller, Navigation]} // Enable autoplay and sync
                    onSwiper={setImageSwiper} // Capture instance
                    controller={{ control: textSwiper }} // Link to textSwiper
                    autoplay={{ delay: 5000 }} // Auto-advance every 5s
                    loop // Infinite loop
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active index for scaling
                    className="w-full h-full"
                    spaceBetween={20}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,// 2 slides visible on mobile
                            spaceBetween: 20
                        },

                        768: {
                            slidesPerView: 2,// 2 slides visible on tablet
                            spaceBetween: 50
                        },
                        1024: {
                            slidesPerView: 2, // 2 slides visible on desktop
                            spaceBetween: 80
                        }
                    }}
                >
                    {/* Map image slides */}
                    {slides.map((slide, index) => {
                        const isFirstVisible = index === activeIndex; // Highlight active slide

                        return (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        width={1920}
                                        height={1080}
                                        quality={99}
                                        className={`w-full h-full rounded-3xl transition-transform duration-1000 ${isFirstVisible ? 'scale-100' : 'scale-90'
                                            }`} // Zoom animation on active slide
                                    />
                                    {/* Decorative image on each slide */}
                                    <div
                                        className="absolute left-0 bottom-10 w-[41px] h-[160px] bg-no-repeat bg-contain bg-center opacity-100 z-10"
                                        style={{ backgroundImage: `url('/images/download.png')` }}
                                    />
                                    <div className="absolute top-14 lg:top-40 right-9/12 lg:right-9/12">
                                        <p className="font-extrabold text-4xl lg:text-7xl transform -rotate-90">{slide.season}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            {/* Custom rotating text animation */}
            <RotateText />
        </div>
    );
};

export default Slider; // Export the component for use elsewhere
