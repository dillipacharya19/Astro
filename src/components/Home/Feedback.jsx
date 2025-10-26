import React from 'react';
import feedback from '../../utils/feedback';

const Feedback = () => {
  return (
    <div className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Left Section */}
        <div className="mb-10 md:mb-0 md:w-1/">
          <p className="text-orange-500 font-semibold uppercase">Clients Testimonials</p>
          <h1 className="text-4xl font-extrabold text-blue-900 mt-2">We Have 1000+ <br /><span className="text-orange-500">Client Feedback</span></h1>
          <p className="text-gray-700 mt-4 mb-6">
            Many of our satisfied clients, share their thoughts with us on how they feel after being discussed with me.
          </p>
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            More Testimonials
          </button>
        </div>

        {/* Feedback Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {feedback.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-center">{f.name}</h2>
              <p className="text-center text-gray-500 mb-4">{f.person}</p>
              <div className="flex justify-center mb-4">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <p className="text-gray-700 text-center">{f.desc}</p>
              <div className="flex justify-center mt-4 text-orange-500 text-lg">
                {/* Example: 5 stars */}
                {feedback.map((star, idx) => (
                  <span key={idx}>
                    <span>{star.ratting}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
