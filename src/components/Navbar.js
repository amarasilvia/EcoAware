import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({textColor = "text-black"}) => {
    return(
        <nav className="absolute top-0 w-full p-4 z-20">
        <div className={`container mx-auto flex justify-between items-center ${textColor}`}>
          <h1 className=" text-3xl font-bold">EcoAware</h1>
          <div>
            <Link to={"/"} className="hover:text-gray-300 mx-4 transition duration-300">Home</Link>
            <a href="#Artikel" className="hover:text-gray-300 mx-4 transition duration-300">Artikel</a>
            <a href="#Galeri" className="hover:text-gray-300 mx-4 transition duration-300">Galeri</a>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;