"use client"
import React from 'react'
import ReactDOM from 'react-dom/client'
import SlickCarousel from "../SlickCarousel/EmblaCarousel"
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '../SlickCarousel/EmblaCarousel'
import '../SlickCarousel/css/base.css'
import '../SlickCarousel/css/embla.css'



function CardSlider() {

  const OPTIONS: EmblaOptionsType = { align: 'start' }
  const SLIDE_COUNT = 8
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
        <div id='Provas_sociais' className='text-center text-2xl mt-16'>
            <h4 className="font-bold text-2xl tamanhoProva">Provas Sociais</h4>
            <EmblaCarousel  slides={SLIDES} options={OPTIONS}  />
        </div>
        
    </>

  )
}


export default CardSlider