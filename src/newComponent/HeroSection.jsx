import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-blue-50 font-sans">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 px-8 items-center gap-10   min-h-[80vh]">
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9b6a55]">
            Caring for Every Smile, Anytime.
          </h1>
          <p className="text-gray-600 max-w-md">
            We provide expert dental care around the clock — from routine
            checkups to urgent treatments. Your comfort and oral health are
            always our top priorities.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition transform hover:scale-105 shadow-md">
                            Request Appointment
                        </button> */}
            <div className="flex items-center">
              <span className="mr-2 text-[#9b6a55] font-medium"> CALL:</span>
              <a
                href="tel:+918982707575"
                className="text-[#9b6a55] font-semibold hover:text-[#ca957e] transition-colors"
              >
                8982707575
              </a>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[450px] xl:h-[500px]">
          <img
            src="/assets/images/latest-image/dr.both.png"
            alt="Dental professional in clinic"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
