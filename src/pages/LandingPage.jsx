import Hero from '../components/Hero.jsx'
import Header from '../components/Header.jsx'
import InfoSection from '../components/InfoSection.jsx'
import Schedule from '../components/Schedule.jsx'
import Pavilions from '../components/Pavilions.jsx'
import Sponsors from '../components/Sponsors.jsx'
import PreFooter from '../components/PreFooter.jsx'
import Footer from '../components/Footer.jsx'

const LandingPage = () => {
  const defaultSpacing = 'w-[70%] ml-[15%]'
  return (
    <div className="flex flex-col">
      <Header />

      <section className="bg-[url('../src/assets/images/hero-section-bg.png')] bg-no-repeat bg-bottom bg-contain max-h-[50%]">
        <Hero spacing={defaultSpacing} />
      </section>

      <section className="w-full bg-no-repeat bg-cover bg-white bg-opacity-20">
        <InfoSection />
      </section>

      <section className="w-full bg-teracotta" id="schedule">
        <Schedule spacing={defaultSpacing} />
      </section>

      <section className={defaultSpacing}>
        <Pavilions />
      </section>

      <section className="w-full bg-gold">
        <Sponsors spacing={defaultSpacing} />
      </section>

      <section className='w-full'>
        <PreFooter />
      </section>

      {/* <section className='w-full'>
        <Footer />
      </section> */}
    </div>
  )
}

export default LandingPage


