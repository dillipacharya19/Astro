import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import horos, { points } from "../../utils/horoscopeData";
import AnimatedNumber from "./AnimatedNumber";

const Horoscope = () => {
  return (
    <div>
      <div className="text-4xl font-bold text-center mb-10">Yearly Horoscope</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 px-6 py-12 max-w-7xl mx-auto bg-gradient-to-br from-orange-50 to-white">
        {horos.map((horo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <Link to={`/horoscope/${horo.name.toLowerCase()}`}>
              <div className="w-full h-32 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-orange-50">
                <img
                  src={horo.img}
                  alt={horo.name}
                  className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                {horo.name}
              </h3>
              <div className="flex justify-center">
                <button className="bg-orange-500 text-white font-medium px-2 py-2 rounded-lg hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg">
                  {horo.learn}
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center px-4 py-8">
        {points.map((point, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <AnimatedNumber number={point.rating} />
            <h3 className="text-gray-700 text-[18px] mt-1">{point.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Horoscope;
