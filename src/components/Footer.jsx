import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#004D71] text-white pt-10 pb-6 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* ===== Top Brand Section ===== */}
        <div className="text-center mb-8">
            <h2 className='font-bold text-xl'>Logo</h2>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto leading-relaxed">
            GreenPal is hands-down the easiest way to book a local lawn care
            company for yard maintenance services at an affordable price. If
            you’re looking for same-day lawn mowing or next-day lawn cutting
            services, you’re at the right place.
          </p>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto leading-relaxed mt-3">
            GreenPal is the easiest way to book a lawn mowing service near you
            at the touch of a button without even having to make a phone call.
          </p>
        </div>

        {/* ===== Links Section ===== */}
        <div className="grid sm:grid-cols-3 gap-8 text-sm mt-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-3">GreenPal</h4>
            <ul className="space-y-1 text-gray-200">
              <li>Lawn Care Blog</li>
              <li>Snow Removal Services</li>
              <li>Frequently Asked Questions</li>
              <li>Affordable Lawn Care</li>
              <li>Lawn Care Near Me</li>
              <li>Lawn Mowing Tips</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-3">Providers</h4>
            <ul className="space-y-1 text-gray-200">
              <li>Apply to be a GreenPal</li>
              <li>Business Guides</li>
              <li>Vendor Free Lawn</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect with us</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="hover:text-[#FF6F01]">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-[#FF6F01]">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-[#FF6F01]">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-[#FF6F01]">
                <Instagram size={18} />
              </a>
            </div>
            <h4 className="text-white font-semibold mb-3">
              Get the remote control for your lawn
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-md flex items-center justify-center gap-2 font-semibold text-sm hover:bg-gray-100"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_2022_logo.svg"
                  alt="Play Store"
                  className="h-5"
                />
                Play Store
              </a>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-md flex items-center justify-center gap-2 font-semibold text-sm hover:bg-gray-100"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="App Store"
                  className="h-4"
                />
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* ===== Bottom Line ===== */}
        <div className="border-t border-gray-500 mt-10 pt-4 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} GreenPal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
