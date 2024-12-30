import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
// import React from 'react';

const axiosInstance = axios.create({
    baseURL:"https://service-review-system-server-site.vercel.app",
    withCredentials:true
})
const useAxiosSecure = () => {
    const {logOut} =useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        },error =>{
            console.log("error")
            if(error.status === 401 || error.status === 403){
                logOut()
                .then(()=>{
                    // console.log("logged out")
                    navigate("/login")
                })
                .catch((error)=>{
                    console.log(error.message);
                })
            }
            return Promise.reject(error);
        })
    },[])
 return axiosInstance;
};

export default useAxiosSecure;