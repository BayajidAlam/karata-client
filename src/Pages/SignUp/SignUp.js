import React from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/signup.jpg";
import "./SignUp.css";
import { FcGoogle } from 'react-icons/fc';


const SignUp = () => {
  return (
    <section>
      <div>
        <div className="flex container mx-auto  py-8">
          <div className="w-2/5 mx-auto shadow-2xl h-3/4">
            <div className="p-6 space-y-4">
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <p className="text-lg">
                Already have an account?<Link>Login</Link>
              </p>
              <div className="space-y-1">
                <label className="text-lg font-semibold">Name</label>
                <input
                  className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                  type="text"
                  placeholder="example: bayajid alam"
                />
              </div>
              <div className="space-y-1">
                <label className="text-lg font-semibold">Email</label>
                <input
                  className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                  type="email"
                  placeholder="example@yahoo.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-lg font-semibold">Password</label>
                <input
                  className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                  type="password"
                  placeholder="**********"
                />
              </div>
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Confirm Password
                </label>
                <input
                  className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                  type="password"
                  placeholder="**********"
                />
              </div>
              <div className="flex space-x-2 items-center">
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-md"
                />
                <p className="text-xl">Remember me</p>
              </div>
              <div className="text-center">
                <button className="py-2 px-12 bg-[#AACCFC] text-white font-bold text-xl rounded-full">
                  Sign Up
                </button>
              </div>
              <div className="divider">OR</div>
              <div>
                <FcGoogle/>
              </div>
            </div>
          </div>
          <div className="w-2/5 mx-auto">
            <img className="w-full h-3/4" src={pic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
