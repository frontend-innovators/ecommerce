import React from 'react'
import RotateTextTrendingPost from './RotateTextTrendingPost'
import TrendingPostSlider from './TrendingPostSlider';

function TrendingPost({ blogs }) {
  return (
    <div>
      <div className='container mx-auto flex justify-between items-center max-sm:px-2 max-lg:px-10 max-[1537px]:px-28'>
        <div className='flex-1 text-right'>
          <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>
            جستجوی ترند ترین پست ها <br /> در پیکسیو
          </h1>
        </div>
        <div className='max-md:hidden flex-1'>
          <RotateTextTrendingPost />
        </div>
      </div>
      <TrendingPostSlider blogs={blogs} />
    </div>
  );
}

export default TrendingPost