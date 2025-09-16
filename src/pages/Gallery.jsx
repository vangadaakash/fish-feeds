import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const manufacturingProducts = [
    { type: "image", src: "/images/productimage.jpg" },
  { type: "image", src: "/images/home.jpg" },
  { type: "image", src: "/images/home1.jpg" },
  { type: "image", src: "/images/home3.jpg" },
  { type: "image", src: "/images/home4.png" },
  { type: "image", src: "/images/home5.jpg" },
  { type: "video", src: "/images/process1.mp4" },
  { type: "video", src: "/images/process2.mp4" },
  { type: "video", src: "/images/process3.mp4" },
  { type: "video", src: "/images/process4.mp4" },
  { type: "video", src: "/images/process5.mp4" }
];

  const productResults = [
    { type: "image", src: "/images/result1.jpg" },
    { type: "video", src: "/images/result.mp4" }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const Carousel = React.memo(({ items, interval = 4000, pauseOnHover = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (!items || items.length <= 1) return;
      const id = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prev) =>
            prev === items.length - 1 ? 0 : prev + 1
          );
        }
      }, interval);
      return () => clearInterval(id);
    }, [items.length, interval, isPaused]);

    const prevSlide = () =>
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    const nextSlide = () =>
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

    const renderMedia = (item, alt, className) => {
      if (item.type === "image") {
        return (
          <img
            src={item.src}
            alt={alt}
            className={className}
            draggable="false"
          />
        );
      } else if (item.type === "video") {
        return (
          <video
            src={item.src}
            className={className}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        );
      }
      return null;
    };

    return (
      <div
        className="relative w-full max-w-6xl mx-auto"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100 flex items-center justify-center h-[500px] video-container">
          {renderMedia(
            items[currentIndex],
            `Manufacturing product ${currentIndex + 1}`,
            "w-full h-[500px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

          {items[currentIndex].title && (
            <div className="absolute bottom-8 left-0 right-0 text-center text-white z-10">
              <h3 className="text-2xl font-bold mb-2">{items[currentIndex].title}</h3>
              <p className="text-lg">{items[currentIndex].description}</p>
            </div>
          )}

          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {items.length}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                currentIndex === index
                  ? "ring-4 ring-blue-500 ring-opacity-80 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              aria-label={`View item ${index + 1}`}
            >
              {renderMedia(
                item,
                `Thumbnail ${index + 1}`,
                "w-full h-full object-cover"
              )}
            </button>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Factory & Production Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium aquaculture nutrition products crafted with precision and expertise for optimal fish health and growth.
          </p>
        </div>

        <div className="mb-20">
          <Carousel items={manufacturingProducts} interval={4000} />
        </div>

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

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Lab Testing & Process Automation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-xl shadow-md p-6">
              <img src="/images/labphoto.jpg" alt="Laboratory Testing" className="rounded-lg mb-4 w-full object-cover h-72" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Laboratory Tested & Certified</h3>
              <p className="text-gray-700 mb-2">
                Every batch of Populerr Fish Feed undergoes strict quality testing in our modern laboratory. Our expert team ensures that each pellet is:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-2">
                <li>✅ Scientifically formulated for maximum fish growth</li>
                <li>✅ Free from harmful chemicals and contaminants</li>
                <li>✅ Balanced with the right protein, fat, and minerals</li>
              </ul>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Our Lab Quality Checks Include:</h4>
              <ol className="list-decimal pl-5 text-gray-700 mb-2">
                <li>Moisture Analysis – Longer shelf life & freshness</li>
                <li>Protein Testing – Strong growth & weight gain</li>
                <li>Fat & Fiber Testing – Balanced energy & digestion</li>
                <li>Purity Check – No adulteration, only pure nutrition</li>
              </ol>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Why Farmers Choose Populerr?</h4>
              <ul className="list-disc pl-5 text-gray-700 mb-2">
                <li>Lab-certified quality for healthy and fast-growing fish</li>
                <li>Consistent size, floating & sinking pellets</li>
                <li>Increases fish weight in less time</li>
                <li>Trusted by farmers across India</li>
              </ul>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Results That Speak</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Up to 30% faster growth rate compared to ordinary feeds</li>
                <li>Higher survival & productivity</li>
                <li>Guaranteed value for money</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <img src="/images/plcphoto.jpg" alt="PLC Control System" className="rounded-lg mb-4 w-full object-cover h-72" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">PLC Control Fish Feed Process System</h3>
              <p className="text-gray-700 mb-2">
                Our PLC-Controlled Fish Feed Process Systems are designed to automate every stage of fish feed production with precision, consistency, and efficiency.
              </p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Process Flow with PLC Control</h4>
              <ol className="list-decimal pl-5 text-gray-700">
                <li>Raw Material Handling – Automatic weighing, dosing, and transfer of raw materials. Integrated sensors ensure accuracy and prevent material loss.</li>
                <li>Grinding & Mixing – PLC-controlled dosing for precise ingredient blending. Automated mixing cycle improves consistency.</li>
                <li>Conditioning & Extrusion – Temperature, moisture, and screw speed controlled by PLC. Produces floating or sinking fish feed with exact density.</li>
                <li>Drying & Cooling – Automated dryers maintain uniform moisture levels. Cooling system ensures feed durability and shelf life.</li>
                <li>Coating & Oil Spraying – Controlled addition for optimal nutrition and palatability.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the measurable benefits of our premium aquaculture nutrition products.
            </p>
          </div>

          <div className="mb-12">
            <Carousel items={productResults} interval={5000} />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-lg font-medium text-gray-700">Customer Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-lg font-medium text-gray-700">Successful Farms</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
              <div className="text-lg font-medium text-gray-700">Cost Reduction</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Products?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Contact our sales team to learn more about our manufacturing products and request a catalog.</p>
          <button 
            onClick={handleContactClick}
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
