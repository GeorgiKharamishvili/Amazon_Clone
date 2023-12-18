import React, { useState } from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { registr } from "../assets/index";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Sign = () => {
  const {
    register,
    formState: { errors, isSubmitting }, // Add isSubmitting from formState
    handleSubmit,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {

    try {
      setLoading(true);

      const apiUrl =
        "https://ngglobalwebapi20231210182820.azurewebsites.net/api/User/LogIn";

      // Make a POST request to your API endpoint
      const response = await axios.post(apiUrl, {
        email: data.email,
        password: data.password,
      });

      // Handle the response as needed
     
      const result = response.data;
      // You may want to perform additional actions based on the response
     
       if(response.data.jwt){

        localStorage.setItem("token", response.data.jwt);
        const decoded = jwtDecode(response.data.jwt);
 

        
        navigate("/");

       }

  
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[350px] mx-auto flex flex-col items-center"
        >
          <Link to="/">
            <img className="w-32" src={registr} alt="registr" />
          </Link>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Sign in
            </h2>
            <div className="flex flex-col gap-3">
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
                  className={`w-full lowercase py-1 border px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 `}
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
              <input
                type="submit"
                value={loading ? "Submitting..." : "Continue"}
                disabled={isSubmitting}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              />
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use </span>and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
              <ArrowRightIcon />{" "}
              <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                Need help?
              </span>
            </p>
          </div>
          <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
          <Link className="w-full" to="/registration">
            <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
              Create your Amazon account
            </button>
          </Link>
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

export default Sign;
