"use client"
import React from 'react'

// import major arcana images
const major_images = require.context('../public/assets/images/rider_waite/major_arcana', true)
// map over 
const majorImageList = major_images.keys().map(image => major_images(image))

const Carousel = () => {
  return (
    <div className='container'>
        <div className='slideshow'>
          console.log(majorImageList)
            {/* <img
                src={majorImageList[0]} 
                alt='MajorArcanaCards'
                className='MajorArcana'
                // width={20}
                // height={50}
            /> */}
            Carousel
        </div>
    </div>
  )
}

export default Carousel