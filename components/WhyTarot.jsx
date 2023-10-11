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
    <section className='pt-4 pb-4 flex flex-col xl:bg-gradient-radial xl:to-60% z-[-5] from-gold'>
      <div className='hidden xl:block'>
        {/* <h1 className='text-[40px] font-sans font-semibold mb-4 text-center'>
          ... Why Tarot?
        </h1> */}
        <div className='relative w-full'>
          <div className='top-0 left-0 z-30 flex flex-col lg:grid grid-cols-2 gap-24'>
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index}/>
            ))}
          </div>
          <div className='hover:z-40'>
            <img 
              src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/03/20185003/shutterstock_1589260768-min-806x537-1.jpeg"
              className='rounded-2xl mt-4 z-[-1] border border-gold absolute top-[29%] left-[41.75%]'
              width={200}
            />
            </div>
          {/* <p className='paragraph mt-2'>
            {Cards.MajorArcana.Sun.rank} {" - "} {Cards.MajorArcana.Sun.name} {": "} {Cards.MajorArcana.Sun.upright}
          </p> */}
          <div className='absolute z-10 top-[50%] h-[2px] w-[350px] left-[64%] bg-gradient-to-r from-gold lg:from-35% to-white-s'></div>
          <div className='absolute z-10 top-[50%] h-[2px] w-[350px] left-[8%] bg-gradient-to-l from-gold lg:from-35% to-white-s'></div>
          <div className='absolute z-10 top-[6%] w-[2px] h-[80px] left-[50%] bg-gradient-to-t from-gold lg:from-35% to-white-s'></div>
          <div className='absolute z-10 top-[72%] w-[2px] h-[80px] left-[50%] bg-gradient-to-b from-gold lg:from-35% to-white-s'></div>
        </div>
      </div>
      <div className='xl:hidden'>
        <div className='flex flex-col gap-4'>
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index}/>
            ))}
          </div>
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