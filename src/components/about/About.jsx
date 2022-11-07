import React from 'react'
import './about.css'
import ME from '../../assets/me.png' // change to 'me-about.jpg'
import {BiMap} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineDeploymentUnit} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            
            <article className='about__card'>
              <BiMap className='about__icon'/>
              <h5>Data Analyst</h5>
              <small>4+ Years</small>
            </article>

            <article className='about__card'>
              <AiOutlineDeploymentUnit className='about__icon'/>
              <h5>Fullstack Developer</h5>
              <small>1+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Entrepreneur</h5>
              <small>2+ Years</small>
            </article>

            
          </div>

          <p>
          Hi! My name is Sanghyeop Lee 
          and I’m a full-stack software engineer
          with 4+ years helping data-informed decisions.
          데이터분석가, 창업가 출신의 풀스택 엔지니어 이상협입니다.
          <br/><br/>
          지도, 기술, 정신력은 어떠한 모험뿐 아니라 성공적인 비즈니스에서 필수적인 요소라고 생각합니다.

          4년차 데이터분석가로서 최적의 길을 찾는 로드맵을 만들어왔고,

          창업 경험의 실행력을 바탕으로 고객들과 이야기하며 서비스 개발을 해왔으며,

          개발자로서 기술을 이용해 문제를 해결하고 가치를 제공하도록

          매일 배우며 성장하고 있습니다.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Grab a Coffee!</a>
        </div>
      </div>
    </section>
  )
}

export default About