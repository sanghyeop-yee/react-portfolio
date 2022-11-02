import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNotion} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SANGHYEOP</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/john-sanghyeop-lee/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/sanghyeop-yee" target="_blank"><FaGithub/></a>
        <a href="https://sanghyeop-yee.github.io" target="_blank"><SiNotion/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SANGHYEOP YEE. Feel Free to Connect and Share.</small>
      </div>
    </footer>
  )
}

export default Footer