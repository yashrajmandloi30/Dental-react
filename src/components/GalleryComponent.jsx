import React, { useState } from 'react';

const images = [
  "assets/images/gallery/new/IMG_6272.jpg",
  "assets/images/gallery/new/IMG_6206.jpg",
  "assets/images/gallery/new/IMG_6219.jpg",
  "assets/images/gallery/new/IMG_6214.jpg",
  "assets/images/gallery/new/IMG_6208.jpg",
  "assets/images/gallery/new/IMG_6210.jpg",
  "assets/images/gallery/new/IMG_6243.jpg",
  "assets/images/gallery/new/IMG_6285.jpg",
  "assets/images/gallery/new/IMG_6287.jpg",
  "assets/images/gallery/new/IMG_6088.jpg",
  "assets/images/gallery/new/IMG_6081.jpg",
  "assets/images/gallery/new/IMG_6085.jpg",
  "assets/images/gallery/new/IMG_6077.jpg",
  "assets/images/gallery/new/IMG_6069.jpg",
  "assets/images/gallery/new/IMG_6089.jpg",
  "assets/images/gallery/new/IMG_6250.jpg",
  "assets/images/gallery/new/IMG_6283.jpg",
  "assets/images/gallery/new/IMG_6253.jpg"
];

const GalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ mx: 0, my: 0 });

  

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    setMousePosition({ mx, my });
  };

  return (
    <div className="container mx-auto py-12 px-4">
       <div className="text-center mb-10">
          <h2 className="text-white bg-[#07a1d9] text-3xl py-2 px-2 rounded-xl font-bold inline-block mx-auto">
             Our Gallery
          </h2>
        </div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleImageClick(image, index)}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 w-full h-full">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12">
            <img
              src={selectedImage}
              alt="Fullscreen Image"
              className="w-full h-96 object-cover"
              onMouseMove={handleMouseMove}
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl bg-black rounded-full p-2"
            >
              &times;
            </button>

            {/* Mouse Position Overlay */}
            <div className="absolute top-4 left-4 text-white bg-black bg-opacity-60 px-2 py-1 rounded-md">
              {`X: ${mousePosition.mx}, Y: ${mousePosition.my}`}
            </div>

            {/* Previous and Next Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl sm:text-4xl"
            >
              &#8592; {/* Left arrow for Back */}
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl sm:text-4xl"
            >
              &#8594; {/* Right arrow for Next */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
