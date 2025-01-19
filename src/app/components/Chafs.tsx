'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getChefsData } from '@/sanity/chefsDataFetching'; // Import the data fetching function
import { urlFor } from '@/sanity/lib/image'; // Assuming you're using urlFor like in ShopPage

// Define Chef type
interface Chef {
  _id: string;
  name: string;
  position: string;
  image: {
    asset: {
      url: string;
    };
  };
}

export const Chafs = () => {
  const [chefs, setChefs] = useState<Chef[]>([]); // Use the Chef type here
  const [visibleCount, setVisibleCount] = useState(4); // State to manage the number of visible chefs

  useEffect(() => {
    const fetchChefs = async () => {
      const data = await getChefsData();
      setChefs(data); // Update the state with fetched chef data
    };
    fetchChefs();
  }, []); // Fetch chefs data only once when the component mounts

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 2); // Increase the visible count by 2
  };

  return (
    <div className="relative h-auto flex flex-col items-center justify-center bg-[#0D0D0D] overflow-hidden">
      {/* Wrapper for the content */}
      <div className="w-full mx-auto px-16 lg:px-8 relative z-10 flex flex-col items-center text-center text-white mb-10 mt-28">
        {/* Hero Content */}
        <h1 className="text-3xl font-greatVibes text-[#FF9F0D] mb-4">Chefs</h1>
        <h2 className="text-4xl font-helvetica font-extrabold">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h2>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto md:px-6 lg:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.slice(0, visibleCount).map((chef) => (
            <div key={chef._id} className="relative group overflow-hidden rounded-lg shadow-lg bg-white h-[400px] z-30">
              <Image
                src={chef.image ? urlFor(chef.image).url() : '/default-image.jpg'} // Fallback image if no chef image is found
                alt={chef.name}
                width={400} // Fixed width
                height={400} // Fixed height
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-44 rounded-tr-lg flex flex-col items-start">
                <h3 className="text-lg font-bold">{chef.name}</h3>
                <p className="text-sm">{chef.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      {visibleCount < chefs.length && ( // Show the button only if there are more chefs to show
        <div className="mt-8">
          <button
            onClick={handleSeeMore}
            className="px-10 py-3 text-white border-2 border-[#FF9F0D] rounded-full font-semibold hover:bg-[#FF9F0D] hover:text-white transition-all duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};
