"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = () => {
  const pathname = usePathname(); // Get the current path
  const pathSegments = pathname.split("/").filter((segment) => segment); // Split path into segments

  // Do not render breadcrumbs on the home page
  if (pathSegments.length === 0) {
    return null;
  }

  // Utility function to capitalize the first letter of each word
  const capitalizeFirstLetter = (text) =>
    text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  // Generate the breadcrumb links dynamically
  const breadcrumbs = pathSegments.map((segment, index) => ({
    name: capitalizeFirstLetter(segment.replace(/-/g, " ")), // Capitalize the first letter of each word
    path: "/" + pathSegments.slice(0, index + 1).join("/"), // Construct the path for each breadcrumb
  }));

  return (
    <div className="flex items-center text-center text-sm space-x-2">
    <p
      className="flex items-center text-center text-sm space-x-2"
      style={{ fontFamily: "Inter, sans-serif" }} // Use Inter font for breadcrumbs
    >
      {/* Home link */}
      <Link href="/" className="text-white hover:text-[#FF9F0D]">
        Home
      </Link>

      {/* Dynamic Breadcrumb Links */}
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <IoIosArrowForward className="mx-2" /> {/* Arrow icon */}
          <Link
            href={breadcrumb.path}
            className={`hover:underline ${
              index === breadcrumbs.length - 1
                ? "text-[#FF9F0D]"
                : "text-white hover:text-[#FF9F0D]"
            }`}
          >
            {breadcrumb.name}
          </Link>
        </React.Fragment>
      ))}
    </p>
    </div>
  );
};

export default Breadcrumb;
