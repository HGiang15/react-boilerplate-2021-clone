import React from 'react';
import imgHero from 'images/home/img_hero.png';
import HeroStyle from './HeroStyle';

const Hero = () => (
  <HeroStyle id="hero">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up"
        >
          <div>
            <h1>
              Hướng dẫn cài đặt
              <br />
              Ứng dụng Định Giá
            </h1>
          </div>
        </div>
        <div
          className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img"
          data-aos="fade-up"
        >
          <img src={imgHero} className="img-fluid" alt="hero" />
        </div>
      </div>
    </div>
  </HeroStyle>
);

export default Hero;
