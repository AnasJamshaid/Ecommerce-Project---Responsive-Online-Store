import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaComments, FaUser } from "react-icons/fa";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { MdArrowOutward } from "react-icons/md";
import { PiUserCirclePlus } from "react-icons/pi";

const BlogPage = () => {
  const pageTitle = "Blog"; // Static title for the Blog page
  const blogPosts = [
    {
      image: "/blogs1.jpg",
      title: "10 Reasons To Do A Digital Detox Challenge",
      date: "June 28, 2023",
      comments: 15,
      author: "Admin",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida urna ac nisi faucibus, non varius urna tincidunt.",
      link: "/post/1",
    },
    {
      image: "/blog2.jpg",
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      date: "June 27, 2023",
      comments: 20,
      author: "Admin",
      description: "Discover the best recipes for sweet beer cheese pizzas. These pretzels are sure to delight your taste buds!",
      link: "/post/2",
    },
    {
      image: "/blogs4.jpg",
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      date: "June 26, 2023",
      comments: 10,
      author: "Admin",
      description: "A perfect recipe for recovering after a long night—easy to make and delicious.",
      link: "/post/3",
    },
    {
      image: "/about.png",
      title: "My Favorite Easy Avocado Pizza Toast Recipe",
      date: "June 25, 2023",
      comments: 8,
      author: "Admin",
      description: "This avocado pizza toast recipe is healthy, easy, and perfect for breakfast.",
      link: "/post/4",
    },
  ];

  return (
    <>
    <div className="main-container">
      {/* Header */}
      <SecondHeader />

      {/* Banner Section */}
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }} // Replace with your banner image URL
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold text-center font-helvetica">{pageTitle}</h1>
          <Breadcrumb />
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto py-12 px-4 flex flex-col lg:flex-row lg:space-x-8">
        {/* Blog Posts */}
        <div className="lg:w-2/3 space-y-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              {/* Image */}
              <Image
                src={post.image}
                alt={post.title}
                width={871}
                height={600} // Increased height of image
                className="object-cover w-full h-80" // Increased height of image container
              />

              {/* Content */}
              <div className="p-4 flex flex-col space-y-4">
                {/* Metadata */}
                <div className="flex items-center text-black text-sm space-x-4">
                  <span className="flex items-center text-[#FFA500]"> {/* Orange icon color */}
                    <FaCalendarAlt size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="text-black">/</span>
                  <span className="flex items-center text-[#FFA500]"> {/* Orange icon color */}
                    <FaComments size={14} className="mr-1" />
                    {post.comments} Comments
                  </span>
                  <span className="text-black">/</span>
                  <span className="flex items-center text-[#FFA500]"> {/* Orange icon color */}
                    <PiUserCirclePlus size={14} className="mr-1" />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 "style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>{post.title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3 font-inter" style={{ fontFamily: "Inter, Arial, sans-serif" }}>
                  {post.description}
                </p>

                {/* Read More */}
                <Link
                  href={post.link}
                  className="self-start px-4 py-2 border border-[#FFA500] text-[#FFA500] rounded hover:bg-[#FFA500] hover:text-white flex items-center"
                >
                  Read More
                  <span className="ml-2">
                    <MdArrowOutward />
                  </span>
                </Link>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center space-x-2 mt-6">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className="px-4 py-2 bg-gray-200 hover:bg-[#FFA500] rounded"
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex">
          <Sidebar />
        </div>
        
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default BlogPage;
