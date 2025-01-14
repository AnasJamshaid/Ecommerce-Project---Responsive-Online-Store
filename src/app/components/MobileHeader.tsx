'use client';
import React from "react";
import { usePathname } from "next/navigation"; // Hook to get the current route
import Link from "next/link"; // Import Link from next/link


export const MobileHeader = () => {
  const pathname = usePathname(); // Get the current path

  // Function to determine if a link is active
  const isActive = (path) => pathname === path;

  return (
    <header className="font-inter font-normal text-white py-6 px-6"> {/* Apply Inter font here with weight 400 */}
      {/* Mobile Navigation (Always visible) */}
      <nav className="space-y-6 w-40 ">
        {/* Navigation Links */}
        <Link
          href="/"
          className={`block text-xl py-2 ${isActive("/") ? "text-[#FF9F0D] border-b-2 border-white" : "hover:text-[#FF9F0D] transition duration-200 border-b-2 border-transparent hover:border-white"}`}
        >
          Home
        </Link>
        <Link
          href="/menu"
          className={`block text-xl py-2 ${isActive("/menu") ? "text-[#FF9F0D] border-b-2 border-white" : "hover:text-[#FF9F0D] transition duration-200 border-b-2 border-transparent hover:border-white"}`}
        >
          Menu
        </Link>
        <Link
          href="/blog"
          className={`block text-xl py-2 ${isActive("/blog") ? "text-[#FF9F0D] border-b-2 border-white" : "hover:text-[#FF9F0D] transition duration-200 border-b-2 border-transparent hover:border-white"}`}
        >
          Blog
        </Link>
        <Link
          href="/pages"
          className={`block text-xl py-2 ${isActive("/pages") ? "text-[#FF9F0D] border-b-2 border-white" : "hover:text-[#FF9F0D] transition duration-200 border-b-2 border-transparent hover:border-white"}`}
        >
          Pages
        </Link>
        <Link
          href="/about"
          className={`block text-xl py-2 ${isActive("/about") ? "text-[#FF9F0D] border-b-2 border-white" : "hover:text-[#FF9F0D] transition duration-200 border-b-2 border-transparent hover:border-white"}`}
        >
          About
        </Link>
        <Link
          href="/shop"
          className={`block text-xl py-2 ${isActive("/shop") ? "text-[#FF9F0D] border-b-2 border-white" : "hover:text-[#FF9F0D] transition duration-200 border-b-2 border-transparent hover:border-white"}`}
        >
          Shop
        </Link>
        <Link
          href="/contact"
          className={`block text-xl py-2 ${isActive("/contact") ? "text-[#FF9F0D] border-b-2 border-white" : "hover:text-[#FF9F0D] transition duration-200 border-b-2 border-transparent hover:border-white"}`}
        >
          Contact
        </Link>


      </nav>
    </header>
  );
};
