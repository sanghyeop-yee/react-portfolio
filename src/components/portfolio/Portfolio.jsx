import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

// Project items from Array using map method
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Genie: AI Curated Marketplace for Your Next Gift',
    desc: 'Having trouble what to buy as a gift? Buying gifts is always difficult.  <br/> Genie marketplace is an e-commerce platform for recommending personalized gifts, based on a 1-minute survey.',
    github: 'https://github.com/sanghyeop-yee/genie-ecommerce-web',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Genie: E-Commerce Platform Seller Dashboard',
    desc: 'hello',
    github: 'https://github.com/sanghyeop-yee/genie-ecommerce-web',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'GalaBear NFT Minting Website',
    desc: 'hello',
    github: 'https://github.com/sanghyeop-yee/genie-ecommerce-web',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'SaveTheEarth: Fund Raising Website',
    desc: 'hello',
    github: 'https://github.com/sanghyeop-yee/genie-ecommerce-web',
    demo: ''
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, desc, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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