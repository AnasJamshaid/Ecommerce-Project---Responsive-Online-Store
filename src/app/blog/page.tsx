'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { MdArrowOutward } from "react-icons/md";
import { PiUserCirclePlus } from "react-icons/pi";
import { client } from "@/sanity/lib/client"; // Import the Sanity client
import SkeletonLoader from "../components/SkeletonLoader"; // Import SkeletonLoader

interface BlogPost {
  title: string;
  date: string;
  comments: number;
  author: string;
  description: string;
  imageUrl: string;
  link: string;
}



const BlogPage: React.FC = () => {
  const pageTitle = "Blog";
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [postsPerPage] = useState(4); // Number of posts to show per page

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const query = `*[_type == "blogPost"]{
        title,
        date,
        comments,
        author,
        description,
        "imageUrl": image.asset->url,
        link
      }`;
      try {
        const data = await client.fetch(query);
        console.log('Fetched Data:', data); // Debugging data fetch
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchBlogPosts();
  }, []);

  

  const formatDate = (date: string): string => {
    if (!date) return "Date not available";
    return new Date(date).toLocaleDateString();
  };

  const extractMonth = (date: string): string => {
    if (!date) return "Month not available";
    return new Date(date).toLocaleString('default', { month: 'short' });
  };

  // Get the posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page navigation
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Check if there are more posts
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <>
      <div className="main-container">
        <SecondHeader />
        <div className="relative text-white h-72 bg-cover bg-center" style={{ backgroundImage: "url('/page-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative flex flex-col items-center justify-center h-full space-y-4">
            <h1 className="text-4xl font-bold text-center font-helvetica">{pageTitle}</h1>
            <Breadcrumb />
          </div>
        </div>

        <div className="container mx-auto py-12 px-4 flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-2/3 space-y-6">
            {loading ? (
              // Show skeleton loaders for each post if loading is true
              Array(4).fill(null).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            ) : (
              currentPosts.length > 0 ? (
                currentPosts.map((post, index) => (
                  <div key={index} className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="relative">
                      <img
                        src={post.imageUrl || "/fallback-image.jpg"}
                        alt={post.title}
                        className="object-cover w-full h-80 rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4 bg-[#FFA500] text-white rounded-xl py-3 px-4 shadow-lg">
                        <div className="flex flex-col items-center space-y-1">
                          <span className="text-xl font-bold">{new Date(post.date).getDate()}</span>
                          <span className="text-xl font-semibold  tracking-wider">{extractMonth(post.date)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col space-y-4">
                      <div className="flex items-center text-black text-sm space-x-4">
                        <span className="flex items-center text-[#FFA500]">
                          <FaCalendarAlt size={14} className="mr-1" />
                          {formatDate(post.date)}
                        </span>
                        <span className="text-black">/</span>
                        <span className="flex items-center text-[#FFA500]">
                          <FaComments size={14} className="mr-1" />
                          {post.comments} Comments
                        </span>
                        <span className="text-black">/</span>
                        <span className="flex items-center text-[#FFA500]">
                          <PiUserCirclePlus size={14} className="mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-3 font-inter" style={{ fontFamily: "Inter, Arial, sans-serif" }}>
                        {post.description}
                      </p>
                      <Link
                        href={`/blog/${post.title.replace(/\s+/g, '-').toLowerCase()}`} // Generate a URL-friendly slug from title
                        className="self-start px-4 py-2 border border-[#FFA500] text-[#FFA500] rounded hover:bg-[#FFA500] hover:text-white flex items-center"
                      >
                        Read More
                        <span className="ml-2">
                          <MdArrowOutward />
                        </span>
                      </Link>

                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-200">No posts available.</p>
              )
            )}
            <div className="flex justify-center space-x-2 mt-6">
              <button
                onClick={() => paginate(currentPage - 1)}
                className="px-4 py-2 bg-gray-200 hover:bg-[#FFA500] rounded disabled:bg-gray-400"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 ${currentPage === index + 1 ? "bg-[#FFA500]" : "bg-gray-200"} hover:bg-[#FFA500] rounded`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                className="px-4 py-2 bg-gray-200 hover:bg-[#FFA500] rounded disabled:bg-gray-400"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
          <div className="flex">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
