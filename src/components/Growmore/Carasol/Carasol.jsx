import React, { useState, useEffect } from 'react';
import './Carasol.css';

const Carasol = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const images = [
    'images/2927262.jpg',
    'images/5120567.jpg',
    'images/6985670.jpg',
  ];

  // Function to automatically switch to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change the interval time as needed (in milliseconds)
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 text-white z-10 bg-gray-800 p-2 rounded-full"
        onClick={prevSlide}
      >
        {'<'}
      </button>
      <button
        className="absolute top-1/2 right-4 text-white z-10 bg-gray-800 p-2 rounded-full"
        onClick={nextSlide}
      >
        {'>'}
      </button>
      <div
        className='screens'
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="heading1">
            Growmore Technoline <br /> PVT LTD
        </div>
        <div className="heading2">
            Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  );
};

export default Carasol;
