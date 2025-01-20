import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaSearch } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";

const Sidebar = () => {
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
        <img
          src="/profile1.jpg"
          alt="Profile"
          className="w-20 h-20 mx-auto rounded-full border-4 border-[#FF9F0D]"
        />
        <h3 className="mt-2 font-semibold text-xl text-[#FF9F0D]">Prince Miyako</h3>
        <p className="text-sm text-gray-500">Blogger & Photographer</p>
        <div className="text-[#FF9F0D] flex justify-center space-x-1 mt-1 text-sm">
          {[...Array(5)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span className="text-gray-500">(5 Reviews)</span>
        </div>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="text-gray-500 hover:text-[#FF9F0D]">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#FF9F0D]">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#FF9F0D]">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#FF9F0D]">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg mb-3 text-[#FF9F0D]">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={post.image}
                alt="Post"
                className="w-16 h-16 rounded-lg shadow-md object-cover"
              />
              <div>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="text-sm font-medium text-gray-800">{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter By Menu */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg mb-3 text-[#FF9F0D]">Filter By Menu</h3>
        <div className="space-y-4">
          {filterByMenu.map((item) => (
            <div key={item.name} className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-14 rounded-lg shadow-md object-cover"
              />
              <div className="flex justify-between w-full">
                <span className="text-sm text-gray-700">{item.name}</span>
                <span className="text-sm text-gray-500">({item.count})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg mb-3 text-[#FF9F0D]">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Sandwich", "Tikka", "Bbq", "Restaurant", "Chicken Shawarma", "Health", "Fastfood", "Food", "Pizza", "Burger", "Chicken"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200 cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg mb-3 text-[#FF9F0D]">Photo Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          {photoGallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Gallery"
              className="w-20 h-20 rounded-lg object-cover shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="font-semibold text-lg mb-3 text-[#FF9F0D]">Follow Us</h3>
        <div className="flex justify-center space-x-6 bg-[#FF9F0D] p-2 rounded-lg">
          <a href="#" className="text-white hover:text-gray-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaPinterest size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
