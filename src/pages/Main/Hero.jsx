import React from 'react'
import Nav from './Nav'
import HeroContent from './HeroContent'

import heroBg from '../../assets/img/heroBg.png'

const Hero = () => {
  return (
    <div>
      <img src={heroBg} alt="Background Logo" className=' h-screen w-screen object-cover absolute z-0'/>

      <Nav/>

      <HeroContent/>
    </div>
  )
}

export default Hero
