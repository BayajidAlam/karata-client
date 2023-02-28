import React from "react";

const AddService = () => {
  return (
    <section>
      <div className="container mx-auto bg-main  lg:py-12 lg:my-6">
        <form className="py-4 px-4">
          <h1 className="text-center text-3xl text-white capitalize mb-4">Add a new service</h1>
          <div className="lg:flex justify-evenly">
            <div className="lg:w-2/5 ms:mb-2">
              <div className="flex flex-col space-y-2 mb-2">
                <label className="text-xl text-white" htmlFor="">
                  Service Name
                </label>
                <input className="py-1 px-3 rounded" type="text" />
              </div>
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-white" htmlFor="">
                  Price
                </label>
                <input className="py-1 px-3 rounded" type="text"/>
              </div>
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-white" htmlFor="">
                  Duration
                </label>
                <input className="py-1 px-3 rounded" type="text" />
              </div>

              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-white" htmlFor="">
                  Description
                </label>
                <textarea
                  placeholder="Service Description"
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
              </div>
              <div>
                <label class="block text-xl font-medium text-white ">
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
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
                <label className="text-xl text-white" htmlFor="">
                  Teacher Name
                </label>
                <input className="py-1 px-3 rounded" type="text" />
              </div>
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-white" htmlFor="">
                  Position
                </label>
                <input className="py-1 px-3 rounded" type="text" />
              </div>
              <div className="flex flex-col  space-y-2 mb-2">
                <label className="text-xl text-white" htmlFor="">
                  Institute
                </label>
                <input className="py-1 px-3 rounded" type="text"/>
              </div>

              <label class="block font-medium text-xl text-white">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
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
         <button className="py-2 px-8 rounded-full text-xl font-bold bg-white ">Add Service</button>
         </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
