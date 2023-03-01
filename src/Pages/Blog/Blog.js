import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="pt-20">
      <div className="space-y-6">
        <p className="text-center font-bold text-xl">FAQs</p>
        <p className="text-5xl font-bold  text-center">
          Frequently Asked Question
        </p>
        <div className="sm:w-1/2 w-4/5 mx-auto flex justify-center items-center">
          <input
            className="sm:w-4/5 w-3/5 bg-slate-200 h-12 px-6"
            type="text"
            placeholder="Ask a question here?"
          />
          <button className="sm:w-1/5 w-2/5 bg-main text-white h-12 text-xl">
            Search
          </button>
        </div>
      </div>
      <div className="container mx-auto pt-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          
          <div className="card bg-base-100 shadow-md shadow-main mx-auto w-[450px] md:w-[350px] lg:w-[450px]">
            <div className="card-body">
              <h2 className="card-title ">Benifit of yoga</h2>
              <p>Yoga has become increasingly popular in recent years, and for good reason. The practice offers a wide range of benefits for both the body and the mind...</p>
              <div className="card-actions justify-end">
                <Link className="bg-main flex items-center justify-center px-2 py-1 rounded-full text-white">
                  <p className="text-xl mr-2">Read</p>
                  <BsFillArrowRightCircleFill className="text-xl"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md shadow-main mx-auto w-[450px] md:w-[350px] lg:w-[450px]">
            <div className="card-body">
              <h2 className="card-title">Best Meditation time</h2>
              <p>The best time to meditate can vary depending on individual preferences and schedules. Some people prefer to meditate first thing in the morning...</p>
              <div className="card-actions justify-end">
                <Link className="bg-main flex items-center justify-center px-2 py-1 rounded-full text-white">
                  <p className="text-xl mr-2">Read</p>
                  <BsFillArrowRightCircleFill className="text-xl"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md shadow-main mx-auto w-[450px] md:w-[350px] lg:w-[450px]">
            <div className="card-body">
              <h2 className="card-title">Best time for yoga</h2>
              <p>Yoga is a versatile and accessible practice that can be done at any time of day. Depending on your goals and preferences...</p>
              <div className="card-actions justify-end">
                <Link className="bg-main flex items-center justify-center px-2 py-1 rounded-full text-white">
                  <p className="text-xl mr-2">Read</p>
                  <BsFillArrowRightCircleFill className="text-xl"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md shadow-main mx-auto w-[450px] md:w-[350px] lg:w-[450px]">
            <div className="card-body">
              <h2 className="card-title">drink water in morning</h2>
              <p>Drinking water in the morning has been touted as a beneficial health habit by many experts and enthusiasts. Here are some potential...</p>
              <div className="card-actions justify-end">
                <Link className="bg-main flex items-center justify-center px-2 py-1 rounded-full text-white">
                  <p className="text-xl mr-2">Read</p>
                  <BsFillArrowRightCircleFill className="text-xl"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md shadow-main mx-auto w-[450px] md:w-[350px] lg:w-[450px]">
            <div className="card-body">
              <h2 className="card-title">Get out free course</h2>
              <p>"Get Out Free" courses are becoming increasingly popular as more people look for ways to upskill or learn something new without committing...</p>
              <div className="card-actions justify-end">
                <Link className="bg-main flex items-center justify-center px-2 py-1 rounded-full text-white">
                  <p className="text-xl mr-2">Read</p>
                  <BsFillArrowRightCircleFill className="text-xl"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md shadow-main mx-auto w-[450px] md:w-[350px] lg:w-[450px]">
            <div className="card-body">
              <h2 className="card-title">what people say about us</h2>
              <p>When it comes to building a reputation, what people say about us can have a significant impact on our personal and professional success...</p>
              <div className="card-actions justify-end">
                <Link className="bg-main flex items-center justify-center px-2 py-1 rounded-full text-white">
                  <p className="text-xl mr-2">Read</p>
                  <BsFillArrowRightCircleFill className="text-xl"/>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="text-center my-8">
          <button className="py-2 px-8 bg-main text-white">Read all </button>
        </div>
    </section>
  );
};

export default Blog;
