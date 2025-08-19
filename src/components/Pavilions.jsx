import React from 'react'
import { pavilions } from '../data'
import Grid from './Grid'
import SectionHeading from './ui/SectionHeading'

const Pavilions = () => {
  return (
    <div className='h-screen'>
        <SectionHeading>PAVILIONS</SectionHeading>
        <p className="text-body-text-xs">Click a pavilion to see more info</p>
        <Grid items={pavilions} />
    </div>
  )
}

export default Pavilions