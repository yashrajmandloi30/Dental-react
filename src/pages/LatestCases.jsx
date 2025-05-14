import React from "react";


const casesData = [
  {
    title: "Fracture Filling",
    cases: [
      {
        image: "assets/images/gallery/latest cases/Before (1)/9.png",
        date: "Jun 28, 2023",
        doctor: "Dr. Sumit G. Rathi",
        role: "Senior Ex-Consultant",
      },
      {
        image: "assets/images/gallery/latest cases/Before (1)/10.png",
        date: "Dec 22, 2023",
        doctor: "Dr. Ankita S. Rathi",
        role: "Ex-Consultant Max Hospital",
      },
    ],
  },
  {
    title: "Full Mouth Rehabilitation",
    cases: [
      {
        image: "assets/images/gallery/Dr. Ankita S. Rathi/4.png",
        date: "Dec 22, 2023",
        doctor: "Dr. Ankita S. Rathi",
        role: "Ex-Consultant Max Hospital",
      },
      {
        image: "assets/images/gallery/Dr. Ankita S. Rathi/5.png",
        date: "May 16, 2019",
        doctor: "Dr. Sumit G. Rathi",
        role: "Senior Ex-Consultant",
      },
    ],
  },
  {
    title: "Ortho Braces",
    cases: [
      {
        image: "assets/images/gallery/Dr. Ankita S. Rathi/2.png",
        date: "Dec 22, 2023",
        doctor: "Dr. Sumit G. Rathi",
        role: "Senior Ex-Consultant",
      },
      {
        image: "assets/images/gallery/Dr. Ankita S. Rathi/3.png",
        date: "Aug 22, 2023",
        doctor: "Dr. Ankita S. Rathi",
        role: "Ex-Consultant Max Hospital",
      },
      {
        image: "assets/images/gallery/Dr. Ankita S. Rathi/9.png",
        date: "Aug 22, 2023",
        doctor: "Dr. Ankita S. Rathi",
        role: "Ex-Consultant Max Hospital",
      },
      {
        image: "assets/images/gallery/Dr. Ankita S. Rathi/6.png",
        date: "Dec 28, 2021",
        doctor: "Dr. Sumit G. Rathi",
        role: "Senior Ex-Consultant",
      },
    ],
  },
];

const LatestCases = () => {

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-[#07a1d9]">Latest Cases</h1>
        </div>
        {casesData.map((category, index) => (
          <div key={index} className="mb-16">
            <h3
              className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 pl-3 border-[#07a1d9]"
              data-aos="fade-right"
            >
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.cases.map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={i * 100} // optional: stagger animation
                >
                  <img
                    src={item.image}
                    alt={item.doctor}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <div className="flex items-center mt-4">
                      <div>
                        <h5 className="text-md font-bold text-gray-700">
                          {item.doctor}
                        </h5>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestCases;
