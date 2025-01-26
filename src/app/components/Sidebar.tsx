'use client'
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaSearch, FaEye } from "react-icons/fa";
import Image from "next/image";

const Sidebar = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const recentPosts = [
    { image: "/shopblog1.jpg", date: "June 28, 2023", title: "Lorem ipsum dolor sit amet..." },
    { image: "/shopblog2.jpg", date: "July 10, 2023", title: "Sed do eiusmod tempor incididunt..." },
    { image: "/shopblog3.jpg", date: "August 5, 2023", title: "Ut enim ad minim veniam..." },
    { image: "/shopblog4.jpg", date: "September 15, 2023", title: "Quis nostrud exercitation ullamco..." },
  ];

  const filterByMenu = [
    { name: "Chicken Fry", count: 28, image: "/blogmenu1.jpg" },
    { name: "Burger Food", count: 48, image: "/blogmenu2.jpg" },
    { name: "Pizza", count: 16, image: "/blogmenu3.jpg" },
    { name: "Fresh Fruits", count: 38, image: "/blogmenu4.jpg" },
    { name: "Vegetables", count: 15, image: "/blogmenu5.jpg" },
  ];

  const popularTags = [
    "Food", "Healthy", "Fruits", "Burger", "Pizza", "Veggies", "Snacks", "Chicken"
  ];

  const photoGallery = [
    "/bloggallery.jpg",
    "/bloggallery1.jpg",
    "/bloggallery2.jpg",
    "/bloggaller3.jpg",
    "/bloggallery3.jpg",
    "/bloggallery4.jpg",
  ];

  return (
    <div className="sidebar w-[424px] p-6 space-y-6 max-md:hidden">
      {/* Search Box */}
      <div className="mb-6">
        <div className="flex items-center border rounded-md shadow-sm bg-[#FFF7ED]">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full px-3 py-2 bg-transparent text-black focus:outline-none"
          />
          <button className="px-4 bg-[#FF9F0D] text-white rounded-r-md flex items-center justify-center">
            <FaSearch className="h-12 w-5" />
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="text-center border border-gray-300 rounded-lg p-4 shadow-md">
      <div className="relative w-20 h-30 mx-auto rounded-full overflow-hidden border-[#FF9F0D] border-4 shadow-md">
          <Image
            src="/profile1.jpg"
            alt="Profile"
            width={80}
            height={80}
          />
        </div>
        <h3 className="mt-2 font-semibold text-xl text-[#FF9F0D]">Prince Miyako</h3>
        <p className="text-sm text-gray-500">Blogger & Photographer</p>
        <div className="text-[#FF9F0D] flex justify-center space-x-1 mt-1 text-sm">
          {[...Array(5)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span className="text-gray-500">(5 Reviews)</span>
        </div>
        <div className="flex justify-center space-x-4 mt-3">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
            <div key={i} className="bg-[#FF9F0D] p-2 rounded-lg shadow-md hover:scale-105 transition">
              <Icon className="text-white" size={20} />
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg text-[#FF9F0D] mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h4 className="text-sm font-medium text-black hover:text-[#FF9F0D] transition">
                    {post.title}
                  </h4>
                </div>
              </div>
              <hr className="border-gray-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Filter Menu Section */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg text-[#FF9F0D] mb-4">Filter by Menu</h3>
        <div className="space-y-4">
          {filterByMenu.map((menu, index) => (
            <div key={index} className="flex justify-between items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">{menu.name}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{menu.count} Items</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags Section */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg text-[#FF9F0D] mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-[#FF9F0D] text-white rounded-full cursor-pointer hover:bg-[#e6890c] transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg text-[#FF9F0D] mb-4">Photo Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          {photoGallery.map((photo, index) => (
            <div key={index} className="relative w-full h-24 group">
              <Image
                src={photo}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(photo)}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center">
                <FaEye className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Viewing Larger Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full p-4">
            <Image
              src={selectedImage}
              alt="Larger View"
              layout="intrinsic"
              width={1000}
              height={1000}
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 p-4 text-white bg-black opacity-50 hover:opacity-100"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Social Media Section */}

      <div className="border border-gray-300 rounded-lg p-4 shadow-md mt-6">
        <h3 className="font-semibold text-lg text-[#FF9F0D] mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaYoutube].map((Icon, i) => (
            <div key={i} className="bg-[#FF9F0D] p-2  shadow-md hover:scale-105 transition">
              <Icon className="text-white" size={20} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
