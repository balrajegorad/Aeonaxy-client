import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dribbble-logo.png';
import { FiSearch, FiUpload, FiBriefcase } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext'; 



const Nav = () => {

  


  return (
    <nav className="bg-white p-4 flex items-center justify-between">
      {/* Logo and link */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-8 mr-4" />
              <Link to="/verifyuseremai" className="text-black font-semibold">Inspiration</Link>
              <Link to="/verifyuseremai" className="text-black font-semibold">Find Work</Link>
              <Link to="/verifyuseremai" className="text-black font-semibold">Learn Design</Link>
              <Link to="/verifyuseremai" className="text-black font-semibold">Go Pro</Link>
              <Link to="/verifyuseremai" className="text-black font-semibold">Hire Designers</Link>
      </div>

     

      {/* Profile photo, upload button, and work icon */}
          <div className="flex items-center gap-4">
              <button className="bg-white text-black px-2 py-1 rounded-lg flex items-center border1">
                  <input type="text" placeholder="Search" className="p-1 border border-gray-400 rounded-lg" />
          <FiSearch className="" />
              </button>
        <Link to="/work" className="text-black text-xl"><FiBriefcase /></Link>
        <img src='' alt="Profile" className="h-8 w-8 rounded-full mr-4" />
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg mr-4 flex items-center">
          <FiUpload className="mr-2" />Upload
        </button>
      </div>
    </nav>
  );
};

export default Nav;
