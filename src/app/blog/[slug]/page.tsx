"use client"; // Ensure this is a client-side component

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import SecondHeader from "@/app/components/SecondHeader";
import { Footer } from "@/app/components/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";
import Sidebar from "@/app/components/Sidebar";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import { PiUserCirclePlus } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import CommentForm from "@/app/components/CommentForm";

// Function to format date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

interface BlogPost {
  title: string;
  date: string;
  author: string;
  description: string; // Blog description
  content: string; // Full blog content
  comments: number;
  imageUrl: string;
  tags?: string[]; // Optional tags property
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yourProjectId",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "yourDataset",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ params }) => {
  const { slug } = params;

  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlogPost = async () => {
      const query = `*[_type == "blogPost" && slug.current == $slug][0]{
        title,
        date,
        author,
        description,
        content,
        comments,
        "imageUrl": image.asset->url,
        tags[] 
      }`;

      try {
        const data = await client.fetch(query, { slug });
        if (!data) {
          setError("Blog post not found.");
        } else {
          setBlogPost(data);
        }
      } catch (err) {
        setError("Error fetching blog post. Please try again later.");
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl p-6 space-y-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side Content Skeleton */}
            <div className="w-full lg:w-2/3">
              <div className="bg-gray-200 animate-pulse h-72 rounded-lg mb-6"></div> {/* Hero Image Skeleton */}
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 animate-pulse w-3/4 rounded"></div> {/* Title Skeleton */}
                <div className="h-4 bg-gray-200 animate-pulse w-1/2 rounded"></div> {/* Metadata Skeleton */}
                <div className="h-4 bg-gray-200 animate-pulse w-full rounded"></div> {/* Description Skeleton */}
                <div className="h-8 bg-gray-200 animate-pulse w-full rounded"></div> {/* Content Skeleton */}
              </div>
            </div>

            {/* Right Side Sidebar */}
            <div className="lg:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <SecondHeader />

      {/* Hero Section */}
      <div className="relative text-white h-72 bg-cover bg-center" style={{ backgroundImage: "url('/page-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold text-center">Blog Details</h1>
          <Breadcrumb />
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Content */}
          <div className="w-full lg:w-2/3">
            <img
              src={blogPost.imageUrl || "/fallback-image.jpg"}
              alt={blogPost.title || "Blog Image"}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <div className="mt-6 text-gray-500">
              <div className="flex items-center text-black text-sm space-x-4">
                <span className="flex items-center text-[#FFA500]">
                  <FaCalendarAlt size={14} className="mr-1" />
                  {formatDate(blogPost.date)}
                </span>
                <span className="text-black">/</span>
                <span className="flex items-center text-[#FFA500]">
                  <FaComments size={14} className="mr-1" />
                  {blogPost.comments} Comments
                </span>
                <span className="text-black">/</span>
                <span className="flex items-center text-[#FFA500]">
                  <PiUserCirclePlus size={14} className="mr-1" />
                  {blogPost.author}
                </span>
              </div>
              <h2 className="text-2xl mt-7 font-bold text-gray-800">{blogPost.title}</h2>
              <hr className="my-4 border-t-2 border-gray-300" />
            </div>
            <div className="mt-6 text-lg text-gray-700">
              <p>{blogPost.description}</p>
            </div>
            <hr className="my-4 border-t-2 border-gray-300" />
            {/* Tags and Social Media Section */}
            <div className=" flex justify-between items-center  pt-6">
              {/* Left Side: Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <h3 className="text-xl font-semibold">Tags:</h3>
                  {blogPost.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Right Side: Social Media Icons */}
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-semibold text-gray-700 mb-0 mr-4">Share this post:</h3>

                <div className="flex space-x-4 items-center">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="bg-gray-300 hover:bg-[#FF9F0D] p-3 rounded-full text-gray-700 hover:text-white transition-all duration-300"
                  >
                    <FaFacebookF size={14} />
                  </a>

                  <a
                    href="#"
                    aria-label="Twitter"
                    className="bg-gray-300 hover:bg-[#FF9F0D] p-3 rounded-full text-gray-700 hover:text-white transition-all duration-300"
                  >
                    <FaTwitter size={14} />
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="bg-gray-300 hover:bg-[#FF9F0D] p-3 rounded-full text-gray-700 hover:text-white transition-all duration-300"
                  >
                    <FaInstagram size={14} />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="bg-gray-300 hover:bg-[#FF9F0D] p-3 rounded-full text-gray-700 hover:text-white transition-all duration-300"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              </div>

            </div> 
            <br />
            <hr className="my-4 border-t-2 border-gray-300" />

            <div className="mt-10">   <CommentForm /></div>

          </div>

          {/* Right Side Sidebar */}
          <div className="lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};




export default BlogDetails;
