import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

function Login() {
  const { token, setToken, backendUrl, navigate } =
    useContext(ShopContext);

  const [currentLoginState, setCurrentLoginState] = useState("Login");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelLoginButton = async (event) => {
    event.preventDefault();

    try {
      if (currentLoginState === "sign Up") {
        const response = await axios.post(
          backendUrl + "/api/user/register",
          { userName, email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          backendUrl + "/api/user/login",
          { email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#f9f4ef] via-[#f3ece5] to-[#e9ddd1] px-4 py-10">
      {/* Background Blur Effects */}
      <div className="absolute top-[-120px] left-[-80px] h-72 w-72 rounded-full bg-[#d6b89c]/30 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-[#b08968]/20 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/50 bg-white/60 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
        {/* Left Side */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-gradient-to-br from-[#2f2a27] via-[#46352a] to-[#8b5e3c] p-10 text-white">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm tracking-[0.3em] uppercase backdrop-blur-sm">
              Welcome Back
            </div>

            <h1 className="max-w-md text-4xl font-semibold leading-tight xl:text-5xl">
              Discover your perfect style with us.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/75 xl:text-base">
              Sign in to continue shopping, manage your wishlist, track orders,
              and enjoy a seamless premium experience.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <FiCheck className="text-lg" />
              </div>
              <div>
                <p className="text-sm font-medium">Fast & Secure Checkout</p>
                <p className="text-xs text-white/60">
                  Protected and seamless order process
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <FiCheck className="text-lg" />
              </div>
              <div>
                <p className="text-sm font-medium">Wishlist & Saved Items</p>
                <p className="text-xs text-white/60">
                  Save your favorite products anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <div className="inline-block">
                {currentLoginState === "Login" ? (
                  <Title text1={"Login"} text2={"Here"} />
                ) : (
                  <Title text1={"Create"} text2={"Account"} />
                )}
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                {currentLoginState === "Login"
                  ? "Enter your details to access your account."
                  : "Join us today and create your personal account."}
              </p>
            </div>

            <form
              onSubmit={handelLoginButton}
              className="space-y-5"
            >
              {currentLoginState !== "Login" && (
                <div className="group">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <div className="flex items-center rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm transition-all duration-300 group-focus-within:border-[#8b5e3c] group-focus-within:shadow-lg">
                    <FiUser className="mr-3 text-lg text-gray-400 transition group-focus-within:text-[#8b5e3c]" />
                    <input
                      type="text"
                      value={userName}
                      onChange={(event) => setUserName(event.target.value)}
                      placeholder="Shivam Gupta"
                      className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="group">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm transition-all duration-300 group-focus-within:border-[#8b5e3c] group-focus-within:shadow-lg">
                  <FiMail className="mr-3 text-lg text-gray-400 transition group-focus-within:text-[#8b5e3c]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="flex items-center rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm transition-all duration-300 group-focus-within:border-[#8b5e3c] group-focus-within:shadow-lg">
                  <FiLock className="mr-3 text-lg text-gray-400 transition group-focus-within:text-[#8b5e3c]" />
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 accent-[#8b5e3c]"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-[#8b5e3c] transition hover:text-[#6f482e] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2f2a27] via-[#46352a] to-[#8b5e3c] px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(139,94,60,0.45)]"
              >
                {currentLoginState === "Login" ? "Login Now" : "Create Account"}

                <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600">
              {currentLoginState === "Login"
                ? "Don’t have an account?"
                : "Already have an account?"}

              <button
                type="button"
                onClick={() =>
                  setCurrentLoginState(
                    currentLoginState === "Login" ? "sign Up" : "Login"
                  )
                }
                className="ml-2 font-semibold text-[#8b5e3c] transition hover:text-[#6f482e] hover:underline"
              >
                {currentLoginState === "Login" ? "Create Account" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;