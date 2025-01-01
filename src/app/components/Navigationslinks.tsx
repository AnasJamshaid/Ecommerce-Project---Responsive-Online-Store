"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

const NavigationLinks = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State for dropdown
  const [activeLink, setActiveLink] = useState("home"); // Active link state
  const dropdownRef = useRef(null); // Reference for dropdown menu

  // Toggle the "About" dropdown menu
  const toggleAboutDropdown = () => {
    setIsAboutOpen((prevState) => !prevState);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Set active link on click
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <ul className="flex space-x-7 relative">
      {/* Home */}
      <li className="relative" onClick={() => handleLinkClick("home")}>
        <Link
          href="/"
          className={`font-inter text-white hover:text-[#FF9F0D] ${activeLink === "home" ? "text-[#FF9F0D]" : ""}`}
        >
          Home
        </Link>
        {/* Circle effect only on Home */}
        <div className={`absolute bottom-[-13px] left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 rounded-full ${activeLink === "home" ? "bg-[#FF9F0D]" : "bg-transparent"}`}></div>
      </li>

      {/* Menu */}
      <li className="relative" onClick={() => handleLinkClick("menu")}>
        <Link
          href="/menu"
          className={`font-inter text-white hover:text-[#FF9F0D] ${activeLink === "menu" ? "text-[#FF9F0D]" : ""}`}
        >
          Menu
        </Link>
      </li>

      {/* Blog */}
      <li className="relative" onClick={() => handleLinkClick("blog")}>
        <Link
          href="/blog"
          className={`font-inter text-white hover:text-[#FF9F0D] ${activeLink === "blog" ? "text-[#FF9F0D]" : ""}`}
        >
          Blog
        </Link>
      </li>

      {/* Pages */}
      <li className="relative" onClick={() => handleLinkClick("pages")}>
        <Link
          href="/pages"
          className={`font-inter text-white hover:text-[#FF9F0D] ${activeLink === "pages" ? "text-[#FF9F0D]" : ""}`}
        >
          Pages
        </Link>
      </li>

      {/* About Dropdown */}
      <li className="relative">
        <Link
          href="/about"
          className={`font-inter text-white hover:text-[#FF9F0D] ${activeLink === "about" ? "text-[#FF9F0D]" : ""}`}
          onClick={() => handleLinkClick("about")}
        >
          About
        </Link>
        <div
          className="flex items-center cursor-pointer hover:text-[#FF9F0D]"
          onClick={toggleAboutDropdown}
        >
          <HiChevronDown
            className={`ml-12 -mt-5 transition-transform text-white ${isAboutOpen ? "rotate-180" : ""}`}
          />
        </div>
        {isAboutOpen && (
          <ul
            ref={dropdownRef}
            className="absolute left-0 mt-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white/30 shadow-lg rounded-xl text-white w-48"
          >
            <li>
              <Link
                href="/about/ourstory"
                className="font-inter block hover:text-[#FF9F0D] py-2 px-4 transition duration-300 ease-in-out"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/about/team"
                className="font-inter block hover:text-[#FF9F0D] py-2 px-4 transition duration-300 ease-in-out"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/about/careers"
                className="font-inter block hover:text-[#FF9F0D] py-2 px-4 transition duration-300 ease-in-out"
              >
                Careers
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* Shop */}
      <li className="relative" onClick={() => handleLinkClick("shop")}>
        <Link
          href="/shop"
          className={`font-inter text-white hover:text-[#FF9F0D] ${activeLink === "shop" ? "text-[#FF9F0D]" : ""}`}
        >
          Shop
        </Link>
      </li>

      {/* Contact */}
      <li className="relative" onClick={() => handleLinkClick("contact")}>
        <Link
          href="/contact"
          className={`font-inter text-white hover:text-[#FF9F0D] ${activeLink === "contact" ? "text-[#FF9F0D]" : ""}`}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
