"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Search Icon
import { FaUser, FaShoppingCart } from "react-icons/fa"; // User & Cart Icons
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and Close Icons
import { usePathname } from "next/navigation";
import Link from "next/link";

const SecondHeader = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-black text-white py-4 fixed top-0 left-0 w-full main-conatiner z-50 shadow-md " >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="font-helvetica text-white">Food</span>
          <span className="font-helvetica" style={{ color: "#FF9F0D" }}>
            tuck
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Navigation */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:static lg:flex lg:justify-center lg:items-center lg:bg-transparent lg:shadow-none lg:translate-x-0`}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </button>
          <ul className="flex flex-col mt-16 lg:mt-0 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0">
            {[
              { path: "/", label: "Home" },
              { path: "/menu", label: "Menu" },
              { path: "/blog", label: "Blog" },
              { path: "/pages", label: "Pages" },
              { path: "/about", label: "About" },
              { path: "/shop", label: "Shop" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={path} className="py-2 lg:py-0">
                <Link
                  href={path}
                  className={`block px-4 text-sm font-inter ${
                    isActive(path)
                      ? "text-[#FF9F0D] font-semibold"
                      : "hover:text-[#FF9F0D]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons */}
        <div className="hidden lg:flex space-x-4 items-center text-lg font-inter">
          <button className="hover:text-[#FF9F0D]">
            <FiSearch />
          </button>
          <button className="hover:text-[#FF9F0D]">
            <FaUser />
          </button>
          <button className="hover:text-[#FF9F0D]">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SecondHeader;
