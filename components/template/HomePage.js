import React from "react";
import Slider from "../module/Slider";
import Wardrobe from "../module/Wardrobe";
import HottestSection from "../module/HottestSection";
import PopularProducts from "../module/PopularProducts";

import GreatSaving from "../module/GreatSaving";

import BlockBusterDeals from "@/components/module/BlockBusterDeals";
import Categories from "../module/Categories";
import UsersViewed from "../module/UsersViewed";

function HomePage({ slides, productsData,categories }) {
  console.log(productsData);
  return (
    <>
      <Slider slides={slides} />
      <Wardrobe />
      <Categories categories={categories}/>
      <HottestSection />
      <PopularProducts productsData={productsData} />
      <UsersViewed/>
      <GreatSaving />
      <BlockBusterDeals productsData={productsData} />
    </>
  );
}

export default HomePage;
