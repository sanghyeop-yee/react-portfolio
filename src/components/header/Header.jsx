import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import TypeWriter from 'typewriter-effect'

const Header = () => {

  return (
    <header>
      <div className="container header__container">
            <h5>Hi! My name is</h5>
            <h1>Sanghyeop Yee</h1>
            <h2 className="text-light">
              <span>
                <TypeWriter 
                options = {{
                  strings: ["Fullstack Engineer", "Web Developer","Data Analyst", "Dog Lover", "Entrepreneur", "Surfer"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
                />
              </span>
            </h2>
            <CTA />
            <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header