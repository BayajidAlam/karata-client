import React, { useEffect, useState } from "react";
import Service from "../../components/Service/Service";

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="mt-12">
      <h1>ALl Services</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            services.map(service=><Service service={service}/>)
          }
      </div>
    </section>
  );
};

export default Services;
