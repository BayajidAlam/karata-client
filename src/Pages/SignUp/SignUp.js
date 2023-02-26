import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pic from "../../assets/signup.jpg";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast, Toaster } from "react-hot-toast";

const SignUp = () => {

  const { createUser, updateUser  } = useContext(AuthContext);
  const [signUpError, setSignUpError ] = useState("");

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSIgnUp = (data) => {
    setSignUpError('');
    // create user 
    createUser(data.email,data.password)
    .then(result => {
      toast.success("User created Successfully")

      // create a object for update user 
      const userInfo = {
        displayName : data.name
      }
      // update user 
      updateUser(userInfo)
      .then(()=>{
        toast.success('Profile updated')
        navigate(from, { replace: true });
      })
      .catch(error=>{
        const message = error.message;
      setSignUpError(message)
      })

    })
    .catch((error)=>{
      const message = error.message;
      setSignUpError(message);
    })
  };

  

  return (
    <section>
      <div>
        <div className="flex flex-col-reverse md:flex-row lg:flow-row container mx-auto  py-0 lg:py-16">
          <div className="sm:w-2/5 mx-auto shadow-2xl">
            <form onSubmit={handleSubmit(handleSIgnUp)}>
              <div className="p-6 sm:space-y-4">
                <h1 className="text-2xl font-bold">Sign Up</h1>
                <p className="text-lg text-another font-bold">
                <Link to="/login">Already have an account?Login</Link>
                </p>
                <div className="space-y-1">
                  <label className="text-lg font-semibold">Name</label>
                  {errors.name && (
                    <p className="text-red-400 py-1">{errors.name?.message}</p>
                  )}
                  <input
                    {...register("name", {
                      required: "Name is required!",
                    })}
                    className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                    type="text"
                    placeholder="example: bayajid alam"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-lg font-semibold">Email</label>
                  {errors.email && (
                    <p className="text-red-400 py-1">{errors.email?.message}</p>
                  )}
                  <input
                    {...register("email", {
                      required: "Email Address is required!",
                    })}
                    className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                    type="email"
                    placeholder="example@yahoo.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-lg font-semibold">Password</label>
                  {errors.password && (
                    <p className="text-red-400 py-1">
                      {errors.password?.message}
                    </p>
                  )}
                  <input
                    {...register("password", {
                      required: "Password is required!",
                      minLength: { value: 6, message: "Password must be 6 character or longer"},
                      pattern: { value: /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/, message: "Password must be strong"}
                    })}
                    className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                    type="password"
                    placeholder="**********"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-lg font-semibold">
                    Confirm Password
                  </label>
                  {errors.confirmPassword && (
                    <p className="text-red-400 py-1">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
                  <input
                    {...register("confirmPassword", {
                      required: "Confirm Password is required!",
                      minLength: { value: 6, message: "Password must be 6 character or longer"}
                    })}
                    className="w-full bg-slate-100 py-2 px-2 rounded-lg placeholder:italic"
                    type="password"
                    placeholder="**********"
                  />
                </div>
                <p className="text-red-500">{signUpError}</p>
                <div className="flex space-x-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-md"
                  />
                  <p className="text-xl">Remember me</p>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="py-2 px-12 bg-another text-white font-bold text-xl rounded-full"
                  >
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
      </div>
      <Toaster/>
    </section>
  );
};

export default SignUp;
