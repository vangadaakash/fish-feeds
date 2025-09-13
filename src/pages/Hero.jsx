// src/sections/HeroSection.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';
import './Hero.css'; // This imports your CSS file
import home from '../assets/home.jpg';
import home1 from '../assets/home1.jpg';
import home5 from '../assets/home5.png';
import home4 from '../assets/home4.png';
import home6 from '../assets/home6.jpg';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of suitable aquaculture/fish feed images
  const slides = [
    {
      image: home,
      alt: ""
    },
    {
      image: home1,
      alt: ""
    },
    {
      image: home5,
      alt: ""
    },
    {
      image: home4,
      alt: "Healthy fish in net"
    },
    {
      image: home6,
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

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/70"></div>
      
      {/* Animated floating elements - updated with new animations */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-20 w-10 h-10 bg-white rounded-full opacity-15 animate-rotate"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-teal-400 rounded-full opacity-20 animate-bounce-slow"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl h-full flex flex-col justify-center">
        <div className="mb-6 animate-slide-in-top">
          <span className="bg-blue-800 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Premium Aquaculture Solutions
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-slide-in-left">
          Premium <span className="text-yellow-400">Fish Feeds</span> for 
          <span className="block mt-2">Optimal Growth & Health</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-in-right">
          Scientifically formulated feeds that maximize yield while promoting sustainable 
          aquaculture practices for fish farmers nationwide.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slide-in-bottom">
          <Link
            to="/products"
            className="px-6 md:px-8 py-3 md:py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl shadow-2xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-2 animate-pulse-button"
          >
            <span>Explore Our Products</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Contact Our Experts
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-10 md:mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 max-w-3xl mx-auto border border-white/20 animate-fade-in">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="text-center animate-count-up">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">15+</div>
              <div className="text-xs md:text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center animate-count-up" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">5000+</div>
              <div className="text-xs md:text-sm text-white/80">Happy Farmers</div>
            </div>
            <div className="text-center animate-count-up" style={{animationDelay: '0.4s'}}>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-xs md:text-sm text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;