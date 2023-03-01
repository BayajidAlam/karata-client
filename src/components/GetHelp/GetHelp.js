import React from "react";
import img from "../../assets/yoga-gettyimages-1142820079-promo.jpg";

const GetHelp = () => {
  return (
    <section className="lg:py-20">
      <div className="container mx-auto sm:flex items-center">
        <div className="sm:w-1/2">
          <img className="sm:w-3/4 mx-auto" src={img} alt="" />
        </div>
        <div className="sm:w-1/2 space-y-6 p-6 md:p-0" >
          <p className="text-xl font-bold text-main">NEED HELP?</p>
          <h1 className="text-5xl">Ready to get started?</h1>
          <form className="sm:w-3/4 space-y-6">
            <input
              className="border w-full py-4 px-4 border-black"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border w-full py-4 px-4 border-black"
              type="text"
              placeholder="Your email address"
            />
            <input
              className="border w-full py-4 px-4 border-black"
              type="text"
              placeholder="Your subject"
            />
            <textarea
              className="textarea textarea-bordered textarea-lg w-full rounded-none border-black"
              placeholder="Write your message"
            ></textarea>
            <div>
              <button className="py-2 px-8 bg-main text-white text-xl font-bold">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetHelp;
