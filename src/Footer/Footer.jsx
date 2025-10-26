import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // get navigate function

  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About Me */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">About Me</h3>
          <p>
            Astrologer Madhab Kumar Acharya is one of the most renowned astrologers in India with experience of more than 15 years. He is loved by the people around the world and successfully resolved different astrological and vastu problems of more than 1500 people.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigate("/about")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/contact")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/services")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => window.open("https://vedicgalaxy.com/", "_blank")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/testimonials")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Testimonials
              </button>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigate("/terms")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Terms And Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/privacy")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/disclaimer")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Disclaimer
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/grievance")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Grievance Redressal
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/refund")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Refund/Cancellation
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/shipping")}
                className="hover:text-amber-600 cursor-pointer text-left"
              >
                Shipping
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Communication Address</h3>
          <p>
            Astrologer Madhab Kumar Acharya,<br />
            Bhograi, Balasore, 756035,<br />
            Odisha
          </p>
          <p className="mt-3">madhabacharya1431@gmail.com</p>
          <p>Mobile: +91 8018776502</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
