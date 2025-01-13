"use client";

import React from "react";
import SecondHeader from "../components/SecondHeader";
import { Breadcrumb } from "../components/Breadcrumb";


const AboutPage = () => {
  const pageTitle = "About"; // Static title for the About page

  return (
    <>
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }} // Replace with your image URL
      >
        {/* Overlay for darker background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div
          className="relative flex flex-col items-center justify-center h-full space-y-4"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }} // Use Helvetica font for header
        >
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center">{pageTitle}</h1>

          {/* Breadcrumb Component */}
          <Breadcrumb />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
