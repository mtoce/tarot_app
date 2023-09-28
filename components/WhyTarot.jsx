import React from 'react'
import { WhyBlurb, features } from '@constants';

// Eventually, I would like to set this image icon as empty and fill with the icons I would like to use when calling the function (passing the images in as props) instead of how I'm doing it here.

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-4 rounded-3xl ${index !== features.length -1 ? 'mb-6' : 'mb-0'} text-white-s gold-gradient-hover`}>
    {/* div containing feature icon */}
    <div className={`w-[128px] h-[128px] rounded-full flex justify-center items-center`}>
      <img src={icon} alt='icon' className='w-[60%] h-[60%] rounded-full object-contain'/>
    </div>
    <div className='flex-1 flex flex-col max-w-[470px]'>
      <h4 className='font-mono font-semibold text-[18px] mb-1 mt-1'>
        {title}
      </h4>
      <p className='font-sans font-normal text-[12px] md:text-[14px]'>
        {content}
      </p>
    </div>
  </div>
)

// const WhyBlurbCard = () => {
//   return (
//     <div>
//       <FeatureCard />
//     </div>
//   )
// }

const WhyTarot = () => {
  return (
    <section className='section'>
      <div className='pb-4'>
        <h1 className='heading'>
          . . . Why Tarot?
        </h1>
        {/* <p className='paragraph max-w-[670px]'>
          {WhyBlurb.first}
        </p>
        <p className='paragraph max-w-[670px]'>
          {WhyBlurb.second}
        </p>
        <p className='paragraph max-w-[670px]'>
          {WhyBlurb.third}
        </p> */}
      </div>
      <div className='flex flex-col'>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
        {/* <p className='paragraph'>
          {WhyBlurb.second}
        </p>
        <p className='paragraph'>
          {WhyBlurb.third}
        </p>
        <p className='paragraph pb-2'>
          {WhyBlurb.fourth}
        </p> */}
    </section>
  )
}

export default WhyTarot