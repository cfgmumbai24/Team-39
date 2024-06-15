import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 border-gray-200 py-2.5 px-[200px]">
      <div className="container flex items-center justify-between">
        {/* Logo Section */}
        <img
          className="h-[100px]"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALtOxG1WRlUywqPVhc0nHRR0OQFL6i35lyQ&s'
          alt='logo'
        />
        {/* Links Section */}
        <div className="flex space-x-8">
          <Link to='/' className="text-xl font-bold text-gray-900 hover:bg-purple-300 px-3 py-2 rounded-lg cursor-pointer">Home</Link>
          <Link className="text-xl font-bold text-gray-900 hover:bg-purple-300 px-3 py-2 rounded-lg">Resources</Link>
          <Link className="text-xl font-bold text-gray-900 hover:bg-purple-300 px-3 py-2 rounded-lg">About</Link>
          <Link className="text-xl font-bold text-gray-900 hover:bg-purple-300 px-3 py-2 rounded-lg">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
