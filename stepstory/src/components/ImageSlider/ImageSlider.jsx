import React, { useState } from 'react';
import './style.css';

export default function ImageSlider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderWidth = 600;

  const goPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <div className="image-container" style={{
        transform: `translateX(${-sliderWidth * activeIndex}px)`,
        width: `${sliderWidth * images.length}px`,
        }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button onClick={goPrev} className="left-arrow">&lt;</button>
      <button onClick={goNext} className="right-arrow">&gt;</button>
    </div>
  );
}
