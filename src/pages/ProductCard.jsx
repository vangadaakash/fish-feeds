// ProductsPreviewBanner.jsx
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img3 from '/images/img3.jpg';
import banner from '/images/banner.jpg';
// import video from '/images/video.mp4';
import process from '/images/process.mp4'; // Ensure the video is in the public/videos directory
const ProductsPreviewBanner = () => {
  const videoRef = useRef(null);
const navigate = useNavigate(); // Initialize the navigate function
const handleButtonClick = () => {
    // You can add extra logic here if needed
    navigate("/products");
  };


  // Function to play the video
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Function to stop the video
  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Listen for home button click event
  useEffect(() => {
    const handleHomeButtonClick = () => {
      playVideo();
    };

    // Add event listener for home button click
    // You'll need to adjust this based on how your home button is implemented
    const homeButton = document.querySelector('#home-button'); // Adjust selector as needed
    if (homeButton) {
      homeButton.addEventListener('click', handleHomeButtonClick);
    }

    // Clean up
    return () => {
      if (homeButton) {
        homeButton.removeEventListener('click', handleHomeButtonClick);
      }
    };
  }, []);

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Video Section */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">See Our Process in Action</h3>
          <div className="aspect-w-16 aspect-h-9 mx-auto max-w-3xl">
            <video
              ref={videoRef}
              title="Populerr Fish Feed Manufacturing Process"
              className="w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-md"
              controls
            >
              <source src={process} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-600 mt-4 text-sm">Watch how we create our premium aquaculture feeds with precision and care</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Content Section */}
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Premium Aquaculture Solutions</h2>
            <p className="text-gray-700 mb-4">
              At Populerr Fish Feed, we combine 15+ years of aquaculture expertise with cutting-edge nutrition research 
              to deliver feeds that maximize growth, health, and profitability for fish farmers.
            </p>
            <p className="text-gray-700 mb-6">
              Our scientifically formulated products are designed to meet the specific nutritional requirements 
              of various fish species at different growth stages.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-1 rounded-full mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 text-sm sm:text-base">Scientifically formulated feeds</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-1 rounded-full mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 text-sm sm:text-base">Enhanced growth rates</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-1 rounded-full mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 text-sm sm:text-base">Improved feed conversion ratios</span>
              </div>
            </div>
            
            <button 
              onClick={handleButtonClick}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors duration-300 flex items-center justify-center"
            >
              View Our Products
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
          
          {/* Image Section */}
          <div className="md:w-2/5 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-100 rounded-xl transform rotate-2"></div>
              <img 
                src={img3} 
                alt="Populerr Fish Feed Products"
                className="relative z-10 rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreviewBanner;