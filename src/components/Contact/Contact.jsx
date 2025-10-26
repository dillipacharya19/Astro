import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-[50px] font-bold text-blue-950 mb-10">Contact</h2>

        {/* Info cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-white p-6 shadow-md w-72  text-center">
            <div className="flex justify-center text-orange-500 text-2xl mb-2"><FaPhoneVolume /></div>
            <h4 className="font-semibold">Phone Number</h4>
            <p className="text-sm">+91 8018776502</p>
          </div>
          <div className="bg-white p-6 shadow-md w-72 text-center">
            <div className="flex justify-center text-orange-500 text-2xl mb-2"><IoIosMail /></div>
            <h4 className="font-semibold">Email Address</h4>
            <p className="text-sm">madhabacharya1431@gmail.com</p>
          </div>
          <div className="bg-white p-6 shadow-md w-72 text-center">
            <div className="flex justify-center text-orange-500 text-2xl mb-2"><FaMapMarkerAlt /></div>
            <h4 className="font-semibold">Office Location</h4>
            <p className="text-sm">Kamarda hospital front, Bhogari, Balasore, Odisha</p>
          </div>
        </div>

        {/* Main section - two parts */}
        <div className="flex flex-wrap justify-center items-start gap-10 px-6">
          {/* Left Content */}
          <div className="max-w-md space-y-4">
            <h3 className="text-orange-500 text-[20px] font-semibold">Reach Me</h3>
            <h2 className="text-[35px] font-bold text-blue-900">
              Love To Hear From You,<br />
              <span className="text-orange-500">Get In Touch !</span>
            </h2>
            <p className="text-[18px] font-normal text-gray-700">
              Feel free to reach us if you have any query with you regarding any astrological or vastu problems.
            </p>

            {/* Centered Social Icons */}
            <div className="flex justify-center gap-5 mt-4">
              <span className='text-[25px] text-orange-400'><FaFacebook /></span>
              <span className='text-[25px] text-orange-400'><FaInstagram /></span>
              <span className='text-[25px] text-orange-400'><IoLogoYoutube /></span>
              <span className='text-[25px] text-orange-400'><FaWhatsapp /></span>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone No"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
              <textarea
                placeholder="Your message (optional)"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
