import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'; 
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import useAuth from '../CustomHook/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
  const detailsService = useLoaderData();  
  const {title} = detailsService;
  const { user } = useAuth();  
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState(''); 
  // const navigate = useNavigate(); 
  useEffect(() => { 
    axios.get(`https://service-review-system-server-site.vercel.app/services/reviews/${detailsService._id}`,{withCredentials:true})
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => console.error("Error fetching reviews:", error));
  }, [detailsService._id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const newReview = {
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      reviewText,
      rating,
      title:title,  
      email:email,
      date: new Date().toLocaleDateString(),
      serviceId: detailsService._id,
    }; 

    axios.post(`https://service-review-system-server-site.vercel.app/services/reviews/${detailsService._id}`, newReview, )
      .then(response => { console.log(response)
        if (response.data) {
          Swal.fire({
            title: "Success!",
            text: "Review Added Successfully!",
            icon: "success",
          });
          setReviews([...reviews, response.data]);  
          setReviewText('');   
          setRating(0);  
          // navigate("/");  
      }})
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          title: "Error!",
          text: "Error Something .",
          icon: "error",
        });
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Home | ServicesDetails</title></Helmet>
      <div className="service-details flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Service Info Section */}
        <div className="service-info flex-1 p-6">
          <img
            src={detailsService.image}
            alt={detailsService.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-semibold text-gray-800">{detailsService.title}</h1>
          <p className="text-lg text-gray-600">{detailsService.companyName}</p>
          <a
            href={detailsService.website}
            className="text-blue-600 hover:underline text-lg mt-2 block"
          >
            {detailsService.website}
          </a>
          <p className="mt-4 text-gray-500">{detailsService.description}</p>
          <p className="mt-2 text-gray-700 font-medium">Category: {detailsService.category}</p>
          <p className="mt-2 text-xl font-semibold text-green-600">Price: ${detailsService.price}</p>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section flex-1 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Reviews ({reviews.length})</h2>
          {reviews.length === 0 ? (
            <p className="mt-4 text-gray-500">No reviews yet. Be the first to leave a review!</p>
          ) : (
            reviews.map((review) => (
              <div key={review._id} className="review mt-6 border-t pt-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={review.userPhoto}
                    alt={review.userName}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.userName}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <ReactStars count={5} value={review.rating} size={24} edit={false} activeColor="#ffd700" />
                <h4 className="mt-2 text-lg font-semibold text-gray-800">{review.title}</h4> {/* Display the title */}
                <p className="mt-2 text-gray-700">{review.reviewText}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Add Review Section */}
      <div className="add-review-form mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Add Your Review</h3>
        <form onSubmit={handleReviewSubmit}>
          
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here"
            className="w-full h-40 p-4 mt-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
         <div className='flex items-center gap-3'>
           <p className='text-xl text-yellow-500 font-extrabold'>Ratings:</p>
           <ReactStars
             count={5}
             onChange={setRating}
             size={24}
             activeColor="#ffd700"
             value={rating}
             className="mt-4"
           />
         </div>
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
