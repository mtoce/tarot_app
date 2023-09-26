"use client"
import React from 'react'
import Image from 'next/Image'
// (require.context isn't working properly, maybe a NEXT compatability issue? - So I went with using cwd to get the path and fs.readdir instead of this approach)
// const path = require.context('/images/rider_waite/major_arcana', false)
// const majorArcanaImages = path.keys().map(path)
// Import images from folder using ~cwd~ and ~readdir~
// const LoadImages = async () => {
//   const imageDirectory = path.join(process.cwd(), 'assets/images/rider_waite/major_arcana')
//   const imageFilenames = await fs.readdirSync(imageDirectory)
//   console.log(imageFilenames)

//   return imageFilenames
// }
const Carousel = () => {
  return (
    <div className='container'>
        <div className='slideshow'>
            <Image
              src="/the_fool.jpg"
              alt='MajorArcanaCards'
              className='MajorArcana'
              width={100}
              height={500}
            />
            Carousel
        </div>
    </div>
  )
}

export default Carousel