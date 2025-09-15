import ImageGallery from "./ImageGallery";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<
    Array<{ src: string; alt: string; id: number }>
  >([]);

  useEffect(() => {
    const imageFiles = [
      "modern.jpg",
      "boston.jpg",
      "nyc.jpg",
      "modern2.jpg",
      "sj.jpg",
      "sunsetnyc.jpg",
      "sunset.jpg",
      "flushing.jpg",
      "bus.JPG",
      "fog.JPG",
      "mico.JPG",
      "nature.jpg",
      "ithaca.jpg",
      "dumbo.jpg",
      "waterfront.jpg",
      "3706.jpg",
      "bunt.jpeg",
      "landscapenyc.jpg",
      "morrison.JPG",
      "sf.jpg",
    ];

    const images = imageFiles.map((filename, index) => ({
      src: `/img/${filename}`,
      alt: filename.split(".")[0],
      id: index + 1,
    }));

    setGalleryImages(images);
  }, []);

  return (
    <>
      <div className="sm:w-sm w-xs pt-10 sm:pt-0 sm:pl-20">
        <p className="mb-4 leading-tight">
          Comprised primarily of sharp corners of buildings, city views, and
          concerts.
        </p>
        <p className="text-base mb-4 leading-tight">
          A collection of moments captured through the lens of an iPhone 15 Pro
          Max.
        </p>
        <p>12MP 2x Telephoto: 48 mm, ƒ / 1.78 aperture.</p>
      </div>

      <div className="sm:w-sm w-xs pt-5 sm:pt-0 sm:pl-32 sm:flex-1">
        <ImageGallery images={galleryImages} />
      </div>
    </>
  );
}
