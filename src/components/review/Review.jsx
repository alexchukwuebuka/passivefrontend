import React, {useRef,useState} from 'react'
import './review.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


const Review = () => {
    
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div className='review-section'>
    {/* <div className="why-choose-us-text-container review-head-container">
            <div className="header review-header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>what our custormers are saying</h2>
            </div>
            <h1 data-aos="fade-up">custormer reviews</h1>
        </div> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper review-swiper"
        data-aos="fade-up"
      >
        <SwiperSlide className='review-swiper-slide'>
          <div className="swiper-slide-content">
            <img src="/istockphoto-1133598770-170667a.jpg" alt="" className='review-img'/>
            <small className="investor-name">
              - James S.
            </small>
            <small className='investor-title'>investor</small>
            <ImQuotesLeft />
              <p>Passive Income Invest has been a game-changer for my financial portfolio. Their expert guidance in real estate, gold stocks, and agro-tech investments has consistently delivered impressive returns. I highly recommend their services for anyone looking to grow their wealth intelligently.
              </p>
            <ImQuotesRight />
          </div>
        </SwiperSlide>
        <SwiperSlide className='review-swiper-slide'>
          <div className="swiper-slide-content">
            <img src="/istockphoto-1342247162-170667a.jpg" alt="" className='review-img'/>
            <small className="investor-name">
              - Michael W.
            </small>
            <small className='investor-title'>investor</small>
            <ImQuotesLeft />
              <p>I've found my ultimate investment partner in Passive Income Invest. Their diversified approach in real estate, gold stocks, and agro-tech has provided me with a reliable stream of passive income. Trustworthy, professional, and results-driven! 
              </p>
            <ImQuotesRight />
          </div>
        </SwiperSlide>
        <SwiperSlide className='review-swiper-slide'>
          <div className="swiper-slide-content">
            <img src="/istockphoto-1322849492-170667a.jpg" alt="" className='review-img'/>
            <small className="investor-name">
              - Mark L.
            </small>
            <small className='investor-title'>investor</small>
            <ImQuotesLeft />
              <p>Passive Income Invest's real estate, gold stock, and agro-tech investment strategies have exceeded my expectations. I've seen my investments grow steadily, and their personalized approach to wealth management sets them apart from the rest.
              </p>
            <ImQuotesRight />
          </div>
        </SwiperSlide>
        <SwiperSlide className='review-swiper-slide'>
          <div className="swiper-slide-content">
            <img src="photo-1624797432677-6f803a98acb3.jpg" alt="" className='review-img'/>
            <small className="investor-name">
              - David M.
            </small>
            <small className='investor-title'>investor</small>
            <ImQuotesLeft />
              <p>Thanks to Passive Income Invest, I've achieved financial stability and peace of mind. Their well-researched investment opportunities in real estate, gold stocks, and agro-tech have consistently yielded excellent results. Their team is knowledgeable, responsive, and genuinely cares about their clients' success. 
              </p>
            <ImQuotesRight />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default Review