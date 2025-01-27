"use client";

import React from "react";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import { Footer } from "../components/Footer";

const AboutPage = () => {
  const pageTitle = "About"; // Static title for the About page

  return (
    <>

    <div className="main-container">
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

      <section className="about-section py-16 px-4">
        <div className="container mx-auto text-center">
          {/* About Us Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section - Image */}
            <div>
              <img
                src="/Aboutus-01.png" // Replace with your image URL
                alt="Food Image"
                className="w-[480px] ml-14 h-auto object-cover rounded-lg "
              />
            </div>

            {/* Right Section - Content */}
            <div className="space-y-4  text-left mt-36">
              <h2 className="text-3xl text-[#FF9F0D] font-semibold font-greatVibes">About Us</h2>
              <h3 className="text-5xl font-semibold font-helvetica text-black">
                Food is an Important Part of a Balanced Diet
              </h3>
              <p className="text-lg text-gray-600 font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
                elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
                mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                consequat.
              </p>
              <div className="flex justify-start gap-4">
                <button className="bg-[#FF9F0D] font-inter text-white py-2 px-6 rounded-lg">
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default AboutPage;
