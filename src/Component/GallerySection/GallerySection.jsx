import React from "react";
import img1 from "../.././assets/img1.jpg"
import img2 from "../.././assets/img2.jpg"
import img3 from "../.././assets/img3.jpg"
import { FaCamera } from "react-icons/fa";
const GallerySection=() => {
  return (
    <section className="py-4 bg-base-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10  flex justify-center">
       <FaCamera/>  Event Highlights
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={img1}
              alt="Event 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={img2}
              alt="Event 2"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={img3}
              alt="Event 3"
              className="w-full h-64 object-cover"
            />
          </div>
        
         
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
