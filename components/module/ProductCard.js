import Image from "next/image";
import React from "react";

const ProductCard = ({ thumbnail, title, price }) => {
  console.log("title", title);
  return (
    <div className="group mb-6 mx-auto w-[172px] relative">
      {/* ======== image ======= */}
      <div className=" h-[230px] relative overflow-hidden rounded-2xl ">
        <Image
          className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:-translate-y-4"
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

      {/* ===== product information ==== */}
      <div className="flex flex-col px-1 z-40 ">
        <p className=" text-center mb-1 font-bold mt-2 text-sm truncate">
          {title}
        </p>
        <div className="flex justify-between items-center font-bold text-xs text-gray-600 border-t pt-2 border-gray-200">
          <span>قیمت(ریال)</span>
          <span>{price.toLocaleString()}</span>
        </div>
      </div>

      {/* ======== button ======== */}
      <div className="absolute z-10 transition-transform duration-300 bottom-[50px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-[5px]">
        <button className=" w-[120px] bg-black text-white text-xs px-4 py-2 rounded-2xl shadow-md">
          مشاهده محصول
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
