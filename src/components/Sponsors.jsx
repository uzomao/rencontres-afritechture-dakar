import React from 'react'
import { sponsors } from '../data'
import Grid from './Grid'
import SectionHeading from './ui/SectionHeading'

const Pavilions = ({ spacing }) => {
  return (
    <div className={`py-section ${spacing}`}>
        <SectionHeading>SPONSORS</SectionHeading>
        <Grid items={sponsors} />
    </div>
  )
}

export default Pavilions