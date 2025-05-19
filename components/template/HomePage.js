import React from 'react'
import Slider from '../module/Slider'
import Wardrobe from '../module/Wardrobe'
import PopularProducts from '../module/PopularProducts'
import BlockBusterDeals from "@/components/module/BlockBusterDeals";


function HomePage({ slides, productsData }) {

  return (
    <>
        <Slider slides={slides} />
        <Wardrobe />
        <PopularProducts />
        <BlockBusterDeals productsData={productsData}/>
    </>
  )
}

export default HomePage