import Lottie from 'lottie-react';
import React, { useState } from 'react';
import registerAnimationData from '../assets/register.json';
import useAuth from '../CustomHook/useAuth';
import SocialLogin from '../Components/SocialLogin';

const Register = () => {
  const { createUser } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password } = formData;

    if (validateForm()) {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center min-h-screen bg-gradient-to-r from-indigo-100 to-purple-200 p-4">
       {/* Animation Section */}
       <div className="w-80 lg:w-1/2">
        <Lottie animationData={registerAnimationData} loop={true} />
      </div>
      {/* Form Section */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Start your journey with us today!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input input-bordered w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input input-bordered w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="my-6">
          <SocialLogin />
        </div>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-purple-500 hover:underline">
            Login Here
          </a>
        </p>
      </div> 
     
    </div>
  );
};

export default Register;
