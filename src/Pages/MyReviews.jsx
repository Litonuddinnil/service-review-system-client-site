import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Modal } from "antd";
import useAuth from "../CustomHook/useAuth";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../CustomHook/useAxiosSecure";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  // Fetch reviews
  useEffect(() => {
   if(user){
    const fetchReviews = async () => {
      try {
        const response = await axiosSecure.get(`/reviews/${user.email}`,{withCredentials:true});
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
 
     fetchReviews();
    };
  }, []);

  // Handle Update
  const handleUpdate = async (id, updatedData) => {
    try {
      await axios.put(
        `https://service-review-system-server-site.vercel.app/reviews/${id}`,
        updatedData
      ); 
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === id ? { ...review, ...updatedData } : review
        )
      ); 
      setIsModalOpen(false);
      setEditingReview(null);
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  // Handle Delete
  const handleDelete = async () => {
    try {
      await axios.delete(`https://service-review-system-server-site.vercel.app/reviews/${selectedReviewId}`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== selectedReviewId)
      );
      setDeleteModalVisible(false);
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Home | MyReviews</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">My Reviews</h2>
      <div className="grid grid-cols-1 gap-4">
        {reviews.map((review) => (
          <motion.div
            key={review._id}
            className="p-4 border rounded-lg shadow-lg bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={review.userPhoto}
                alt={review.userName}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.title}</h3>
                <p className="text-sm text-gray-600">{review.date}</p>
              </div>
            </div>
            <p className="mb-4">{review.reviewText}</p>
            <p className="mb-4">Rating: {review.rating} ⭐</p>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  setEditingReview(review);
                  setIsModalOpen(true);
                }}
              >
                Update
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => {
                  setSelectedReviewId(review._id);
                  setDeleteModalVisible(true);
                }}
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Update Modal */}
      <Modal
        title="Update Review"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {editingReview && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editingReview._id, {
                reviewText: e.target.reviewText.value,
                rating: e.target.rating.value,
              });
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Service Title</label>
              <input
                type="text"
                value={editingReview.title}
                readOnly
                className="w-full px-4 py-2 border rounded bg-gray-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Review Text</label>
              <textarea
                name="reviewText"
                defaultValue={editingReview.reviewText}
                className="w-full px-4 py-2 border rounded"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Rating</label>
              <input
                name="rating"
                type="number"
                min="1"
                max="5"
                defaultValue={editingReview.rating}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save Changes
            </button>
          </form>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Confirm Deletion"
        open={deleteModalVisible}
        onOk={handleDelete}
        onCancel={() => setDeleteModalVisible(false)}
        okText="Yes, Delete"
        okButtonProps={{ danger: true }}
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this review? This action cannot be undone.</p>
      </Modal>
    </div>
  );
};

export default MyReviews;
