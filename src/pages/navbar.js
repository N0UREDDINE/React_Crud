import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          My React App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-user" className="hover:text-gray-400">
              Add User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
