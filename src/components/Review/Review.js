import React from "react";

const Review = ({ review }) => {
  const { rating, userName, picture, review: comment } = review;
console.log(rating);
  return (
    <div>
      <div className="flex items-start">
        <div className="avatar online mr-2">
          <div className="w-14 rounded-full">
            <img src={picture} alt="comment" />
          </div>
        </div>
        <div>
          <div>
          <h1 className="font-bold text-md">{userName}</h1>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          </div>
          <p className="text-black font-semibold">{comment}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Review;
