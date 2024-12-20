import React, { useState, useEffect } from "react";
import bg1 from "../assets/bg1.jpeg";
import { Link } from "react-router-dom";
import latest1 from "../assets/latest-1.jpeg";
import getshit from "../assets/project-3.jpeg";
import twogirls from "../assets/twogirls.jpeg";
import sofa from "../assets/project-2.jpeg";
import pinkwali from "../assets/pinkseat.jpeg";
import kaliwali from "../assets/kaliwali.jpeg";


function Projects() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState); // Toggles the state
      };
    return (
        <div>
            {/* ---------------------first part starts--------------------- */}
            <div style={{ backgroundImage: `url(${bg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "50vh" }}
                    className="relative mb-12"
                >

                {/* Header Navbar */}
                <div className="flex items-center justify-between p-6">
                    {/* Logo */}
                    <div className="flex items-end ml-4 lg:ml-32">
                        <h1 className="text-2xl lg:text-4xl font-bold text-white">Stagging</h1>
                        <h2 className="text-3xl lg:text-5xl text-amber-500 ml-1">.</h2>
                    </div>
                    {/* Links */}
                        <div className="hidden lg:flex ml-0 lg:ml-28">
                            <li className="text-white hover:text-amber-500 cursor-pointer list-none mr-6">
                        <Link to="/">Home</Link>
                    </li>
                        <ul className="flex space-x-3 lg:space-x-6">
                        {["Projects", "About", "Pages", "Blog", "Contact"].map((item, idx) => (
                        <li
                        key={idx}
                        className="text-white hover:text-amber-500 cursor-pointer"
                        >
                        <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                    {/* Add Home separately with a condition */}
                    
                    </ul>

                        </div>
                        {/* Contact Info */}
                        <div className="hidden sm:block mr-0 lg:mr-24 text-center">
                        <h1 className="text-gray-400 text-xs lg:text-sm">
                            Call us for any questions
                        </h1>
                        <h2 className="text-amber-500 text-sm lg:text-lg">+01 123 456 789</h2>
                        </div>

                        {/* Toggle Button */}
                        <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white text-2xl mr-4"
                        >
                        {isMenuOpen ? "Close" : "Menu"}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                    <div className="lg:hidden bg-gray-900 bg-opacity-90 fixed inset-0 flex flex-col justify-center items-center z-50">
                        <button
                        onClick={toggleMenu}
                        className="absolute top-6 right-6 text-white text-3xl"
                        >
                        &times; {/* Close button */}
                        </button>
                        <div>
                        <div className="text-white text-xl hover:text-amber-500 pb-3">
                        <Link to = '/' >Home</Link>
                        </div>
                        
                        <ul className="text-white text-xl space-y-4">
                            
                        {[ "Projects", "About", "Pages", "Blog", "Contact"].map(
                            (item, idx) => (
                            <li key={idx}>
                                <Link
                                to={`/${item.toLowerCase()}`}
                                className="hover:text-amber-500"
                                onClick={toggleMenu} // Close the menu after clicking a link
                                >
                                {item}
                                </Link>
                            </li>
                            )
                        )}
                        </ul>
                    </div>
                    </div>  
                    )}

                <div className="mt-28 sm:mt-28 lg:ml-40 sm:ml-32 ml-28">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    OUR PROJECTS
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-white mt-2">
                    <Link to={"/"} className="hover:underline">Home</Link>{" "}
                    <span className="text-amber-500">¬ Projects</span>
                </h2>
                </div>

                    
            {/* ---------------------first part ends--------------------- */}
            </div>
            {/* ---------------------second part starts--------------------- */}
<div className="flex flex-col items-center justify-center px-4 lg:px-16">
  {/* Row 1 */}
  <div className="flex flex-wrap justify-center gap-6 mb-8">
    <div className="flex flex-col items-center font-medium max-w-[385px]">
      <img
        src={pinkwali}
        alt="img1"
        className="h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] lg:h-[500px] lg:w-[385px] mb-4"
      />
      <span className="text-sm sm:text-base lg:text-lg text-center">
        OFFICE BUILDING
      </span>
    </div>
    <div className="flex flex-col items-center font-medium max-w-[385px]">
      <img
        src={sofa}
        alt="img1"
        className="h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] lg:h-[500px] lg:w-[385px] mb-4"
      />
      <span className="text-sm sm:text-base lg:text-lg text-center">
        FURNITURE DECORATIVE
      </span>
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex flex-wrap justify-center gap-6 mb-8">
    <div className="flex flex-col items-center font-medium max-w-[385px]">
      <img
        src={sofa}
        alt="img1"
        className="h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] lg:h-[500px] lg:w-[385px] mb-4"
      />
      <span className="text-sm sm:text-base lg:text-lg text-center">
        INTERIOR DESIGN
      </span>
    </div>
    <div className="flex flex-col items-center font-medium max-w-[385px]">
      <img
        src={kaliwali}
        alt="img1"
        className="h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] lg:h-[500px] lg:w-[385px] mb-4"
      />
      <span className="text-sm sm:text-base lg:text-lg text-center">
        HOME BUILDING
      </span>
    </div>
  </div>

  {/* Row 3 */}
  <div className="flex flex-wrap justify-center gap-6 mb-8">
    <div className="flex flex-col items-center font-medium max-w-[385px]">
      <img
        src={twogirls}
        alt="img1"
        className="h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] lg:h-[500px] lg:w-[385px] mb-4"
      />
      <span className="text-sm sm:text-base lg:text-lg text-center">
        DECORATION
      </span>
    </div>
    <div className="flex flex-col items-center font-medium max-w-[385px]">
      <img
        src={getshit}
        alt="img1"
        className="h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] lg:h-[500px] lg:w-[385px] mb-4"
      />
      <span className="text-sm sm:text-base lg:text-lg text-center">
        FURNITURE 
      </span>
    </div>
  </div>

  {/* Learn More Button */}
  <Link
    to="/about"
    className="relative sm:mb-4 mb-10 inline-block px-4 py-2 text-black font-bold text-lg sm:text-xl border-2 border-transparent rounded-lg transition-all duration-300 group"
  >
    Learn More
    {/* Top Line */}
    <span className="absolute top-0 left-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
    {/* Right Line */}
    <span className="absolute top-0 right-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 ease-in-out group-hover:h-full"></span>
    {/* Bottom Line */}
    <span className="absolute bottom-0 right-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
    {/* Left Line */}
    <span className="absolute bottom-0 left-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 ease-in-out group-hover:h-full"></span>
  </Link>
</div>
{/* ---------------------second part ends--------------------- */}

            {/* ---------------------footer  part starts--------------------- */}
            <footer class="bg-black text-white py-44">
                <div class="max-w-7xl mx-auto px-4">
                    
                    <div class="flex flex-col sm:flex-row justify-between items-center border-b border-gray-600 pb-6 mb-8">
                    <h2 class="text-3xl font-bold text-center sm:text-left">
                        READY TO WORK WITH <span class="text-amber-500">US?</span>
                    </h2>
                    
                    <form class="flex mt-4 sm:mt-0">
                        <input
                        type="email"
                        placeholder="Enter your email..."
                        class="px-4 py-2 w-full sm:w-72 text-gray-900 rounded-l focus:outline-none"
                        />
                        <button
                        type="submit"
                        class="bg-amber-500 px-6 text-white font-bold rounded-r hover:bg-amber-600"
                        >
                        ➔
                        </button>
                    </form>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    
                    <div>
                        <h3 class="text-2xl font-bold mb-4">
                        Staging<span class="text-amber-500">.</span>
                        </h3>
                        <p>7176 Blue Spring Lane</p>
                        <p>Santa Monica, CA 90403</p>
                        <p class="mt-4">info.colorlib@gmail.com</p>
                        <p>+84 123 456 789</p>

                        <div class="flex gap-4 mt-4">
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-4">Company</h4>
                        <ul>
                        <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Our Works</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Career</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-4">Services</h4>
                        <ul>
                        <li><a href="#" class="text-gray-400 hover:text-white">Architecture</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Interior Design</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Exterior Design</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Planning</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-4">Get In Touch</h4>
                        <p>7176 Blue Spring Lane</p>
                        <p>Santa Monica, CA 90403</p>
                        <p class="mt-4">info.colorlib@gmail.com</p>
                        <p>+84 123 456 789</p>
                    </div>
                    </div>

                    <div
                    class="mt-8 border-t border-gray-600 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-400"
                    >
                    <p class="text-center sm:text-left">
                        Copyright © 2024 All rights reserved | This template is made with ❤️ by
                        <span class="text-amber-500" > MALIK ABDULLAH </span>
                    </p>
                    <div class="flex gap-6 mt-4 sm:mt-0 justify-center sm:justify-start">
                        <a href="#" class="hover:text-white">Terms of Use</a>
                        <a href="#" class="hover:text-white">Privacy Policy</a>
                    </div>
                    </div>
                </div>
            </footer>
            
            


        </div>
    );
}

export default Projects;