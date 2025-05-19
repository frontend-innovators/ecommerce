import React from 'react'
import Slider from '../module/Slider'
import Wardrobe from '../module/Wardrobe'
import HottestSection from '../module/HottestSection'

function HomePage({ slides }) {
  return (

    <>
      <Slider slides={slides} />
      <Wardrobe />
      <HottestSection />
    </>
  )
}

export default HomePage