import Image from 'next/image'
import Hero from '@components/Hero'
import WhyTarot from '@components/WhyTarot'
import Testimonials from '@components/Testimonials'
import CTA from '@components/CTA'
import Footer from '@components/Footer'

const Home = () => {
  return (
    <section>
      <Hero />
      <WhyTarot />
      <Testimonials />
      <CTA />
      <Footer />
    </section>
  )
}

export default Home