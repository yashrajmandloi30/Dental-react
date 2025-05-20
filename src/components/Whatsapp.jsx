import React from 'react';
import what from "/assets/images/17108426480303.jpg";
import { Link } from 'react-router-dom';

function Whatsapp() {
  return (
    <div
      id="whatsapp"
      className="fixed right-4 bottom-12 z-50 sm:right-4 md:right-12 lg:right-10 xl:right-16"
    >
      <Link
        to="https://api.whatsapp.com/send?phone=+8982707575"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-16 h-16 group" // ⬅️ increased size
      >
        <div className="absolute inset-0 rounded-full  border-4 border-[#dab4a3] opacity-75 animate-ping"></div>
        <img
          src={what}
          alt="WhatsApp Icon"
          
          className="rounded-full size-16 relative transition-transform  duration-1000 group-hover:scale-110"
        />
      </Link>
    </div>
  );
}

export default Whatsapp;
