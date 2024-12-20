import React,{ useState} from "react";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg1 from "../assets/bg1.jpeg";
import getshit from "../assets/project-3.jpeg";
import girl from "../assets/girl.png";
import signature from "../assets/signature.png";
import project2 from "../assets/project-2.jpeg";
import latest1 from "../assets/latest-1.jpeg";
import latest2 from "../assets/latest-2.jpeg";
import latest3 from "../assets/latest-3.jpeg";



function Blog() {
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
                    OUR BLOGS
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-white mt-2">
                    <Link to={"/"} className="hover:underline">Home</Link>{" "}
                    <span className="text-amber-500">¬ Blogs</span>
                </h2>
                </div>
            {/* ---------------------first part ends--------------------- */}
            </div>
            {/* ---------------------second part starts--------------------- */}
            <div className="flex flex-col md:flex-row items-start justify-center">
            {/* Left Part */}
            <div className="flex flex-col px-4 md:px-10">
                {/* First Section */}
                <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap items-center text-sm md:text-base">
                    <span className="font-thin">DECEMBER 20, 2019</span>
                    <span className="font-bold mx-3">.</span>
                    <span className="font-thin">BY JOHN DOE</span>
                    <span className="font-bold mx-3">.</span>
                    <span className="font-thin">PLANNING</span>
                </div>
                <h1 className="font-bold text-lg md:text-2xl">
                    Target and Amazon Shopping List for <br className="hidden md:block" />
                    Home Stagers
                </h1>
                <div className="flex flex-col items-center">
                    <img src={getshit} alt="Image" className="object-cover w-full max-h-60 md:max-h-96" />
                    <p className="font-light text-sm md:text-base pt-3 pb-4 text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br className="hidden md:block" />
                    incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link
                    to="/about"
                    className="relative inline-block px-4 py-2 text-black font-thin text-sm md:text-lg border-2 border-transparent rounded-lg transition-all duration-300 group"
                    >
                    Learn More
                    <span className="absolute top-0 left-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 right-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute bottom-0 right-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute bottom-0 left-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 group-hover:h-full"></span>
                    </Link>
                </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-amber-500 my-6" />

                {/* Second Section */}
                {/* First Section */}
                <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap items-center text-sm md:text-base">
                    <span className="font-thin">DECEMBER 20, 2019</span>
                    <span className="font-bold mx-3">.</span>
                    <span className="font-thin">BY JOHN DOE</span>
                    <span className="font-bold mx-3">.</span>
                    <span className="font-thin">PLANNING</span>
                </div>
                <h1 className="font-bold text-lg md:text-2xl">
                    Target and Amazon Shopping List for <br className="hidden md:block" />
                    Home Stagers
                </h1>
                <div className="flex flex-col items-center">
                    <img src={project2} alt="Image" className="object-cover w-full max-h-60 md:max-h-96" />
                    <p className="font-light text-sm md:text-base pt-3 pb-4 text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br className="hidden md:block" />
                    incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link
                    to="/about"
                    className="relative inline-block px-4 py-2 text-black font-thin text-sm md:text-lg border-2 border-transparent rounded-lg transition-all duration-300 group"
                    >
                    Learn More
                    <span className="absolute top-0 left-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 right-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute bottom-0 right-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute bottom-0 left-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 group-hover:h-full"></span>
                    </Link>
                </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-amber-500 my-6" />
                {/* First Section */}
                <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap items-center text-sm md:text-base">
                    <span className="font-thin">DECEMBER 20, 2019</span>
                    <span className="font-bold mx-3">.</span>
                    <span className="font-thin">BY JOHN DOE</span>
                    <span className="font-bold mx-3">.</span>
                    <span className="font-thin">PLANNING</span>
                </div>
                <h1 className="font-bold text-lg md:text-2xl">
                    Target and Amazon Shopping List for <br className="hidden md:block" />
                    Home Stagers
                </h1>
                <div className="flex flex-col items-center">
                    <img src={getshit} alt="Image" className="object-cover w-full max-h-60 md:max-h-96" />
                    <p className="font-light text-sm md:text-base pt-3 pb-4 text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br className="hidden md:block" />
                    incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link
                    to="/about"
                    className="relative inline-block px-4 py-2 text-black font-thin text-sm md:text-lg border-2 border-transparent rounded-lg transition-all duration-300 group"
                    >
                    Learn More
                    <span className="absolute top-0 left-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute top-0 right-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 group-hover:h-full"></span>
                    <span className="absolute bottom-0 right-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute bottom-0 left-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 group-hover:h-full"></span>
                    </Link>
                </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-amber-500 my-6" />
                {/* Repeat similar structure for other sections */}
            </div>

            {/* Right Part */}
            <div className="flex flex-col px-4 md:px-10">
                <div className="flex flex-col items-center">
                <img src={girl} alt="Girl" className="object-cover rounded-lg w-full max-w-min" />
                <p className="font-light text-sm md:text-base text-center">
                    Quis ipsum suspendisse ultrices gravid. Risus <br className="hidden md:block" />
                    commodo viverra maece accums lacus vel <br className="hidden md:block" />
                    facilisis.
                </p>
                <img src={signature} alt="Signature" className="object-contain w-1/2 mt-4" />
                </div>

                {/* Categories */}
                <div className="mt-8">
                <h1 className="font-semibold text-start">CATEGORIES</h1>
                <ul className="space-y-2">
                    <li>Work Space</li>
                    <li>Office Building</li>
                    <li>HomeStay</li>
                    <li>Making</li>
                    <li>Process</li>
                </ul>
                </div>

                {/* Feature News */}
                <div className="mt-8">
                <h1 className="font-semibold text-start">FEATURE NEWS</h1>
                <div className="space-y-4">
                    <div className="flex items-start">
                    <img src={latest1} alt="News" className="w-16 h-16 object-cover" />
                    <div className="ml-4">
                        <p className="font-thin text-gray-400">DECEMBER 20, 2019</p>
                        <p>Grace Millane's mother tells killer she died 'terrified'</p>
                    </div>
                    </div>
                    {/* Repeat for other news items */}
                    <div className="flex items-start">
                    <img src={latest2} alt="News" className="w-16 h-16 object-cover" />
                    <div className="ml-4">
                        <p className="font-thin text-gray-400">DECEMBER 20, 2019</p>
                        <p>Grace Millane's mother tells killer she died 'terrified'</p>
                    </div>
                    </div>

                    <div className="flex items-start">
                    <img src={latest3} alt="News" className="w-16 h-16 object-cover" />
                    <div className="ml-4">
                        <p className="font-thin text-gray-400">DECEMBER 20, 2019</p>
                        <p>Grace Millane's mother tells killer she died 'terrified'</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Tags */}
                <div className="mt-8 grid grid-cols-4 gap-2">
                <h1 className="font-semibold text-start col-span-4">TAG</h1>
                {['Branding', 'Office', 'Creative', 'Building', 'Portfolio', 'Products' , 'Design', 'Website' , 'Working Space'].map((tag) => (
                    <a
                    key={tag}
                    href="#"
                    className="text-gray-600 hover:text-blue-500"
                    >
                    {tag}
                    </a>
                ))}
                </div>
                {/* Repeat similar structure for other sections */}
                {/* social media */}
                <div className="flex flex-col items-start">
                          <h1 className="font-semibold text-start pt-10 pb-7">FOLLOW US</h1>
                          <div className="flex flex-row">
                            <a href="#" className="mr-4">
                              <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                            <h1 className="mr-4">
                              ____</h1>
                            <a href="#" className="mr-4">
                              <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <h1 className="mr-4">
                              ____</h1>
                            <a href="#" className="mr-4">
                              <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            <h1 className="mr-4">
                              ____</h1>
                            <a href="#" className="mr-4">
                              <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                          </div>
                        </div>
                        {/* social media end */}
                        {/* newsletter */}
                        <div className="flex flex-col items-start pb-8">
                          <h1 className="font-semibold text-start pt-10 pb-7">NEWSLETTER</h1>
                          <div className="flex flex-col">
                            <p className="text-gray-500">Get our latest news and updates</p>
                            <div className="flex flex-row mt-4">
                              <input
                                type="email"
                                placeholder="Enter your email..."
                                className="px-4 py-2 w-full sm:w-72 text-gray-900 rounded-l border border-gray-300 focus:outline-dashed"
                              />
                              <button
                                type="submit"
                                className="bg-amber-500 px-6 text-white font-bold rounded-r hover:bg-amber-600" 
                              >
                                ➔
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* newsletter end */}

            </div>
        </div>


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

export default Blog;