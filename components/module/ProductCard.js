import Image from "next/image";
import React from "react";

const ProductCard = ({ thumbnail, title, price }) => {
  console.log("title", title);
  return (
    <div className="group mb-6 w-full relative">
      {/* ======== image ======= */}
      <div className=" w-full relative overflow-hidden rounded-2xl ">
        <Image
          className="rounded-2xl object-cover w-full transition-transform duration-500 group-hover:-translate-y-6 "
          alt="product thumbnail"
          src={thumbnail}
          width={220}
          height={300}
        />

        <div className="absolute top-2 w-full flex flex-row justify-between px-2 xl:px-4 py-3">
          <div className="flex flex-col items-end gap-2">
            <div className="w-7 h-7 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)]">
              <Image width={18} height={18} alt="icon" src="/icons/heart.svg" />
            </div>
            <div className="w-7 h-7 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)]">
              <Image width={18} height={18} alt="icon" src="/icons/cart.svg" />
            </div>
          </div>
          <div className="bg-white text-black self-start text-xs md:text-sm px-3 py-0.5 rounded-xl shadow xl:text-lg">
            ۳۰٪ تخفیف
          </div>
        </div>
      </div>

      {/* ===== product information ==== */}
      <div className="flex flex-col px-1 z-40 ">
        <p className=" text-center mb-1 font-bold mt-2 text-sm truncate xl:text-lg">
          {title}
        </p>
        <div className="flex justify-between items-center font-bold text-xs text-gray-600 border-t pt-2 border-gray-200 xl:text-lg">
          <span>قیمت(ریال)</span>
          <span>{price.toLocaleString()}</span>
        </div>
      </div>

      {/* ======== button ======== */}
      <div className="absolute z-10 transition-transform duration-300 bottom-[50px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-[12px]">
        <div className="block md:hidden">
          <button className="border-4 border-white w-[72px] flex justify-center items-center bg-black text-xs px-4 py-3 rounded-3xl shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 576 512"
            >
              <path
                fill="#ffffff"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <button className="border-4 border-white w-[140px] bg-black font-bold text-white text-[14px] px-4 py-3 rounded-3xl">
            مشاهده محصول
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
