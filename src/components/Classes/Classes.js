import React from "react";

const Classes = () => {
  return (
    <section>
      <div className="lg:flex container mx-auto items-center pt-24 pb-12 px-6">
        <div className="space-y-4 mb-6 lg:mb-0">
          <p className="text-main font-bold capitalize">CLASSES</p>
          <h1 className="text-5xl font-bold">Find your perfect class</h1>
          <p className="w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <button className="py-2 px-8 bg-main text-lg font-bold text-white">View All Classes</button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
