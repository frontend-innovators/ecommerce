import Image from "next/image";
import React from "react";

const ProductCard = ({ thumbnail, title, price }) => {
  console.log("title", title);
  return (
    <div className="mb-6 mx-auto">
      <div className="w-[172px] h-[230px]  relative overflow-hidden rounded-2xl">
        <Image
          className="object-contain w-full h-full"
          alt="product thumbnail"
          src={thumbnail}
          width={220}
          height={300}
        />
        <div className="absolute top-2 w-full flex flex-row justify-between px-2">
          <div className="flex flex-col items-end gap-2">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)]">
              <Image width={18} height={18} alt="icon" src="/icons/heart.svg" />
            </div>
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)]">
              <Image width={18} height={18} alt="icon" src="/icons/cart.svg" />
            </div>
          </div>
          <div className="bg-white text-black self-start text-xs px-3 py-0.5 rounded-xl shadow">
            ۳۰٪ تخفیف
          </div>
        </div>
      </div>
      <div className="flex flex-col px-1">
        <p className=" text-center mb-1 font-bold mt-2 text-sm truncate">
          {title}
        </p>
        <div className="flex justify-between items-center font-bold text-xs text-gray-600 border-t pt-2 border-gray-200">
          <span>قیمت(ریال)</span>
          <span >{price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
