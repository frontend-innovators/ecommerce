import React from "react";
import Slider from "../module/Slider";
import PopularProducts from "../module/PopularProducts";

function HomePage({ slides }) {
  return (
    <>
      <Slider slides={slides} />
      <PopularProducts />
    </>
  );
}

export default HomePage;
