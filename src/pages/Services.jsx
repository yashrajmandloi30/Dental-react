// src/components/Services.jsx
import React from "react";


const services = [
  {
    title: "General Dentistry",
    image: "assets/images/service-icons/Depositphotos_96346704_XL-1140x760.jpg",
    points: [
      "Complete Oral Checkup.",
      "Digital X-rays ( RVG ).",
      "Routine Teeth Cleanings.",
      "Oral Cancer Screenings.",
    ],
    animation: "fade-right",
  },
  {
    title: "Cosmetic Dentistry",
    image: "assets/images/service-icons/restorative1.png",
    points: [
      "Diastema Closure (Gap Closure).",
      "Smile Makeovers (Desigining).",
      "Porcelain Crowns and Veneers",
      "Teeth Whitening (BY LASER)",
    ],
    animation: "fade-up",
  },
  {
    title: "Restorative Dentistry",
    image: "assets/images/service-icons/compositebonding.jpg",
    points: [
      "Tooth-Colored Fillings",
      "Dental Crowns and Bridges.",
      "Dental Implants.",
      "Full and Partial Dentures.",
    ],
    animation: "fade-left",
  },
  {
    title: "Orthodontics",
    image: "assets/images/service-icons/Orthodontics-1024x474.jpeg",
    points: [
      "Invisalign®️ Clear Aligners.",
      "Ceramic Braces",
      "Traditional Braces",
      "Retainers and Orthodontic Assessments",
    ],
    animation: "fade-right",
  },
  {
    title: "Periodontal Care",
    image:
      "assets/images/service-icons/IMG-what-is-periodontal-disease-GettyImages-1034497836.jpg",
    points: [
      "Scaling and Root Planing.",
      "Gum Disease Treatment.",
      "Soft Tissue Grafts.",
      "Full Mouth Flap Surgery",
    ],
    animation: "fade-up",
  },
  {
    title: "Oral Surgery",
    image: "assets/images/service-icons/12_depalma_thumb1-780x450.jpg",
    points: [
      "Wisdom Teeth Extraction.",
      "Dental Implant Surgery.",
      "Jaw Surgery.",
    ],
    animation: "fade-left",
  },
  {
    title: "Pediatric Dentistry",
    image:
      "assets/images/service-icons/Feature-Image-4-Pediatric-scaled-q8n8po1kekhj2su1z8kogd9d0rmedgdoxhkv07f3wo.jpeg",
    points: [
      "Child-Friendly Check-ups.",
      "Sealants and Fluoride Treatments.",
      "Early Orthodontic Evaluations.",
    ],
    animation: "fade-up",
  },
  {
    title: "Emergency Dentistry",
    image: "assets/images/service-icons/download.jpg",
    points: [
      "Prompt Emergency Appointments.",
      "Treatment for Dental Trauma.",
      "Toothache Relief.",
    ],
    animation: "fade-up",
  },
];

const Services = () => {
 

  return (
    <section className="py-12" data-aos="fade-up" data-aos-duration="1600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Our Service <span className="text-[#9b6a55]">Keeps you Smile</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Discover the complete range of dental services offered at{" "}
            <strong>Shri Balaji Multispeciality Dental Clinic</strong>. Our
            dedicated team is committed to delivering high-quality care tailored
            to your individual needs.
          </p>
        </div>

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

        <div
          className="text-center text-[#9b6a55] mt-10"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <p className="text-md">
            <i className="fa-solid fa-square-caret-right"></i> &nbsp; We pride
            ourselves on utilizing the latest technology and techniques to
            ensure a comfortable and effective dental experience. Your journey
            to optimal oral health begins here at{" "}
            <strong>Shri Balaji Multispeciality Dental Clinic</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
