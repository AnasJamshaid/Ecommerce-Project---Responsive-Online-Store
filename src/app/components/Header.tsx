'use client'


import React, { useState } from "react";
import NavigationLinks from "./Navigationslinks";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon for mobile
import { IoClose } from "react-icons/io5"; // Close button for the menu
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu toggle
  const [searchPopupOpen, setSearchPopupOpen] = useState(false); // State to control search popup visibility


  const [cartItems, setCartItems] = useState<number>(0); // Example state for cart items
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false); // Example state for showing cart

  const handleClick = () => {
    setIsCartVisible(!isCartVisible); // Toggle cart visibility
  };
  
  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle search popup visibility
  const toggleSearchPopup = () => {
    setSearchPopupOpen(!searchPopupOpen);
  };

  // Close menu when clicking outside
  const closeMenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement; // Cast the target to HTMLElement
    if (target.id !== 'menu' && !target.closest('#menu')) {
      setMenuOpen(false);
    }
  };


  return (
    <header className="top-0 left-0 w-full z-50 ">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-4 sm:h-16 md:h-16 lg:h-16 bg-transparent" >
        <h2 className="text-2xl sm:text-3xl flex mt-14 md:text-3xl lg:-mt-0 md:-mt-0 sm:-mt-0 lg:text-3xl font-helvetica font-bold text-white">
          <span className="text-[#FF9F0D]">Food</span>Tuck
        </h2>
      </div>

      {/* Mobile Header Section (for small screens) */}
      <div className="sm:hidden flex items-center justify-between h-12 px-4 py-2 bg-transparent">
        {/* Hamburger Icon (visible on mobile) */}
        <GiHamburgerMenu
          className="text-white -mt-1"
          size={24}
          onClick={toggleMenu} // Toggle the menu when clicked
        />

        {/* Shopping Bag Icon and Search Icon (visible on mobile) */}
        <div className="flex items-center space-x-4">
          <HiMiniShoppingBag className="text-white -mt-1" size={19} />
          <LuSearch
            className="text-white -mt-1"
            size={19}
            onClick={toggleSearchPopup} // Toggle the search popup when clicked
          />
        </div>
      </div>

      {/* Slide-in Menu (for mobile) */}
      <div
        id="menu"
        className={`fixed top-0 left-0 w-3/4 h-full bg-black bg-opacity-90 text-white transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={closeMenu} // Close menu when clicking outside
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <IoClose
            className="text-white"
            size={30}
            onClick={() => setMenuOpen(false)} // Close the menu when clicked
          />
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center mt-10">
          <MobileHeader />
        </div>
      </div>

      {/* Search Popup (only on mobile) */}
      {searchPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="w-11/12 sm:w-1/2 bg-transparent rounded-md">
            <div className="flex justify-between items-center p-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-white w-full focus:outline-none"
              />
              <IoClose
                className="text-white"
                size={30}
                onClick={toggleSearchPopup} // Close the search popup
              />
            </div>
          </div>
        </div>
      )}

      {/* Tablet and Desktop Navigation and Search Bar */}
      <div className="hidden sm:flex sm:flex-row sm:items-center justify-between h-16 sm:h-16 md:h-16 lg:h-16 px-10 bg-transparent">
        {/* Left Section: Navigation Links */}
        <div className="flex items-center space-x-7">
          <NavigationLinks />
        </div>

        {/* Right Section: Search Bar and Shopping Bag Icon */}
        <div className="flex sm:flex-row items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center bg-transparent border-2 border-[#FF9F0D] rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-white ml-2 focus:outline-none"
            />
            <LuSearch className="text-white" size={24} />
          </div>

          {/* Shopping Bag Icon */}
          <a href="/addtocart" className="relative">
        <HiMiniShoppingBag
          className="text-white hover:text-[#FF9F0D] cursor-pointer"
          size={23}
        />
      </a>
        </div>
      </div>
    </header>
  );
};
