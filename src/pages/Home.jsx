import React, {useEffect}from 'react'

import PortfolioItem from '../components/PortfolioItem';
import portfolioItems from '../assets/db/portfolioData';
import SkillItem from '../components/SkillItem';
import skillItems from '../assets/db/skillData'
import experienceItems from '../assets/db/experienceData';
import ExperienceItem from '../components/ExperienceItem';
import { Parallax } from "react-parallax";


const Home = () => {
    useEffect(() => {
        const scrollToSection = () => {
          const hash = window.location.hash;
          if (hash) {
            const sectionId = hash.substring(1); 
            const section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };

        scrollToSection();
        window.addEventListener('hashchange', scrollToSection);
    
        return () => {
          window.removeEventListener('hashchange', scrollToSection);
        };
      }, []);

      const handleDownload = () => {
        
        const cvUrl = process.env.PUBLIC_URL + '/files/CV-Firdan-Mildani.pdf';
    
        const link = document.createElement('a');
        link.href = cvUrl;
        link.setAttribute('download', 'CV-Firdan-Mildani.pdf'); 
    
        document.body.appendChild(link);
        link.click();
    
        document.body.removeChild(link);
      };
  return (
    <>
    <div className="hero">
      <Parallax className="hero-img" strength={300} bgImage="img/banner2.jpg">
          <div className="hero-content-wrapper">
          </div>
      </Parallax>    
    </div>
    <div id='about' className="section d-flex justify-content-center">
        <div className="container">
            <div className="section-title text-center mb-5">
                <div className="section-title">
                    <h1>FIRDAN MILDANI</h1>
                </div>
                <div className="section-subtitle">
                <h6>FRONT-END/UI DEVELOPER<br/>
                Crafting digital experiences, one line at a time</h6>
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className="col-sm-9 col-12 mb-3">
                    <p>Hello! I'm an informatics engineering graduate with a strong focus on front-end development, equipped with expertise in web development and UI/UX design.</p>
                    <p>Proficient in React.js and adept at creating intuitive interfaces, I combine technical acumen with design principles to create engaging digital experiences. My skills extend to tools like Figma and Adobe Photoshop, allowing me to conceptualize and design user-centered interfaces that seamlessly integrate with development processes. I am eager to contribute my skills and creativity to projects that prioritize user experience and innovation.</p>
                    <p>I'm excited about the opportunity to contribute my expertise to innovative projects and teams that want to create impactful digital solutions. Let's connect and explore how we can work together to create exceptional web experiences.</p>
                </div>
                <div className="row col-sm-3 col-12">
                    <div className='col-sm-12 col-6 text-center icon-menu'>
                        <a href="/" onClick={handleDownload}>
                            <i class="bi bi-file-earmark custom-icon"></i>
                            <h5>CV</h5>
                            <p>Download CV</p>
                        </a>
                    </div>
                    <div className='col-sm-12 col-6 text-center icon-menu'>
                        <a target='_blank' href="https://github.com/firdanmildani" rel="noreferrer">
                            <i class="bi bi-github custom-icon"></i>
                            <h5>GITHUB</h5>
                            <p>View Repository</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id='portfolio' className="section">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-12 col-md-centered col-lg-12">
                    <div className="section-title text-center mb-5">
                        <div className="section-title">
                            <h1>PORTFOLIO</h1>
                        </div>
                        <div className="section-subtitle">
                            <h6>Portfolio Showcase, A Glimpse into Creativity</h6>
                        </div>
                    </div>
                    {portfolioItems.reduce((rows, item, index) => {
                            if (index % 2 === 0) {
                                rows.push(
                                    <div className="section__row row row-thin" key={index}>
                                        <PortfolioItem
                                            _id={item._id}
                                            title={item.title}
                                            brief={item.brief}
                                            imageSrc={item.imageSrc}
                                            isLarge={index % 4 === 0 || index % 4 === 3}
                                        />
                                        {index + 1 < portfolioItems.length && (
                                            <PortfolioItem
                                                _id={portfolioItems[index + 1]._id}
                                                title={portfolioItems[index + 1].title}
                                                brief={portfolioItems[index + 1].brief}
                                                imageSrc={portfolioItems[index + 1].imageSrc}
                                                isLarge={(index + 1) % 4 === 0 || (index + 1) % 4 === 3}
                                            />
                                        )}
                                    </div>
                                );
                            }
                            return rows;
                        }, 
                    [])}
                </div>
            </div>
        </div>
    </div>
    <div className="hero1">
      <Parallax className="hero-img" strength={300} bgImage="img/banner.jpg">
          <div className="hero-content-wrapper">
          </div>
      </Parallax>    
    </div>
    <div id='experiences' className="section">
        <div className="container d-flex justify-content-center row">
            <div className="section-title text-center mb-5">
                <div className="section-title">
                    <h1>SKILLS & EXPERIENCES</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 col-md-6 col-12 mb-5">
                    <div className="row">
                        {skillItems.map((item, index) => (
                            <SkillItem
                            key={index}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            />
                        ))}
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                    <div className="row">
                        <div className="col-12">
                            {experienceItems.map((item, index) =>(
                                <ExperienceItem
                                key={index}
                                year={item.year}
                                position={item.position}
                                company={item.company}
                                type={item.type}
                                date={item.date}
                                place={item.place}
                                />
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id='contact' className="section">
        <div className="container">
            <div className="section-title text-center mb-5">
                <div className="section-title">
                    <h1>CONTACT</h1>
                </div>
                <div className="section-subtitle mb-5">
                <h6>CURRENTLY AVAILABLE FOR CONTRACT OR FULL-TIME WORK,
AND WOULD LOVE TO HEAR FROM YOU</h6>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <small class="contact">
                            <a href="mailto:firdanmildani@gmail.com">firdanmildani@gmail.com</a>
                      <br/>
                      Sukabumi / Jawa Barat / Indonesia<br/>
                      <a target="_blank" href="https://www.linkedin.com/in/firdanmildani/" rel="noreferrer">LinkedIn</a> / <a target="_blank" href="https://github.com/firdanmildani" rel="noreferrer">GitHub</a> / <a target="_blank" href="https://instagram.com/firdanmildani" rel="noreferrer">Instagram</a>
                    </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home