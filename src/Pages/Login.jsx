import Lottie from "lottie-react";
import React, { useState } from "react";
import animationDataLogin from "../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import useAuth from "../CustomHook/useAuth";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const { logIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect path after successful login
  const from = location.state?.from || "/";

  // State management for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login
  const handleLogin = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((result) => {
        console.log("Login successful:", result.user?.email);
        const user = {email:email};
        axios.post("https://service-review-system-server-site.vercel.app/jwt",user,{withCredentials:true})
        .then(res => {
          console.log(res.data)
        })
        navigate(from, { replace: true }); 
        toast.success("Login successful!");
      })
      .catch((err) => {
        // console.error("Login error:", err.message); 
        toast.error("Login failed. Please check your credentials.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      {/* Animation Section */}
      <div className="hidden md:block w-1/2">
        <Lottie animationData={animationDataLogin} loop autoplay />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Please sign in to your account
        </p>

        {/* Form */}
        <form className="mt-6" onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@example.com"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            Sign In
          </button>
        </form> 
        {/* Social Login */}
        <div className="mt-4">
          <SocialLogin />
        </div> 
        <p className="text-center font-semibold text-gray-600 mt-4 mb-6">
        Don’t have an account?{" "}
        <Link to="/register" className="text-red-600 hover:underline">
          Register here
        </Link>
      </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
