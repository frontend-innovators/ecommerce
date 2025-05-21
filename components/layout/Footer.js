import React from 'react'
import Link from "next/link";
import Image from "next/image";
//Icons
import { FaArrowLeftLong } from "react-icons/fa6";

function Footer() {
  return (
      <footer className="w-full bg-[#fdf7f1] border-t-2">
         <div className="flex flex-col items-center justify-stretch w-full lg:w-[1000px] xl:w-[1250px] mx-auto
          px-8 pt-10 pb-16 sm:pb-18 md:pb-20 sm:pt-14 md:px-14 lg:py-5 lg:px-10 xl:py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-between lg:w-full">
               {/* List Section */}
               <ul className="flex flex-col gap-y-2.5">
                  <li className="text-base sm:text-sm md:text-base xl:text-lg font-bold">لیست ها</li>
                  <li className="mt-2 text-sm sm:text-xs md:text-sm xl:text-base">
                     <Link href="/">اینستاگرام</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">کالکشن جدید</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">لباس ها زنانه</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">تماس با ما</Link>
                  </li>
               </ul>
               {/* Useful Links Section */}
               <ul className="flex flex-col gap-y-2.5">
                  <li className="text-base sm:text-sm md:text-base xl:text-lg font-bold">لینک های کاربردی</li>
                  <li className="mt-2 text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">فروشگاه</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">سوالات متداول</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">بلاگ</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">قوانین و مقررات</Link>
                  </li>
               </ul>
               {/* Branches Section */}
               <ul className="flex flex-col mt-5 sm:mt-0 gap-y-2.5">
                  <li className="text-base sm:text-sm md:text-base xl:text-lg font-bold">شعبه ها</li>
                  <li className="mt-2 text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">تهران</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">کرج</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">رامسر</Link>
                  </li>
                  <li className="text-sm sm:text-xs md:text-sm xl:text-base">
                    <Link href="/">اصفهان</Link>
                  </li>
               </ul>
               {/* Recent Posts Section */}
               <div className="flex flex-col mt-12 sm:mt-5 md:mt-5 lg:mt-4 gap-y-2.5">
                  <p className="text-base sm:text-sm md:text-base xl:text-lg font-bold">پست های اخیر</p>
                  <div className="flex mt-2 gap-x-4.5">
                    <div className="flex flex-col gap-y-2">
                      <h3 className="text-xs md:text-sm font-bold">ژاکت بافتنی راحت</h3>
                      <p className="text-xs text-gray-400">اردیبهشت 1404</p>
                    </div>
                    <Image className="w-[40px] h-[35px] sm:w-[45px] sm:h-[40px] xl:w-[45px] xl:h-[40px] rounded-md" src="/images/1.png" alt="post1" width={50} height={50}/>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="flex flex-col gap-y-2">
                      <h3 className="text-xs md:text-sm font-bold">کت و شلوار سوئگر</h3>
                      <p className="text-xs text-gray-400">اردیبهشت 1404</p>
                    </div>
                    <Image className="w-[40px] h-[35px] sm:w-[45px] sm:h-[40px] xl:w-[45px] xl:h-[40px] rounded-md" src="/images/2.png" alt="post1" width={50} height={50}/>
                  </div>
                  <div className="flex gap-x-6 md:gap-x-10">
                    <div className="flex flex-col gap-y-2">
                      <h3 className="text-xs md:text-sm font-bold">ساق ورزشی</h3>
                      <p className="text-xs text-gray-400">اردیبهشت 1404</p>
                    </div>
                    <Image className="w-[40px] h-[35px] sm:w-[45px] sm:h-[40px] xl:w-[45px] xl:h-[40px] rounded-md" src="/images/4.png" alt="post1" width={50} height={50}/>
                  </div>
               </div>
               {/* Contact Information Section */}
               <div className="flex flex-col sm:mr-5 sm:mt-4 md:mt-5 lg:mt-10 gap-y-5">
                   <Image className='w-24 h-20 mt-5' src="/images/logo.png" width={300} height={200} alt='logo'/>
                  <div className="flex flex-col -mt-3 gap-y-2.5">
                    <div className="flex text-sm sm:text-xs md:text-sm xl:text-base gap-x-1">
                      <p>آدرس :</p>
                      <p>تهران،خیابان انقلاب </p>
                    </div>
                    <div className="flex text-sm sm:text-xs md:text-sm xl:text-base gap-x-1">
                      <p>ایمیل :</p>
                      <p>example@info.com</p>
                    </div>
                    <div className="flex text-sm sm:text-xs md:text-sm xl:text-base gap-x-1">
                      <p>تلفن :</p>
                      <p className="mt-0.5">021-88324</p>
                    </div>
                 </div>
                {/* Newsletter Subscription Section */}
                 <div className="flex flex-col gap-y-3">
                    <h1 className="text-base sm:text-sm md:text-base xl:text-lg font-bold">عضویت در خبرنامه</h1>
                    <div className="flex relative">
                      <input className="w-full h-10 sm:h-8 md:h-10 xl:h-11 px-3 text-xs lg:text-sm placeholder:text-black rounded-md bg-yellow-200
                             duration-300 focus:outline-4 outline-offset-2 outline-green-600"
                             type="email"
                             placeholder="آدرس ایمیل"/>
                      <button type="submit" className="top-3 sm:top-2 md:top-3 xl:top-3.5 left-4 hover:-translate-x-2 duration-300 absolute">
                        <FaArrowLeftLong className="text-gray-700 size-4 lg:size-5"/>
                      </button>
                    </div>
                 </div>
               </div>
            </div>
             {/* Footer Copyright Section */}
            <div className="flex items-center justify-center mx-auto w-full mt-12 bottom-0 border-t border-gray-400">
                <h1 className="mt-3 lg:mt-5 text-xs sm:text-sm md:text-base font-medium">کلیه حقوق این وبسایت محفوظ میباشد.</h1>
            </div>
         </div>
      </footer>
  )
}

export default Footer