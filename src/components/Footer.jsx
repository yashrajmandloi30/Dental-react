import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-white py-10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8">
        
        {/* Logo & Address */}
        <div className="w-full sm:w-[45%] lg:w-[22%]">
          <Link to="/" className="inline-block mb-3">
            <img src="assets/images/LOGO.png" className="h-14 bg-white" alt="DentCare Logo" />
          </Link>
          <p className="text-md text-[#9b6a55]">
            67, Bholaram Ustad Marg,<br />
            near Bhawar Kua, opposite Mamta namekeen store,<br />
            Pipliya Rao, Indore,<br />
            Madhya Pradesh 452001
          </p>
        </div>

        {/* Latest Cases */}
        <div className="w-full sm:w-[45%] lg:w-[22%] text-[#9b6a55]">
          <h2 className="text-xl font-semibold mb-2">Latest Cases</h2>
          <ul className="text-sm space-y-1">
            <li>General Dentistry <br /><span className="text-md">Mar 08, 2015</span></li>
            <li>Cosmetic Dentistry <br /><span className="text-md">Mar 08, 2015</span></li>
            <li>Restorative Dentistry <br /><span className="text-md">Mar 08, 2015</span></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-[45%] lg:w-[22%] text-[#9b6a55]">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="text-md space-y-1">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Our Latest Cases', path: '/latest_case' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Contact', path: '/contact' },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="pl-2 hover:pl-4 transition-all duration-300 ease-in-out hover:text-gray-800 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="w-full sm:w-[45%] lg:w-[22%] text-[#9b6a55]">
          <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
          <ul className="text-md space-y-1">
            <li>
              <strong>Mon - Sat:</strong><br />
              10am - 2pm<br />
              5:30pm - 9pm
            </li>
            <li>
              <strong>Sunday:</strong><br />
              5:30pm - 9pm
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-[#9b6a55] border-t border-white/30 pt-4">
        &copy; 2025 Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
