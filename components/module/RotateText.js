"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";

const text = "MORE COLLECTION EXPLORE ";
const radius = 90; // radius of circle
const letterArray = text.split(""); // split by each letter
const total = letterArray.length;

const RotateText = () => {
  return (
    <div className="max-lg:hidden absolute bottom-20 left-1/2">
      <div className="relative w-[220px] h-[220px] flex items-center justify-center">
        {/* Rotating ring of letters */}
        <div className="absolute w-full h-full animate-spinSlow" style={{ willChange: "transform" }}>
          {letterArray.map((char, i) => {
            const angle = (360 / total) * i;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <span
                key={i}
                className="absolute text-xs font-semibold text-black"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
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
          <FaPlay className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default RotateText;
