import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ServiceDetails from '../Pages/ServiceDetails';
import AddService from '../Pages/AddService';
import Services from '../Pages/Services';
import PrivateRoutes from './PrivateRoutes';
import MyServices from '../Pages/MyServices';
import MyReviews from '../Pages/MyReviews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) => fetch(`https://service-review-system-server-site.vercel.app/services/${params.id}`),
      },
      {
        path: "/add-service",
        element: <PrivateRoutes><AddService /></PrivateRoutes>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/my-services",
        element: <PrivateRoutes><MyServices /></PrivateRoutes>, 
      },
      {
        path: "/my-reviews",
        element: <PrivateRoutes><MyReviews /></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

export default router;
