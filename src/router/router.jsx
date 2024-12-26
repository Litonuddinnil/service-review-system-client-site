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
      element:<HomeLayout></HomeLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/services",
          element:<Services></Services>
        },
        {
          path:"/services/:id",
          element:<ServiceDetails></ServiceDetails>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/add-service",
          element:<PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/my-services",
          element:<PrivateRoutes><MyServices></MyServices></PrivateRoutes>
        },
        {
          path:"/my-reviews",
          element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
      ]
    }, 
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
  ]);
  
 
 export default router;