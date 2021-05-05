import React, { useState, useEffect } from "react";
import Gallery from "react-image-gallery";

interface InstagramGalleryProps {}
export default function InstagramGallery() {
  const [images, setImages] = useState<IImage[]>([
    {
      original: "/images/bg1.jpeg",
      thumbnail: "/images/bg1.jpeg",
    },
    {
      original: "/images/bg2.jpeg",
      thumbnail: "/images/bg2.jpeg",
    },
    {
      original: "/images/bg3.jpeg",
      thumbnail: "/images/bg3.jpeg",
    },
    {
      original: "/images/bg4.jpeg",
      thumbnail: "/images/bg4.jpeg",
    },
  ]);
  return <Gallery items={images} />;
}

interface IImage {
  original: string;
  thumbnail?: string;
}
