import React, { useState, useEffect } from "react";
import "./footer.css";
import "./footer.css";
import logo from "../assets/rizvi-removebg-preview.png";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="bg-[#f2ecec]">
      <div className="max-w-container mx-auto flex item-center justify-between">
        <div className="">
          <img className="w-[170px]" src={logo} alt="" />
        </div>
        <div className="">
          <div className="fixed bottom-5 txt-center">
            {isVisible && (
              <button
                onClick={scrollToTop}
                className="text-[30px] rounded-2xl text-black py-2 px-4 full shadow-md  transition duration-300"
              >
                ↑
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto pt-14 p-10">
        <div className="flex flex-wrap items-start justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 font-gails mb-6">
            <h2 className="text-[30px] font-gails">About Us</h2>
            <ul>
              <li className="pt-7">
                <Link
                  to="/"
                  className="hover:text-red-700 pt-5 duration-500 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/company"
                  className="hover:text-red-700 duration-500 ease-in-out"
                >
                  Our Company
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="tel:+8801680169398"
                  className="hover:text-red-400 duration-500 ease-in-out"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 font-gails mb-6">
            <h2 className="text-[30px] font-gails">Sustainability</h2>
            <ul>
              <li className="pt-7">
                <a
                  href="#"
                  className="hover:text-red-700 duration-500 ease-in-out"
                >
                  Latest stories
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#"
                  className="hover:text-red-700 duration-500 ease-in-out"
                >
                  Australia Slavery Act
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 font-gails mb-6">
            <h2 className="text-[30px] font-gails">Stay informed</h2>
            <ul>
              <li className="pt-2">
                <a
                  href="#"
                  className="hover:text-red-700 duration-500 ease-in-out"
                >
                  Publications
                </a>
              </li>

              <li className="pt-2">
                <a
                  href="#"
                  className="hover:text-red-700 duration-500 ease-in-out"
                >
                  Glossary
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#"
                  className="hover:text-red-700 duration-500 ease-in-out"
                >
                  Story To
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto">
        <h2 className="font-pops text-[20px] font-semibold">
          @2024 Reserved By Aminul Haque
        </h2>
      </div>
    </div>
  );
};

export default Footer;
