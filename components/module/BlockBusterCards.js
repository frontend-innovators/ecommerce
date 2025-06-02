"use client";

import Image from "next/image";
import Link from "next/link";

function BlockBusterCards(props) {
    const { title, price, thumbnail } = props;
    // Calculate the discounted price (60% off)
    const discountPercentage = 60;
    const discountPrice = price * (1 - discountPercentage / 100);
    const roundDiscount = Math.round(discountPrice); // Round the discounted price to the nearest integer

    return(
        <div className="flex flex-col items-center w-full h-[400px] sm:w-[225px] sm:h-[290px] md:w-[290px] md:h-[350px] lg:w-[221px] lg:h-[280px] xl:w-[280px] xl:h-[400px]
                        bg-linear-to-t from-transparent to-[#fff] rounded-2xl shadow-[-1px_-28px_15px_0_rgba(0,0,0,0.10)] relative">
            {/* Display product image */}
            <Image className="w-[300px] h-[310px] sm:w-[210px] sm:h-[220px] md:w-[240px] md:h-[250px] lg:w-[190px] lg:h-[200px] xl:w-[270px] xl:h-[280px] -mt-14 sm:-mt-10
                              hover:-translate-y-10 duration-700 absolute z-10" src={thumbnail} alt="thumbnail" width={1920} height={1080} quality={99}/>
            <div className="flex flex-col mt-70 sm:mt-50 md:mt-60 lg:mt-48 xl:mt-70 z-10 gap-y-2">
                {/* Discount label (up to 60% off) */}
                <h4 className="text-lg sm:text-xs md:text-base lg:text-xs xl:text-sm text-red-700 font-bold">تا 60% تخفیف</h4>
                {/* Product title link */}
                <div className="flex gap-x-14 sm:gap-x-10 lg:gap-x-5 xl:gap-x-10">
                    <Link href="/" className="text-lg sm:text-xs md:text-base lg:text-xs xl:text-base font-bold">{title}</Link>
                    <div className="flex flex-col mt-1 gap-y-1">
                        {/* Display discounted price */}
                        <h3 className="flex text-lg sm:text-xs md:text-base lg:text-xs xl:text-base font-bold gap-x-2">
                            {roundDiscount} {/* Rounded discounted price */}
                            <p>تومان</p>
                        </h3>
                        {/* Display original price with a line-through */}
                        <h3 className="flex text-gray-600 text-lg sm:text-xs md:text-base lg:text-xs xl:text-sm line-through gap-x-0.5">
                            {price} {/* Original price */}
                            <p>تومان</p>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockBusterCards  // Export the BlockBusterCards component for use in other parts of the app