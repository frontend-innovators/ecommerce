"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules"; // Swiper modules for functionality
import "swiper/css"; // Swiper base styles
import "swiper/css/navigation"; // Navigation-specific styles
import "swiper/css/pagination"; // Pagination-specific styles
import 'swiper/css/effect-coverflow';
import { truncateText } from '@/helper/helper';
import Link from 'next/link';

function HottestSection() {
    const sliders = [
        { id: 1, title: "شلوار جین اسکینی", subTitle: "تا 79% تخفیف", image: "/images/1.png" },
        { id: 2, title: "ژاکت کش بافت پشمی", subTitle: "تا 79% تخفیف", image: "/images/2.png" },
        { id: 3, title: "کت و شلوار شیک", subTitle: "تا 79% تخفیف", image: "/images/3.png" },
        { id: 4, title: "شلوار جین اسکینی", subTitle: "تا 79% تخفیف", image: "/images/4.png" },
        { id: 5, title: "ژاکت کش بافت پشمی", subTitle: "تا 79% تخفیف", image: "/images/5.png" },
        { id: 6, title: "شلوار جین اسکینی", subTitle: "تا 79% تخفیف", image: "/images/6.png" },
    ]
    return (
        <div className='block lg:flex lg:flex-row lg:justify-between px-4 py-6 gap-6'>
            <div className='max-[1401px]:hidden flex-1 bg-[url(/images/map.png)] bg-no-repeat bg-cover min-h-[400px] lg:min-h-[400px] relative w-full'>
                <Image
                    src="/images/letter-a.png"
                    width={1920}
                    height={1080}
                    className="w-20 h-auto absolute bottom-3/12 right-3/6 animate-float"
                    alt="Location A"
                />
                <Image
                    src="/images/letter-b.png"
                    width={1920}
                    height={1080}
                    className="w-12 h-auto absolute top-0 right-1/6 animate-float [animation-delay:1s]"
                    alt="Location B"
                />
                <Image
                    src="/images/location.png"
                    width={1920}
                    height={1080}
                    className="w-14 h-auto absolute top-2/10 left-6/10"
                    alt="Location B"
                />

                <div className='p-6 absolute right-0 top-1/6'>
                    <div className='rounded-lg overflow-hidden transform rotate-12 bg-white w-40 h-62'>
                        <div className='w-full h-4/6 overflow-hidden'>
                            <Image src="/images/1.png" width={1920} height={1080} alt='1' quality={99}
                                className='w-full h-full object-cover hover:scale-105 transition duration-300' />
                        </div>
                        <div>
                            <h1>ژاکت بافتنی کلاسیک</h1>
                            <span className='text-sm text-green-600'>تا 79% تخفیف</span>
                        </div>
                    </div>
                </div>
                <div className='absolute -left-6 top-28'>
                    <div className='rounded-lg overflow-hidden transform -rotate-12 bg-white w-40 h-62'>
                        <div className='w-full h-4/6'>
                            <Image src="/images/3.png" width={1920} height={1080} alt='1'
                                className='w-full h-full object-cover hover:scale-105 transition duration-300' />
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-sm'>ژاکت بافتنی کلاسیک</h1>
                            <span className='text-sm text-green-600'>تا 79% تخفیف</span>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 right-2/4 blur-xs'>
                    <div className='rounded-lg overflow-hidden transform rotate-12 bg-white w-28 h-40'>
                        <div className='w-full h-4/6'>
                            <Image src="/images/3.png" width={1920} height={1080} alt='1'
                                className='w-full h-full object-cover hover:scale-105 transition duration-300' />
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-sm'>ژاکت بافتنی کلاسیک</h1>
                            <span className='text-sm text-green-600'>تا 79% تخفیف</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 lg:w-1/2'>
                <div className='flex flex-col md:flex-row justify-start md:items-end'>
                    <div>
                        <p className='font-extrabold text-2xl mb-3'>جستجوی داغ ترین ها</p>
                        <p className='font-extrabold text-2xl mb-3'>نزدیک ترین به محل سکونت شما</p>
                        <p>تا 60% تخفیف + تا 1 میلیون تومان بازگشت وجه</p>
                    </div>
                    <div className='md:mr-40'>
                        <Link href="#" className='font-bold'>مشاهده همه {">"}</Link>
                    </div>
                </div>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 4000 }}
                    loop
                    spaceBetween={10}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 12
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        },
                        1400: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                    className="w-full mt-8 fade-on-exit"
                >

                    {sliders.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className={`opacity-100 transition-opacity duration-700`}
                                >
                                    <Image src={slide.image} width={1920} height={1080} className='w-full h-96 lg:h-56 lg:object-cover rounded-lg' alt={slide.title} quality={95} />
                                    <h1 className="text-sm font-semibold">{truncateText(slide.title, 14)}</h1>
                                    <h2 className="text-xs text-green-600">{slide.subTitle}</h2>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div >
    )
}

export default HottestSection