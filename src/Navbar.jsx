import { Link, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-orange-600 ">
        <button className="cursor-pointer" onClick={() => navigate("/")}>Astrologer Madhab</button></div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-6 text-gray-700 text-[20px] font-bold mr-7">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="https://vedicgalaxy.com/">Products</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Mobile menu icon */}
      <div className="md:hidden text-3xl text-purple-600 cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </div>

      {/* Mobile drawer with animation */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <button className="text-3xl m-4 text-purple-600" onClick={closeDrawer}><IoClose /></button>
        <ul className="flex flex-col gap-6 p-6 text-gray-700 font-medium">
          <li><Link to="/" onClick={closeDrawer}>Home</Link></li>
          <li><Link to="/about" onClick={closeDrawer}>About</Link></li>
          <li><Link to="/products" onClick={closeDrawer}>Products</Link></li>
          <li><Link to="/services" onClick={closeDrawer}>Services</Link></li>
          <li><Link to="/contact" onClick={closeDrawer}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
