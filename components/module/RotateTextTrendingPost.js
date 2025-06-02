"use client";

import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const text = "LATEST NEWS -LATEST NEWS - ";
const radius = 60; // radius of circle
const letterArray = text.split(""); // split by each letter
const total = letterArray.length;

const RotateTextTrendingPost = () => {
  return (
    <div className="mr-auto relative w-[150px] h-[150px] flex items-center justify-center">
      {/* Rotating ring of letters */}
      <div className="absolute w-full h-full animate-spinSlow" style={{ willChange: "transform" }}>
        {letterArray.map((char, i) => {
          const angle = (360 / total) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <span
              key={i}
              className="absolute text-md text-black"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                transformOrigin: "center",
                whiteSpace: "pre", // preserve spaces
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Center Icon */}
      <div className="z-10 text-black">
        <Link href="#"><BsArrowLeft size={35} /></Link>
      </div>
    </div>
  );
};

export default RotateTextTrendingPost;
