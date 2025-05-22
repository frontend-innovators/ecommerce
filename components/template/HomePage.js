import React from 'react'
import Slider from '../module/Slider'
import Wardrobe from '../module/Wardrobe'
import PopularProducts from '../module/PopularProducts'
import GreatSaving from '../module/GreatSaving'


function HomePage({ slides }) {
  return (

    <>
      <Slider slides={slides} />
      <Wardrobe />
      <PopularProducts />
      <GreatSaving />
    </>
  )
}

export default HomePage