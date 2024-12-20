import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg1.jpeg";
import teer from "../assets/teer.png";
import eye from "../assets/eye.png";
import whychoseus from "../assets/whychoseus.jpeg";
import team1 from "../assets/team-1.jpeg";
import team2 from "../assets/team-2.jpeg";
import team3 from "../assets/team-3.jpeg";
import './style.css';


function About() {
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
                    ABOUT US
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-white mt-2">
                    <Link to={"/"} className="hover:underline">Home</Link>{" "}
                    <span className="text-amber-500">¬ About</span>
                </h2>
                </div>

                    
            {/* ---------------------first part ends--------------------- */}
            </div>

            {/* ---------------------second part starts--------------------- */}
            <div className="flex flex-col lg:flex-row items-start justify-between px-4 lg:px-12 space-y-10 lg:space-y-0 lg:space-x-4 ml-2 lg:ml-28 mb-10">
            {/* Left part */}
            <div className="flex flex-col items-start ">
                <h1 className="text-amber-500 text-lg sm:text-xl lg:text-2xl">WHO WE ARE</h1>
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">ABOUT US</h2>
                <p className="mt-5 font-thin text-sm sm:text-base lg:text-lg">
                As you might expect of a company that began<br />
                as a high-end interiors contractor.
                </p>
            </div>

            {/* Right part */}
            <div className="flex flex-col ">
                <p className="font-thin text-sm sm:text-base lg:text-lg">
                Metasurfaces are generally designed by placing scatterers in periodic or
                pseudo-periodic grids. We<br />
                propose and discuss design rules for functional metasurfaces with randomly placed. Anisotropic<br />
                scatterers, such as elements that randomly sample. Quisque sit amet nisl ante.
                </p>

                <div className="flex flex-col lg:flex-row mt-8 lg:mt-10 gap-8 lg:gap-12">
                {/* Mission */}
                <div className="flex flex-col items-start">
                    <img src={teer} alt="service1" className="h-[50px] sm:h-[60px] lg:h-[70px] mb-4 lg:mb-6" />
                    <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl">OUR MISSION</h1>
                    <p className="mt-4 font-thin text-sm sm:text-base lg:text-lg">
                    As you might expect of a company that began<br />
                    as a high-end interiors contractor, we pay strict<br />
                    attention. Anisotropic elements that randomly<br />
                    sample.
                    </p>
                </div>

                {/* Vision */}
                <div className="flex flex-col items-start">
                    <img src={eye} alt="service2" className="h-[50px] sm:h-[60px] lg:h-[70px] mb-4 lg:mb-6" />
                    <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl">OUR VISION</h1>
                    <p className="mt-4 font-thin text-sm sm:text-base lg:text-lg">
                    Our commitment to exceptional quality has<br />
                    never wavered. Today ranks as one of the most<br />
                    highly-regarded construction. Anisotropic<br />
                    elements that randomly sample.
                    </p>
                </div>
                </div>
            </div>
            </div>
            {/* ---------------------second part ends--------------------- */}
            {/* -------------------------- third Part: Why Choose Us -------------------------- */}
            <section
            style={{
                backgroundImage: `url(${whychoseus})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative h-[70vh] sm:h-[60vh] flex flex-col items-center justify-center mb-40"
            >
            <div className="text-center mt-20 sm:mt-10 px-4 sm:px-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-amber-500">WHY CHOOSE US</h1>
                <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-snug mt-4">
                Our Ability To Deliver Outstanding<br />
                Results For Our Clients Starts With<br /> Our Team Of Smart.
                </p>
                <button className="px-6 py-3 mt-10 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300">
                CONTACT US
                </button>
            </div>
            </section>
            {/*---------------------------third part ends----------------------------------*/}
             {/*--------------------------------------------------fourth part starts----------------------------------*/}
<div className="flex flex-col sm:flex-row pt-4 pb-6 px-4 sm:px-0">
  {/* Left Section */}
  <div className="flex flex-col items-start sm:ml-48 text-center sm:text-left">
    <h1 className="text-xl text-amber-500">OUR TEAM</h1>
    <p className="text-2xl sm:text-4xl text-black font-bold">MEET OUR TEAMS</p>
  </div>

  {/* Right Link */}
  <div className="mt-6 sm:mt-0 sm:absolute sm:right-48">
    <Link to="/about" className="absolute right-0 top-10 transform -translate-y-1/2 px-4 py-2 text-black font-bold text-lg sm:text-xl border-2 border-transparent rounded-lg transition-all duration-300 relative group">
      View All
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
</div>

{/* Photos Section */}
<div className="relative flex flex-col sm:flex-row items-center justify-center mt-10 mb-20 sm:mt-10 sm:mb-20">
  {/* Photo 1 */}
  <div className="relative group mb-6 sm:mb-0 sm:mr-8">
    <img src={team1} alt="team1" className="w-[300px] h-[400px] mx-auto sm:mx-0" />
    <div className="absolute top-0 left-0 bg-black p-4 border border-gray-300 w-[300px] h-[400px] hidden group-hover:block group-hover:opacity-75 z-10">
      <h2 className="text-lg font-bold text-white">Dolores Webster</h2>
      <p className="text-sm text-white">CEO & Founder</p>
      <p className="text-sm text-white">Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.</p>
    </div>
  </div>

  {/* Photo 2 */}
  <div className="relative group mb-6 sm:mb-0 sm:mr-8">
    <img src={team2} alt="team2" className="w-[300px] h-[400px] mx-auto sm:mx-0" />
    <div className="absolute top-0 left-0 bg-black p-4 border border-gray-300 w-[300px] h-[400px] hidden group-hover:block group-hover:opacity-75 z-10">
      <h2 className="text-lg font-bold text-white">Dolores Webster</h2>
      <p className="text-sm text-white">CEO & Founder</p>
      <p className="text-sm text-white">Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.</p>
    </div>
  </div>

  {/* Photo 3 */}
  <div className="relative group mb-6 sm:mb-0 sm:mr-8">
    <img src={team3} alt="team3" className="w-[300px] h-[400px] mx-auto sm:mx-0" />
    <div className="absolute top-0 left-0 bg-black p-4 border border-gray-300 w-[300px] h-[400px] hidden group-hover:block group-hover:opacity-75 z-10">
      <h2 className="text-lg font-bold text-white">Dolores Webster</h2>
      <p className="text-sm text-white">CEO & Founder</p>
      <p className="text-sm text-white">Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.</p>
    </div>
  </div>
</div>
{/*--------------------------------------------------fourth part ends----------------------------------*/}


            
           

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

export default About;