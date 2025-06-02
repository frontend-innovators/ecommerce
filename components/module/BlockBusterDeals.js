"use client";
import Link from "next/link";
//Icons
import { IoIosArrowBack } from "react-icons/io";
//Components
import BlockBusterCards from "@/components/module/BlockBusterCards";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";


function BlockBusterDeals({ productsData }) {
    return(
        <div className="w-full mt-10 py-10 bg-[#fdf7f1]">
            <div className="flex flex-col items-center justify-between w-full xl:w-[1250px] mx-auto gap-y-12">
                {/* Header section for title and 'view all' link */}
                <div className="w-full flex flex-col items-start justify-between gap-y-4 md:flex-row md:items-center md:gap-y-0">
                    <h1 className="text-2xl lg:text-xl xl:text-3xl font-bold">فروش شگفت انگیز</h1>
                    <div className="flex gap-x-1">
                        {/* Link to view all products */}
                        <Link href="/" className="md:text-base xl:text-lg">مشاهده همه</Link>
                        {/* Back arrow icon */}
                        <IoIosArrowBack className="mt-1 xl:mt-1.5 size-4"/>
                    </div>
                </div>
                {/* Swiper container for displaying products in a carousel */}
                <div className="w-full -mt-5">
                    <Swiper
                        breakpoints={{
                            390: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            }
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,  // Auto-advance every 2 seconds
                            disableOnInteraction: false,  // Keep autoplay active even when the user interacts
                        }}
                        modules={[Autoplay]}  // Using the Autoplay module for the swiper
                        className="mySwipe"
                    >
                        {/* Loop through productsData and display a BlockBusterCards component for each product */}
                        {productsData?.slice(8,13)?.map(product => (
                            <SwiperSlide className="pt-20 xl:mr-1 sm:pt-14 md:pt-16 xl:pt-20" key={product._id}>
                                <BlockBusterCards {...product}/> {/* Pass product data as props */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default BlockBusterDeals // Export the BlockBusterDeals component for use in other parts of the app