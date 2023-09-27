"use client"
import React from 'react'


// const MajorArcanaCardsImageArray = () => {
//   return (
//     {myArray.map((image) => (
      
//     ))}
//   )
// }

const FrontImage = () => {
  return (
    <div>
      <img
        src="/images/rider_waite/major_arcana/the_fool.jpg"
        alt='MajorArcanaCards'
        className='rounded-2xl z-10'
        width={94.26}
        height={127.93}
      />
    </div>
  )
}

const Carousel = () => {
  return (
    <div className='container'>
        <div className='slideshow'>
          <FrontImage />
          Carousel
        </div>
    </div>
  )
}

export default Carousel