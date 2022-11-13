import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/portfolio1.png'
import VID1 from '../../assets/portfolio_video1.mp4'
import VID2 from '../../assets/portfolio_video2.mp4'
import VID3 from '../../assets/portfolio_video2.mp4'
import VID4 from '../../assets/portfolio_video2.mp4'
import { useState, useEffect } from 'react'

// Project items from Array using map method
const data = [
  {
    id: 1,
    video: VID1,
    title: 'Genie: AI Curated Marketplace for Your Next Gift',
    desc: 'Having trouble what to buy as a gift? Buying gifts is always difficult. Genie marketplace is an e-commerce platform for recommending personalized gifts, based on our 1-minute survey.',
    github: 'https://github.com/sanghyeop-yee/genie-ecommerce-web',
    demo: ''
  },
  {
    id: 2,
    video: VID2,
    title: 'Genie: E-Commerce Platform Seller Dashboard',
    desc: 'Not only customers can make a better and easier decision for their next gifts, but our Sellers can also easily manage orders and boost sales with our live dashboards.',
    github: 'https://github.com/sanghyeop-yee/genie-ecommerce-web',
    demo: ''
  },
  {
    id: 3,
    video: VID3,
    title: 'GalaBear NFT : Minting Website',
    desc: 'A dynamic and interactive landing page of GalaBear NFT using HTML5, CSS, and JS. I created their website from scratch using the frontend tools and the single-page application library.',
    github: 'https://github.com/sanghyeop-yee/genie-ecommerce-web',
    demo: ''
  },
  {
    id: 4,
    video: VID4,
    title: 'SaveTheEarth: Fund Raising Website',
    desc: "I cloned and rebuilt WWF's official website because I got attracted to their UI and wished to improve it. It was a great experience to learn and build the entire frontend and backend of a fundraising website.",
    github: 'https://github.com/sanghyeop-yee/genie-ecommerce-web',
    demo: ''
  }
]

const Portfolio = () => {
  const [hover, setHover] = useState(false);


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, video, title, desc, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <video src={video} type='video/mp4' alt={title} loop onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}/>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Tell Me More</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio