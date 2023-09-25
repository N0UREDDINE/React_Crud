import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className="text-white text-2xl font-bold">
          React Project
        </Link>


        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-user" className="text-white hover:text-gray-300">
              Add User
            </Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
