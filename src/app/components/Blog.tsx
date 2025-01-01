import React from "react";
import Image from "next/image"; // Import the Image component
import { AiOutlineLike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaCommentDotsSolid } from "react-icons/lia";

export const Blog = () => {
  return (
    <div className="relative h-auto flex flex-col items-center justify-center bg-[#0D0D0D] py-40">
      {/* Wrapper for the content */}
      <div className="w-full mx-auto px-16 lg:px-8 relative z-10 flex flex-col items-center text-center text-white mb-10">
        {/* Hero Content */}
        <h1 className="text-3xl font-greatVibes text-[#FF9F0D] mb-4">Blog Post</h1>
        <h2 className="text-4xl font-helvetica font-extrabold">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="border-2 border-white rounded-lg overflow-hidden w-[300px]">
          <Image
            src="/blog1.jpg"
            alt="Blog Post"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-5">
            <div className="flex justify-between text-sm text-[#FF9F0D] mb-2">
              <span>10 February 2022</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Pellentesque Non Effictur Mi Aliquam</h3>
            <div className="flex justify-between items-center">
              <a href="#" className="text-white font-semibold">
                Learn More
              </a>
              <div className="flex space-x-3 text-white">
                <AiOutlineLike size={20} />
                <LiaCommentDotsSolid size={20} className="text-[#FF9F0D]" />
                <IoShareSocialOutline size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-2 border-white rounded-lg overflow-hidden w-[300px]">
          <Image
            src="/blog2.jpg"
            alt="Blog Post"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-5">
            <div className="flex justify-between text-sm text-[#FF9F0D] mb-2">
              <span>10 February 2022</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
            </h3>
            <div className="flex justify-between items-center">
              <a href="#" className="text-white font-semibold">
                Learn More
              </a>
              <div className="flex space-x-3 text-white">
                <AiOutlineLike size={20} />
                <LiaCommentDotsSolid size={20} className="text-[#FF9F0D]" />
                <IoShareSocialOutline size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-2 border-white rounded-lg overflow-hidden w-[300px]">
          <Image
            src="/blog3.jpg"
            alt="Blog Post"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-5">
            <div className="flex justify-between text-sm text-[#FF9F0D] mb-2">
              <span>10 February 2022</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Curabitur rutrum velit ac congue malesuada</h3>
            <div className="flex justify-between items-center">
              <a href="#" className="text-white font-semibold">
                Learn More
              </a>
              <div className="flex space-x-3 text-white">
                <AiOutlineLike size={20} />
                <LiaCommentDotsSolid size={20} className="text-[#FF9F0D]" />
                <IoShareSocialOutline size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
