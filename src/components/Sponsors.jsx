import React from 'react'
import { sponsors } from '../data'
import Grid from './Grid'
import SectionHeading from './ui/SectionHeading'

const Pavilions = () => {
  return (
    <div className='mb-24 mt-24'>
        <SectionHeading>SPONSORS</SectionHeading>
        <p className="text-body-text-xs">Click a pavilion to see more info</p>
        <Grid items={sponsors} />
    </div>
  )
}

export default Pavilions