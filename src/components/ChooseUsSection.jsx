import React from 'react';

const ChooseUsSection = () => {
  const reasons = [
    {
      id: 1,
      text: `We understand that every patient is unique, which is why we tailor our treatments to meet your specific needs and preferences, ensuring a comfortable and effective dental experience.`,
    },
    {
      id: 2,
      text: `Patient comfort, safety, and satisfaction are our top priorities. We take the time to listen to your concerns, educate you about your treatment options, and empower you to make informed decisions about your dental health.`,
    },
    {
      id: 3,
      text: `We at Shri Balaji Multispecialty Dental Clinic use top notch dental technology like Lasers, Endomotor, B Class autoclave to provide you with advanced treatments, precise diagnostics, and efficient procedures for optimal results and minimal discomfort.`,
    },
    {
      id: 4,
      text: `We strive to create a warm, welcoming environment where you can feel relaxed and at ease during your visits. Our compassionate team is here to support you every step of the way on your journey to a healthier, happier smile.`,
    },
    {
      id: 5,
      text: `We believe that everyone deserves access to high-quality dental care, which is why we offer competitive pricing, flexible payment options to help you maximize your benefits and minimize out-of-pocket expenses.`,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">
          WHY YOU SHOULD <span className="text-[#9b6a55]">CHOOSE US ?</span>
        </h2>
        <p className="mt-2 text-gray-700">
          YOUR SMILE IS OUR PRIORITY. WE ARE YOUR TRUSTED DENTAL EXPERTS.
        </p>
        <div className="mt-4 flex justify-center">
          {/* <img
            src="assets/images/title-icon.png"
            alt="Title Icon"
            loading="lazy"
            className="h-6"
          /> */}
        </div>
      </div>

      {/* Cards layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <div
            key={reason.id}
            className="bg-white border-4 hover:border-[#9b6a55] shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-duration={index < 3 ? 1000 : 800}
          >
            <h3 className="text-xl font-semibold text-[#9b6a55] mb-2">
              {reason.id}.
            </h3>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUsSection;
