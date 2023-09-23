"use client"
import React from 'react'

const images = require.context('../public/assets/images/rider_waite/major_arcana', true)
const imageList = images.keys().map(image => images(image))



const Carousel = () => {
  return (
    <div className='container'>
        <div className='slideshow'>
            <img
                src={imageList[0]} 
                alt='MajorArcanaCards'
                className='MajorArcana'
                width={20}
                height={50}
            />
            Carousel
        </div>
    </div>
  )
}

export default Carousel