import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">MyApp</h1>

      <div className="space-x-6">

        <Link to="/" className="hover:text-gray-200">Home</Link>

        <Link to="/about" className="hover:text-gray-200">About</Link>

        <Link to="/contact" className="hover:text-gray-200">Contact</Link>

        <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded">
          Login
        </Link>

        <Link to="/signup" className="bg-white text-blue-600 px-3 py-1 rounded">
          Signup
        </Link>

      </div>

    </nav>

  );
}

export default Navbar;