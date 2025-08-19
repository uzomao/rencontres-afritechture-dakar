import Button from "./ui/Button"

const Hero = () => {
  return (
    <section className="w-[70%] ml-[15%] h-screen flex flex-col justify-center text-left">
      <h1 className="text-9xl">
        <span className="block">RENCONTRES</span> 
        <span className="block text-brown">AFRITECHTURE</span>
        <span className="block">DAKAR</span>
      </h1>
      <p className="my-3 text-body-regular">Festival of African Architecture</p>
      <h5 className="my-3">10 Nov - 14 Nov '25</h5>
      <div className="grid grid-cols-2 gap-0.5 mt-3">
        <Button>VIEW SCHEDULE</Button>
        <Button>REGISTER</Button>
      </div>
    </section>
  )
}

export default Hero


