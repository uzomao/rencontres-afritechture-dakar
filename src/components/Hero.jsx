import Button from "./ui/Button"

const Hero = ({ spacing }) => {
  return (
    <div className={`h-screen flex flex-col p-24 items-center ${spacing} animate-slide-up`}>
      <h1 className="text-7xl text-center leading-tight">
        <span className="block">RENCONTRES</span> 
        <span className="block text-brown">AFRITECHTURE</span>
        <span className="block">DAKAR</span>
      </h1>
      <p className="my-3 text-body-small">Festival of African Architecture</p>
      <h5 className="my-3">10 Nov - 14 Nov '25</h5>
      <div className="grid grid-cols-2 gap-24 mt-3">
        <a href="#schedule"><Button>View Schedule</Button></a>
        <Button>Register</Button>
      </div>
    </div>
  )
}

export default Hero


