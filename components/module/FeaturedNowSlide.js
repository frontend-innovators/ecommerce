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
      <div >
        <p className="text-base md:text-lg font-semibold">{title}</p>
        <span className="text-red-500 text-base md:text-lg">بیش از 40% تخفیف</span>
        <div>
          <span className="text-gray-500 line-through inline-block ml-2">950 </span>
          <span className="font-bold">800 هزار تومان</span>
          <div className="flex gap-2">

          <Image src="/icons/star.png" alt="star icon" width={30} height={30} className="w-[20px] h-[20px]" />
          <span className="text-gray-500">(2000 بازدید)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNowSlide;
