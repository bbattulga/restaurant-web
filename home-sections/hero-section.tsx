import React from "react";
import Carousel from "../components/carousel";
import { Parallax } from "react-parallax";

const Hero: React.FC = () => {
  return (
    <>
      <section className="relative w-screen h-screen bg-cover bg-no-repeat bg-gray-50">
        <Carousel
          images={["/images/bg1.jpeg", "/images/bg2.jpeg", "/images/bg3.jpeg"]}
        />
        <div className="absolute flex flex-col justify-center items-center w-full h-full z-20">
          <div className="text-white uppercase text-3xl">
            <h1 className="text-center hero-text text-7xl w-3/4 mx-auto">
              Our delicious specialities
            </h1>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="px-5 py-3 rounded-md bg-yellow-500 text-white">
              Order Now
            </button>
            <button className="bg-transparent text-white border-white border-2 px-5 py-3 rounded-md">
              View Menu
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
