import React from "react";
import img1 from "../../assets/pic1.jpg";
import img2 from "../../assets/pic2.jpg";
import plesentPic from "../../assets/pleasent.png";
import adequtePic from "../../assets/adequote.png";

const WhoWeAre = () => {
  return (
    <section className="sm:py-20 py-8 md:py-6">
      <div className="sm:flex container mx-auto justify-center items-center">
        <div className="sm:w-1/2 pb-4 md-pb-0 lg:pb-0">
          <div className="sm:w-3/5 w-4/5 space-y-6 mx-auto">
            <p className="font-bold text-main">WHO WE ARE</p>
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
              The best yoga class that will make you feel relaxed
            </h1>
            <p>
              Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc
              pulvinar sapien et ligula ullamcorper malesuada. Tellus rutrum
              tellus pellentesque eu tincidunt tortor.
            </p>
            <div className="space-y-6">
              <div className="flex w-5/6 justify-between items-center">
                <img src={plesentPic} alt="" />
                <div className="space-y-2 ml-4">
                  <h1 className="text-2xl font-bold">Pleasant Situation</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="flex w-5/6 justify-between items-center">
                <img src={adequtePic} alt="" />
                <div className="space-y-2 ml-4">
                  <h1 className="text-2xl font-bold">Adequate Tools</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                
              </div>
              <button className="py-3 px-10 text-white text-lg font-bold bg-main">More About Us</button>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 ">
          <img className="h-[350px] mb-4" src={img1} alt="" />
          <img className="h-[350px]" src={img2} alt="" />
        </div>
      </div>
           
    </section>
  );
};

export default WhoWeAre;
