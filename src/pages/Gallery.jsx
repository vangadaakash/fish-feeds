import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import product1 from '/images/product1.png'; // Example product images
import product2 from '/images/product2.png'; // Example product images
import product3 from '/images/product3.png'; // Example product images
import product4 from '/images/product4.png'; // Example product images
import product5 from '/images/product5.png'; // Example product images

const Gallery = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  
  const manufacturingProducts = [
    product1,
    product2,
    product3,
    product4,
    product5
  ];

  const productCategories = [
    { name: "Fish Feed Pellets", count: 12 },
    { name: "Nutritional Supplements", count: 8 },
    { name: "Specialty Feeds", count: 5 },
    { name: "Feeding Equipment", count: 7 }
  ];

  // Function to handle Contact Us button click
  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  // Carousel Component with Modern UI
  const Carousel = ({ images, interval = 4000, pauseOnHover = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (!images || images.length <= 1) return;
      const id = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
          );
        }
      }, interval);
      return () => clearInterval(id);
    }, [images.length, interval, isPaused]);

    const prevSlide = () =>
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () =>
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
      <div
        className="relative w-full max-w-6xl mx-auto"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        {/* Main Image Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={`Manufacturing product ${currentIndex + 1}`}
            className="w-full h-[500px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
            draggable="false"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          
          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
          
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-6 space-x-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                currentIndex === index 
                  ? "ring-4 ring-blue-500 ring-opacity-80 scale-110" 
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Manufacturing Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium aquaculture nutrition products crafted with precision and expertise for optimal fish health and growth.
          </p>
        </div>
        
        {/* Carousel Section */}
        <div className="mb-20">
          <Carousel images={manufacturingProducts} interval={4000} />
        </div>
        
        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.count} products available</p>
            </div>
          ))}
        </div>
        
        {/* Product Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Manufactured with the highest quality ingredients and strict quality control standards.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Formulation</h3>
            <p className="text-gray-600">Scientifically developed formulas for optimal nutrition and fish growth performance.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Production</h3>
            <p className="text-gray-600">Environmentally responsible manufacturing processes with minimal ecological impact.</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Products?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Contact our sales team to learn more about our manufacturing products and request a catalog.</p>
          <button 
            onClick={handleContactClick} // Use the click handler
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300 transform hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;