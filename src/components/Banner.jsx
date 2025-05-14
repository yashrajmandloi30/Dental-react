// src/components/Banner.jsx
import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {/* Opening Hours */}
        <div
          className="bg-[#07a1d9] p-6 text-white space-y-4 min-h-[300px] rounded-xl shadow-lg"
          data-aos="zoom-in"
        >
          <h3 className="text-2xl font-bold">Opening Hours</h3>
          <div className="flex justify-between">
            <span>Mon - Fri</span>
            <span>8:00am - 9:00pm</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>8:00am - 7:00pm</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>8:00am - 5:00pm</span>
          </div>
          <a
            href="#"
            className="inline-block bg-white text-[#07a1d9] px-4 py-2 rounded mt-4"
          >
            Appointment
          </a>
        </div>

        {/* Search A Doctor */}
        <div
          className="bg-gray-900 p-6 text-white space-y-4 min-h-[300px] rounded-xl shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold">Search A Doctor</h3>
          <input
            type="date"
            className="w-full p-2 rounded bg-white text-black"
          />
          <select className="w-full p-2 rounded bg-white text-black">
            <option>Select A Service</option>
            <option>Service 1</option>
            <option>Service 2</option>
            <option>Service 3</option>
          </select>
          <a
            href="#"
            className="inline-block bg-white text-gray-900 px-4 py-2 rounded"
          >
            Search Doctor
          </a>
        </div>

        {/* Make Appointment */}
        <div
          className="bg-gray-700 p-6 text-white space-y-4 min-h-[300px] rounded-xl shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h3 className="text-2xl font-bold">Make Appointment</h3>
          <p>
            Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum
            magna at eos et eos amet.
          </p>
          <h2 className="text-3xl font-bold">+012 345 6789</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
