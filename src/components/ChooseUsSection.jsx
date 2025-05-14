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
          WHY YOU SHOULD <span className="text-[#7a4f2c]">CHOOSE US ?</span>
        </h2>
        <p className="mt-2 text-gray-700">
          YOUR SMILE IS OUR PRIORITY. WE ARE YOUR TRUSTED DENTAL EXPERTS.
        </p>
        <div className="mt-4 flex justify-center">
          <img
            src="assets/images/title-icon.png"
            alt="Title Icon"
            loading="lazy"
            className="h-6"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {reasons.map((reason, index) => (
          <p
            key={reason.id}
            className="text-gray-800 leading-relaxed text-[16px]"
            data-aos="fade-up"
            data-aos-duration={index < 3 ? 1000 : 800}
          >
            <b>{reason.id}.</b> {reason.text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ChooseUsSection;
