import axios from 'axios';
// import React from 'react';

const axiosInstance = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true
})
const useAxiosSecure = () => {
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        },error =>{
            console.log("eroor")
            if(error.status === 401 || error.status === 403){
                console.log("need to logout")
            }
            return Promise.reject(error);
        })
    },[])
 return axiosInstance;
};

export default useAxiosSecure;