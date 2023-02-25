import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/limitedServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="lg:pb-20 py-8 md:py-6">
      <div>
        <div className="w-2/5 mx-auto text-center space-y-6">
          <p className="text-xl text-main">OUR SERVICES</p>
          <h1 className="text-5xl">What we offer to you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto pt-20 gap-5">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
        <div className="text-center py-6">
          <Link to='/services'><button className="py-3 px-10 text-white text-lg font-bold bg-main">See All</button></Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
