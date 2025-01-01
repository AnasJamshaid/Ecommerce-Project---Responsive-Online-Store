import Image from 'next/image'
import React from 'react'

export const Chafs = () => {
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
        {/* Card 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white h-[400px] z-30">
          <Image
            src="/chaf1.jpg"
            alt="Chef 1"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-44 rounded-tr-lg flex flex-col items-start">
            <h3 className="text-lg font-bold">D.Estwood</h3>
            <p className="text-sm">Chief Chef</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white h-[400px]">
          <Image
            src="/chaf2.jpg"
            alt="Chef 2"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-44 rounded-tr-lg flex flex-col items-start">
            <h3 className="text-lg font-bold">D.Scoriesh</h3>
            <p className="text-sm">Assistant Chef</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white h-[400px]">
          <Image
            src="/chaf3.jpg"
            alt="Chef 3"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-44 rounded-tr-lg flex flex-col items-start">
            <h3 className="text-lg font-bold">M. William</h3>
            <p className="text-sm">Advertising Chef</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white h-[400px]">
          <Image
            src="/chaf4.jpg"
            alt="Chef 4"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-44 rounded-tr-lg flex flex-col items-start">
            <h3 className="text-lg font-bold">W.Readfroad</h3>
            <p className="text-sm">Chef</p>
          </div>
        </div>

        
      </div>
    </div>

    {/* See More Button */}
    <div className="mt-8">
      <button className="px-10 py-3 text-white border-2 border-[#FF9F0D] rounded-full font-semibold hover:bg-[#FF9F0D] hover:text-white transition-all duration-300">
        See More
      </button>
    </div>
  </div>
  )
}
