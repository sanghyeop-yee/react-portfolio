import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { useState, useEffect } from 'react';
import TrackVisibility from 'react-on-screen'
import 'animate.css'

const Header = () => {
  const toRotate = ["Fullstack Developer", "Web Developer", "Data Analyst", "Entrepreneur", "Dog Lover", "Surfer", "Foodie"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100); // time between each letter
  const period = 2000; // transition time between each words
  

  // function for typing or deleting
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text]) // run everytime text gets updated

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      
      setDelta(500);
    } 
  }

  return (
    <header>
      <div className="container header__container">
        <TrackVisibility>
        {
        ({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Hi! I'm</h2>
            <h1>Sanghyeop Lee</h1>
            <h2 className="text-light"><span className='wrap'>{text}</span></h2>
            <CTA />
            <HeaderSocials />
          </div>
        }
        </TrackVisibility>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header