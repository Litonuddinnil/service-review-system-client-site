import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Website Logo and Description */}
          <div>
            <div className="flex items-center space-x-3">
              <img
                src="https://i.ibb.co/71k6Ny9/logo.png"
                alt="Service Review System"
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-2xl font-bold">Service Review System</h1>
            </div>
            <p className="mt-4 text-sm text-gray-100">
              Service Review System is a comprehensive platform that allows
              users to share their experiences and feedback on various services.
              Whether you're looking to evaluate a local business, review a
              product, or rate an online service, our system provides a seamless
              way to post reviews, rate services, and make informed decisions.
              We aim to create a trustworthy space where users can exchange
              valuable insights, helping others make smarter choices. Our
              platform is built to offer transparency and convenience, giving
              both customers and service providers the tools to communicate and
              grow. Your feedback drives us forward to enhance the quality of
              services available globally. Join us in making service experiences
              better for everyone!
            </p>
          </div> 
          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="/" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <p className="hover:text-blue-400">Contact Us</p>
                <p className="pt-2">
                  Email: mdniloyhasan544@gmail.com
                  <br />
                  Phone: 01309623416
                  <br />
                  Address: House 24, Road 8, Block B, Banani, Dhaka 1213,
                  Bangladesh
                </p>
              </li>
            </ul>
             {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
              >
                <FaFacebook className="text-white" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:opacity-90"
              >
                <RiTwitterXLine className="text-white" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-700 hover:opacity-90"
              >
                <BsInstagram className="text-white" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-700 hover:opacity-90"
              >
                <IoLogoYoutube className="text-white" />
              </a>
            </div>
          </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-100">
          <p>&copy; Upcoming 2025 Service Review System. All Rights Reserved.</p>
          <p>
            Designed with ❤️ by{" "}
            <a
              href="https://job-portal-74d1e.web.app/"
              className="hover:text-white underline"
            >
              Liton Uddin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
