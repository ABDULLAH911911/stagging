import React, { useState } from "react";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import project5 from "../assets/project-3.jpeg"; // Added 5th project

const ImageCarousel = () => {
  const images = [
    project1, project2, project3, project4, project5
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 4; // Total images visible at a time

  // Next Button Logic
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous Button Logic
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex items-center justify-center mb-10">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 bg-gray-600 text-white px-3 py-2 rounded z-10"
      >
        &lt;
      </button>

      {/* Slider Images */}
      <div className="flex overflow-hidden w-full lg:w-[1200px]">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              (currentIndex % images.length) * (300 / visibleImages)
            }%)`,
            width: `${(images.length / visibleImages) * 100}%`,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative w-[80%] sm:w-[50%] md:w-[33%] lg:w-[25%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] p-2 flex-shrink-0 group"
            >
              <img
                src={src}
                alt={`Project ${index}`}
                className="w-full h-full object-cover"
              />
              {/* Hover Text */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%]  bg-white text-black text-center py-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Interiors: Lower River Street Aroria
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 bg-gray-600 text-white px-3 py-2 rounded z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
