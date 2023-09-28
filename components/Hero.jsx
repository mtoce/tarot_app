"use client"
import React from 'react'
import Carousel from '@components/Carousel'

const Hero = () => {
  return (
    <div>
      <div class="flex items-center justify-center h-64 bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x">
        Animate Gradient Example
      </div>
        <h1>Hero</h1>
        <Carousel />
    </div>
  )
}

export default Hero