 import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
 
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
            path:"/register",
            element:<Register></Register>
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