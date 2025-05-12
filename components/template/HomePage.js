import React from 'react'
import Slider from '../module/Slider'
import Wardrobe from '../module/Wardrobe'

function HomePage({ slides }) {
  return (

    <>
      <Slider slides={slides} />
      <Wardrobe />
    </>
  )
}

export default HomePage