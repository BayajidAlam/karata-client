import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Modal = ({ editReview, SetEditReview, refetch }) => {
  const { ServiceName, _id, review } = editReview;
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    // get and set New review
    let newReview = form.newReview.value;
    if (newReview === "") {
      newReview = review;
    }

    // make obj which would be updated
    const user = {
      newReview,
    };

    //------------send new data to server for update--------//
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("User updated successfully!");
          form.reset();
          navigate("/myReview");
          refetch();
          SetEditReview(null);
        }
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="update_comment_modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="update_comment_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleUpdate} className="space-y-4">
            <h3 className="text-lg font-bold">{ServiceName}</h3>
            <input
              className="w-full text-lg border px-2 py-2 rounded"
              type="text"
              defaultValue={_id}
              readOnly
            />
            <textarea
              placeholder="Bio"
              name="newReview"
              className="textarea textarea-bordered textarea-md w-full text-lg"
              defaultValue={review}
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-main px-4 font-bold text-white rounded-full py-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Modal;
