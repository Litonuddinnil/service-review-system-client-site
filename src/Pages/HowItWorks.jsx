import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">A simple and easy way to explore and review services!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="card w-full bg-white shadow-xl rounded-lg p-6">
            <div className="card-body text-center">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Browse Services</h3>
              <p className="text-gray-600">
                Explore a variety of services in different categories. Find what suits your needs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card w-full bg-white shadow-xl rounded-lg p-6">
            <div className="card-body text-center">
              <div className="text-4xl text-green-500 mb-4">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Leave a Review</h3>
              <p className="text-gray-600">
                After trying a service, share your experience by leaving a detailed review.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="card w-full bg-white shadow-xl rounded-lg p-6">
            <div className="card-body text-center">
              <div className="text-4xl text-yellow-500 mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rate the Service</h3>
              <p className="text-gray-600">
                Give the service a rating from 1 to 5 stars, and help others make informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a href="/services" className="btn btn-primary btn-lg">
            Start Exploring
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
