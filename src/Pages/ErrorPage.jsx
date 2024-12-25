import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-red-600 text-5xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-8">The page you're looking for doesn't exist or an error occurred.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-gradient-to-r from-[#00b894] to-[#073132] text-white rounded-lg shadow hover:opacity-90 transition"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default ErrorPage;