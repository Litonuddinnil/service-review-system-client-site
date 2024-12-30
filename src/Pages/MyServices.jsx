import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import useAuth from '../CustomHook/useAuth';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../CustomHook/useAxiosSecure';
 

const MyServices = () => {
  const { user } = useAuth();  
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState(''); 
  const axiosSecure = useAxiosSecure();
  
  useEffect(() => {
    if (user) {
      axiosSecure.get(`/my-services/${user.email}`,{withCredentials:true})  
        .then(response => {
          setServices(response.data);
        })
        .catch(error => console.error("Error fetching services:", error));
    }
  }, [user?.email]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUpdate = (service) => {
    setSelectedService(service);
    setUpdatedTitle(service.title);
    setUpdatedDescription(service.description);
    setShowUpdateModal(true);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedService = {
      ...selectedService,
      title: updatedTitle,
      description: updatedDescription
    };

    axios.put(`https://service-review-system-server-site.vercel.app/services/${selectedService._id}`, updatedService)
      .then(() => {
        setServices(services.map(service => 
          service._id === selectedService._id ? updatedService : service
        ));
        setShowUpdateModal(false);
      })
      .catch(error => console.error("Error updating service:", error));
  };

  const handleDelete = (service) => {
    setServiceToDelete(service);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    axios.delete(`https://service-review-system-server-site.vercel.app/services/${serviceToDelete._id}`)
      .then(() => {
        setServices(services.filter(service => service._id !== serviceToDelete._id));
        setShowDeleteModal(false);
      })
      .catch(error => console.error("Error deleting service:", error));
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setServiceToDelete(null);
  };

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Home | MyServices</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Services</h1> 
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/2"
        />
      </div>

      {/* Services Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="p-4 text-left text-gray-600">Title</th>
            <th className="p-4 text-left text-gray-600">Description</th>
            <th className="p-4 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map(service => (
            <tr key={service._id}>
              <td className="p-4 border-b">{service.title}</td>
              <td className="p-4 border-b">{service.description}</td>
              <td className="p-4 border-b">
             <div className='flex items-center '>
             <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => handleUpdate(service)}
                >
                  Update
                </button>
                <button
                  className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  onClick={() => handleDelete(service)}
                >
                  Delete
                </button>
             </div>
              </td>
            </tr>
          )) 
          
          }
        </tbody>
      </table> 
      {/* Update Service Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Service</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="ml-2 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this service?</p>
            <div className="flex justify-end">
              <button
                onClick={(handleDeleteConfirm)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={handleDeleteCancel}
                className="ml-2 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyServices;
