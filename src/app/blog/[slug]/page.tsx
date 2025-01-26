"use client"; // Ensure this is a client-side component

import { useState, useEffect } from "react";
import { getPostData } from "@/sanity/getPostData"; // Import the function to fetch data
import imageUrlBuilder from "@sanity/image-url"; // Import the image URL builder
import { createClient } from "@sanity/client"; // Import the sanity client
import Image from "next/image"; // Import the Image component from next/image
import Breadcrumb from "@/app/components/Breadcrumb";
import SecondHeader from "@/app/components/SecondHeader";
import { Footer } from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";

// Initialize Sanity client
const sanityClient = createClient({
  projectId: "yourProjectId", // Replace with your Sanity project ID
  dataset: "yourDataset", // Replace with your Sanity dataset
  useCdn: true,
});

// Initialize Image URL builder
const builder = imageUrlBuilder(sanityClient);

// Helper function to generate the image URL
const urlFor = (source: any) => builder.image(source).url();

// Define PostData interface with tags
interface PostData {
  title: string;
  author: string;
  date: string;
  comments: number;
  imageUrl: {
    asset: {
      _ref: string;
    };
  } | null;
  description: string;
  content: string;
  tags: string[]; // Add tags array to interface
}

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const [postData, setPostData] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { slug } = params; // Extract the slug from the URL params
    console.log("Slug from URL:", slug); // Debugging the slug

    const fetchPostData = async () => {
      try {
        // Fetch the post data using the getPostData function
        const data = await getPostData(slug);

        if (data) {
          console.log("Post data:", data); // Log the fetched post data
          setPostData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
        setLoading(false);
      }
    };

    fetchPostData();
  }, [params]); // Run effect on params change

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is fetching
  }

  if (!postData) {
    return <div>No post found.</div>; // Handle the case when no post data is returned
  }

  // Debugging: Log imageUrl to see its structure
  console.log("Post image URL:", postData.imageUrl);

  // Generate the image URL using the helper function, if imageUrl is valid
  const imageUrl = postData.imageUrl ;

  console.log("Generated image URL:", imageUrl); // Debugging generated URL
  const pageTitle = "Blog Details";

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
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
            <div className="text-sm text-gray-500 mb-4">
              <span>{postData.author}</span> |{" "}
              <span>{new Date(postData.date).toLocaleDateString()}</span> |{" "}
              <span>{postData.comments} Comments</span>
            </div>

            {/* Image rendering with error handling */}
            <Image
              src={imageUrl} // Use the state variable for the image source
              alt={postData.title}
              className="w-full h-96 object-cover mb-6"
              width={1200} // Set a width for the image
              height={600} // Set a height for the image
              onError={() => {
                console.log("Image failed to load, setting fallback image");
              }}
            />

            {/* Display tags if available */}
            {postData.tags && postData.tags.length > 0 && (
              <div className="mt-4 mb-8">
                <h2 className="text-xl font-semibold">Tags:</h2>
                <ul className="flex gap-2 flex-wrap">
                  {postData.tags.map((tag, index) => (
                    <li key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-lg text-gray-700 mb-8">{postData.description}</p>

            {/* Render content if available */}
            {postData.content && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold">Content</h2>
                <div
                  className="text-gray-800 mt-4"
                  dangerouslySetInnerHTML={{ __html: postData.content }}
                />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <Sidebar />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
