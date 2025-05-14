import React from 'react';

const ExpertiseDentalServices = () => {
  return (
    <section
      style={{ backgroundImage: 'url(assets/images/pattern/p4.png)' }}
      data-aos="fade-up"
      data-aos-duration="1200"
      className="py-12 bg-cover bg-center"
    >
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-duration="1500">
        <div className="section-title text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#07a1d9] uppercase mb-4">
            Our Expertise Dental Services
          </h2>
          <div className="title-icon mb-4">
            <img className="mx-auto" src="assets/images/title-icon.png" alt="Icon" loading="lazy" />
          </div>
          <p className="text-lg text-gray-700">
            Discover the complete range of dental services offered at{' '}
            <strong className="font-bold text-black">Shri Balaji Multispeciality Dental Clinic</strong>. Our
            dedicated team is committed to delivering high-quality care tailored to your individual needs.
          </p>
        </div>

        <div className="services-tab bg-white border-10px p-6 rounded-lg shadow-lg">
          <ul className="nav flex justify-center space-x-2 mb-6">
            <li>
              <a
                href="#tab11"
                data-toggle="tab"
                className="text-center block p-4 hover:bg-[#07a1d9] hover:text-white rounded-lg transition duration-300"
              >
                <img
                  className="service-images rounded-full w-32 h-32 object-cover mx-auto"
                  src="assets/images/service-icons/Depositphotos_96346704_XL-1140x760.jpg"
                  alt="General Dentistry"
                />
                <span className="block mt-2 font-bold">General Dentistry</span>
              </a>
            </li>
            <li>
              <a
                href="#tab12"
                data-toggle="tab"
                className="text-center block p-4 hover:bg-[#07a1d9] hover:text-white rounded-lg transition duration-300"
              >
                <img
                  className="service-images rounded-full w-32 h-32 object-cover mx-auto"
                  src="assets/images/service-icons/restorative1.png"
                  alt="Cosmetic Dentistry"
                />
                <span className="block mt-2 font-bold">Cosmetic Dentistry</span>
              </a>
            </li>
            <li>
              <a
                href="#tab13"
                data-toggle="tab"
                className="text-center block p-4 hover:bg-[#07a1d9] hover:text-white rounded-lg transition duration-300"
              >
                <img
                  className="service-images rounded-full w-32 h-32 object-cover mx-auto"
                  src="assets/images/service-icons/compositebonding.jpg"
                  alt="Restorative Dentistry"
                />
                <span className="block mt-2 font-bold">Restorative Dentistry</span>
              </a>
            </li>
            <li>
              <a
                href="#tab14"
                data-toggle="tab"
                className="text-center block p-4 hover:bg-[#07a1d9] hover:text-white rounded-lg transition duration-300"
              >
                <img
                  className="service-images rounded-full w-32 h-32 object-cover mx-auto"
                  src="assets/images/service-icons/Orthodontics-1024x474.jpeg"
                  alt="Orthodontics"
                />
                <span className="block mt-2 font-bold">Orthodontics</span>
              </a>
            </li>
            <li>
              <a
                href="#tab15"
                data-toggle="tab"
                className="text-center block p-4 hover:bg-[#07a1d9] hover:text-white rounded-lg transition duration-300"
              >
                <img
                  className="service-images rounded-full w-32 h-32 object-cover mx-auto"
                  src="assets/images/service-icons/IMG-what-is-periodontal-disease-GettyImages-1034497836.jpg"
                  alt="Periodontal Care"
                />
                <span className="block mt-2 font-bold">Periodontal Care</span>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            {/* Content for each tab goes here */}
            <div className="tab-pane fade in active" id="tab11">
  <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-8">
    {/* Text Content Section */}
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-bold text-primary-color mb-6">General Dentistry</h2>
      <p className="text-lg text-gray-700 mb-6">
        At Shri Balaji Multispeciality Dental Clinic, we provide a full range of general dentistry services to ensure your oral health is well-maintained.
      </p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Complete Oral Checkup</li>
        <li>Digital X-rays (Satellite RVG)</li>
        <li>Routine Teeth Cleanings</li>
        <li>Oral Cancer Screenings</li>
      </ul>
    </div>
    
    {/* Image Section */}
    <div className="md:w-1/2">
      <img className="w-full h-auto rounded-lg shadow-lg" src="assets/images/gallery/new/IMG_6228.jpg" alt="General Dentistry" loading="lazy" />
    </div>
  </div>
</div>

            {/* Add other tabs' content here in similar layout */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseDentalServices;
