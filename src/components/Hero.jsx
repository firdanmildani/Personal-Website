import React from 'react'
import { Parallax } from "react-parallax";

const Hero = () => {
  return (
    <div className="hero">
      <Parallax className="hero-img" strength={200} bgImage="img/banner.jpg">
          <div className="hero-content-wrapper">
          </div>
      </Parallax>    
    </div>
  )
}

export default Hero