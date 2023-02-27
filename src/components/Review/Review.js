import React from "react";

const Review = ({ review }) => {
  const { rating, UserName, picture, review: comment } = review;

  return (
    <div>
      <div className="flex items-start">
        <div className="avatar online mr-2">
          <div className="w-16 rounded-full">
            <img src={picture} alt="comment" />
          </div>
        </div>
        <div>
          <div>
          <h1>{UserName}</h1>
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
              defaultChecked
            />
          </div>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Review;
