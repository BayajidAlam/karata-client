import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { AiFillDelete } from "react-icons/ai";
import { toast, Toaster } from "react-hot-toast";
import Modal from "../../components/Modal/Modal";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [editReview, SetEditReview] = useState(null);

  //------------fetch all review--------------//
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviewsquery", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://karata-server.vercel.app/reviewsquery?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  //------------fetch all review--------------//

  // delete a review
  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`https://karata-server.vercel.app/review/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Review deleted successfully");
            refetch();
          }
        });
    }
  };

  return (
    <section className="py-8">
      <div>
        <div className="container mx-auto">
          <div className="overflow-x-auto w-full h-screen">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Details</th>
                  <th>Your Review</th>
                  <th>Edit Comment</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {reviews.map((review, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{review.ServiceName}</div>
                          <div className="text-sm opacity-50">{review._id}</div>
                        </div>
                      </div>
                    </td>
                    <td>{review.review}</td>
                    <td>
                      <button className=""></button>
                      <label
                        onClick={() => SetEditReview(review)}
                        htmlFor="update_comment_modal"
                        className="btn btn-ghost px-4 py-1 bg-main text-white text-xl font-bold rounded"
                      >
                        Edit
                      </label>
                    </td>
                    <th>
                      <button
                        onClick={() => handleDeleteReview(review._id)}
                        className="btn btn-ghost text-2xl bg-main rounded-full text-white"
                      >
                        <AiFillDelete />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            {editReview && (
              <Modal
                editReview={editReview}
                refetch={refetch}
                SetEditReview={SetEditReview}
              />
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default MyReview;
