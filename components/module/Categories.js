"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Categories
({categories}) {
  const repeatedCategories = [...categories, ...categories, ...categories];
  return (
    <div className="flex flex-col sm:flex-row-reverse md:flex-col lg:flex-row lg:flex-row-reverse">
        <div className='bg-[#feeb9d] h-80 sm:h-96 w-[100vw] sm:w-[70vw] m-auto relative md:w-[100vw] lg:w-[70vw] '>
            <svg className="absolute left-[10px] top-[-17px] sm:right-[280px] top-[-8] w-40 sm:w-full md:w-[300px] md:right-[450px] lg:w-[400px] lg:right-[580px] lg:top-[-4px]" xmlns="http://www.w3.org/2000/svg" width="413" height="44" viewBox="0 0 413 44" fill="none"><path d="M37.4829 37.8579L0 0.375V0H413V0.375L375.517 37.8579C367.707 45.6684 355.043 45.6684 347.233 37.8579L323.892 14.5171C316.082 6.70665 303.418 6.70665 295.608 14.5171L272.267 37.8579C264.457 45.6684 251.793 45.6684 243.983 37.8579L220.642 14.5171C212.832 6.70665 200.168 6.70665 192.358 14.5171L169.017 37.8579C161.207 45.6684 148.543 45.6684 140.733 37.8579L117.392 14.5171C109.582 6.70665 96.9184 6.70665 89.1079 14.5171L65.7671 37.8579C57.9566 45.6684 45.2934 45.6684 37.4829 37.8579Z" fill="#FFFAF3"/></svg>
            <div className=" mt-[80px] gap-[50px] pr-28 pl-28">
                <div className=" pr-28 pl-28">
                  {/* Slider for products rotary */}
                    <Swiper className="w-[90vw] absolute left-[200px] sm:w-[47vw] sm:left-0 md:w-[90vw] md:left-[200px] lg:w-[47vw] lg:left-[100px]" spaceBetween={8} grabCursor={true} modules={[Navigation,FreeMode]}
                    loop={true} navigation={{ nextEl: ".next-btn",prevEl: ".prev-btn"}}
                    breakpoints={{ 0: {slidesPerView: 2,}, 640: {slidesPerView: 3,}, 768: {slidesPerView: 3,},1024: {slidesPerView: 4,},1537: {slidesPerView: 5,}}}
                    slidesPerView={4}>
                    {repeatedCategories.map((cat, i) => (
                        <SwiperSlide key={`${cat._id}-${i}`} className="w-[160px] flex flex-col items-center space-y-2 gap-y-4">
                          <div className="w-[150px] h-[150px] relative m-auto">
                            {/* product */}
                            <Image
                              src={cat.image}
                              alt={cat.title}
                              fill
                              className="rounded-xl object-over" 
                            />
                          </div>
                          <div className="bg-white border-1 rounded-4xl w-[90px] h-[35px] flex justify-center items-center m-auto mt-10">
                            <a className="font-bold text-sm text-center" href="#">
                              {cat.id}
                            </a>
                          </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </div>
        </div>
        <div className="bg-black h-58 w-[100vw] m-auto text-white flex flex-col justify-center text-end items-end pl-8 sm:pl-[100px] pr-[180px] sm:h-96 md:h-50 lg:h-96">
            <p className="font-[lufga] text-[24px] w-[60vw] sm:text-[35px] font-medium leading-[49px] sm:w-[200px] sm:pb-[20px] md:w-[70vw]"> 
                دسته بندی های ویژه
            </p>
            <p className="w-[150px] text-[16px] font-light leading-[25px]">
                محصولات پرطرفدار Pixio را کشف کنید
            </p>
            {/* product direction by buttons */}
            <div className="pt-8">
                <button className="next-btn pr-[40px]"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none"><path d="M2.73549 16.9503H30.9186L24.2492 10.4669C23.7396 9.97176 24.4954 9.1837 25.0119 9.68289L32.6481 17.1063C32.8709 17.3092 32.8531 17.6755 32.648 17.8903L25.0118 25.3169C24.4979 25.81 23.7378 25.0367 24.2492 24.5328L30.921 18.0441H2.73549C2.03663 18.0375 2.00064 16.9636 2.73549 16.9503Z" fill="white"></path></svg></button>
                <button className="prev-btn pr-[40px]"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none"><path d="M32.2645 16.9503H4.08145L10.7508 10.4669C11.2604 9.97176 10.5046 9.1837 9.98813 9.68289C9.98815 9.68286 2.35193 17.1063 2.35193 17.1063C2.12911 17.3092 2.14686 17.6755 2.35196 17.8903C2.35193 17.8903 9.98815 25.3169 9.98815 25.3169C10.5021 25.81 11.2622 25.0367 10.7508 24.5328C10.7508 24.5329 4.07897 18.0441 4.07897 18.0441H32.2645C32.9634 18.0375 32.9994 16.9636 32.2645 16.9503Z" fill="white"></path></svg></button>
            </div>
        </div>
    </div>
  )
}
