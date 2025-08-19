import Button from "./ui/Button"

const InfoSection = () => {
  return (
    <div className={`h-screen flex flex-col justify-center text-justify px-12 py-section`}>
      <p className="text-body-regular font-bold text-center">
        In 1971, Senegalese poet-president Leopold Sedar Senghor wanted to affirm the political renewal of his country by forging its own architectural identity.
      </p>
      <div className="w-full grid grid-cols-2 mt-12 items-center">
        <div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="shadow-lg"
            >
            <source src="../src/assets/images/video-1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col items-center justify-evenly h-full">
          <p className="text-body-xs mt-12">
            Rencontres Afritechture carries this spirit forward, positioning itself as both a continuation of that legacy and a provocation toward new futures. The festival brings together architects, artists, and thinkers to explore how built environments can shape culture, identity, and possibility across Africa today.
          </p>
          <Button>
            See Our Goals
          </Button>
        </div>
      </div>
      {/* <img src='../src/assets/images/arrows1-no-bg.gif' style={{
        position: 'absolute',
        top: '100vh',
        left: 0,
        margin: 0,
        width: '100%',
      }} /> */}
    </div>
  )
}

export default InfoSection


