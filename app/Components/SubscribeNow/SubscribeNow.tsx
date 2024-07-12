import React from 'react'

const SubscribeNow = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-DarkSubscribe h-[250px]'>
        <div className='flex flex-col items-center justify-center mb-4 md:mb-0 md:mr-36 p-5'>
        <h2 className='text-center mb-4 font-bold text-2xl text-white'>SUBSCRIBE US NOW</h2>
        <p className='text-white'>Get latest news, updates and deals directly mailed to your inbox.</p>
        </div>
        <div className='flex-shrink-0 w-full md:w-auto'>
            <div className="flex items-center  rounded-md p-2">
                <input type="text" className="flex-1 px-10 py-3 outline-none rounded-xl" placeholder="Your email here" />
            <   button className="bg-primarySubscribe text-white px-4 py-3 rounded-md ml-2">Subscribe</button>
          </div>     
        </div>

    </div>
  )
}

export default SubscribeNow
