"use client";

import React, { useState } from "react";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import { Footer } from "../components/Footer";
import { IoPlayOutline } from "react-icons/io5";
import { FaCheckCircle, FaStar, FaShieldAlt } from "react-icons/fa"; // Importing some example icons for the columns
import { Testimonial } from "../components/Testimonial";
import Image from "next/image";

const AboutPage = () => {
  const pageTitle = "About"; // Static title for the About page

  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonial Data
  const testimonials = [
    {
      image: "/person1.jpg", // Updated image path to public folder
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      name: "Alamin Hasan",
      designation: "Food Specialist",
      rating: 4,
    },
    {
      image: "/person2.jpg", // Updated image path to public folder
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      name: "Sara Khan",
      designation: "Designer",
      rating: 5,
    },
    {
      image: "/person3.jpg", // Updated image path to public folder
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      name: "John Doe",
      designation: "Developer",
      rating: 4,
    },
  ];

  // Handle dot click to switch testimonials
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

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
                  className="w-[480px] ml-14 h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right Section - Content */}
              <div className="space-y-4 text-left mt-36">
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

                {/* Buttons: Show More & Play */}
                <div className="flex justify-start gap-4">
                  <button className="bg-[#FF9F0D] font-inter text-white py-2 px-6 rounded-lg">
                    Show more
                  </button>

                  {/* Play Button */}
                  <button className="bg-[#FF9F0D] font-inter text-white py-4 px-4 rounded-full flex items-center gap-2">
                    <IoPlayOutline className="w-5 h-5" /> {/* Play Icon */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us py-16 px-4">
          <div className="container mx-auto text-center">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-black font-helvetica">Why Choose Us</h2>
            <p className="text-lg font-inter text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>

            {/* Banner Image */}
            <div className="mt-8">
              <img
                src="/banner.jpg" // Replace with your banner image URL
                alt="Why Choose Us Banner"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* 3 Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Column 1 */}
              <div className="flex flex-col items-center text-center">
                <FaCheckCircle className="text-[#FF9F0D] text-5xl" />
                <h3 className="text-2xl font-semibold mt-4 font-helvetica" >High Quality</h3>
                <p className="text-gray-600 mt-2 font-inter" >
                  We provide high-quality products and services that exceed customer expectations.
                </p>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-center text-center">
                <FaStar className="text-[#FF9F0D] text-5xl" />
                <h3 className="text-2xl font-semibold mt-4 font-helvetica">Customer Satisfaction</h3>
                <p className="text-gray-600 mt-2 font-inter">
                  Our focus is on delivering exceptional customer satisfaction through outstanding service.
                </p>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center text-center">
                <FaShieldAlt className="text-[#FF9F0D] text-5xl" />
                <h3 className="text-2xl font-semibold mt-4 font-helvetica">Trusted & Secure</h3>
                <p className="text-gray-600 mt-2 font-inter">
                  We ensure the safety and security of your data, earning your trust with every interaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section
          className="our-team py-16 px-4 h-[390px] relative"
          style={{
            paddingTop: "2rem",
            position: "relative",
          }}
        >
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/banne2.jpg')" }}></div>

          {/* Overlay for lighter orange background */}
          <div className="absolute inset-0 bg-[#FF9F0D] bg-opacity-90 z-1"></div>

          <div className="container mx-auto text-center relative z-10">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-white font-helvetica mt-10">Meet Our Team</h2>
            <p className="text-lg text-white mt-4 font-inter">
              Our team is made up of passionate and dedicated professionals who work tirelessly to bring you the best service.
            </p>
          </div>
        </section>

        <div className="relative -mt-52 container mx-auto text-center">

          {/* Team Images and Names */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 relative z-10">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-72 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: "url('/team.jpg')" }}></div>
              <div className="py-6 px-4 text-center">
                <h3 className="text-xl font-semibold font-helvetica text-black">Mark Henry</h3>
                <p className="text-sm text-gray-600 font-inter">Owner</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-72 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: "url('/team.jpg')" }}></div>
              <div className="py-6 px-4 text-center">
                <h3 className="text-xl font-semibold font-helvetica text-black">Lucky Helen</h3>
                <p className="text-sm text-gray-600 font-inter">Chef</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-72 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: "url('/team.jpg')" }}></div>
              <div className="py-6 px-4 text-center">
                <h3 className="text-xl font-semibold font-helvetica text-black">Moon Henry</h3>
                <p className="text-sm text-gray-600 font-inter">Founder</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-72 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: "url('/team.jpg')" }}></div>
              <div className="py-6 px-4 text-center">
                <h3 className="text-xl font-semibold font-helvetica text-black">Tom Monrow</h3>
                <p className="text-sm text-gray-600 font-inter">Specialist</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-32 overflow-hidden px-6 sm:px-12 lg:px-32 ">
          {/* Header Section */}
          <div className="text-left mb-10 w-full">
            <h1 className="text-2xl sm:text-3xl font-greatVibes text-[#FF9F0D] mb-2 ml-4 sm:ml-6 lg:ml-8">
              Testimonials
            </h1>
            <h2 className="text-3xl sm:text-4xl font-helvetica font-extrabold text-black ml-4 sm:ml-6 lg:ml-8">
              What our clients are saying
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 sm:p-8 max-w-sm sm:max-w-md lg:max-w-xl mt-9 relative">
            {/* Profile Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image
                src={testimonials[currentIndex].image}
                alt="Client"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-4 border-white"
                width={80} // Define width
                height={80} // Define height
              />
            </div>

            {/* Testimonial Content */}
            <div className="mt-8 text-center">
              <div className="text-[#FF9F0D] text-3xl sm:text-4xl mb-4">❝</div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                {testimonials[currentIndex].quote}
              </p>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-[#FF9F0D] text-lg sm:text-xl">
                    ★
                  </span>
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-gray-400 text-lg sm:text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Client Info */}
              <h3 className="text-lg sm:text-xl font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {testimonials[currentIndex].designation}
              </p>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-[#FF9F0D]" : "bg-gray-400"
                  }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>

          <div className="hidden sm:block">
            {/* Positioned Image */}
            <Image
              src="/leaf3.png" // Updated image path to public folder
              alt="Sample"
              className="absolute ml-40 sm:ml-60 -mt-48 sm:-mt-64 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] rotate-[-40deg] opacity-10"
              width={600}
              height={600}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
