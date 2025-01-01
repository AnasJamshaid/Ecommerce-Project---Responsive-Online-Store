import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
import React from "react";
import { FiCheck } from "react-icons/fi"; // Import the check icon

export const Aboutus = () => {
  return (
    <div className="relative h-[800px] flex flex-col lg:flex-row bg-cover bg-center overflow-hidden bg-[#0D0D0D]">
      {/* Wrapper for the content */}
      <div className="w-full mx-auto px-8 lg:px-16 mt-[30px] flex flex-col lg:flex-row items-center justify-between h-full">
        {/* Hero Content - Left Side */}
        <div className="flex flex-col space-y-6 justify-center items-start text-white w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-greatVibes text-[#FF9F0D]">About us</h1>
          <h2 className="text-3xl sm:text-2xl md:text-5xl font-helvetica font-extrabold mb-8 text-white">
            <span className="text-[#FF9F0D]">We </span>Create the best
            <br /> foody product
          </h2>
          <p className="text-[14px] sm:text-[12px] md:text-[14px] font-inter font-light mb-8 max-w-screen-sm break-words pr-0 lg:pr-36">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Points with check icons */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FiCheck className="text-[#FF9F0D] text-lg" />
              <p className="text-[14px] sm:text-[12px] font-inter font-light">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheck className="text-[#FF9F0D] text-lg" />
              <p className="text-[14px] sm:text-[12px] font-inter font-light">
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheck className="text-[#FF9F0D] text-lg" />
              <p className="text-[14px] sm:text-[12px] font-inter font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          {/* Button */}
          <Link href="/menu">
            <button className="bg-[#FF9F0D] text-white py-2 px-6 rounded-full text-lg hover:bg-[#FF8A00] transition duration-300">
              Read More
            </button>
          </Link>
        </div>

        {/* Grid Section */}
        <div className="relative w-full lg:w-[45%] flex justify-center items-center lg:mt-0 mt-8">
          <div className="grid grid-cols-1 gap-4">
            {/* Top Image */}
            <div className="flex justify-center">
              <Image
                src="/about3.png"
                alt="Top Dish"
                width={900}
                height={300}
                className="w-full max-w-[900px] h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Bottom Row - Two Images */}
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/about2.png"
                alt="Dish 1"
                width={500}
                height={500}
                className="w-full rounded-lg shadow-lg"
              />
              <Image
                src="/about.png"
                alt="Dish 2"
                width={500}
                height={500}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
