import React from "react";
import { Stethoscope, ShieldCheck, PhoneCall } from "lucide-react";

const PracticeSection = () => {
  return (
    <section id="practice" className="bg-blue-50 w-full p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
        {/* Left content */}
        <div className="md:col-span-6 flex flex-col  pr-4">
          <p className="text-[#9b6a55] font-medium mb-2">Our Practice</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#9b6a55] mb-4">
            We provide top quality healthcare.
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            We are committed to delivering exceptional healthcare services with
            compassion and precision. Our expert team ensures personalized care
            that prioritizes your well-being and recovery.
          </p>

          {/* Feature 1 */}
          <div className="flex items-center mt-6 mb-3">
            <div className="bg-[#9b6a55] p-3 rounded-full mr-4 transform hover:scale-110 transition-transform duration-300">
              <Stethoscope className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[#9b6a55] font-bold">
                Highly Professional Staff
              </h3>
              <p className="text-gray-500 text-sm">
                Our highly professional staff is dedicated, experienced, and
                committed to providing exceptional care with compassion and
                expertise.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center">
            <div className="bg-[#9b6a55] p-3 rounded-full mr-4 transform hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[#9b6a55] font-bold">
                Quality Control Systems
              </h3>
              <p className="text-gray-500 text-sm">
                We use advanced Quality Control Systems to ensure safe,
                accurate, and consistent healthcare services.
              </p>
            </div>
          </div>
        </div>

        {/* Right image and emergency box */}
        <div className="md:col-span-6 mt-8 md:mt-0 relative">
          <div className="rounded-3xl overflow-hidden relative h-[350px] md:h-[400px] w-full">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Modern dental office with equipment"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition-colors duration-300">
              <div className="bg-cyan-500 p-2 rounded-full mr-3">
                <PhoneCall className="text-white w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-medium">24/7 Dental Emergency</p>
                <p className="font-bold">1-213-456-7899</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
