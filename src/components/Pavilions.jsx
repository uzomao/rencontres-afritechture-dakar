import React from 'react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'

const Pavilions = () => {
  return (
    <div className='py-section'>
        <SectionHeading>PAVILIONS 🇸🇳🇪🇹🇬🇭🇳🇬🇷🇼🇲🇦🇿🇦</SectionHeading>
        <p className="text-body-xs mt-3 mb-12">
            This is an interactive map showcasing various country pavilions set up across the international trade fair grounds.
            Use it by clicking on a hotspot to see information about its pavilion.
            This map is there to guide you as you navigate the festival. We hope it helps you!
        </p>
        <iframe 
            src="https://www.portal8.space/rencontres-afritechture-dakar"
            className='w-full h-screen'
        />
        <div className='mt-6 text-center'>
            <p className="text-body-xs my-3">
                Get the full experience
            </p>
            <a href="https://www.portal8.space/rencontres-afritechture-dakar" target="_blank" rel="noopener noreferrer">
                <Button>
                    <span>Visit map</span>
                </Button>
            </a>
            <p className="text-small mt-12">
                Created using <a href="https://portal8.space" target='_blank' rel='noreferrer noopener' className='underline'>Portal</a>
            </p>
        </div>
    </div>
  )
}

export default Pavilions