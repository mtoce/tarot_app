import Image from 'next/image'
import Hero from '@components/Hero'
import Carousel from '@components/Carousel'
import WhyTarot from '@components/WhyTarot'

const Home = () => {
  return (
    <section>
      <Hero />
      <WhyTarot />
      <Carousel />
    </section>
  )
}

export default Home