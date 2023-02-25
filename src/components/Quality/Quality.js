import React from "react";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TbCandle } from "react-icons/tb";
import { GiSkippingRope } from "react-icons/gi";

const Quality = () => {
  return (
    <section className="bg-[#444444] md:mt-4">
      <div className="container mx-auto py-10 px-4 lg:px-0 sm:flex justify-between items-center md:gap-4">
        <div className="lg:w-1/5">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="mx-auto"
              src="https://www.youtube.com/embed/v7SN-d4qXx0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="lg:w-1/5 space-y-4 text-white">
          <MdOutlinePrivacyTip className="text-5xl text-main" />
          <p className="text-3xl">Private Session</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            facilis!
          </p>
        </div>
        <div className="lg:w-1/5 space-y-4 text-white">
          <GiSkippingRope  className="text-5xl text-main"/>
          <p className="text-3xl">Private Session</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            facilis!
          </p>
        </div>
        <div className="lg:w-1/5 space-y-4 text-white">
          <TbCandle className="text-5xl text-main"/>
          <p className="text-3xl">Program & Diet</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            facilis!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
