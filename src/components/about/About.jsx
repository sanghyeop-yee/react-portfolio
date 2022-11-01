import React from 'react'
import './about.css'
import ME from '../../assets/me.png' // change to 'me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineDeploymentUnit} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='.container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Data Analyst</h5>
              <small>4+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Entrepreneur</h5>
              <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <AiOutlineDeploymentUnit className='about__icon'/>
              <h5>Fullstack Developer</h5>
              <small>1+ Years</small>
            </article>
          </div>

          <p>
          Hi! My name is Sanghyeop Lee 
          and I’m a full-stack software engineer
          with 4+ years helping data-informed decisions.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Grab a Coffee!</a>
        </div>
      </div>
    </section>
  )
}

export default About