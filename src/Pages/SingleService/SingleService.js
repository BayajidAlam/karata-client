import React from "react";
import { useLoaderData } from "react-router-dom";
import yoga from "../../assets/servicepage.jpg";

const SingleService = () => {
  const service = useLoaderData();
  const { price, service: name, _id, description } = service;
  return (
    <section className="py-6">
      <h1 className="text-3xl text-center font-bold text-main">{name}</h1>
      <div className="container mx-auto flex py-6 px-4 justify-between">
        <div className="w-3/5 mx-auto">
          <p className="leading-6 tracking-wide text-lg">
            <span className="text-xl font-bold text-main">Description:</span>{" "}
            {description}
          </p>
          <div className="text-center">
            <button className="py-2 mt-6 rounded-full bg-main text-white px-10">
              Purchage Now
            </button>
          </div>
        </div>
        <img className="w-1/5" src={yoga} alt="" />
      </div>
    </section>
  );
};

export default SingleService;
