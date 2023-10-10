import React from 'react'
import { features, Cards } from '@constants';
// import Peace from '/icons/peace.svg';
// import Connection from '/icons/connection.svg';

// Eventually, I would like to set this image icon as empty and fill with the icons I would like to use when calling the function (passing the images in as props) instead of how I'm doing it here.
// ${index !== features.length -3 && index !== features.length -1 ? 'gold-gradient-left' : 'gold-gradient-right'}
// $("#"+array[ix]).css("background-color","#ff0000");
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-2 rounded-3xl mb-2 text-white-s leading-[26px] max-w-[550px] 
  ${index == features.length -4 ? 'gold-gradient-top-left' : ''}
  ${index == features.length -3 ? 'gold-gradient-top-right' : ''}
  ${index == features.length -2 ? 'gold-gradient-bot-left' : ''}
  ${index == features.length -1 ? 'gold-gradient-bot-right' : ''}`
  }>
    {/* div containing feature icon */}
    <div className={`w-[128px] h-[128px] rounded-full flex justify-center items-center`}>
        <img 
        src={icon}
        alt='icon' className='w-[60%] h-[60%] rounded-full object-contain'/>
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

const WhyTarot = () => {
  return (
    <section className='pt-4 pb-4 flex flex-col justify-center items-center gap-6'>
      <div className='lg:pb-0 hidden lg:block max-w-[550px]'>
        <h1 className='text-[40px] font-sans font-semibold mb-4 text-center'>
          ... Why Tarot?
        </h1>
        <img 
          src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/03/20185003/shutterstock_1589260768-min-806x537-1.jpeg"
          className='rounded-3xl mt-4'
        />
        <p className='paragraph mt-2'>
          {Cards.MajorArcana.Sun.rank} {" - "} {Cards.MajorArcana.Sun.name} {": "} {Cards.MajorArcana.Sun.upright}
        </p>
      </div>
      <div className='flex flex-col lg:grid grid-cols-2 gap-4'>
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