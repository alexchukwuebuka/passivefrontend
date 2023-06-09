import React from 'react'
import './page.css'
import Header from '../components/Header/Header'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Asset from './Asset'
import Contact from '../components/contact/Contact'
import Faqcard from './Faqcard'
const Aboutpage = () => {
  return (
    <main className='landpage gold-page'>
    <Header />
      <section className='about-landpage'>
        <div className="about-page-text">
          <h3>about passive income invest</h3>
          <span className="small-thin-line"></span>
        </div>
      </section>
      <About />
      <Faqcard />
      <Asset />
      <Contact />
      <Footer />
    </main>
  )
}

export default Aboutpage