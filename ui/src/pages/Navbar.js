import React from 'react';
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="bg-white border-b-2 border-gray-200 px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="container flex flex-wrap items-center justify-start gap-x-[10%]">
          <div className="text-xl font-bold text-gray-900 hover:bg-purple-300 px-3 py-2 rounded-lg">Home</div>
          <div className="text-xl font-bold text-gray-900 hover:bg-purple-300 px-3 py-2 rounded-lg">Resources</div>
          <div className="text-xl font-bold text-gray-900 hover:bg-purple-300 px-3 py-2 rounded-lg">About</div>
          <div className="text-xl font-bold text-gray-900 hover:bg-purple-300 px-3 py-2 rounded-lg">Contact Us</div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
