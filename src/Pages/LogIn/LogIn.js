import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pic from "../../assets/signin.jpg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast, Toaster } from "react-hot-toast";

const LogIn = () => {

  const { logInUser } = useContext(AuthContext);
  const [ logInError, setLogInError ] = useState('');

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // handle user log in 
  const handleLogin = (data) => {
    setLogInError('')
    logInUser(data.email,data.password)
    .then(result => {
      toast.success("User logged in successfully")
      navigate(from, { replace: true });
    })
    .catch(err=>{
      const message = err.message;
      setLogInError(message)
    })
  };

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row lg:flow-row container mx-auto  lg:py-24">
        <div className="sm:w-2/5 mx-auto shadow-2xl md:mt-12">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="p-6 sm:space-y-4 lg:mt-16">
              <h1 className="text-2xl font-bold text-center">Login</h1>
              <div className="space-y-1">
                <label className="text-lg font-semibold">Email</label>
                {errors.email && (
                    <p className="text-red-400 py-1">{errors.email?.message}</p>
                  )}
                <input
                  {
                    ...register("email",{
                      required: "Email is required",
                    })
                  }
                  className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                  type="email"
                  placeholder="example@yahoo.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-lg font-semibold">Password</label>
                {errors.password && (
                    <p className="text-red-400 py-1">{errors.password?.message}</p>
                  )}
                <input
                  {
                    ...register("password",{
                      required: "Password is required!",
                      minLength: { value: 6, message: "Password must be 6 character or longer"}
                    })
                  }
                  className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                  type="password"
                  placeholder="**********"
                />
              </div>
                
                  <p className="text-red-500">{logInError}</p>
                
              <p className="text-lg font-bold text-another">
              <Link to="/signUp">New to karata?Create new account</Link>
              </p>
              <div className="text-center">
                <button type="submit" className="py-2 px-12 bg-another text-white font-bold text-xl rounded-full">
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
          </form>
        </div>
        <div className="sm:w-2/5 mx-auto flex justify-center items-center">
          <img className="w-full" src={pic} alt="" />
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default LogIn;
