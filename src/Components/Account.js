import React, { useState } from "react";
import Header from "./Header/Header";
import userIcon from "../assets/default.png";
import Footer from "./Footer/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const [password, setPassword] = useState("Shahadat");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const userData = localStorage.getItem("token");
  const decoded = userData ? jwtDecode(userData) : null;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    formState: { errors, isSubmitting }, // Add isSubmitting from formState
    handleSubmit,
    watch,
  } = useForm();

  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const apiUrl =
        "https://ngglobalwebapi20231210182820.azurewebsites.net/api/User/updateuserdata";

      // Make a PUT request to your API endpoint with headers
      const response = await axios.put(
        apiUrl,
        {
          id: decoded.nameid,
          userName: data.name,
          email: data.email,
          newPassword: data.password,
        },

        {
          headers: {
            Authorization: "Bearer " + userData,
          },
        }
      );

      if (response.data.jwt) {
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.jwt);
        const decoded = jwtDecode(response.data.jwt);
      }

      // Handle the response as needed
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className="w-[80%] mx-auto my-20">
        <div>
          <div className="border-b-2 w-full pb-6">
            <p className="text-xl lg:text-4xl font-medium">
              Welcome, {decoded?.unique_name}
            </p>
          </div>
          <div className="mt-14 flex flex-col lg:flex-row justify-center items-start gap-20">
            <div className="flex flex-col justify-center lg:justify-start items-center w-full">
              <img
                className="max-w-[135px] w-full border-2 border-[#e99317] rounded-full p-1"
                src={userIcon}
                alt=""
              />
              <div className="mt-4">
                <p className="font-medium pb-2">{decoded?.unique_name}</p>
                <p className="text-gray-500 text-sm">{decoded?.email}</p>

                <button
                  onClick={() => handleSignOut()}
                  className="bg-red-500 text-white px-2 py-2 rounded-md mt-6"
                >
                  Sign out
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="text-xl lg:text-3xl font-medium">
                Personal Information
              </p>
              <p className="pt-3 text-xs lg:text-base text-gray-400">
                Manage your personal information, including your contact
                details.
              </p>

              <div className="mt-6 flex flex-col lg:flex-row gap-4">
                <div className="bg-white max-w-full lg:max-w-[270px] min-w-[190px] min-h-[150px] h-full rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <p>Name</p>
                    <svg
                      className="max-w-[35px] w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"
                        fill="#e99317"
                      ></path>
                    </svg>
                  </div>
                  <input
                    className="w-full bg-slate-100 h-9 rounded-md mt-5 focus:border-none outline-none px-4"
                    type="text"
                    autoComplete="disable"
                    defaultValue={decoded?.unique_name}
                    {...register("name", {
                      required: {
                        value: true,
                        message: " Enter Your Name",
                      },
                    })}
                  />
                  <label className="label ">
                    {errors.name?.type === "required" && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-2">
                        <span className="italic font-titleFont font-extrabold text-base">
                          !
                        </span>
                        {errors?.name?.message}
                      </p>
                    )}
                  </label>
                </div>
                <div className="bg-white max-w-full lg:max-w-[270px] min-w-[190px] min-h-[150px] h-full rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <p>Email</p>

                    <svg
                      className="max-w-[35px] w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
                        fill="#e99317"
                      ></path>
                    </svg>
                  </div>
                  <input
                    className="w-full bg-slate-100 h-9 rounded-md mt-5 focus:border-none outline-none px-4"
                    type="email"
                    autoComplete="disable"
                    defaultValue={decoded?.email}
                    {...register("email", {
                      required: {
                        value: true,
                        message: " Enter Your Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-2">
                        <span className="italic font-titleFont font-extrabold text-base">
                          !
                        </span>
                        {errors?.email?.message}
                      </p>
                    )}
                  </label>
                </div>
                <div className="bg-white max-w-full lg:max-w-[270px] min-w-[190px] min-h-[150px] h-full rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <p>Password</p>
                    <svg
                      className="max-w-[35px] w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"
                        fill="#e99317"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex justify-between items-center bg-slate-100 h-9 rounded-md mt-5 px-4">
                    <input
                      className="w-full bg-transparent focus:border-none outline-none "
                      type={showPassword ? "text" : "password"}
                      autoComplete="disable"
                      onChange={(e) => setPassword(e.target.value)}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Enter Your Password",
                        },
                      })}
                    />

                    <span
                      className="cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg
                          className="max-w-[15px] w-full"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                        </svg>
                      ) : (
                        <svg
                          className="max-w-[15px] w-full"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z"></path>
                        </svg>
                      )}
                    </span>
                  </div>
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-2">
                        <span className="italic font-titleFont font-extrabold text-base">
                          !
                        </span>
                        {errors?.password?.message}
                      </p>
                    )}
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value=" Save Changed"
                className="w-full rounded-md bg-orange-500 text-white py-2 mt-6"
              />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
