import React, { useContext, useEffect, useState } from "react";
import Service from "../../components/Service/Service";
import banner from "../../assets/banner.png";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Loading from "../../components/Loading/Loading";

const Services = () => {
  const { loading } = useContext(AuthContext)
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div className="flex justify-center items-center shadow py-4 shadow-main">
          <div className="w-2/5">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Special session on karata</h1>
              <p className="text-xl font-semibold">
                <span className="text-2xl font-bold">Guest:</span> Sankar Pankha
              </p>
              <p className="text-xl">Free for all</p>
              <button className="py-3 px-10 text-white text-lg font-bold bg-main">
                Book Now
              </button>
            </div>
          </div>
          <img className="w-2/5" src={banner} alt="" />
        </div>

        <h1 className="text-center font-bold text-main text-2xl py-8">ALL Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {services.map((service) => (
            <Service service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
