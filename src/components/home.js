import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ImageCarousel from "./imageCarousel";
import Carousel from "./clientCarousel";
import bg1 from "../assets/bg1.jpeg";
import twogirls from "../assets/twogirls.jpeg";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import services1 from "../assets/services-1.png.webp";
import services2 from "../assets/services-2.png.webp";
import services3 from "../assets/services-3.png.webp";
import services4 from "../assets/services-4.png";
import team1 from "../assets/team-1.jpeg";
import team2 from "../assets/team-2.jpeg";
import team3 from "../assets/team-3.jpeg";
import whychoseus from "../assets/whychoseus.jpeg";
import latest1 from "../assets/latest-1.jpeg";
import latest2 from "../assets/latest-2.jpeg";
import latest3 from "../assets/latest-3.jpeg";
import './style.css';

function Home() {
  const headings = ["Welcome to Stagging", "Innovate with Us", "Your Success, Our Mission"];
  const buttons = ["Learn More", "Get Started", "Contact Us"];
  const [index, setIndex] = useState(0);
  //for the third section
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Automatically change texts every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [headings.length]);

  // Handlers for manual navigation
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? headings.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % headings.length);
  };


   // Handle next image
  const handleNextimg = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Restart from the first image
    }
  };

  // Handle previous image
  const handlePrevimg = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(3); // Go to the last image
    }
  };

  const images = [project1, project2, project3, project4,];
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggles the state
  };


  return (
    <>
    <div>
      {/* Main container */}

      {/* first part start */}
{/* first part start */}
<div
  style={{
    backgroundImage: `url(${bg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  }}
  className="relative mb-12 "
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
      <ul className="flex space-x-3 lg:space-x-6">
        {["Home", "Projects", "About", "Pages", "Blog", "Contact"].map(
          (item, idx) => (
            <li
              key={idx}
              className="text-white hover:text-amber-500 cursor-pointer"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          )
        )}
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
    <ul className="text-white text-xl space-y-4">
      {["Home", "Projects", "About", "Pages", "Blog", "Contact"].map(
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
)}


  {/* Changing Text Section */}
  <div className="relative flex items-center justify-center mt-40 lg:mt-52">
    {/* Left Button */}
    <button
      onClick={handlePrev}
      className="absolute left-4 lg:left-28 top-1/2 transform -translate-y-1/2 text-white text-5xl"
    >
      &#8249;
    </button>

    {/* Headings */}
    <h1 className="text-2xl lg:text-5xl font-bold text-white mx-6">
      {headings[index]}
    </h1>

    {/* Right Button */}
    <button
      onClick={handleNext}
      className="absolute right-4 lg:right-28 top-1/2 transform -translate-y-1/2 text-white text-5xl"
    >
      &#8250;
    </button>
  </div>

  {/* Changing Button */}
  <div className="flex justify-center mt-10">
    <button className="px-6 py-2 lg:py-3 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600">
      {buttons[index]}
    </button>
  </div>

  {/* Social Links Section */}
  <div className="flex justify-between items-center mt-44 lg:mt-40 px-6 lg:px-12">
    {/* Left Section */}
    <div className="flex flex-col space-y-3 text-sm lg:text-lg">
      <div className="flex space-x-7 lg:space-x-6 text-gray-400">
        {headings.map((_, idx) => (
          <span
            key={idx}
            className={`cursor-pointer ${
              idx === index ? "text-amber-500" : "hover:text-gray-300"
            }`}
            onClick={() => setIndex(idx)}
          >
            {`0${idx + 1}`}
          </span>
        ))}
      </div>

      <div className="relative h-1 w-24 lg:w-28 bg-gray-400">
        <div
          className="absolute h-1 bg-amber-500 transition-all duration-500"
          style={{
            width: "38px",
            left: `${index * 33.33}%`,
          }}
        ></div>
      </div>
    </div>

    {/* Center Section */}
    <a
      href="/projects"
      className="text-white text-sm lg:text-lg hover:text-amber-500"
    >
      Discover More
    </a>

    {/* Right Section */}
    <div className="flex space-x-4 lg:space-x-6 text-white text-lg">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faFacebook}
          className="hover:text-amber-500 transition duration-300"
        />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faInstagram}
          className="hover:text-amber-500 transition duration-300"
        />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="hover:text-amber-500 transition duration-300"
        />
      </a>
    </div>
  </div>
</div>
{/* -----------------------------------------------first part ends ----------------------------------- */}



        {/* -----------------------------------------------second part starts --------------------------*/}
<div className="flex flex-col lg:flex-row items-center justify-center sm:pt-10 pl-3 lg:pt-10 mb-8">

{/* Text div */}
<div className="flex flex-col items-center lg:items-start  mt-8 lg:mt-0 lg:mr-10">
  <div className="flex flex-col items-start justify-start">
    <h1 className="text-xl text-amber-500">WHO ARE WE</h1>
    <h2 className="text-4xl text-black font-bold text-start">
      WE PROPOSE AND<br /> DISCUSS DESIGN RULES
    </h2>
    <p className="mt-7 text-start font-light">
      Metasurfaces are generally designed by placing scatterers in periodic or<br />
      pseudo-periodic grids. We propose and discuss design rules for<br />
      functional metasurfaces with randomly placed.
    </p>
    <p className="mt-4 text-start font-light">
      Anisotropic elements that randomly sample. Quisque sit amet nisl ante.<br />
      Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et hendrerit<br /> et.
    </p>
    <Link 
      to="/about"
      className="relative inline-block mt-6 px-4 py-2 text-black font-bold text-xl border-2 border-transparent rounded-lg transition-all duration-300 group"
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
</div>

{/* Photo div */}
<div className="mt-8 lg:mt-0  ml-2 mr-2 lg:ml-10">
  <img src={twogirls} alt="img1" className="h-[500px]  mb-10" />
</div>

</div>
{/* -----------------------------------------------second part ends ------------------------------*/}

        {/* -----------------------------------------------third part starts ------------------------------*/}
<div className="flex flex-col items-center justify-center mt-4 relative px-4 sm:px-6 md:px-8">
  <h1 className="text-1xl text-amber-500">OUR WORKS</h1>
  <h2 className="text-4xl text-black font-bold text-center mt-2">
    LATEST PROJECTS
  </h2>
  <div className="mt-3 w-full">
    <ImageCarousel />
  </div>
</div>
{/* -----------------------------------------------third part ends ------------------------------*/}

      {/* -----------------------------------------------fourth part starts ------------------------------*/}
<div className="flex flex-col items-center justify-center px-4">

{/* Heading Section */}
<div className="mb-10 mt-10 text-center">
  <h1 className="text-1xl text-amber-500">OUR SPECIALIZATION</h1>
  <h2 className="text-4xl text-black font-bold">WHAT WE DO</h2>
</div>

{/* Services Section */}
<div className="flex flex-col lg:flex-row items-center justify-center mt-10 space-y-10 lg:space-y-0 lg:space-x-10">
  <div className="flex flex-col items-start">
    <img src={services1} alt="service1" className="h-[50px] mb-10" />
    <h1 className="font-semibold text-xl">INTERIOR DESIGN</h1>
    <p className="text-start font-thin">
      As you might expect of a company<br /> that began as a high-end interiors<br /> contractor, we pay strict attention.
    </p>
  </div>
  <div className="flex flex-col items-start">
    <img src={services2} alt="service1" className="h-[50px] mb-10" />
    <h1 className="font-semibold text-xl">OFFICE DESIGN</h1>
    <p className="text-start font-thin">
      Our commitment to exceptional<br /> quality has never wavered. To day<br /> ranks as one of the most highly-<br /> regarded construction.
    </p>
  </div>
  <div className="flex flex-col items-start">
    <img src={services3} alt="service1" className="h-[50px] mb-10" />
    <h1 className="font-semibold text-xl">HOME DESIGN</h1>
    <p className="text-start font-thin">
      Interdisciplinary architectural<br /> studio with cultural, residential and<br /> commercial projects built<br /> worldwide
    </p>
  </div>
  <div className="flex flex-col items-start">
    <img src={services4} alt="service1" className="h-[50px] mb-10" />
    <h1 className="font-semibold text-xl">DESIGN DRAWING</h1>
    <p className="text-start font-thin">
      Creating architectural and<br /> creative solutions to help people<br /> realize their vision and make them<br /> a reality.
    </p>
  </div>
</div>

{/* Separator Line */}
<div className="mt-10 mb-10 border-t border-gray-300 w-full"></div>

{/* Stats Section */}
<div className="flex flex-col lg:flex-row items-center justify-center mt-10 mb-10 space-y-6 lg:space-y-0 lg:space-x-10 p-6">
  <div className="flex flex-col items-center">
    <h1 className="text-4xl text-amber-500 font-bold">85</h1>
    <p className="text-center">PROJECTS<br /> COMPLETED</p>
  </div>
  <div className="flex flex-col items-center">
    <h1 className="text-4xl text-amber-500 font-bold">85</h1>
    <p className="text-center">HAPPY<br /> CLIENTS</p>
  </div>
  <div className="flex flex-col items-center">
    <h1 className="text-4xl text-amber-500 font-bold">85</h1>
    <p className="text-center">AWARDS<br /> RECEIVED</p>
  </div>
  <div className="flex flex-col items-center">
    <h1 className="text-4xl text-amber-500 font-bold">85</h1>
    <p className="text-center">CUPS OF<br /> COFFEE</p>
  </div>
</div>
</div>
{/* -----------------------------------------------fourth part ends ------------------------------*/}

      {/* -----------------------------------------------fifth part starts ------------------------------*/}
<div className="flex flex-col items-center justify-center pt-10 pb-10 bg-white">
  <div>
    <h1 className="text-xl text-amber-500 ml-4">TESTIMONIALS</h1>
    <h2 className="text-4xl text-black font-bold text-center sm:text-left">
      WHAT YOUR CLIENTS SAY
    </h2>
  </div>
  
  <Carousel />
</div>
{/*--------------------------------------------------fifth part ends----------------------------------*/}

      {/*--------------------------------------------------sixth part starts----------------------------------*/}
<div className="flex flex-col sm:flex-row pt-28 pb-6 px-4 sm:px-0">
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
{/*--------------------------------------------------sixth part ends----------------------------------*/}

      {/* -------------------------- Seventh Part: Why Choose Us -------------------------- */}
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
{/*--------------------------------------------------seventh part ends----------------------------------*/}

      {/* -------------------------- Eighth Part: Latest News -------------------------- */}
<section className="relative z-10">
  {/* Upper Section */}
  <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-64 pt-20 pb-10">
    <div>
      <h1 className="text-xl sm:text-2xl text-amber-500 text-start">LATEST NEWS</h1>
      <p className="text-3xl sm:text-4xl text-black font-bold">FROM OUR BLOG</p>
    </div>
    <Link
      to="/about"
      className="relative group px-4 py-2 text-black font-bold text-lg sm:text-xl border-2 border-transparent rounded-lg transition duration-300 mt-4 sm:mt-0"
    >
      View All
      {/* Animated Borders */}
      <span className="absolute top-0 left-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
      <span className="absolute top-0 right-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 ease-in-out group-hover:h-full"></span>
      <span className="absolute bottom-0 right-0 w-3 h-0.5 bg-slate-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-3 bg-slate-400 transition-all duration-500 ease-in-out group-hover:h-full"></span>
    </Link>
  </div>

  {/* Images Section */}
  <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-6 mt-10 px-4 sm:px-0">
    <div className="w-full sm:w-[250px] h-[400px] lg:w-[350px] lg:h-[450px] lg:ml-28 flex flex-col justify-start items-start shadow-md">
      <img src={latest1} alt="news1" className="object-cover w-full h-50" />
      <h1 className="mt-2 font-mono text-start text-lg sm:text-xl">ARCHITECTURE</h1>
      <p className="mt-2 font-semibold text-start text-sm sm:text-base">Target and Amazon<br /> Shopping List for Home<br /> Stagers</p>
      <button className="px-6 py-3 mt-4 bg-slate-200 text-amber font-semibold rounded hover:bg-amber-600 transition duration-500">
        Read More
      </button>
    </div>

    <div className="w-full sm:w-[250px] h-[400px] lg:w-[350px] lg:h-[450px] lg:ml-16 flex flex-col justify-start items-start shadow-md">
      <img src={latest2} alt="news2" className="object-cover w-full h-50" />
      <h1 className="mt-2 font-mono text-start text-lg sm:text-xl">ARCHITECTURE</h1>
      <p className="mt-2 font-semibold text-start text-sm sm:text-base">Target and Amazon<br /> Shopping List for Home<br /> Stagers</p>
      <button className="px-6 py-3 mt-4 bg-slate-200 text-amber font-semibold rounded hover:bg-amber-600 transition duration-500">
        Read More
      </button>
    </div>

    <div className="w-full sm:w-[250px] sm:h-[400px] lg:w-[350px] lg:h-[450px] lg:ml-9  flex flex-col justify-start items-start shadow-md">
      <img src={latest3} alt="news3" className="object-cover w-full h-50" />
      <h1 className="mt-2 font-mono text-start text-lg sm:text-xl">ARCHITECTURE</h1>
      <p className="mt-2 font-semibold text-start text-sm sm:text-base">Target and Amazon<br /> Shopping List for Home<br /> Stagers</p>
      <button className="px-6 py-3 mt-4 bg-slate-200 text-amber font-semibold rounded hover:bg-amber-600 transition duration-500">
        Read More
      </button>
    </div>
  </div>
</section>
{/*--------------------------------------------------eighth part ends----------------------------------*/}

        {/* -------------------------- Ninth Part: Footer -------------------------- */}
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
        <span class="text-amber-500">Colorlib</span>
      </p>
      <div class="flex gap-6 mt-4 sm:mt-0 justify-center sm:justify-start">
        <a href="#" class="hover:text-white">Terms of Use</a>
        <a href="#" class="hover:text-white">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>
{/*--------------------------------------------------ninth part ends----------------------------------*/}

    {/* main div ends */}
  </div>

  </>
  );
}

export default Home;

