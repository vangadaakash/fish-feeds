import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";

// Combined feed samples data with additional information
const feedProducts = [
  { 
    id: 1, 
    size: "1.5mm", 
    code: "34/5", 
    name: "34/5 Feed",
    description: "34% protein, 5% fat. Supports healthy growth & immunity.",
    features: ["Floating pellets", "Easily digestible", "Boosts immunity"],
    image20: img1,
    image40: img2
  },
  { 
    id: 2, 
    size: "2mm", 
    code: "32/5", 
    name: "32/5 Feed",
    description: "32% protein, 5% fat. Perfect for active growth stages.",
    features: ["High protein formula", "Balanced energy", "Floating type"],
    image20: img1,
    image40: img2
  },
  { 
    id: 3, 
    size: "3mm", 
    code: "30/4", 
    name: "30/4 Feed",
    description: "30% protein, 4% fat. Suited for fast growth in commercial farming.",
    features: ["Rapid weight gain", "Eco-friendly", "Pellet size options"],
    image20: img1,
    image40: img2
  },
  { 
    id: 4, 
    size: "4mm", 
    code: "28/5", 
    name: "28/5 Feed",
    description: "28% protein, 5% fat. Ideal for high-value fish growth.",
    features: ["Super growth formula", "No antibiotics", "Floating pellets"],
    image20: img1,
    image40: img2
  },
  { 
    id: 5, 
    size: "4mm", 
    code: "28/4", 
    name: "28/4 Feed",
    description: "28% protein, 4% fat. Balanced nutrition for various fish species.",
    features: ["Complete nutrition", "Enhanced digestibility", "Water stable"],
    image20: img1,
    image40: img2
  },
  { 
    id: 6, 
    size: "3mm", 
    code: "28/4", 
    name: "28/4 Feed",
    description: "28% protein, 4% fat. Smaller pellet size for younger fish.",
    features: ["Ideal for fingerlings", "High palatability", "Promotes uniform growth"],
    image20: img1,
    image40: img2
  },
  { 
    id: 7, 
    size: "4mm", 
    code: "24/4", 
    name: "24/4 Feed",
    description: "24% protein, 4% fat. Cost-effective maintenance feed.",
    features: ["Economical choice", "Good growth rates", "Reduced waste"],
    image20: img1,
    image40: img2
  },
  { 
    id: 8, 
    size: "3mm", 
    code: "20/4", 
    name: "20/4 Feed",
    description: "20% protein, 4% fat. Starter feed for small fish.",
    features: ["Starter formulation", "Highly digestible", "Supports early development"],
    image20: img1,
    image40: img2
  },
];

// ProductCard Component with enhanced features
function ProductCard({ product }) {
  const [weight, setWeight] = useState(20);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">
      {/* Card Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-center">
        <h3 className="text-xl font-bold text-white">{product.name}</h3>
        <p className="text-blue-100 text-sm mt-1">
          {product.size} Pellet Size
        </p>
      </div>

      {/* Product Image - Made larger */}
      <div className="p-5 flex justify-center items-center h-56 bg-white">
        <img
          src={weight === 20 ? product.image20 : product.image40}
          alt={`${product.size} ${product.code} feed bag`}
          className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 bg-gray-50 flex-grow">
        <p className="text-gray-700 mb-4 text-center font-medium">
          {product.description}
        </p>

        {/* Weight Selector */}
        <div className="flex gap-2 mb-4 justify-center">
          <button
            onClick={() => setWeight(20)}
            className={`px-4 py-2 rounded-lg ${
              weight === 20
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            20 Kg
          </button>
          <button
            onClick={() => setWeight(40)}
            className={`px-4 py-2 rounded-lg ${
              weight === 40
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            40 Kg
          </button>
        </div>

        {/* Features List */}
        <ul className="mb-5 space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="bg-green-500 p-1 rounded-full mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <Link
          to="/contact"
          className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mt-auto"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}

// Product Page
export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24 pb-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            POPULERR Fish Feeds
          </h1>
          <p className="text-blue-700 text-lg font-medium max-w-3xl mx-auto mb-4">
            Premium Aquaculture Nutrition for Optimal Growth
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of high-quality fish feeds formulated for 
            maximum growth, health, and sustainability in aquaculture operations.
          </p>
        </div>

        {/* Product Grid - Changed to 3 columns for wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
         <div className="text-center mt-12">
          <p className="text-gray-600 mb-5 text-base">Need help selecting the right feed for your fish?</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <i className="fas fa-fish mr-2"></i> Consult Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
}