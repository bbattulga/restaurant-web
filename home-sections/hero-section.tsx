import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  Dots,
  slidesToShowPlugin,
  arrowsPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";

const Carousel = dynamic(
  () => {
    return import("@brainhubeu/react-carousel");
  },
  { ssr: false }
);

const images = ["/images/bg1.jpeg", "/images/bg2.jpeg", "/images/bg3.jpeg"];
const heroTitles = [
  "Our Delicious Specialties",
  "The Best Place to Kick of Your Day",
  "Creamy Hot and Ready to Serve",
];
const Hero: React.FC = () => {
  const [itemIndex, setItemIndex] = useState(0);

  const handleItemIndex = (i) => {
    setItemIndex(i);
  };

  const heroTitle = useMemo(() => {
    return heroTitles[itemIndex % heroTitles.length];
  }, [itemIndex]);

  const gotoPrevSlide = () => {
    setItemIndex(itemIndex - 1 < 0 ? images.length - 1 : itemIndex - 1);
  };

  const gotoNextSlide = () => {
    setItemIndex(itemIndex + 1 >= images.length ? 0 : itemIndex + 1);
  };
  return (
    <>
      <section id="home" className="relative bg-no-repeat group">
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                intervals: 5500,
              },
            },
          ]}
          animationSpeed={1000}
          value={itemIndex}
          onChange={handleItemIndex}
        >
          {images.map((i) => {
            return (
              <div key={i} className="relative">
                <img className="w-screen h-screen overflow-hidden" src={i} />
                <div className="absolute left-0 right-0 top-0 bottom-0 z-20 bg-black opacity-40"></div>
                <div className="absolute left-0 right-0 top-0 bottom-0 z-30">
                  <div className="flex h-full items-center justify-center flex-col">
                    <h1 className="hero-text text-white uppercase text-5xl sm:text-7xl w-7/12 text-center">
                      {heroTitle}
                    </h1>
                    <div className="flex gap-3 mt-8">
                      <button className="p-5 bg-yellow-400 text-white  border-transparent border-2 hover:bg-transparent hover:border-yellow-400 transition duration-300 rounded-md">
                        Order Now
                      </button>
                      <button className="p-5  text-white border-white border-2 hover:bg-white hover:text-yellow-400 transition duration-300 rounded-md">
                        View Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="absolute left-1/2 transform -translate-x-1/2 pt-5 pb-5 bottom-5">
          <Dots
            className="carousel-dots"
            value={itemIndex}
            number={images.length}
            onChange={handleItemIndex}
          />
        </div>
        <ChevronLeftIcon
          onClick={gotoPrevSlide}
          className="absolute left-0 top-1/2 hidden md:block cursor-pointer w-8 h-8 mx-3 text-white transform -translate-y-1/2 transition duration-300 opacity-0 group-hover:opacity-100"
          style={{ fontSize: 3 }}
        />
        <ChevronRightIcon
          onClick={gotoNextSlide}
          className="absolute right-0 hidden md:block top-1/2 transform -translate-y-1/2 cursor-pointer w-8 h-8 mx-3 text-white transition duration-300 opacity-0 group-hover:opacity-100"
          style={{ fontSize: 3 }}
        />
      </section>
    </>
  );
};

{
  /* <div className="absolute flex flex-col justify-center items-center w-full h-full z-20">
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
        </div> */
}

export default Hero;
