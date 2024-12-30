import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const CountupSection = () => {
  const [data, setData] = useState({ services: 0 });
  const [review,setReviews] =  useState({review: 0});
  const [users,setUsers]= useState({users: 0})

  useEffect(() => { 
    const fetchCounts = async () => {
      try {
        const res = await fetch("https://service-review-system-server-site.vercel.app/services");  
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);
  useEffect(()=>{
    fetch("https://service-review-system-server-site.vercel.app/reviews")
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  useEffect(()=>{
    fetch("https://service-review-system-server-site.vercel.app/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Platform Stats
      </h2>
      <div className="flex flex-wrap justify-center gap-8"> 
        <div className="card bg-base-200 shadow-md w-48 py-6 text-center">
          <div className="text-5xl font-bold text-primary">
            <CountUp end={users.length} duration={2.5} />
          </div>
          <p className="text-lg font-semibold text-gray-600 mt-2">Users</p>
        </div> 
        <div className="card bg-base-200 shadow-md w-48 py-6 text-center">
          <div className="text-5xl font-bold text-secondary">
            <CountUp end={review.length} duration={2.5} />
          </div>
          <p className="text-lg font-semibold text-gray-600 mt-2">Reviews</p>
        </div> 
        <div className="card bg-base-200 shadow-md w-48 py-6 text-center">
          <div className="text-5xl font-bold text-accent">
            <CountUp end={data.length} duration={2.5} />
          </div>
          <p className="text-lg font-semibold text-gray-600 mt-2">Services</p>
        </div>
      </div>
    </div>
  );
};

export default CountupSection;
