"use client";

import { useState } from "react";
import Link from "next/link";
//Icons
import { IoIosArrowBack } from "react-icons/io";
//Sliders-Card
import OfferCard from "@/components/module/OfferCard";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';



//Data
const slides = [
    {
        title: "تخفیف تا 20%",
        secondTitle: "oiuouo",
        subTitle: "iooiuoi",
        bgColor: "#f8d0ac" ,
        imgSrc: "/images/cat_1.png"
    },
    {
        title: "فروش ویژه تا 50% تخفیف",
        secondTitle: "oiuouo",
        subTitle: "iuoi",
        bgColor: "#dcb9bf" ,
        imgSrc: "/images/cat_2.png"
    },
    {
        title: "تخفیف تا 20%",
        secondTitle: "oiuouo",
        subTitle: "iuoi89",
        bgColor: "#cce3f9" ,
        imgSrc: "/images/cat_3.png"
    }
]


function FeaturedOffers() {
    const lengthSlides = slides.length;
    const spell = slides.push(lengthSlides)
    console.log(spell)

    return(
        <div className="w-full py-10 px-6 bg-[#fdf7f1]">
            <div className="flex flex-col items-center justify-between mx-auto gap-y-12 relative">
                <div className="w-full flex items-center justify-between px-24">
                    <h1 className="text-3xl">پیشنهادهای ویژه</h1>
                    <div className="flex gap-x-1">
                        <Link href="/" className="text-lg">مشاهده همه</Link>
                        <IoIosArrowBack className="mt-1.5 size-4"/>
                    </div>
                </div>
                <div className="w-full flex">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        loop={true}
                        grabCursor={true}
                        className="mySwiper"
                    >
                        {slides?.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <OfferCard slide={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default FeaturedOffers