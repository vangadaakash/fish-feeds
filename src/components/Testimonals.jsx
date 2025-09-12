function Testimonials() {
  const reviews = [
    {
      name: "Rakesh Yadav, West Bengal",
      text: "After switching to Populerr Fish Feeds, I saw faster growth in my Rohu and Katla. The feed quality is excellent, and my profits have increased.",
      rating: 5,
      image: "farmer1"
    },
    {
      name: "Suresh Naik, Odisha",
      text: "I've tried many brands, but Populerr's 28/4 feed gave me the best results. It's affordable and truly value for money.",
      rating: 4,
      image: "farmer2"
    },
    {
      name: "Priya Sharma, Andhra Pradesh",
      text: "The customer support is exceptional. They helped me optimize feeding schedules for my farm. Yield has improved by 25%!",
      rating: 5,
      image: "farmer3"
    },
    {
      name: "Amit Patel, Gujarat",
      text: "The feed pellets are uniform and don't dissolve quickly in water. My fish are healthier and growth is consistent across the pond.",
      rating: 5,
      image: "farmer4"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">What Farmers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from real farmers who have experienced the difference with Populerr Fish Feeds
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">{review.name}</h4>
                    <div className="flex mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic border-l-4 border-green-500 pl-4 py-2">
                  "{review.text}"
                </p>
              </div>
              <div className="bg-green-50 px-6 py-3 flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm text-green-700">Verified Customer</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1">
            Read More Success Stories
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;