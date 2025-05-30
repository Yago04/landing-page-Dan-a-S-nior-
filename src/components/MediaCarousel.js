import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/img/imagemcarrossel/banner1.png'; 
import img2 from '../assets/img/imagemcarrossel/banner2.png'; 
import img3 from '../assets/img/imagemcarrossel/banner3.png'; 
import video from '../assets/img/imagemcarrossel/video.mp4';

function MediaCarousel() {
  return (
    <div className="media-carousel-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={img1}
            alt="Primeira imagem"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={img2}
            alt="Segunda imagem"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={img3}
            alt="Terceira imagem"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-video-wrapper">
            <video
              className="carousel-video"
              src={video}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
              }}
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MediaCarousel;
