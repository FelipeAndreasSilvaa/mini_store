import React from 'react'
import Image from 'next/image'

export const Banner2 = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-gray-200'>
      <div className='flex flex-col items-center justify-center mb-4 md:mb-0 md:mr-36 p-5'>
        <p className='font-bold text-xl'>10% off</p>
        <h2 className='text-center mb-4 font-bold text-2xl'>NEW  YEAR <br /> SALE</h2>
        <button type='button' className='px-4 py-2 bg-black text-white w-[300px]'>Shop Sale</button>
      </div>
      <div className='flex-shrink-0 w-full md:w-auto'>
          <div className='flex items-center justify-center'>
            <Image src={'/images/banner-image.png'} width={400} height={400} alt='image' />
          </div>      
      </div>
    </div>
  )
}
