import Image from 'next/image'
import React from 'react'

export const Clients = () => {
  return (
    <div
      className="text-white py-10 h-90 relative"
      style={{
        background: "radial-gradient(circle, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.9) 10%), url('/bg-client.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Helvetica, Arial, sans-serif', // Apply Helvetica font to this section
      }}
    >
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-center px-6 sm:px-12 md:px-36"> {/* Added gap and responsive padding */}
        <div className="space-y-1">
          <div className="flex justify-center mb-1">
            <Image
              src="/shaf.png"
              alt="Professional Chefs"
              width={48}
              height={48}
            />
          </div>
          <p className="font-bold text-lg">Professional Chefs</p>
          <p className="text-2xl font-bold">420</p>
        </div>

        <div className="space-y-1">
          <div className="flex justify-center mb-1">
            <Image
              src="/burger-cup.png"
              alt="Items Of Food"
              width={48}
              height={48}
            />
          </div>
          <p className="font-bold text-lg">Items Of Food</p>
          <p className="text-2xl font-bold">320</p>
        </div>

        <div className="space-y-1">
          <div className="flex justify-center mb-1">
            <Image
              src="/spoon.png"
              alt="Years Of Experience"
              width={48}
              height={48}
            />
          </div>
          <p className="font-bold text-lg">Years Of Experience</p>
          <p className="text-2xl font-bold">30+</p>
        </div>

        <div className="space-y-1">
          <div className="flex justify-center mb-1">
            <Image
              src="/pizza-slice.png"
              alt="Happy Customers"
              width={48}
              height={48}
            />
          </div>
          <p className="font-bold text-lg">Happy Customers</p>
          <p className="text-2xl font-bold">220</p>
        </div>
      </div>
    </div>
  )
}
