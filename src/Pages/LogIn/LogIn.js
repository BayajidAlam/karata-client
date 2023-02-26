import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
import pic from "../../assets/signin.jpg";

const LogIn = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row lg:flow-row container mx-auto  lg:py-24">
        <div className="sm:w-2/5 mx-auto shadow-2xl md:mt-12">
          <div className="p-6 sm:space-y-4 lg:mt-16">
            <h1 className="text-2xl font-bold text-center">Login</h1>
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

            <p className="text-lg font-bold text-another">
              New to karata?<Link to='/signUp'>Create new account</Link>
            </p>
            <div className="text-center">
              <button className="py-2 px-12 bg-another text-white font-bold text-xl rounded-full">
                Sign Up
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="flex items-center justify-center space-x-3">
              <FcGoogle className="text-3xl" />
              <FaGithub className="text-3xl" />
              <CiTwitter className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="sm:w-2/5 mx-auto flex justify-center items-center">
          <img className="w-full" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
