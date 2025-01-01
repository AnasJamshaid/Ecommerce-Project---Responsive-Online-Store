import React from 'react';
import { CiPlay1 } from 'react-icons/ci';

export const Resturantactive = () => {
  return (
    <div
      className="text-white h-[430px] relative"
      style={{
        background:
          "radial-gradient(circle, rgba(13, 13, 13, 0.4), rgba(13, 13, 13, 0.4) 10%), url('/bg-lastsection.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center lg:ml-[500px] sm:ml-0 px-4">
        {/* Hero Content */}
        <div className="flex flex-col space-y-6 justify-center items-end text-white w-full lg:mr-20 sm:mr-0 lg:text-right sm:text-center">
          <h1 className="text-4xl font-greatVibes text-[#FF9F0D]">
            Restaurant Active Process
          </h1>
          <h2 className="text-2xl font-helvetica font-extrabold mb-8 text-white sm:text-5xl">
            <span className="text-[#FF9F0D]">We </span>Document Every Food
            <br />
            Bean Process until it is saved
          </h2>
          <p className="text-[14px] font-inter font-light mb-8 max-w-[450px] break-words sm:text-xl sm:max-w-[950px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna,
          </p>
          <div className="mt-5 flex space-x-4 justify-end">
            {/* Read More Button */}
            <button className="px-6 py-2 text-white border-2 border-[#FF9F0D] rounded-full font-semibold">
              Read more
            </button>

            {/* Play Video Button */}
            <button
              className="flex items-center space-x-3 px-4 py-2 rounded-full font-semibold bg-transparent "
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <div className="w-9 h-9 bg-[#FF9F0D] text-white rounded-full flex items-center justify-center ">
                <CiPlay1 size={22} /> {/* Play Icon */}
              </div>
              <span className="text-[16px]">Play Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
