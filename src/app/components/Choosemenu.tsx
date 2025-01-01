import React from "react";
import Image from "next/image";

export const Choosemenu = () => {
  const menuItems = [
    {
      name: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.6$",
      image: "menu2.png", // Image path without '../'
    },
    {
      name: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "menu3.png",
    },
    {
      name: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.5$",
      image: "menu4.png",
    },
    {
      name: "Italian Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.5$",
      image: "menu5.png",
    },
    {
      name: "Mild Butter",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "menu6.png",
    },
    {
      name: "Slice Beef",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "menu7.png",
    },
    {
      name: "Fresh Bread",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "menu8.png",
    },
    {
      name: "Mushroom Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "menu9.png",
    },
  ];

  return (
    <div className="relative flex flex-col items-center bg-cover bg-center overflow-hidden bg-[#0D0D0D] py-24 lg:py-28 ">
    {/* Header Section */}
    <div className="w-full px-4 lg:px-8 flex flex-col items-center text-center text-white mb-6 lg:mb-8">
      <h1 className="text-2xl lg:text-3xl font-greatVibes text-[#FF9F0D] mb-2 lg:mb-3">
        Choose & pick
      </h1>
      <h2 className="text-3xl lg:text-4xl font-helvetica font-extrabold">
        <span className="text-[#FF9F0D]">Fr</span>om Our Menu
      </h2>
    </div>
  
    {/* Menu Tabs */}
    <div className="flex flex-wrap justify-center gap-4 lg:gap-10 text-center mb-6 lg:mb-8 px-4">
      <p className="text-sm font-bold text-[#FF9F0D] cursor-pointer">Breakfast</p>
      <p className="text-sm text-white cursor-pointer">Lunch</p>
      <p className="text-sm text-white cursor-pointer">Dinner</p>
      <p className="text-sm text-white cursor-pointer">Dessert</p>
      <p className="text-sm text-white cursor-pointer">Drink</p>
      <p className="text-sm text-white cursor-pointer">Snack</p>
      <p className="text-sm text-white cursor-pointer">Soups</p>
    </div>
  
    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-x-12 px-4 lg:px-16 mt-4">
      {/* Left Image Section */}
      <div className="flex justify-center items-center">
        <Image
          src="/menu1.png"
          alt="Main Dish"
          width={1000}
          height={1000}
          className="w-64 h-64 lg:w-[1000] lg:h-[380] object-cover"
        />
      </div>
  
      {/* Menu Items Section */}
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:bg-[#333] cursor-pointer"
          >
            <Image
              src={`/${item.image}`}
              alt={item.name}
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1 text-white">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              <p className="text-sm text-[#FF9F0D] font-bold mt-2">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};
