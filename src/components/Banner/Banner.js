import React from "react";
import yoga from "../../assets/yoga.jpg";

const Banner = () => {
  return (
    <section className="pt-6 bg-white">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center container mx-auto">
        <div className="lg:w-1/2 w-5/6 mx-auto lg:space-y-12 space-y-6">
          <p className="text-main font-semibold text-lg">WELCOME TO KARATA</p>
          <div className="lg:w-4/5 lg:space-y-12 space-y-6">
            <h1 className="lg:text-6xl text-2xl font-bold md:text-3xl">Feel the lightness of your body</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
             <button className="py-3 px-16 text-white text-lg font-bold bg-main">Get Started</button>

             <p className="border-l-2 border-main w-4/5 pl-4">“I am very satisfied to learn yoga at Karata. The teacher guides well so it feels fun”</p>

             <div className="flex justify-between items-center lg:w-3/6 w-3/5">
              <img className="w-16 rounded-full" src={yoga} alt="" />
              <div>
                <h1>Olivia Wilson</h1>
                <p>Student of Karata</p>
              </div>
             </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={yoga} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
