import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiArrowUpLeftThin } from "react-icons/pi";

function Wardrobe() {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 py-6 gap-6">
            {/* Left Section - Woman Collection */}
            <div className="flex-1 bg-[url(/images/wardrobe-1.png)] bg-no-repeat bg-contain min-h-[400px] lg:min-h-[500px] relative w-full max-[1536px]:bg-center max-[1536px]:flex max-[1536px]:items-end
">
                <Link
                    href="#"
                    className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 bg-white px-6 sm:px-12 py-1 sm:py-4 text-lg sm:text-xl font-bold border border-zinc-950 rounded-lg text-center"
                >
                    کالکشن زنانه
                </Link>
            </div>

            {/* Right Section */}
            <div className="relative flex-1 w-full">
                <div className="flex flex-col gap-6 p-3">
                    <div className="text-right">
                        <h1 className="font-extrabold text-2xl mb-4 leading-snug max-[1536px]:text-2xl 2xl:text-3xl">
                            کمد لباس خود را با انتخاب های شگفت انگیز<br className="hidden sm:block" /> ما پر کنید
                        </h1>
                        <p className="text-zinc-600 leading-7 text-justify">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <div className="w-full sm:w-[45%] rounded-2xl overflow-hidden relative hover:scale-105 transition duration-500">
                            <Image
                                src="/images/children.png"
                                width={1920}
                                height={1080}
                                alt="child collection"
                                quality={99}
                                className="w-full h-auto"
                            />
                            <Link
                                href="#"
                                className="absolute bottom-4 md:bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-6 sm:px-10 py-1 sm:py-2 text-sm sm:text-xl font-bold border border-zinc-950 rounded-lg text-center"
                            >
                                کالکشن بچگانه
                            </Link>
                        </div>
                        <div className="w-full sm:w-[45%] rounded-2xl overflow-hidden relative hover:scale-105 transition duration-500">
                            <Image
                                src="/images/man-collection.png"
                                width={1920}
                                height={1080}
                                alt="man collection"
                                quality={99}
                                className="w-full h-auto"
                            />
                            <Link
                                href="#"
                                className="absolute bottom-4 md:bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-6 sm:px-10 py-1 sm:py-2 text-sm sm:text-xl font-bold border border-zinc-950 rounded-lg text-center"
                            >
                                کالکشن مردانه
                            </Link>
                        </div>
                    </div>

                    {/* Arrow Icon Button */}
                    <div className="max-sm:hidden absolute top-0 left-0 bg-black w-16 h-16 sm:w-20 sm:h-20 rounded-full flex justify-center items-center text-zinc-200 hover:bg-rose-700 transition duration-300">
                        <Link href="#">
                            <PiArrowUpLeftThin size={40} className="sm:size-20" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wardrobe;
