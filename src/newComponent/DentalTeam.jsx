import React from "react";

const DentalTeam = () => {
  const doctors = [
    {
      name: "Dr. Sumit G. Rathi",
      degree: "B.D.S. (Nagpur)",
      specialization: "Dental & Oral Surgeon",
      reg: "A-16596",
      experience: "15+ yrs.",
      image: "assets/images/gallery/new/IMG_6262.jpg",
      details:
        "Expertise in Painless Single Sitting Root Canal, Implants, Dentures, Early Cancer Detection, Orthodontic Aligners.",
    },
    {
      name: "Dr. Ankita S. Rathi",
      degree: "B.D.S. (Jodhpur)",
      specialization: "Aesthetic & Cosmetic Consultant",
      reg: "A-09662",
      experience: "11+ yrs.",
      image: "assets/images/gallery/new/IMG_6264.jpg",
      details:
        "Expertise in Smile Designing, Veneers, Kids Dentistry, Tooth Whitening, Laser & Micro Dentistry.",
    },
  ];

  return (
    <section className="bg-[#f9f6f4] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#9b6a55] text-lg font-semibold mb-2 uppercase tracking-widest">
          Our Team
        </h2>
        <h1 className="text-[#1f1f1f] text-4xl md:text-5xl font-bold mb-6">
          The Dental Professionals
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
          Meet our highly qualified dental experts, dedicated to providing
          exceptional care and creating confident smiles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl border border-[#e6e0dd] hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#9b6a55]/30 mb-6 shadow-md">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1f1f1f] mb-1">
                  {doc.name}
                </h3>
                <p className="text-[#9b6a55] text-sm font-medium">
                  {doc.degree}
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  {doc.specialization}
                </p>
                <p className="text-gray-500 text-sm">Reg No: {doc.reg}</p>
                <p className="text-gray-500 text-sm mb-3">
                  Experience: {doc.experience}
                </p>
                <p className="text-gray-600 text-sm italic mb-6 px-2">
                  {doc.details}
                </p>
                {/* <button className="bg-[#9b6a55] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#835a45] transition duration-200">
                  Book Appointment
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentalTeam;
