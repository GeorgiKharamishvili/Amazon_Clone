import React, { useState } from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { registr } from "../assets/index";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitting }, // Add isSubmitting from formState
    handleSubmit,
    watch,
    reset
  } = useForm();

  const [loading, setLoading] = React.useState(false); // Add loading state

  const onSubmit = async (data) => {
    try {
      setLoading(true); // Set loading to true on form submission

      const apiUrl =
        "https://ngglobalwebapi20231210182820.azurewebsites.net/api/user/registerUser";

      // Modify the data object to match the expected format
      const postData = {
        userName: data.name, // Assuming your form field for username is "name"
        password: data.password,
        email: data.email,
      };

      const response = await axios.post(apiUrl, postData);

    } catch (error) {
      console.error("API Error:", error);
    } finally {
      navigate("/")
      reset()
      setLoading(false); // Set loading back to false, whether success or failure
    }
  };

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[370px] mx-auto flex flex-col items-center"
        >
          <Link to="/">
            <img className="w-32" src={registr} alt="registr" />
          </Link>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input
                  className={`w-full lowercase py-1 border px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100`}
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: " Enter Your Name",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errors?.name?.message}
                    </p>
                  )}
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  className={`w-full lowercase py-1 border px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 `}
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: " Enter Your Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errors?.email?.message}
                    </p>
                  )}
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  className={`w-full lowercase py-1 border px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100`}
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Enter Your Password",
                    },
                  })}
                />

                <label className="label">
                  {errors.password?.type === "required" && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errors?.password?.message}
                    </p>
                  )}
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter password</p>
                <input
                  className={`w-full lowercase py-1 border px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100`}
                  type="password"
                  {...register("confirmPassword", {
                    required: "Enter Your Confirm Password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />

                <label className="label">
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </label>
              </div>
              <input
                type="submit"
                value={loading ? "Submitting..." : "Continue"}
                disabled={isSubmitting}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              />
            <p className="text-xs text-black leading-4 mt-4">
              By continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use </span>and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <div>
              <p className="text-xs text-black">
                Already have an account?{" "}
                <Link to="/sign">
                  <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Sign in{" "}
                    <span>
                      <ArrowRightIcon />
                    </span>
                  </span>
                </Link>
              </p>
              <p className="text-xs text-black -mt-2">
                Buying for work?{" "}
                <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                  Create a free business account
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 1996-2023, ReactBd.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Registration;
