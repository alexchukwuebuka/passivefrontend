import React from 'react'
import './service.css'
import {Link } from 'react-router-dom'
const Service = () => {
  return (
      <section className='service-section'>
          <div className="service-card-container">
              <div className="gold-card" data-aos="fade-up">
              <img src="/pexels-michael-steinberg-321463.jpg" alt="" />
              <div className="gold-card-text">
                  <small>09/07/17</small>
                  <h3>gold stock investment</h3>
                  <p>Passive Income Invest is a leading gold stock investment company committed to helping our clients navigate the world of gold investments.With the aim of ensuring our clients make informed decisions...</p>
                  <a href="/goldstock">read more</a>
              </div>
              </div>
              <div className="gold-card" data-aos="fade-up">
              <img src="/pexels-mathias-reding-7108780.jpg" alt="" />
              <div className="gold-card-text">
                  <small>01/09/16</small>
                  <h3>real estate and housing</h3>
                  <p>In an era where financial stability and the pursuit of passive income are paramount, real estate investment has emerged as a highly lucrative option.</p>
                  <Link to="/realestate">read more</Link>
              </div>
              </div>
              <div className="gold-card" data-aos="fade-up">
              <img src="/Invest4Land-Agriculture-Real-Estate-Investment-Investing-Farmland-Farming-Agrobusiness-Investor-Property-Managed-Farmland-Turkey-Spain-Almond-Walnut0.jpg" alt="" />
              <div className="gold-card-text">
                  <small>03/03/17</small>
                  <h3>agro-tech investment</h3>
                  <p>In an era of rapidly evolving technology, the agricultural sector has witnessed a remarkable transformation. Agro tech investments have emerged as a lucrative avenue for generating passive income.</p>
                      <Link to="/agrotech">read more</Link>
              </div>
              </div>
          </div>
    </section>
  )
}

export default Service