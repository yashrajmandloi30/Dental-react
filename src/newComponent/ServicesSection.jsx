
import React from "react";

const services = [
  {
    title: "General Dentistry",
    image: "/assets/images/service-icons/Depositphotos_96346704_XL-1140x760.jpg",
    points: [
      "Complete Oral Checkup",
      "Digital X-rays (RVG)",
      "Routine Teeth Cleanings",
      "Oral Cancer Screenings",
    ],
    animation: "fade-right",
  },
  {
    title: "Cosmetic Dentistry",
    image: "/assets/images/service-icons/restorative1.png",
    points: [
      "Diastema Closure",
      "Smile Makeovers",
      "Porcelain Crowns and Veneers",
      "Teeth Whitening (BY LASER)",
    ],
    animation: "fade-up",
  },
  {
    title: "Restorative Dentistry",
    image: "/assets/images/service-icons/compositebonding.jpg",
    points: [
      "Tooth-Colored Fillings",
      "Crowns & Bridges",
      "Implants",
      "Dentures",
    ],
    animation: "fade-left",
  },
  {
    title: "Orthodontics",
    image: "/assets/images/service-icons/Orthodontics-1024x474.jpeg",
    points: [
      "Invisalign® Clear Aligners",
      "Ceramic Braces",
      "Traditional Braces",
      "Retainers",
    ],
    animation: "fade-right",
  },
  {
    title: "Periodontal Care",
    image: "/assets/images/service-icons/IMG-what-is-periodontal-disease-GettyImages-1034497836.jpg",
    points: [
      "Scaling & Root Planing",
      "Gum Treatment",
      "Soft Tissue Grafts",
      "Flap Surgery",
    ],
    animation: "fade-up",
  },
  {
    title: "Oral Surgery",
    image: "/assets/images/service-icons/12_depalma_thumb1-780x450.jpg",
    points: [
      "Wisdom Teeth Extraction",
      "Implant Surgery",
      "Jaw Surgery",
    ],
    animation: "fade-left",
  },
  {
    title: "Pediatric Dentistry",
    image: "/assets/images/service-icons/Feature-Image-4-Pediatric-scaled-q8n8po1kekhj2su1z8kogd9d0rmedgdoxhkv07f3wo.jpeg",
    points: [
      "Child Check-ups",
      "Sealants & Fluoride",
      "Early Evaluations",
    ],
    animation: "fade-up",
  },
  {
    title: "Emergency Dentistry",
    image: "/assets/images/service-icons/download.jpg",
    points: [
      "Emergency Appointments",
      "Dental Trauma Care",
      "Toothache Relief",
    ],
    animation: "fade-up",
  },
];

const ServicesSection = () => {
  
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#9b6a55]text-lg font-medium mb-2">What We Do</h3>
          <h2 className="text-[#9b6a55] text-4xl md:text-5xl font-bold mb-4">
            Providing dental care for families
          </h2>
          <p className="text-[#9b6a55] text-xl md:text-2xl">in our community</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.animation}
              className="bg-white border-2 rounded-xl hover:border-[#9b6a55] p-4 shadow-md relative"
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded"
                  loading="lazy"
                />
              </div>
              <h5 className="font-semibold text-lg mb-2">{service.title}</h5>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
