import React from 'react'
import { Parallax } from "react-parallax";

const Hero = () => {
  return (
    <div className="hero">
      <Parallax className="hero-img" strength={200} bgImage="img/banner.jpg">
          <div className="hero-content-wrapper">
              {/* <div className="hero-content">
                  <span>Welcome to Vanillatelle!</span>
                  <h1>Savor the Essence of Vanilla with Vanillatelle</h1>                
                  <a href="products" className="button">Our Products</a>
              </div> */}
          </div>
      </Parallax>    
    </div>
  )
}

export default Hero