import React from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#444444] py-20">
      <div className="container mx-auto sm:flex justify-evenly items-center">
        <div className="text-white sm:w-1/4 p-6 md:p-4 lg:p-4">
          <h1 className="text-4xl font-bold my-6">Main Office</h1>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <MdWifiCalling3 className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">CALL NOW</p>
                <p className="text-gray-400">+88 01744 430 440</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <MdWifiCalling3 className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">EMAIL</p>
                <p className="text-gray-400">support@mail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <MdWifiCalling3 className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">LOCATION</p>
                <p className="text-gray-400">44 Canal Center Plaza #200 <br />
Alexandria, VA 22314, USA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white sm:w-1/4 p-6 md:p-4 lg:p-4">
          <h1 className="text-4xl font-bold my-6">Sub Office</h1>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <MdWifiCalling3 className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">CALL NOW</p>
                <p className="text-gray-400">+88 01744 430 440</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <MdWifiCalling3 className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">EMAIL</p>
                <p className="text-gray-400">support@mail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <MdWifiCalling3 className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">LOCATION</p>
                <p className="text-gray-400">44 Canal Center Plaza #200 <br />
Alexandria, VA 22314, USA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white sm:w-1/4 p-6 md:p-4 lg:p-4">
          <h1 className="text-4xl font-bold my-6">Office Time</h1>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <FaRegClock className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">MON - FRIDAY</p>
                <p className="text-gray-400">10:00AM - 07:00PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <FaRegClock className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">WEEKEND</p>
                <p className="text-gray-400">10:00AM - 01:00PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-main mr-3">
                <FaRegClock className="text-3xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold">NATIONAL HOLIDAY</p>
                <p className="text-gray-400">10:00AM - 01:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
