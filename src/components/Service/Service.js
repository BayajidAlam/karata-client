import React from "react";
import { Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ service }) => {
  const { image, price, service: name, description } = service;
  AOS.init();
  return (
    <div data-aos="fade-up" className="w-96 mx-auto p-6 shadow-lg space-y-4">
      <PhotoProvider>
        <PhotoView src={image}>
          <img className="mx-auto" src={image} alt="" />
        </PhotoView>
      </PhotoProvider>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold ">{name}</h1>
        <p className="text-xl font-bold ">Price: ${price}</p>
      </div>
      <div>{description.length ? description.slice(0, 100) : description}</div>
      <Link className="flex items-center justify-center" to="/">
        <button className="mr-1 text-2xl font-bold text-main">
          view details
        </button>
        <GrFormNext className="font-bold text-xl" />
      </Link>
    </div>
  );
};

export default Service;
