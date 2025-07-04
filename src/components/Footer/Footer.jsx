import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/image/logo-dark.png";
import googlePlay from "../../assets/image/android.png";
import apple from "../../assets/image/apple.png";
import payment from "../../assets/image/payment.png";

const Footer = () => {
  return (
    <footer className="bg-[#181E28] text-gray-400 rounded-3xl px-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 w-full ">
              <img src={logo} alt="logoIcon" className="w-[150px]" />
            </div>

            <p className="mt-4 text-[14px] leading-relaxed">
              The Mantu is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>

            <div className="space-y-3 mt-6">
              <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="w-40 rounded-xl"
              />
              <img
                src={apple}
                alt="Download on the App Store"
                className="w-40 rounded-xl"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-100 border-b border-gray-700 pb-2 Quicksand ">
              Category
            </h4>
            <ul className="space-y-3 mt-4 text-[14px]">
              {[
                "Fashion",
                "Cosmetics",
                "Bags & Purse",
                "Shoes",
                "Belts",
                "Perfumes",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#ffd783] duration-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-100 border-b border-gray-700 pb-2 Quicksand ">
              Company
            </h4>
            <ul className="space-y-3 mt-4 text-[14px]">
              {[
                "About us",
                "Delivery",
                "Legal Notice",
                "Terms of use",
                "Secure payment",
                "Contact us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#ffd783] duration-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-100 border-b border-gray-700 pb-2 Quicksand ">
              Account
            </h4>
            <ul className="space-y-3 mt-4 text-[14px]">
              {[
                "Sign In",
                "View Cart",
                "Return Policy",
                "Become a Vendor",
                "Affiliate Program",
                "Payments",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#ffd783] duration-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-100 border-b border-gray-700 pb-2 Quicksand px-">
              Contact
            </h4>
            <ul className="space-y-4 mt-4 text-[14px] ">
              <li className="flex items-start gap-3">
                <i class="fa-solid fa-location-dot text-[#ffd783]"></i>
                <span>
                  123 El Tahrir Street, Dokki District, Giza Governorate, Cairo,
                  Egypt
                
                
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-[#ffd783]"></i>
                <a
                  href="https://wa.me/201275962106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffd783] duration-300 transition-colors"
                >
                  +201275962106
                </a>
              </li>

              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-[#ffd783]"></i>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=yasser.elshiwy@email.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffd783] duration-300 transition-colors"
                >
                  yasser.elshiwy@email.com
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 rounded bg-gray-700 hover:bg-[#ffd783] hover:text-black text-white transition-colors"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm  text-center md:text-left">
            All rights reserved © 2025{" "}
            <span className="text-[#ffd783] font-bold">Yasser Elshiwy</span> —
            Front End Developer
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <img src={payment} alt="" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
