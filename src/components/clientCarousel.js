import React, { useState, useEffect } from 'react';
import ta1 from '../assets/ta-1.png';
import ta2 from '../assets/ta-2.png';
import ta3 from '../assets/ta-3.png';
import ta4 from '../assets/ta-4.png';
import ta5 from '../assets/ta-5.png';
import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';
import logo3 from '../assets/logo-3.png';
import logo4 from '../assets/logo-4.png';
import logo5 from '../assets/logo-5.png';
import './style.css';

const Carousel = () => {
  const people = [
    { id: 1, name: 'Renee Calhoun', role: 'CEO Woolley', imgSrc: ta1 },
    { id: 2, name: 'John Doe', role: 'CTO Woolley', imgSrc: ta2 },
    { id: 3, name: 'Jane Smith', role: 'COO Woolley', imgSrc: ta3 },
    { id: 4, name: 'Alex Roe', role: 'CFO Woolley', imgSrc: ta4 },
    { id: 5, name: 'Chris Taylor', role: 'CMO Woolley', imgSrc: ta5 },
  ];

  const logos = [
    { id: 1, logoSrc: logo1 },
    { id: 2, logoSrc: logo2 },
    { id: 3, logoSrc: logo3 },
    { id: 4, logoSrc: logo4 },
    { id: 5, logoSrc: logo5 },
  ];

  const [peopleArray, setPeopleArray] = useState(people);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPeopleArray = [...peopleArray];
      const firstPerson = newPeopleArray.shift();
      newPeopleArray.push(firstPerson);
      setPeopleArray(newPeopleArray);
    }, 4000);

    return () => clearInterval(interval);
  }, [peopleArray]);

  const [logosArray, setLogosArray] = useState(logos);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogosArray = [...logosArray];
      const firstLogo = newLogosArray.shift();
      newLogosArray.push(firstLogo);
      setLogosArray(newLogosArray);
    }, 500000);

    return () => clearInterval(interval);
  }, [logosArray]);

  return (
    <div className="relative w-screen overflow-hidden bg-slate-100">
      <div className="w-full sm:w-[880px] sm:h-[450px] h-72 flex items-center justify-center mx-auto mt-12 px-4">
        <h1 className="mt-10 sm:mb-10 text-center text-2xl font-semibold">
          "Fast and accurate at solving mental math problems<br />
          involving addition, subtraction, multiplication, division and<br />
          percentages but with high-level skills that might be required<br />
          in jobs requiring complex calculation and analysis."
        </h1>
      </div>

      {/* Person Image Carousel */}
      <div className="flex justify-center mt-9 mb-9 overflow-hidden">
        <div className="flex transition-transform duration-500">
          {peopleArray.map((person, index) => (
            <div
              key={person.id}
              className={`transition-transform duration-500 mx-2 lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px] ${
                index === 2
                  ? 'scale-125 z-10'
                  : 'scale-90 opacity-50 sm:opacity-15'
              }`}
            >
              <img
                src={person.imgSrc}
                alt={person.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Person Info */}
      <div className="text-center mt-4 mb-4">
        <p className="text-lg font-semibold">{peopleArray[2].name}</p>
        <p className="text-md">{peopleArray[2].role}</p>
      </div>

      {/* Logo Carousel */}
      <div className="flex justify-center mt-4 overflow-hidden">
        <div className="flex animate-marquee lg:w-[200%] sm:w-[100%]">
          {logosArray.concat(logosArray).map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80px] sm:w-[100px] h-[40px] sm:h-[50px] flex justify-center items-center mx-2"
            >
              <img
                src={logo.logoSrc}
                alt={`Logo ${logo.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
