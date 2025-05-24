import React from "react";
import Slider from "../module/Slider";
import Wardrobe from "../module/Wardrobe";
import HottestSection from "../module/HottestSection";
import PopularProducts from "../module/PopularProducts";

import GreatSaving from "../module/GreatSaving";

import BlockBusterDeals from "@/components/module/BlockBusterDeals";

function HomePage({ slides, productsData }) {
  return (
    <>
      <Slider slides={slides} />
      <Wardrobe />
      <HottestSection />
      <PopularProducts productsData={productsData}/>
      <GreatSaving />
      <BlockBusterDeals productsData={productsData} />
    </>
  );
}

export default HomePage;
