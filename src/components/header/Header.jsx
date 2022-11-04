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
            <h2>Hi! I'm</h2>
            <h1>Sanghyeop Lee</h1>
            <h2 className="text-light">
              <span>
                <TypeWriter 
                options = {{
                  strings: ["Fullstack Developer", "Web Developer", "Surfer"],
                  autoStart: true,
                  loop: true,
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