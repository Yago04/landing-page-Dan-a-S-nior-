import React from 'react';
import { Carousel } from 'react-bootstrap';
import backgroundImg from '../assets/img/imagecontainer/container.png';
import logo from '../assets/img/logo.png';
import './HeroSection.css';
import './animations.css';
import video1 from '../assets/videos/videohistoria.mp4'
import video2 from '../assets/videos/video2.mp4'

function HeroSection() {
  return (
    <section id='herosection'>
      <div className="hero-section-bg" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="hero-section-logo animate-fade-in">
          <img src={logo} alt="Dança Sênior Brasil" className="hero-logo" />
        </div>
        <div className="hero-section-content">
          <div className="hero-left animate-slide-left">
            <h1 className="hero-title">Esta é a Dança Sênior Brasil</h1>
            <p className="hero-desc">
              A Dança Sênior Brasil é uma organização sem fins lucrativos dedicada à capacitação de dirigentes de dança, oferecendo formação para transformar vidas por meio da dança. Com nossa metodologia estruturada, promovemos qualidade de vida, inclusão social e transformação cultural, ajudando as pessoas a vivenciarem um novo ritmo de vida, com movimentos que fortalecem o corpo, mente e espírito.
            </p>
            <div className="hero-btns-row">
              <a href="https://www.instagram.com/p/C6H3VWZgoVf/?img_index=2" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <button className="hero-btn hover-scale">Faça parte desse movimento!</button>
              </a>
            </div>
          </div>
          <div className="hero-right animate-slide-right">
            <div className="hero-carousel-box">
              <Carousel interval={null} controls={true} indicators={true} style={{width: '100%'}}>
                <Carousel.Item>
                  <div className="hero-video-wrapper full">
                    <iframe
                      width="640"
                      height="350"
                      src={video1}
                      title="Vídeo 1"
                      frameBorder="0"
                      allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="hero-video-wrapper full">
                    <iframe
                      width="640"
                      height="350"
                      src={video2}
                      title="Vídeo 2"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 