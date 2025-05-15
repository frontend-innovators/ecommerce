import React from 'react'
import Slider from '../module/Slider'
import Wardrobe from '../module/Wardrobe'
import PopularProducts from '../module/PopularProducts'


function HomePage({ slides }) {
  return (

    <>
      <Slider slides={slides} />
      <Wardrobe />
      <PopularProducts />
    </>
  )
}

export default HomePage