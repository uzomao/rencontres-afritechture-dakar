import Hero from '../components/Hero.jsx'
import InfoSection from '../components/InfoSection.jsx'
import Schedule from '../components/Schedule.jsx'
import Pavilions from '../components/Pavilions.jsx'
import Sponsors from '../components/Sponsors.jsx'
import Footer from '../components/Footer.jsx'

const LandingPage = () => {
  const defaultSpacing = 'w-[70%] ml-[15%]'
  return (
    <div className="flex flex-col">
      <section className={defaultSpacing}>
        <Hero />
      </section>

      <section className="w-full bg-[url('../src/assets/images/itf-dakar2.png')] bg-no-repeat bg-cover bg-white bg-opacity-20">
        <InfoSection spacing={defaultSpacing} />
      </section>

      <section className={defaultSpacing}>
        <Schedule />
      </section>

      <section className={defaultSpacing}>
        <Pavilions />
      </section>

      <section className={defaultSpacing}>
        <Sponsors />
      </section>

      <section className='w-full'>
        <Footer />
      </section>
    </div>
  )
}

export default LandingPage


