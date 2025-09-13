import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';
import './Hero.css'; // This imports your CSS file

// Remove these imports:
// import home from "/images/home.jpg";
// import home1 from "/images/home1.jpg";
// import home4 from "/images/home4.png";
// import home5 from "/images/home5.png";
// import home6 from "/images/home6.jpg";

// Instead, use direct URL paths in the slides array:
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/home.jpg',
      alt: ""
    },
    {
      image: '/images/home1.jpg',
      alt: ""
    },
    {
      image: '/images/home5.png',
      alt: ""
    },
    {
      image: '/images/home4.png',
      alt: "Healthy fish in net"
    },
    {
      image: '/images/home6.jpg',
      alt: "Fish feed production"
    }
  ];

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="h-[100vh] relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentSlide}
          />
        ))}
      </div>

      {/* Rest of your component remains unchanged */}
      ...
    </section>
  );
}

export default HeroSection;
