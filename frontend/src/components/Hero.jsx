import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
<div className='flex flex-col sm:flex-row border border-gray-400'>
  {/* Hero left side */}
  <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
    <div className='text-[#414141] px-4 sm:px-0'>
      <div className='flex items-center gap-2'>
        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
      </div>
      <h1 className='prata-regular text-3xl sm:py-3 leading-relaxed'>
        SOFT. FRESH. TIMELESS.
      </h1>
      <div className='flex items-center gap-2'>
        <p className='font-medium text-sm md:text-base'>SHOP NOW</p>
        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
      </div>
    </div>
  </div>

  {/* Hero right side */}
  <div className="w-full sm:w-1/2 overflow-x-auto">
    <div className="flex gap-4 w-max px-4 sm:px-0">
      <img
        className="w-64 h-96 object-cover flex-shrink-0"
        src={assets.hero_img}
        alt="Hero Image 1"
      />
      <img
        className="w-64 h-96 object-cover flex-shrink-0"
        src={assets.hero2_img}
        alt="Hero Image 2"
      />
      <img
        className="w-64 h-96 object-cover flex-shrink-0"
        src={assets.hero3_img}
        alt="Hero Image 3"
      />
    </div>
  </div>
</div>

  
  )
}

export default Hero
