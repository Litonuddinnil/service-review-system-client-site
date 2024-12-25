import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation1 from "../assets/animation1.json";
import animation2 from "../assets/animation2.json";
import animation3 from "../assets/animation3.json";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Automatic slide transition every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full h-[500px]">
      {/* Slide 1 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co/59yXyzd/slide1.webp"
          className="w-full object-cover"
          alt="Slide 1"
        />
        <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="text-center text-white space-y-4">
            <Lottie animationData={animation1} className="w-40 mx-auto" />
            <h2 className="text-4xl font-bold">Welcome to Our Website</h2>
            <p className="text-lg">Discover amazing features and opportunities.</p>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co/g7HDWrP/slide2.webp"
          className="w-full object-cover"
          alt="Slide 2"
        />
        <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className=" text-center text-white space-y-4">
            <Lottie animationData={animation2} className="w-40 mx-auto" />
            <h2 className="text-4xl font-bold">Innovate with Us</h2>
            <p className="text-lg">Join us to create something extraordinary.</p>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co/HHNRtXf/slide3.webp"
          className="w-full object-cover"
          alt="Slide 3"
        />
        <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="text-center text-white space-y-4">
            <Lottie animationData={animation3} className="w-40 mx-auto" />
            <h2 className="text-4xl font-bold">Achieve Your Goals</h2>
            <p className="text-lg">Let us help you reach new heights.</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          className="btn btn-circle"
          onClick={() =>
            setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1))
          }
        >
          ❮
        </button>
        <button
          className="btn btn-circle"
          onClick={() =>
            setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1))
          }
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
