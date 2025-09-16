import React from "react";
import { Link } from "react-router-dom";
import sample1 from "/images/sample1.jpeg";
import sample2 from "/images/sample2.jpeg";
import sample3 from "/images/sample3.jpeg";
import sample4 from "/images/sample4.jpeg";
import sample5 from "/images/sample5.jpeg";
import sample6 from "/images/sample6.jpeg";
import sample7 from "/images/sample7.jpeg";


// New products data
const products = [
  {
    size: "0.8MM",
    protein: [42, 32],
    fat: [6, 8],
    image: sample1,
  },
  {
    size: "1MM",
    protein: [42, 32],
    fat: [6, 8],
    image: sample3,
  },
  {
    size: "1.5MM",
    protein: [42, 32],
    fat: [6, 8],
    image: sample2,
  },
  {
    size: "2MM",
    protein: [42, 32, 28],
    fat: [6, 5, 4],
    image: sample4,
  },
  {
    size: "3MM",
    protein: [32, 28, 24],
    fat: [6, 5, 4],
    image: sample5,
  },
  {
    size: "4MM",
    protein: [32, 28, 24, 20],
    fat: [6, 5, 4],
    image: sample6,
  },
  {
    size: "5MM",
    protein: [32, 28, 24, 20],
    fat: [6, 5, 4],
    image: sample7,
  },
  // {
  //   size: "6MM",
  //   protein: [32, 28, 24, 20],
  //   fat: [6, 5, 4],
  //   image: "/images/6mm.jpg",
  // },
];

// ProductCard Component
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-center">
        <h3 className="text-xl font-bold text-white">{product.size} Pellet</h3>
      </div>

      {/* Product Image */}
      <div className="p-5 flex justify-center items-center h-56 bg-white">
        <img
          src={product.image}
          alt={`${product.size} feed`}
          className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 bg-gray-50 flex-grow">
        <div className="mb-4 text-center font-medium text-gray-700">
          <span className="block mb-1">
            <strong>Protein:</strong> {product.protein.join("%, ")}%
          </span>
          <span>
            <strong>Fat:</strong> {product.fat.join("%, ")}%
          </span>
        </div>
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
            POPULAR FISH FEEDS
          </h1>
          <p className="text-blue-700 text-lg font-medium max-w-3xl mx-auto mb-4">
            Formulated to Perfection
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of high-quality fish feeds formulated for 
            maximum growth, health, and sustainability in aquaculture operations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
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