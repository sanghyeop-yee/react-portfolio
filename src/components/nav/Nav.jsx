import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState, useEffect } from 'react'


const Nav = () => {
  const [activeLink, setActiveLink] = useState('#')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href='#' className={activeLink === '#' ? 'active' : ''} onClick={() => onUpdateActiveLink('#')}><AiOutlineHome/></a>
      <a href='#about' className={activeLink === '#about' ? 'active' : ''} onClick={() => onUpdateActiveLink('#about')}><AiOutlineUser/></a>
      <a href='#experience' className={activeLink === '#experience' ? 'active' : ''} onClick={() => onUpdateActiveLink('#experience')}><BiBook/></a>
      <a href='#portfolio' className={activeLink === '#portfolio' ? 'active' : ''} onClick={() => onUpdateActiveLink('#portfolio')}><AiOutlineFundProjectionScreen/></a>
      <a href='#contact' className={activeLink === '#contact' ? 'active' : ''} onClick={() => onUpdateActiveLink('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  )
}



export default Nav