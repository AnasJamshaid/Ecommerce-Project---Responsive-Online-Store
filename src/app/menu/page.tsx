// Ensure all imports are valid
import React from "react";
import SecondHeader from "../components/SecondHeader";
import { PiCoffee } from "react-icons/pi";
import Image from "next/image"; // Import Image component
import { Clients } from "../components/Clients";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/Footer";

export default function MenuPage() {
  const pageTitle = "Our Menu";

  return (
    <>
  
    <div className="main-container mx-auto">
    <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold">{pageTitle}</h1>
          <Breadcrumb />
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6 md:px-16 lg:px-32 bg-white text-[#333333] font-helvetica">
        {/* Starter Menu Section */}
        <div className="mb-20 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Image on the left */}
            <div>
              <Image
                src="/pic5.jpg"
                alt="Starter Dish"
                className="rounded-lg"
                width={500} // Specify the width
                height={670} // Specify the height
              />
            </div>

            {/* Text on the right */}
            <div className="space-y-11 font-helvetica">
              <PiCoffee className="text-[#FF9F0D] text-3xl " />
              {/* Starter Menu Title with Icon */}
              <div className="flex items-center space-x-2">
                <h2 className="text-4xl font-bold text-left">Starter Menu</h2>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Alder Grilled Chinook Salmon
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">32$</span>
                </div>
                <p className="text-[#333333]">
                  Toasted French bread topped with romesco, cheddar
                </p>
                <p className="text-[#333333]">550 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[#FF9F0D]">
                    Berries and Creme Tart
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">43$</span>
                </div>
                <p className="text-[#333333]">
                  Mascarpone, ricotta, mozzarella, kilaggio
                </p>
                <p className="text-[#333333]">700 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Tormentoso Bush Pizza Pintoage
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">14$</span>
                </div>
                <p className="text-[#333333]">
                  Ground cumin, avocado, peeled and cubed
                </p>
                <p className="text-[#333333]">1000 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Spicy Vegan Potato Curry
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">35$</span>
                </div>
                <p className="text-[#333333]">
                  Sprinkle cashew cheese, crumbled blue cheese
                </p>
                <p className="text-[#333333]">600 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Course Section */}
        <div>
          <PiCoffee className="text-[#FF9F0D] text-3xl mb-6" />
          <h2 className="text-4xl font-bold mb-10 text-left">Main Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Text on the left */}
            <div className="space-y-11 font-helvetica">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Optic Big Breakfast Combo Menu
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">32$</span>
                </div>
                <p className="text-[#333333]">
                  Toasted French bread topped with romesco, cheddar
                </p>
                <p className="text-[#333333]">560 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Cashew Chicken With Stir-Fry
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">43$</span>
                </div>
                <p className="text-[#333333]">
                  Coriander, ricotta, mozzarella, kilaggio
                </p>
                <p className="text-[#333333]">700 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Vegetables & Green Salad
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">14$</span>
                </div>
                <p className="text-[#333333]">
                  Ground cumin, avocado, peeled and cubed
                </p>
                <p className="text-[#333333]">500 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Spicy Vegan Potato Curry
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">35$</span>
                </div>
                <p className="text-[#333333]">
                  Sprinkle cashew cheese, crumbled blue cheese
                </p>
                <p className="text-[#333333]">600 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
            </div>

            {/* Image on the right */}
            <div>
              <Image
                src="/pic6.jpg"
                alt="Main Course"
                className="rounded-lg mt-8 md:-mt-36"
                width={500} // Specify the width
                height={670} // Specify the height
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      {/* Clients Section with full-width styling */}
      <div className="w-full  bg-white  py-12 -mt-36">
        <Clients />
      </div>

      <div className="py-12 px-6 md:px-16 lg:px-32 bg-white text-[#333333] font-helvetica">
        {/* Starter Menu Section */}
        <div className="mb-20 mt-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Image on the left */}
            <div>
              <Image
                src="/pic7.jpg"
                alt="Starter Dish"
                className="rounded-lg"
                width={500} // Specify the width
                height={670} // Specify the height
              />
            </div>

            {/* Text on the right */}
            <div className="space-y-11">
              <PiCoffee className="text-[#FF9F0D] text-3xl" />
              {/* Starter Menu Title with Icon */}
              <div className="flex items-center space-x-2">
                <h2 className="text-4xl font-bold text-left">Dessert</h2>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Fig and lemon cake</h3>
                  <span className="text-[#FF9F0D] font-bold">32$</span>
                </div>
                <p className="text-[#333333]">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-[#333333]">560 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Creamy mascarpone cake
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">43$</span>
                </div>
                <p className="text-[#333333]">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-[#333333]">700 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Pastry, blueberries, lemon juice
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">14$</span>
                </div>
                <p className="text-[#333333]">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-[#333333]">1000 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Pain au chocolat</h3>
                  <span className="text-[#FF9F0D] font-bold">35$</span>
                </div>
                <p className="text-[#333333]">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-[#333333]">560 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Course Section */}
        <div>
          <PiCoffee className="text-[#FF9F0D] text-3xl mb-6" />
          <h2 className="text-4xl font-bold mb-10 text-left">Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Text on the left */}
            <div className="space-y-11">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Caffè macchiato</h3>
                  <span className="text-[#FF9F0D] font-bold">32$</span>
                </div>
                <p className="text-[#333333]">
                  Toasted French bread topped with romesco, cheddar
                </p>
                <p className="text-[#333333]">560 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Aperol Spritz Capacianno
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">43$</span>
                </div>
                <p className="text-[#333333]">
                  Coriander, ricotta, mozzarella, kilaggio
                </p>
                <p className="text-[#333333]">700 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Caffe Latte Campuri</h3>
                  <span className="text-[#FF9F0D] font-bold">14$</span>
                </div>
                <p className="text-[#333333]">
                  Ground cumin, avocado, peeled and cubed
                </p>
                <p className="text-[#333333]">500 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Tormentoso BushTea Pintoage
                  </h3>
                  <span className="text-[#FF9F0D] font-bold">35$</span>
                </div>
                <p className="text-[#333333]">
                  Sprinkle cashew cheese, crumbled blue cheese
                </p>
                <p className="text-[#333333]">600 CAL</p>
                <div className="border-t-2 border-dotted my-4"></div>
              </div>
            </div>

            {/* Image on the right */}
            <div>
              <Image
                src="/pic8.jpg"
                alt="Main Course"
                className="rounded-lg w-full h-[670px] object-cover"
                width={500}
                height={670}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section with full-width styling */}
      <div className="w-full bg-white py-12">
        {/* New title "Partners & Clients" with font-inter */}
        <h2 className="text-center text-[#333333] text-xl font-normal mb-1 font-inter">
          Partners & Clients
        </h2>

        {/* Existing title "We work with the best people" with font-helvetica */}
        <h2 className="text-center text-[#333333] text-4xl font-bold mb-6 font-helvetica">
          We work with the best people
        </h2>

        {/* Client logos with consistent size */}
        <div className="flex justify-center gap-8 flex-wrap opacity-75">
          <Image
            src="/image.png"
            alt="Client Logo"
            className="w-40 h-40 object-contain"
            width={160}
            height={160}
          />
          <Image
            src="/bakery.png"
            alt="Bakery Logo"
            className="w-40 h-40 object-contain"
            width={160}
            height={160}
          />
          <Image
            src="/forkandspoon.png"
            alt="Fork and Spoon"
            className="w-40 h-40 object-contain"
            width={160}
            height={160}
          />
          <Image
            src="/wolfcoffee.png"
            alt="Wolf Coffee"
            className="w-40 h-40 object-contain"
            width={160}
            height={160}
          />
          <Image
            src="/bistro.png"
            alt="Bistro"
            className="w-40 h-40 object-contain"
            width={160}
            height={160}
          />
          <Image
            src="/bakery.png"
            alt="Bakery 2"
            className="w-40 h-40 object-contain"
            width={160}
            height={160}
          />
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}
