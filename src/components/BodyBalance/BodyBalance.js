import React from "react";
import img1 from "../../assets/girl yoga.jpg";
import img2 from "../../assets/girl yoga2.jpg";
import yoga3 from "../../assets/yoga3.jpg";
const BodyBalance = () => {
  return (
    <section className="pt-12">
      <div className="lg:flex md:flex">
        <div className="sm:w-1/3">
          <img className="h-80 w-full" src={img1} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center p-4 sm:w-1/3 bg-gray-100 h-80 space-y-6">
          <h1 className="text-4xl font-semibold">Body Balance</h1>
          <p className="w-4/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button>View Details</button>
        </div>
        <div className="sm:w-1/3">
          <img className="h-80 w-full" src={img2} alt="" />
        </div>
      </div>

      <div className="lg:flex md:flex ">
        <div className="flex flex-col justify-center items-center p-4 sm:w-1/3 bg-gray-100 h-80 space-y-6">
          <h1 className="text-4xl font-semibold">Yoga Sculpt</h1>
          <p className="w-4/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button>View Details</button>
        </div>
        <div className="sm:w-1/3">
          <img className="h-80 w-full" src={yoga3} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center p-4 sm:w-1/3 bg-gray-100 h-80 space-y-6">
          <h1 className="text-4xl font-semibold">Hatha Yoga</h1>
          <p className="w-4/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button>View Details</button>
        </div>
      </div>
    </section>
  );
};

export default BodyBalance;
