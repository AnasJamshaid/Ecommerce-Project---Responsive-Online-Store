import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div
      className="relative h-[800px] flex flex-col lg:flex-row bg-cover bg-center overflow-hidden -mt-32 -z-50"
      style={{
        backgroundImage: "url('/Bg-Image.jpg')", // Correct the path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.9) 10%)",
        }}
      ></div>

      {/* Hidden for medium screens and below */}
      <div className="relative w-[25.28px] h-[492px] top-[60px] hidden lg:flex">
        {/* Line 1 */}
        <div className="absolute w-[158px] h-0 top-[191px] bg-white border border-white rotate-90"></div>

        {/* Line 2 */}
        <div className="absolute w-[147px] h-0 top-[536px] bg-white border border-white rotate-90"></div>

        {/* Group for icons */}
        <div className="absolute left-[64px] top-[300px] w-[25.28px] h-[140px] flex flex-col justify-between items-center">
          <div className="text-white text-xl">
            <FaFacebookF />
          </div>
          <div className="text-[#FF9F0D] text-2xl my-[10px]">
            <FaTwitter />
          </div>
          <div className="text-white text-xl">
            <FaPinterestP />
          </div>
        </div>
      </div>

      {/* Wrapper for the content */}
      <div className="w-full mx-auto px-8 mt-11 relative z-10 lg:ml-16 flex flex-col items-center justify-center h-full lg:px-8 lg:flex-row">
        {/* Hero Content - Left Side */}
        <div className="flex flex-col space-y-6 justify-center text-white w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="text-3xl md:text-4xl font-greatVibes text-[#FF9F0D]">
            Its Quick & Amusing!
          </h2>
          <h2 className="text-4xl md:text-5xl font-helvetica font-extrabold mb-8 text-white">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br /> Food
            Quality
          </h2>
          <p className="text-lg md:text-base font-inter font-light mb-8 max-w-screen-sm break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <Link href="/menu">
            <button className="bg-[#FF9F0D] text-white py-3 px-8 rounded-full text-lg md:text-base hover:bg-[#FF8A00] transition duration-300 self-center lg:self-start">
              See Menu
            </button>
          </Link>
        </div>

        {/* Right Image Section (Hidden on Small Screens, Visible on Larger Screens) */}
        <div className="relative w-full lg:w-1/2 justify-center items-center lg:mt-0 lg:flex md:flex sm:hidden hidden">
          {/* Mint Background Image with Rotation */}
          <div
            className="absolute"
            style={{
              transform: "translate(-140%, -50%) rotate(92deg) scale(5.8)",
              top: "50%",
              left: "90%",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/mint2.png"
              alt="Mint Image"
              width={2000}
              height={2000}
              objectFit="contain"
            />
          </div>

          {/* Circle Background */}
          <div className="absolute mt-[420px] ml-[270px] border-4 border-[#ffffff] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:w-[420px] lg:h-[420px] xl:w-112 xl:h-112">
            {/* Small Images Around the Circle */}
            <div className="absolute w-full h-full">
              <div
                className="absolute"
                style={{
                  top: "13%",
                  left: "15%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src="/food2.png"
                  alt="Small Image 1"
                  width={110}
                  height={110}
                  className="rounded-full"
                />
              </div>
              <div
                className="absolute"
                style={{
                  top: "45%",
                  left: "1%",
                  transform: "translate(-50%, -50%) rotate(20deg)",
                }}
              >
                <Image
                  src="/food3.png"
                  alt="Small Image 2"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div
                className="absolute"
                style={{
                  top: "71%",
                  left: "5%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src="/food4.png"
                  alt="Small Image 3"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div
                className="absolute"
                style={{
                  top: "90%",
                  left: "22%",
                  transform: "translate(-50%, -50%) rotate(80deg) ",
                }}
              >
                <Image
                  src="/mint.png"
                  alt="Small Image 4"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Central Dish Image */}
          <Image
            src="/food.png"
            alt="Dish"
            width={574}
            height={350}
            className="z-30 mb-28"
          />
        </div>
      </div>
    </div>
  );
};
