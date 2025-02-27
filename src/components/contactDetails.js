import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons
import phone from '../assets/phone.png';
import email from '../assets/email.webp';
import web from '../assets/web.webp';

const ContactDetails = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Information Section */}
      <div className="text-center">
        <h5 className="text-amber-500 uppercase font-semibold text-sm">Information</h5>
        <h1 className="text-3xl font-bold mt-2">Contact Details</h1>
        <p className="text-gray-600 mt-4">
          As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
        </p>
      </div>

      {/* Contact Details */}
      <div className="flex flex-wrap justify-center mt-10 space-y-6 md:space-y-0 md:flex-row">
        {/* Phone */}
        <div className="flex flex-col items-center mx-4 my-6">
          <div className="text-amber-500 text-4xl">
            <FontAwesomeIcon icon={faPhone} /> {/* Use FontAwesomeIcon with the imported icon */}
          </div>
          <h6 className="text-sm font-bold mt-2">Phone Number</h6>
          <p className="text-gray-600 text-sm">+01 123 456 789</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center mx-4">
          <div className="text-amber-500 text-4xl">
            <FontAwesomeIcon icon={faEnvelope} /> {/* Use FontAwesomeIcon with the imported icon */}
          </div>
          <h6 className="text-sm font-bold mt-2">Email Address</h6>
          <p className="text-gray-600 text-sm">info.colorlib@gmail.com</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center mx-4">
          <div className="text-amber-500 text-4xl">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {/* Use FontAwesomeIcon with the imported icon */}
          </div>
          <h6 className="text-sm font-bold mt-2">Office Location</h6>
          <p className="text-gray-600 text-sm">7176 Blue Spring Lane, NY, US</p>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96777.56970225474!2d-74.24575835!3d40.76749915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2546fa8c82379%3A0xb9c215f917fe097c!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="mt-10">
        <h5 className="text-amber-500 uppercase font-semibold text-sm">Contact Form</h5>
        <h1 className="text-3xl font-bold mt-2">GET IN TOUCH</h1>
        <p className="text-gray-600 mt-4">
          As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex flex-wrap justify-center mt-10 space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-8 pt-6">
          <div className="relative">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
            ></textarea>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-center px-4 mt-6">
          <button className="bg-amber-500 text-white py-3 px-8 rounded-lg hover:bg-amber-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
