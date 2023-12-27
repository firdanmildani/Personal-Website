import React, { useEffect, useState } from 'react';

const Sidebar = () => {
  const [activeSelection, setActiveSelection] = useState(null);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['about', 'portfolio', 'experiences', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSelection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileNavToggle = (e) => {
    const body = document.querySelector('body');
    const navbarToggle = document.querySelector('.mobile-nav-toggle');

    body.classList.toggle('mobile-nav-active');
    setIsMobileNavActive(!isMobileNavActive);

    navbarToggle.classList.toggle('bi-list');
    navbarToggle.classList.toggle('bi-x');
  };

  const handleScrollTo = (e) => {
    const { hash } = e.currentTarget;
  
    if (document.getElementById(hash.substring(1))) {
      e.preventDefault();
  
      const body = document.querySelector('body');
      const navbarToggle = document.querySelector('.mobile-nav-toggle');
  
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
  
      window.scrollTo({
        top: document.getElementById(hash.substring(1)).offsetTop,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <>
      <button type="button" className="mobile-nav-toggle d-xl-none" onClick={handleMobileNavToggle}>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </button>
      <i className="bi bi-list mobile-nav-toggle d-lg-none" onClick={handleMobileNavToggle}></i>

      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="/#about" className={`nav-link ${activeSelection === 'about' ? 'active' : ''}`} onClick={handleScrollTo}>
                <i className="bi bi-person"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="/#portfolio" className={`nav-link ${activeSelection === 'portfolio' ? 'active' : ''}`} onClick={handleScrollTo}>
                <i className="bi bi-laptop"></i><span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="/#experiences" className={`nav-link ${activeSelection === 'experiences' ? 'active' : ''}`} onClick={handleScrollTo}>
                <i className="bi bi-briefcase"></i> <span>Experiences</span>
              </a>
            </li>
            <li>
              <a href="/#contact" className={`nav-link ${activeSelection === 'contact' ? 'active' : ''}`} onClick={handleScrollTo}>
                <i className="bi bi-telephone"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
