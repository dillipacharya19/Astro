import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../../utils/bodyData";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import RatingBar from "./RatingBar";



const AboutMe = () => {
  const about = data[0]?.about[0];

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mx-auto px-6 py-16 max-w-7xl bg-gray-50">

      {/* 👉 Image Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={data[0].img || "https://via.placeholder.com/400"}
          alt="Astrologer"
          className="w-[400px] rounded-xl shadow-md mx-auto"
        />
      </motion.div>

      {/* 👉 Text + Details */}
      <motion.div
        className="flex-1 space-y-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-orange-500 font-bold text-lg">ABOUT ME ➖</p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {about?.name1}
        </h1>

        <p className="text-gray-600">{about?.description}</p>

        {/* 👉 Contact Info */}
        <div className="space-y-2 text-gray-700">
          <div className="flex items-center gap-2">
            <FaRegUserCircle className="text-orange-500 text-[24px]" />
            <span className="font-semibold text-[15px]">Name: Madhab kumar Acharya</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneVolume className="text-orange-500 text-[24px]" />
            <span className="font-semibold text-[15px]">Phone: +91 8018776502</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="text-orange-500 text-[24px]" />
            <span className="font-semibold text-[15px]">Mail: madhabacharya1431@gmail.com</span>
          </div>
        </div>

        {/* 👉 Skills Progress Bars */}
        <div className="bg-gray-100 p-6 rounded-lg">

          <RatingBar />

        </div>

        {/* 👉 Call to Action */}
        <button className="border-2 border-orange-500 px-4 py-2 rounded text-orange-500 hover:bg-orange-500 hover:text-white">

          <Link to="/about">
            About Me
          </Link>
        </button>
      </motion.div>
    </div>
  );
};

export default AboutMe;
