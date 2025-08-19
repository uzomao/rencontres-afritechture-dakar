import Hero from '../components/Hero.jsx'
import InfoSection from '../components/InfoSection.jsx'
import TicketPricing from '../components/TicketPricing.jsx'
import Footer from '../components/Footer.jsx'

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <InfoSection />
      <TicketPricing />
      <Footer />
    </div>
  )
}

export default LandingPage


