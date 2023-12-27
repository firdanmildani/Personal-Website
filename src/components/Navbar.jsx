import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <div class="links"> 
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link active" href="#section-hero">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#section-portofolio">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link" href="#section-about">About Me</a></li>
                <li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li>
                <li class="nav-item"><a class="nav-link" id="nav-link-hireme" href="https://youtu.be/dQw4w9WgXcQ"target="_blank">Hire Me!</a></li>
            </ul>
        </div> 
    </nav>
  )
}

export default Navbar