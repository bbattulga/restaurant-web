import React from "react";

interface CarouselProps {
  images: string[];
}

// const Owl: React.FC<CarouselProps> = (props) => {
//   return (
//     <OwlCarousel className="owl-theme" margin={10} loop nav>
//       {props.images.map((img) => (
//         <div className="item">
//           <img className="w-screen object-cover" src={img} />
//         </div>
//       ))}
//     </OwlCarousel>
//   );
// };

const Carousel: React.FC<CarouselProps> = (props) => {
  // return (
  //   <Owl
  //     images={["/images/bg1.jpeg", "/images/bg2.jpeg", "/images/bg3.jpeg"]}
  //   />
  // );
  return (
    <div className="absolute">
      <div className="carousel relative shadow-2xl bg-white">
        <div className="carousel-inner relative overflow-hidden w-full">
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            defaultChecked={true}
          />
          <div className="carousel-item absolute opacity-0">
            <SliderImage src="/images/bg1.jpeg" />
          </div>
          <label
            htmlFor="carousel-3"
            className="prev z-50 control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="next z-50 control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item absolute opacity-0">
            <SliderImage src="/images/bg2.jpeg" />
          </div>
          <label
            htmlFor="carousel-1"
            className="prev z-50 z-50 control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="next z-50 z-50 control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item absolute opacity-0">
            <SliderImage src="/images/bg3.jpeg" />
          </div>
          <label
            htmlFor="carousel-2"
            className="prev z-50 control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="next z-50 control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/* Add additional indicators for each slide*/}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

interface SliderImageProps {
  src: string;
}
function SliderImage(props: SliderImageProps) {
  return (
    <div className="relative block w-screen h-screen text-5xl text-center">
      <img
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        src={props.src}
      />
      <div className="absolut bg-black opacity-30 h-full w-full z-10"></div>
    </div>
  );
}

export default Carousel;
