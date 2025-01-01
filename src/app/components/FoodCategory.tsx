import React from 'react'
import Image from "next/image"; // Importing Image component from Next.js

export const FoodCategory = () => {
  return (
    <>
    <div className="relative h-auto  flex flex-col items-center justify-center bg-cover bg-center overflow-hidden bg-[#0D0D0D]">
    {/* Wrapper for the content */}
    <div className="w-full mx-auto px-16 lg:px-8 relative z-10 flex flex-col items-center text-center text-white mb-10">
      {/* Hero Content */}
      <h1 className="text-3xl font-greatVibes text-[#FF9F0D] mb-4">
        Food Category
      </h1>
      <h2 className="text-4xl font-helvetica font-extrabold">
        <span className="text-[#FF9F0D]">Ch</span>oose Food Item
      </h2>
    </div>

    {/* Grid Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 lg:px-16">
      {/* Image 1 with overlay boxes */}
      <div className="relative w-full h-64">
        <Image
          src="/Pic1.png" // Ensure this path is correct in the public directory
          alt="Product 1"
          width={640} // Specify the width of the image
          height={256} // Specify the height of the image
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        {/* White Box with "Save 30%" */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white text-[#FF9F0D] text-lg font-bold px-4 py-2 rounded-lg shadow-md">
            Save 30%
          </div>
        </div>
        {/* Orange Box with "Fast Food Dish" */}
        <div className="absolute top-40 left-[85px] transform -translate-x-1/2 bg-[#FF9F0D] text-white text-center font-bold px-4 py-2 rounded-lg w-2/3">
          Fast Food Dish
        </div>
      </div>

      {/* Image 2 */}
      <Image
        src="/Pic2.png" // Ensure this path is correct in the public directory
        alt="Product 2"
        width={640}
        height={256}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />

      {/* Image 3 */}
      <Image
        src="/Pic3.png" // Ensure this path is correct in the public directory
        alt="Product 3"
        width={640}
        height={256}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />

      {/* Image 4 */}
      <Image
        src="/Pic4.png" // Ensure this path is correct in the public directory
        alt="Product 4"
        width={640}
        height={256}
        className="w-full h-64 object-cover rounded-lg shadow-lg z-50"
      />
    </div>

 
  </div>
  </>
  )
}
