import React from 'react'
import { WhyBlurb, features } from '@constants';

// Eventually, I would like to set this image icon as empty and fill with the icons I would like to use when calling the function (passing the images in as props) instead of how I'm doing it here.

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-4 rounded-sm ${index !== features.length -1} ? 'mb-6' : 'mb-0'}`}>
    {/* div containing feature icon */}
    <div className={`w-[120px] h-[120px] rounded-full justify-center items-center`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] rounded-full object-contain'/>
    </div>
    <div className='flex-1 flex flex-col'>
      <h4 className='font-mono font-semibold text-white-s text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-sans font-normal text-white-s text-[14px] leading-[18px] mb-1'>
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
      <div>
        <h1 className='heading'>
          . . . Why Tarot?
        </h1>
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