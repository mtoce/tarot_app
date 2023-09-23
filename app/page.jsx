import Image from 'next/image'
import Hero from '@components/Hero'
import Carousel from '@components/Carousel'

const Home = () => {
  return (
    <section>
      <Hero />
      <Carousel />
    </section>
  )
}

export default Home