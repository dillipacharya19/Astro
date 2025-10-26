import React from 'react'
import problem from '../../utils/problem'
import { Link } from 'react-router-dom'

const Problem = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      {/* Top heading and paragraph */}
      <div className="text-center mb-8">
        <h3 className="text-amber-600 text-lg font-semibold mb-2">MY SERVICES</h3>
        <h1 className="text-3xl font-bold text-black mb-4">
          Solve Your Problem With <span className="text-amber-600">Certified Astrologer</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Astrologer Madhab Kumar Acharya is one of the best certified astrologers in India, with an experience of more than 15 years in solving astrology and vastu problems.
        </p>
      </div>

      {/* Subtext + button */}
      <div className="text-center mb-10">
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          With qualifications and experience, Astrologer Madhab Kumar Acharya has a special skill in accuracy of studying the planetary position and its effect in our life in terms of Astrology and Vastu and provides successful remedies for all types of Astrology And Vastu Problems.
        </p>
        
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {problem.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border-2 border-amber-300 text-center p-6 hover:shadow-md transition"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full object-contain"
            />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{p.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
            <Link to={p.link}>
              <button className="border border-amber-600 text-amber-600 px-4 py-1 rounded hover:bg-amber-600 hover:text-white transition">
                <a href={p.link} target="_blank" rel="noopener noreferrer">Book Now</a>
            </button>
          </Link>
          </div>
        ))}
      <div>

      </div>
    </div>

    </div >
  )
}

export default Problem
