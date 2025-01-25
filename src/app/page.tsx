import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Aboutus } from "./components/Aboutus";
import { FoodCategory } from "./components/FoodCategory";
import { Whychoose } from "./components/Whychoose";
import Image from "next/image";
import { Chafs } from "./components/Chafs";
import { Clients } from "./components/Clients";
import { Choosemenu } from "./components/Choosemenu";
import { Testimonial } from "./components/Testimonial";
import { Resturantactive } from "./components/Resturantactive";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";



export default function Home() {
  return (
    <main className="main-container">
      <Header />
      <HeroSection />
      <Aboutus />
      <FoodCategory />

      <div className="hidden lg:block container mx-auto relative">
        {/* Positioned Image */}
        <Image
          src="/leaf.png" // Ensure this path is correct in the public directory
          alt="Sample"
          width={600}
          height={600}
          className="absolute left-[1220px] mt-[40px] z-30 transform -translate-x-1/2 -translate-y-1/2 rotate-[-60deg] opacity-50"
        />
      </div>
      <Whychoose />
      <Clients />
      <Choosemenu />
      <Chafs />
      {/* Positioned Image */}
      <div className="hidden lg:block container mx-auto relative">
        <Image
          src="/leaf2.png"
          alt="Sample"
          width={600}
          height={600}
          className="absolute left-[39px] mt-[30px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-30 "
        />
      </div>
      <Testimonial />
      <Resturantactive />
      <Blog />




      <Footer />


    </main>
  );
}
