import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vishal Singh",
    text: "One of the best dental clinics in Indore. Latest equipments and great doctors. There services were exceptional. I got my denture and RCT from them. Overall a splendid experience.",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Uma Singh",
    text: "Dr. Sumit Rathi is my go-to recommendation for any dental requirements. I've undergone both a complex wisdom tooth extraction and a root canal procedure with him, and they were not only efficient but surprisingly painless. Dr. Rathi impresses with his profound knowledge and a reassuring manner of explaining procedures. His office staff is not only friendly but also proficient in scheduling. With nearly 8 years of being his patient, I've experienced consistently exceptional dental care.",
    image: "assets/images/dummy/female dammy.png",
  },
  {
    name: "Deepak Patwary",
    text: "It was really very great experience with both sir and madam.... I have gone through my root canal and was very satisfied with their service..... One of the best dentist in Indore with affordable price and latest equipments..highly recommendable....",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Nancy Simon",
    text: "One of the best doctors. Fully dedicated and professional. I have been known to him from almost 13 years. I had impacted molar and I had all the treatment like extraction and RC with them and I am fully satisfied with their services. I always recommend them to my friends and colleagues. I wish both of them Good luck and best of life.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUw4sfRK9XBLCfS1pm4HDP0uHPQRUYKBYVfw909C3CgkOk=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Pooja Verma",
    text: "I have had the best experience here. Both Dr. Sumit sir and Ankita ma'am are always very sweet, indifferent and sympathetic towards their patients and I remember that even during the time of Covid, they were working with the same honesty and cleanliness as they do today.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXEMDwYJ9b5hccreVrkNwGsUYD55Xlej1pae1OD3z5KfyM=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Bhumika Kanojia",
    text: "The most amazing place for all the dental problems. I had to remove my wisdom teeth. It was a wonderful experience, the doctors are so good and caring, I recommend their services!",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Jagdish Patidar",
    text: "Dr. Sumit Rathi is a true professional with a compassionate approach to dentistry. They took the time to thoroughly explain the procedure I needed and answered all my questions patiently. Their expertise and gentle technique made the entire process surprisingly pleasant.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjU_EYZ7khKG9OHjoZsAg--kBUCCO-hM-ETwST1EaRi9gAQ=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Deepak Arora",
    text: "Very happy with the treatment. It has been nearly 2 years since my treatment and I have not faced any issues. Dr. Sumeet is very cooperative and understanding. Would definitely recommend him.",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Tarandeep Dhillon",
    text: "Excellent dentist I have ever been to! Both doctor's including their staff makes you feel comfortable and are very friendly.",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Charanpreet Singh Khanuja",
    text: "Both the doctors of the clinic provide excellent service and they also maintain proper hygiene in the clinic. All the staff of the clinic is too much supportive. All the instruments are properly sanitized and both chairs are also in very good condition.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVYIPX7QSlJ8EWn39p-uKvgYOvkZimLchfx1GKjl9ywQPHF=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Savi Pawar",
    text: "Thnq dear sir & ma'am, apne mujhe bhout ache se tirth Kiya. Mere teeth ab phale se jyada kafi beautiful lagne laga hai. Phale meri teeth ki wajah se meri smile achhi nahi ati thi pr jap apne treatment kiya tab se meri smile achi aane lag gai hai. Mere friends ne bhi bhout tarif ki aur bhar walo ne bhi.",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Amit Prasad",
    text: "Best dental treatment facility available in Indore. Doctor is patiently dealt with patient and adequately time given for treatment. Doctor is very nice. I am very happy with my treatment.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVFnDa0j_AVFe5ns8423KaX3SqYyrd1jcfoLes7EknemD8=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Pankaj Joshi",
    text: "The treatment is very good, you understand the patient's problem very well and treat it, due to which the patient gets complete relief. Thank you sir and madam.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVDz6pe2roCkAvYcM459l4CAGwHLNfbcXSSVw4c6PvmWA=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Rohit Mamta",
    text: "Very NYC treatment ... Highly satisfied with my orthodontic treatment and root canal treatment... Will recommend everyone for root canal as they have new technique like laser ... And staff is very friendly.",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Rahul Paliya",
    text: "Very nice. Ankita ma'am and Sumit sir both are very nice and treat in a proper way and assist and guide when needed. Whenever I have any teeth issue I always go to sir and ma'am. Very very nice clinic.",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Robby Verma",
    text: "Friendly, kind, punctual and caring professionals who give you appropriate advice and high quality treatment. Staff well behaved. Well maintained hygiene. Overall highly recommended.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWDCZBuPEWxR4whe0MViHTnhYS2HtV1n3mC5oUXqEKkpeCs=w75-h75-p-rp-mo-ba3-br100",
  },
  {
    name: "Narendra Singh",
    text: "Neat and clean hospital. Equipped with latest instruments. Using sterilized instruments. Hygienic and hi-tech. Doctors and staff behaviors are cordial and polite. Very good followup with patients.",
    image: "assets/images/dummy/male dammy.png",
  },
  {
    name: "Amar Madan",
    text: "Fantastic experience and utmost care done by Dr. Sumit Rathi and Dr. Ankita and support staff..Feel much relieved after treatment....",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXhxMZaGsb46PE2Vuc3UIsmCtBQPLsflezC3_uNmMieYZI=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Dr. Sunita Patel Hardia",
    text: "Best dental clinic in Indore. Dr. Sumeet Rathi's behavior is very friendly and his treatment is very effective. I recommend this dental clinic.",
    image: "assets/images/dummy/male dammy.png",
  },
];



const Testimonial = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-white bg-[#9b6a55] text-3xl py-2 px-2 rounded-xl font-bold inline-block mx-auto">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // staggered animation
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#9b6a55]"
                />
              </div>
              <Quote className="text-[#9b6a55] w-6 h-6 mx-auto mb-3" />
              <p className="text-gray-700 italic mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>
              <hr className="w-1/4 mx-auto border-[#9b6a55] mb-2" />
              <h4 className="text-lg font-semibold text-[#9b6a55]">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
