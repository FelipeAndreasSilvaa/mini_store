import React from 'react'
import Cart from '../icons/Cart'

const Cotumers = () => {
  return (
    <>
      <div className="text-center mt-4">
          <h1 className='font-bold text-2xl'>Costumers</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-4 grid overflow-hidden rounded-3xl  sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative">
              <div className="relative space-y-8 py-12 p-8">
                <div className="space-y-2">
                <Cart />
                  <h5 className="text-xl font-semibold text-black transition group-hover:text-secondary">FREE DELIVERY</h5>
                  <p className="text-gray-300">Rem Lopsum dolor sit amet, consectetur adipi elit</p>
                </div>
              </div>
            </div>
            <div className="group relative transition  ">
              <div className="relative space-y-8 py-12 p-8">
                <div className="space-y-2">
                  <Cart />
                  <h5 className="text-xl font-semibold text-black transition group-hover:text-secondary">QUALITY GUARANTEE</h5>
                  <p className="text-gray-300">Rem Lopsum dolor sit amet, consectetur adipi elit</p>
                </div>
              </div>
            </div>
            <div className="group relative transition  ">
              <div className="relative space-y-8 py-12 p-8">
                <div className="space-y-2">
                  <Cart />
                  <h5 className="text-xl font-semibold text-black transition group-hover:text-secondary">DAILY OFFERS</h5>
                  <p className="text-gray-300">Rem Lopsum dolor sit amet, consectetur adipi elit</p>
                </div>
              </div>
            </div>
            <div className="group relative transition  ">
              <div className="relative space-y-8 py-12 p-8">
                <div className="space-y-2">
                  <Cart />
                  <h5 className="text-xl font-semibold text-black transition group-hover:text-secondary">100% SECURE PAYMENT</h5>
                  <p className="text-gray-300">Rem Lopsum dolor sit amet, consectetur adipi elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Cotumers