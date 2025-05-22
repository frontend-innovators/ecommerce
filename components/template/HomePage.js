import React from 'react'
import Slider from '../module/Slider'
import Wardrobe from '../module/Wardrobe'
import HottestSection from '../module/HottestSection'
import PopularProducts from '../module/PopularProducts'
<<<<<<< HEAD
import GreatSaving from '../module/GreatSaving'
=======
import BlockBusterDeals from "@/components/module/BlockBusterDeals";
>>>>>>> b602b58573093f317b5fc35e1abddf1009f9f92e


function HomePage({ slides, productsData }) {
  return (
    <>
      <Slider slides={slides} />
      <Wardrobe />
      <HottestSection />
      <PopularProducts />
<<<<<<< HEAD
      <GreatSaving />
=======
      <BlockBusterDeals productsData={productsData} />
>>>>>>> b602b58573093f317b5fc35e1abddf1009f9f92e
    </>
  )
}

export default HomePage