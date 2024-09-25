import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import logo from "../assets/rizvi-removebg-preview.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800, // Set duration for animation
      easing: "ease-in-out",
      once: true, // Animation should happen only once
    });
  }, []);

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the dropdown menu
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true); // Change color when scrolled
      } else {
        setHasScrolled(false); // Revert color when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${hasScrolled ? "navbar-scrolled" : ""}`}>
      <div className="max-w-container mx-auto flex items-center justify-between">
        <div className="text-[#fff]">
          <img className="w-20" src={logo} alt="Logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button onClick={handleMobileMenuToggle} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Menu for large screens */}
        <div className="hidden lg:flex py-5">
          <ul className="flex font-bold items-center gap-8 text-base text-[#fff] font-nail">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-white hover:text-black"
                onClick={closeMenu}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className="block py-2 px-4 text-white hover:text-black"
                data-aos="fade-up"
                data-aos-delay="700"
                onClick={closeMenu}
              >
                Our Company
              </Link>
            </li>
            <li>
              <Link
                to="/make"
                className="block py-2 px-4 text-white hover:text-black"
                data-aos="fade-up"
                data-aos-delay="900"
                onClick={closeMenu}
              >
                Sustainable
              </Link>
            </li>
            <li>
              <Link
                to="/motive"
                className="block py-2 px-4 text-white hover:text-black"
                data-aos="fade-up"
                data-aos-delay="1100"
                onClick={closeMenu}
              >
                Motive
              </Link>
            </li>
            <li>
              <Link
                to="/sustainable"
                className="block py-2 px-4 text-white hover:text-black"
                data-aos="fade-up"
                data-aos-delay="1000"
                onClick={closeMenu}
              >
                Offering
              </Link>
            </li>
            <li className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="px-10 py-2 bg-blue-500 text-white font-medium hover:text-white hover:bg-black focus:outline-none rounded-md"
              >
                Contact us
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="tel:+8801680169398"
                      className="px-4 py-2 text-sm text-blue-400 hover:bg-gray-100 flex items-center"
                      onClick={closeMenu}
                    >
                      <FontAwesomeIcon icon={faPhone} className="mr-2" />
                      Call Us
                    </a>
                    <a
                      href="mailto:spsrizvi@yahoo.com"
                      className="px-4 py-2 text-sm text-blue-700 hover:bg-gray-100 flex items-center"
                      onClick={closeMenu}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                      Email Us
                    </a>
                    <a
                      href="https://wa.me/+8801680169398"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm text-green-700 hover:bg-gray-100 flex items-center"
                      onClick={closeMenu}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col py-5 absolute top-16 left-0 w-full opacity-85 bg-purple-700">
            <ul className="font-bold text-center items-center gap-8 text-base text-[#fff] font-nail">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-white hover:text-black"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  className="block py-2 px-4 text-white hover:text-black"
                  onClick={closeMenu}
                >
                  Our Company
                </Link>
              </li>
              <li>
                <Link
                  to="/make"
                  className="block py-2 px-4 text-white hover:text-black"
                  onClick={closeMenu}
                >
                  Sustainable
                </Link>
              </li>
              <li>
                <Link
                  to="/motive"
                  className="block py-2 px-4 text-white hover:text-black"
                  onClick={closeMenu}
                >
                  Motive
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainable"
                  className="block py-2 px-4 text-white hover:text-black"
                  onClick={closeMenu}
                >
                  Offering
                </Link>
              </li>
              <li className="relative inline-block">
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left px-10 py-2 bg-blue-500 text-white font-medium hover:text-white hover:bg-black focus:outline-none rounded-md"
                >
                  Contact Us
                </button>

                {isOpen && (
                  <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="tel:+8801680169398"
                        className="block px-4 py-2 text-sm text-blue-400 hover:bg-gray-100 flex items-center"
                        onClick={closeMenu}
                      >
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        Call Us
                      </a>
                      <a
                        href="mailto:spsrizvi@yahoo.com"
                        className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100 flex items-center"
                        onClick={closeMenu}
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email Us
                      </a>
                      <a
                        href="https://wa.me/+8801680169398"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100 flex items-center"
                        onClick={closeMenu}
                      >
                        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
