import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  // states
  const [image, setImage] = useState(null);
  const [teacherPic, setTeacherPic] = useState(null);
  // naviage
  const navigate = useNavigate();
  // hookform
  const { register, handleSubmit } = useForm();

  // host key
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddService = (data) => {
    const service = data.service;
    const price = data.price;
    const duration = data.duration;
    const description = data.description;
    const teacher = data.teacher;
    const position = data.position;
    const institute = data.institute;

    // send service Image for hosting
    const ServiceImage = data.image[0];
    hostServicePic(ServiceImage);
    // send teacher Image for hosting
    const teacherImage = data.imageTwo[0];
    hostTeacherPic(teacherImage);

    // make a object
    const ServiceObj = {
      teacher,
      teacherPic,
      position,
      institute,
      duration,
      image,
      price,
      service,
      description,
    };

    if (teacherPic && image) {
      // post to server
      fetch("https://karata-server-test.onrender.com/services/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ServiceObj),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Service added Successfully!");
            navigate("/services");
          }
        });
    }
  };

  // host service image to serve
  const hostServicePic = (img) => {
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        setImage(imgData.data.url);
      });
  };

  // host teacher image to serve
  const hostTeacherPic = (img) => {
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        setTeacherPic(imgData.data.url);
      });
  };

  return (
    <section>
      <div className="container mx-auto lg:py-12 lg:my-6">
        <form onSubmit={handleSubmit(handleAddService)} className="py-4 px-4">
          <h1 className="text-center text-3xl text-black capitalize mb-4">
            Add a new service
          </h1>
          <div className="lg:flex justify-evenly">
            <div className="lg:w-2/5 ms:mb-2">
              <div className="flex flex-col space-y-2 mb-2">
                <label className="text-xl text-black " htmlFor="">
                  Service Name
                </label>
                <input
                  {...register("service", {
                    required: true,
                  })}
                  className="py-3 px-3 rounded border border-gray-300"
                  type="text"
                  placeholder="service Name..."
                />
              </div>
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-black " htmlFor="">
                  Price
                </label>
                <input
                  {...register("price", {
                    required: true,
                  })}
                  className="py-3 px-3 rounded border border-gray-300"
                  type="text"
                  placeholder="Product price"
                />
              </div>
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-black " htmlFor="">
                  Duration
                </label>
                <input
                  {...register("duration", {
                    required: true,
                  })}
                  className="py-3 px-3 rounded border border-gray-300"
                  type="text"
                />
              </div>

              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-black " htmlFor="">
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: true,
                  })}
                  placeholder="Service Description"
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
              </div>
              <div>
                <label class="block text-xl font-medium text-black  ">
                  Service photo
                </label>
                <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          {...register("image", {
                            required: true,
                          })}
                          id="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5">
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-black " htmlFor="">
                  Teacher Name
                </label>
                <input
                  {...register("teacher", {
                    required: true,
                  })}
                  className="py-3 px-3 rounded border border-gray-300"
                  type="text"
                />
              </div>
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-black " htmlFor="">
                  Position
                </label>
                <input
                  {...register("position", {
                    required: true,
                  })}
                  className="py-3 px-3 rounded border border-gray-300"
                  type="text"
                />
              </div>
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-black " htmlFor="">
                  Institute
                </label>
                <input
                  {...register("institute", {
                    required: true,
                  })}
                  className="py-3 px-3 rounded border border-gray-300"
                  type="text"
                />
              </div>

              <label class="block font-medium text-xl text-black ">
                Teacher photo
              </label>
              <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload2"
                      class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload2"
                        {...register("imageTwo", {
                          required: true,
                        })}
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="py-2 px-8 rounded-full text-xl font-bold bg-main text-white"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default AddService;
