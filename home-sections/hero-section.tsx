import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-hero-1 w-screen h-screen bg-cover bg-no-repeat bg-gray-50">
      <div className="absolute z-10 opacity-40 bg-black w-full h-full"></div>
      <div className="absolute flex flex-col justify-center items-center w-full h-full z-20">
        <div className="text-white uppercase text-3xl">
          <h1 className="text-center">Our delicious specialities</h1>
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
  );
}
