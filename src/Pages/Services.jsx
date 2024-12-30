import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [services, setServices] = useState([]); 
  const navigate = useNavigate(); 
  useEffect(() => { 
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/services");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []); 
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05 },
  };

  return (
    <div className="container mx-auto px-4 py-8"> 
    <Helmet>
      <title>Home | Service</title>
    </Helmet>
    <h2 className="text-2xl font-bold mb-6"> Services All</h2> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service._id}
            className="p-4 border rounded-lg shadow-lg bg-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          > 
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            /> 
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3> 
            <p className="text-gray-600 mb-4">
              {service.description.length > 100
                ? `${service.description.substring(0, 100)}...`
                : service.description}
            </p> 
            <p className="text-xl font-bold text-blue-600 mb-4">${service.price}</p> 
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => navigate(`/services/${service._id}`)}
            >
              See Details
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
