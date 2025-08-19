import React from 'react'
import { speakers } from '../data'
import Grid from './Grid'
import SectionHeading from './ui/SectionHeading'

const Pavilions = () => {
  return (
    <div className='py-section'>
        <SectionHeading>SPEAKERS</SectionHeading>
        <Grid items={speakers} />
    </div>
  )
}

export default Pavilions