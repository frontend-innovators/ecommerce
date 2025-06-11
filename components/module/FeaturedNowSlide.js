import Image from "next/image";
import React from "react";

const FeaturedNowSlide = ({ data }) => {
  const { title, thumbnail } = data;
  return (
    <div className="border rounded-2xl p-3 flex flex-row justify-baseline items-center gap-3">
      <Image
        src={thumbnail}
        alt="product image"
        width={1920}
        height={1080}
        className="rounded-2xl w-[120px] h-[140px] md:w-[150px] md:h-[165px]"
      />
      <div>
        <p className="text-base md:text-lg font-semibold lg:text-xl">{title}</p>
        <span className="text-red-500 text-sm md:text-lg lg:text-xl">
          بیش از 40% تخفیف
        </span>
        <div>
          <span className="text-gray-500 text-xs line-through inline-block ml-2 md:text-sm lg:text-lg">
            950
          </span>
          <span className="font-bold md:text-lg lg:text-xl">
            700 هزار تومان
          </span>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/star.png"
              alt="star icon"
              width={30}
              height={30}
              className="w-[16px] h-[16px]"
            />
            <span className="inline-block text-xs text-gray-500 mt-1.5 md:text-sm lg:text-lg">
              (2000 بازدید)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNowSlide;
