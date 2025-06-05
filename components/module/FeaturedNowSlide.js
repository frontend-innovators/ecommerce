import Image from "next/image";
import React from "react";

const FeaturedNowSlide = ({ data }) => {
  const { title, thumbnail } = data;
  return (
    <div className="border rounded-2xl p-3 flex flex-row justify-between items-center w-[360px] h-[162px]">
      <Image
        src={thumbnail}
        alt="product image"
        width={1920}
        height={1080}
        className="rounded-2xl w-[120px] h-[140px]"
      />
      <div>
        <p className="text-base font-bold">{title}</p>
        <span className="text-red-500">بیش از 40% تخفیف</span>
        <div>
          <span>80$</span>
          <span>95$</span>
          <span>(2k بازدید)</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNowSlide;
