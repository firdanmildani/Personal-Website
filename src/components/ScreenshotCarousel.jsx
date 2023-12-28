import React from 'react';
import { Carousel } from 'react-bootstrap';

const ScreenshotCarousel = ({ screenshots }) => {
  return (
    <Carousel data-bs-theme="dark">
      {screenshots.map((screenshot, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
          />
          {/* You can add a caption or additional elements for each screenshot */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ScreenshotCarousel;
