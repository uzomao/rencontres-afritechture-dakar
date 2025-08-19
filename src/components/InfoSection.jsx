import React, { useState } from 'react'
import Button from "./ui/Button"
import video from "../../src/assets/images/video-1.webm"

const InfoSection = () => {
  const [ isGoals, setIsGoals ] = useState(false)

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
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col items-center justify-evenly h-full">
          {
            !isGoals ?
              <p className="text-body-xs mt-12">
                Rencontres Afritechture carries this spirit forward, positioning itself as both a continuation of that legacy and a provocation toward new futures. The festival brings together architects, artists, and thinkers to explore how built environments can shape culture, identity, and possibility across Africa today.
              </p>
              :
              <ol className="text-body-xs mt-12 text-justify">
                <li className='my-2'>1. Create a shared pan-African architectural design language rooted in indigineity, futurity and self-agency</li>
                <li className='my-2'>2. Foster pan-African intellectual collaboration in the field of architecture and design</li>
                <li className='my-2'>3. Define and export African modernism to the world</li>
                <li className='my-2'>4. Establish Senegal as a leader of the African cultural renaissance, continuing the Negritude movement and honouring Senghor's legacy</li>
                <li className='my-2'>5. Position Dakar as the leading destination for intellectual and cultural tourism on the African continent</li>
              </ol>
          }
          <Button onClick={() => setIsGoals(!isGoals)}>
            See Our { isGoals ? 'Mission' : 'Goals' }
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InfoSection


