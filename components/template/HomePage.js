import React from 'react'
import Slider from '../module/Slider'
import Wardrobe from '../module/Wardrobe'
import HottestSection from '../module/HottestSection'
import PopularProducts from '../module/PopularProducts'
import BlockBusterDeals from "@/components/module/BlockBusterDeals";


function HomePage({ slides, productsData }) {
  return (
    <>
      <Slider slides={slides} />
      <Wardrobe />
      <HottestSection />
      <PopularProducts />
      <BlockBusterDeals productsData={productsData} />
    </>
  )
}

export default HomePage