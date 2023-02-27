import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../../components/Review/Review";

const SingleService = () => {
  const service = useLoaderData();
  const [ reviews, setReviews ] = useState([]);

  const {
    price,
    service: name,
    _id,
    description,
    teacherPic,
    teacher,
    position,
    institute,
    duration,
  } = service;

  // load review from db 
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?name=${name}`)
    .then(res=>res.json())
    .then(data=>{
      setReviews(data)
    })
  },[name])


  return (
    <section className="sm:py-6">
      <h1 className="lg:text-3xl md:text-2xl text-xl text-center font-bold text-main">
        {name}
      </h1>

      <div className="container mx-auto lg:flex lg:py-6 lg:px-4 px-2 justify-between">
        {/* course contain  */}
        <div className="lg:w-3/5 mx-auto lg:mt-6 p-4">
          <div className="lg:w-4/5 mx-auto">
            <p className="leading-6 tracking-wide text-lg">
              <span className="text-xl font-bold text-main">Description:</span>{" "}
              {description.length > 300
                ? description.slice(0, 900)
                : description}
            </p>
            <div className="lg:flex md:flex items-center justify-evenly">
              <p className="py-2 mt-6 text-center px-10 border-2 rounded-full border-main font-bold text-main text-lg">
                {price}
              </p>
              <p className="py-2 mt-6 text-center px-10 border-2 rounded-full border-main font-bold text-main text-lg">
                {duration}
              </p>
              <button className="py-2 mt-6 rounded-full bg-main text-white w-full md:w-44 lg:w-56 lg:px-10 font-bold text-lg">
                Purchage Now
              </button>
            </div>
          </div>
        </div>

        {/* teacher's details  */}
        <div className="lg:w-2/5 md:w-2/3 mx-auto">
          <p className="text-2xl text-center lg:text-left font-semibold my-1 md:my-2">
            Course Teacher
          </p>
          <div className="flex items-center md:justify-center lg:justify-start">
            <img
              className="lg:w-3/5 md:w-1/2  w-full h-64"
              src={teacherPic}
              alt=""
            />
          </div>
          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-bold">{teacher}</h1>
            <p className="text-xl">{position}</p>
            <p className="text-xl">{institute}</p>
          </div>
        </div>
      </div>

      {/* review section  */}
      <div>
        <div className="lg:flex container items-center mx-auto p-6">
              <div className="lg:w-1/2 flex  flex-col gap-4">
                  {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    />)
                  }
              </div>

              <div className="lg:w-1/2 flex flex-col gap-4 items-start">
                  <p className="text-lg">Make a Comment</p>
                  <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full lg:w-1/2" ></textarea>
                  <button className="bg-main px-8 py-2 text-white rounded-full font-bold text-lg">Comment</button>
              </div>
        </div>
      </div>
    </section>
  );
};

export default SingleService;
