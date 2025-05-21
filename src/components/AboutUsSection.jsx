import React, {  useState } from 'react';
import { Facebook, Twitter, Mail } from 'lucide-react';


const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');

 

  const tabs = [
    {
      id: 'tab1',
      title: 'What we do',
      content: (
        <p>
          Step into the world of{' '}
          <span className="text-[#9b6a55] font-semibold">Shri Balaji Multispeciality Dental Clinic</span>, where your smile is our priority. We combine
          advanced technology with patient-centered care to ensure that every visit is a comfortable and satisfying experience.
        </p>
      ),
    },
    {
      id: 'tab2',
      title: 'Our mission',
      content: (
        <p>
          At{' '}
          <span className="text-[#9b6a55] font-semibold">Shri Balaji Dental Clinic</span>, we go beyond clinical expertise with compassion and innovation. Our
          mission is to improve lives one smile at a time by providing personalized dental care in a safe and welcoming environment.
        </p>
      ),
    },
    {
      id: 'tab3',
      title: 'Our goal',
      content: (
        <p>
          Every smile is unique. We treat dentistry as an art, with precision and a personalized touch. Our goal is to build trust, comfort, and long-lasting
          relationships while creating healthier, happier smiles.
        </p>
      ),
    },
  ];

  const doctors = [
    {
      name: 'Dr. Sumit G. Rathi',
      degree: 'B.D.S. (Nagpur)',
      specialization: 'Dental & Oral Surgeon',
      reg: 'A-16596',
      experience: '15+ yrs.',
      image: 'assets/images/gallery/new/IMG_6262.jpg',
      details:
        'Expertise in Painless Single Sitting Root Canal, Implants, Dentures, Early Cancer Detection, Orthodontic Aligners.',
    },
    {
      name: 'Dr. Ankita S. Rathi',
      degree: 'B.D.S. (Jodhpur)',
      specialization: 'Aesthetic & Cosmetic Consultant',
      reg: 'A-09662',
      experience: '11+ yrs.',
      image: 'assets/images/gallery/new/IMG_6264.jpg',
      details:
        'Expertise in Smile Designing, Veneers, Kids Dentistry, Tooth Whitening, Laser & Micro Dentistry.',
    },
  ];

  return (
    <div>
      {/* Doctor Section */}
      <section className="bg-[#f6f4f1] py-16 px-6">
        <div className="container mx-auto">
          <h2
            className="text-3xl text-center uppercase font-bold mb-6"
            data-aos="fade-up"
          >
            Meet Our <span className="text-[#7a4f2c]">Experienced Dentists</span>
          </h2>
          <div
            className="w-16 h-1 bg-[#9b6a55] mx-auto mb-12"
            data-aos="zoom-in"
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="bg-white rounded-xl shadow-xl overflow-hidden transition transform hover:scale-90 duration-300"
                data-aos="fade-up"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="object-cover h-full w-full md:h-72"
                    />
                  </div>
                  <div className="p-4 md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#9b6a55] mb-1">
                        {doc.name}
                      </h3>
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        {doc.degree}
                      </p>
                      <p className="text-sm text-gray-500">{doc.specialization}</p>
                      <p className="text-sm text-gray-500 mb-2">Reg. No.: {doc.reg}</p>
                      <p className="text-sm text-gray-600 font-medium">
                        Experience: {doc.experience}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">{doc.details}</p>

                    <div className="flex space-x-4 mt-4 text-[#9b6a55] text-lg">
                      <a href="#" aria-label="Facebook">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="#" aria-label="Twitter">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" aria-label="Email">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <div className="container mx-auto py-12 px-6" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-7/12">
            <h1 className="text-3xl lg:text-4xl font-bold mt-2">
              The World's Best Dental Clinic That You Can Trust
            </h1>
            <p className="mt-4 text-gray-700">
              Step into the world of Shri Balaji Multispeciality Dental Clinic, where your smile is our priority. We blend advanced technology with
              patient-centered care for a comfortable and satisfying dental experience.
            </p>
          </div>
          <div className="lg:w-5/12" data-aos="zoom-in">
            <img
              className="rounded-lg object-cover w-full h-full max-h-[400px]"
              src="assets/images/gallery/new/IMG_6267.jpg"
              alt="Clinic"
            />
          </div>
        </div>
      </div>
       

      {/* Tab Section */}
      <div className="container mx-auto px-6 mb-10 flex flex-col lg:flex-row gap-8" data-aos="fade-right">
        <div className="lg:w-5/12">
          <img
            src="assets/images/gallery/new/IMG_6272.jpg"
            alt="Info"
            className="w-full h-[350px] object-cover"
          />
        </div>
        <div className="lg:w-7/12 bg-white shadow-lg p-6 rounded">
          <ul className="flex space-x-6 border-b mb-4 text-sm font-semibold text-[#9b6a55]">
            {tabs.map(tab => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 border-b-2 transition duration-200 ${
                    activeTab === tab.id ? 'border-[#9b6a55]' : 'border-transparent'
                  }`}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="text-gray-700 transition-opacity duration-500">
            {tabs.find(tab => tab.id === activeTab).content}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AboutUsSection;
