"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ArrowLeft from '../icons/ArrowLeft'
import ArrowRight from '../icons/ArrowRight'
import Image from 'next/image'


export const Banner = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    //  <SimpleSlider />
  
    <div className="embla w-full">
      <div className="embla__viewport mx-auto w-full mt-12 h-80" ref={emblaRef}>
        <div className="embla__container h-full">
          <div className="embla__slide flex items-center justify-between bg-gray-200">Slide 1</div>
          <div className="embla__slide flex items-center justify-center bg-gray-200">Slide 2</div>
          <div className="embla__slide flex items-center justify-center bg-gray-200">Slide 3</div>
          <div className="embla__slide flex items-center justify-between bg-gray-200">Slide 1</div>
          <div className="embla__slide flex items-center justify-center bg-gray-200">Slide 2</div>
          <div className="embla__slide flex items-center justify-center bg-gray-200">Slide 3</div>
          <div className="embla__slide flex items-center justify-between bg-gray-200">Slide 1</div>
          <div className="embla__slide flex items-center justify-center bg-gray-200">Slide 2</div>
          <div className="embla__slide flex items-center justify-center bg-gray-200">Slide 3</div>
        </div>
      </div>

      <div>
        <button className="embla__prev" onClick={scrollPrev}>
          <ArrowLeft />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <ArrowRight />
        </button>
      </div>
    </div>



  )
}
