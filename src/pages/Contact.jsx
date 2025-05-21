import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <>
    <section id="contact" className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold text-[#9b6a55]">
            {/* <Phone className="inline mr-2" style={{ fontSize: '40px', color: '#07a1d9' }} /> */}
            Contact Us
          </h3>
        </div>

        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full p-4" data-aos="fade-right">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-[#9b6a55] text-2xl font-semibold mb-4">Opening Hours</h4>
              <p><strong>Monday-Saturday:</strong> 10am - 2pm & 5:30pm - 9pm</p>
              <p><strong>Sunday:</strong> 5:30pm - 9pm</p>
              
              <h4 className="text-[#9b6a55] text-2xl font-semibold mt-6 mb-4">Contact Info</h4>
              <p>67, Bholaram Ustad Marg, near Bhawar Kua, opposite Mamta namekeen store, Pipliya Rao, Indore, Madhya Pradesh 452001</p>
              <p className='py-4'>
                <Phone className="inline mr-2 text-[#9b6a55]" />
                <a href="tel:89827 07575" className="text-black ">89827 07575</a>
              </p>
              <p>
                <Phone className="inline mr-2 text-[#9b6a55]" />
                <a href="tel:88394 19269" className="text-black">88394 19269</a>
              </p>
              <p className='py-4'>
                <Mail className="inline mr-2 text-[#9b6a55]" />
                <a href="mailto:dr.gattani.ankita@gmail.com" className="text-black">dr.gattani.ankita@gmail.com</a>
              </p>
              <p>
                <Mail className="inline mr-2 text-[#9b6a55]" />
                <a href="mailto:drsumitrathi04@gmail.com" className="text-black">drsumitrathi04@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full p-4" data-aos="fade-left">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h1 className="text-[#9b6a55] text-3xl font-semibold mb-4">Book Your Appointment</h1>
              <form id="contact_form" name="contact_form" action="includes/sendmail.html" method="post" novalidate="novalidate">
                <div className="flex flex-wrap mb-4">
                  <div className="w-full sm:w-1/2 p-2">
                    <input name="form_name" className="form-control w-full p-3 border border-gray-300 rounded-xl" type="text" placeholder="Enter Full Name" required aria-required="true" />
                  </div>
                  <div className="w-full sm:w-1/2 p-2">
                    <input name="form_email" className="form-control w-full p-3 border border-gray-300  rounded-xl" type="text" placeholder="Enter Number" required aria-required="true" />
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full sm:w-1/2 p-2">
                    <select id="car_select" name="car_select" className="form-control w-full p-3 border border-gray-300 rounded-xl" required aria-required="true">
                      <option value="">- Select Your Services -</option>
                      <option value="General Dentistry">General Dentistry</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Restorative Dentistry">Restorative Dentistry</option>
                      <option value="Orthodontics">Orthodontics</option>
                      <option value="Periodontal Care">Periodontal Care</option>
                      <option value="Oral Surgery">Oral Surgery</option>
                      <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                      <option value="Emergency Dentistry">Emergency Dentistry</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-1/2 p-2">
                    <input name="reservation_date" className="form-control w-full p-3 border border-gray-300 rounded-xl" type="datetime-local" placeholder="Appointment Date" />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea name="form_message" className="form-control w-full p-3 border border-gray-300 rounded-xl" rows="5" placeholder="Enter Message" aria-required="true"></textarea>
                </div>
                <div className="mb-4">
                  <input name="form_botcheck" className="form-control " type="hidden" value="" />
                  <button type="submit" className="appointment-button1 py-3 px-5 mt-4 text-white bg-[#9b6a55] hover:bg-[#ca937b] rounded-xl">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="container mx-auto ">
      <div data-aos="fade-up" data-aos-duration="800">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14724.98432140405!2d75.863937!3d22.6818815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcf21363d2d7%3A0x453662ed1576dc1c!2sShree%20Balaji%20Multispeciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1704175290093!5m2!1sen!2sin"
            width="100%"
            height="350"
            className="border-0 w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shree Balaji Multispeciality Dental Clinic Location"
          ></iframe>
        </div>
      </div>
    </section>
  </>
  );
};

export default Contact;
