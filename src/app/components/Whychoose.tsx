import React from "react";
import { PiCookieLight, PiHamburger, PiWineLight } from "react-icons/pi";
import Image from "next/image";

export const Whychoose = () => {
  return (
    <div className="relative h-auto flex flex-col bg-cover bg-center overflow-hidden  bg-[#0D0D0D]">
      {/* Wrapper for the content */}
      <div className="w-full mx-auto px-8 lg:px-4 relative z-10 flex flex-col lg:flex-row-reverse items-start justify-between">
        {/* Text Section (Right Side) */}
        <div className="flex flex-col space-y-4 justify-center items-start text-white w-full lg:w-1/2 mt-32 lg:mb-0">
          <h1 className="text-3xl font-greatVibes text-[#FF9F0D] mt-20 sm:text-4xl md:text-5xl">
            Why Choose us
          </h1>
          <h2 className="text-4xl font-helvetica font-extrabold mb-6 text-white sm:text-5xl md:text-6xl">
            <span className="text-[#FF9F0D]">Ex</span>traordinary taste
            <br />
            And Experienced
          </h2>
          <p className="text-[13px] font-inter font-light mb-6 max-w-screen-sm break-words sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus.
          </p>

          {/* New Section with 3 Boxes Below the Paragraph */}
          <div className="flex justify-between w-full lg:w-[50%] mt-8 space-x-4 lg:mt-0">
            {/* Box 1 */}
            <div className="flex flex-col items-center justify-center bg-[#FF9F0D] w-[90px] h-[90px] rounded-lg shadow-lg text-white text-center space-y-2">
              <PiHamburger className="text-4xl" />
            </div>
            {/* Box 2 */}
            <div className="flex flex-col items-center justify-center bg-[#FF9F0D] w-[90px] h-[90px] rounded-lg shadow-lg text-white text-center space-y-2">
              <PiCookieLight className="text-4xl" />
            </div>
            {/* Box 3 */}
            <div className="flex flex-col items-center justify-center bg-[#FF9F0D] w-[90px] h-[90px] rounded-lg shadow-lg text-white text-center space-y-2">
              <PiWineLight className="text-4xl" />
            </div>
          </div>

          <div className="flex justify-between w-full lg:w-[50%] mt-8">
            {/* Column 1 */}
            <div className="flex flex-col items-center justify-center w-1/3">
              <p className="text-xs font-inter text-center mr-[28px] sm:text-sm">
                Fast Food
              </p>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col items-center justify-center w-1/3">
              <p className="text-xs font-inter text-center sm:text-sm">
                Lunch
              </p>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col items-center justify-center w-1/3">
              <p className="text-xs font-inter text-center ml-10 sm:text-sm">
                Dinner
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center shadow-lg mt-6">
            {/* Solid Orange Left Section */}
            <div className="bg-[#FF9F0D] w-[13px] h-[64px] rounded-l-lg"></div>
            {/* White Section with 30+ */}
            <div className="bg-white text-black text-lg font-medium py-3 px-5 rounded-r-lg flex items-center">
              <span className="text-[#FF9F0D] font-bold text-3xl">30+</span>
              <div className="flex flex-col items-start w-24 h-5 ml-5 mb-5">
                <span className="text-black text-sm font-medium">Years of</span>
                <span className="text-black text-base font-bold">
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Grid Section (Left Side) */}
        <div className="w-full lg:w-1/3 flex items-start md:ml-32 mt-36   ">
          <div className="grid grid-cols-1 gap-4 ">
            {/* Row 1: 2 Images */}
            <div className="grid grid-cols-2 gap-4 -">
              <Image
                src="/food5.png"
                alt="Image 1"
                className="w-full h-60 object-cover rounded-lg"
                width={500} // Specify width
                height={300} // Specify height
              />
              <Image
                src="/food6.png"
                alt="Image 2"
                className="w-full h-40 mt-20 object-cover rounded-lg"
                width={500} // Specify width
                height={300} // Specify height
              />
            </div>

            {/* Row 2: 3 Images */}
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/food7.png"
                alt="Image 3"
                className="w-full h-60 rounded-lg"
                width={500} // Specify width
                height={300} // Specify height
              />
              <Image
                src="/food8.png"
                alt="Image 4"
                className="w-full rounded-lg"
                width={500} // Specify width
                height={300} // Specify height
              />
              <Image
                src="/food9.png"
                alt="Image 5"
                className="w-full h-40  rounded-lg"
                width={500} // Specify width
                height={300} // Specify height
              />
            </div>

            {/* Row 3: 1 Image */}
            <Image
              src="/food10.png"
              alt="Image 6" 
              className="w-[140px] h-40 md:ml-[300px] ml-40 -mt-20 rounded-lg "
              width={500} // Specify width
              height={300} // Specify height
            />
          </div>
        </div>
      </div> <br /><br /><br /><br />
    </div>
  );
};
