import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNotion} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/john-sanghyeop-lee/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/sanghyeop-yee" target="_blank"><FaGithub/></a>
        <a href="https://sanghyeop-yee.github.io" target="_blank"><SiNotion/></a>
    </div>
  )
}

export default HeaderSocials