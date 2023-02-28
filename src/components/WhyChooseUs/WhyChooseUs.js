import React from "react";
import CountUp from "react-countup";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#444444] text-white">
      <div className="container mx-auto flex items-center  py-20 px-12">
        <div className="w-1/2">
          <p className="text-main text-xl font-bold mb-4">WHY CHOOSE US</p>
          <div className="space-y-6 w-5/6">
            <h1 className="text-5xl font-bold">Over 1300+ complete work & still counting</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos
              itaque dolor. Deleniti temporibus quibusdam soluta quasi
              accusantium voluptatibus quo, est inventore minus maxime ipsa
              officiis quis provident aut asperiores!
            </p>
            <button className="bg-main text-xl py-3 font-bold px-8">Learn More</button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold"><CountUp start={0} end={100} duration={2} delay={1}/>K+</h1>
              <p className="text-xl">Satisfied Costumers</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl  font-bold"><CountUp start={0} end={30} duration={2} delay={1}/>K+</h1>
              <p className="text-xl">Yoga Style Workout</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold"><CountUp start={0} end={25} duration={2} delay={1}/>K+</h1>
              <p className="text-xl">Professionals Trainer</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold"><CountUp start={0} end={10} duration={2} delay={1}/>K+</h1>
              <p className="text-xl">Years of experience</p>
            </div>
 
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
