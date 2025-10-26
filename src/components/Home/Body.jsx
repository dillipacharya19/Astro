import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import data from "../../utils/bodyData";
import { motion } from "framer-motion"; 

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-24 my-24 px-12 py-12 gap-10 bg-green-50">
      {/* Text Section */}
      <motion.div
        className="flex-1 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-orange-500 font-bold text-lg">WELCOME TO MY WORLD</p>
        <h1 className="text-4xl font-bold text-gray-800">
          Astrologer <br />
          <span className="text-orange-500">
            <ReactTyped
              strings={["Madhab Kumar Acharya", "Love Expert", "Career Guide"]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </span>
        </h1>
        <p className="text-gray-600">{data[0].desc}</p>

        <div className="flex gap-4">
          <button className="border-2 border-orange-500 px-4 py-2 rounded text-orange-500 hover:bg-orange-500 hover:text-white">
            <Link to="/about">
              About Me
            </Link>
          </button>
          <button className="text-gray-700 font-semibold hover:text-orange-500">
            <a
                href="https://wa.me/+918018776502"
                target="_blank"
                rel="noopener noreferrer"
            >
              💬 Let's Chat
            </a>
          </button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={data[0].img}
          alt="Astrologer"
          className="w-[400px] rounded-xl shadow-md mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default Body;
