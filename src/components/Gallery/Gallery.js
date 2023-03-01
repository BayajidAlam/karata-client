import React from "react";
import img1 from '../../assets/gl1.jpg';
import img2 from '../../assets/gl2.jpg';
import img3 from '../../assets/gl3.jpg';
import img4 from '../../assets/gl4.jpg';
import img5 from '../../assets/gl5.jpg';
import img6 from '../../assets/gl6.jpg';

const Gallery = () => {
  return (
    <section className="sm:py-32 py-8">
      <div className="space-y-6 container mx-auto">
        <p className="text-center text-main font-bold text-xl">GALLERY</p>
        <h1 className="text-center text-5xl font-bold pb-8">Our beautiful moments</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <img className="h-80 w-full" src={img1} alt="" />
              <img className="h-80 w-full" src={img2} alt="" />
              <img className="h-80 w-full" src={img3} alt="" />
              <img className="h-80 w-full" src={img4} alt="" />
              <img className="h-80 w-full" src={img5} alt="" />
              <img className="h-80 w-full" src={img6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
