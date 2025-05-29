import React from 'react';
import { Carousel } from 'react-bootstrap';
import backgroundImg from '../assets/img/imagecontainer/container.png';
import './VideoCarouselSection.css';

function VideoCarouselSection() {
  return (
    <div className="video-section-bg" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="video-section-content">
        <div className="video-carousel-box">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="video-carousel-wrapper">
                <iframe
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Vídeo 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="video-carousel-wrapper">
                <iframe
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/ysz5S6PUM-U"
                  title="Vídeo 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default VideoCarouselSection;
