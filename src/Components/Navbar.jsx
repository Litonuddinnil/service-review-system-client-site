import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; 
import useAuth from "../CustomHook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   console.log(user)
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="hover:text-primary">
          Services
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-service" className="hover:text-primary">
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-reviews" className="hover:text-primary">
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-services" className="hover:text-primary">
              My Services
            </NavLink>
          </li>
        </>
      )}
    </>
  ); 

  return (
    <nav className="navbar flex flex-col shadow-sm px-4">
      <div className=" p-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img
            className="w-20 md:w-24 h-20 md:h-24 bg-red-300 rounded-full"
            src="https://i.ibb.co/71k6Ny9/logo.png"
            alt="Logo"
          />
        </Link>
      </div>

     <div>
     <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="menu menu-compact space-y-2 p-4 shadow-md rounded-lg">
          {links}
        </ul>
      </div>

      <div className="">
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <button
                className="btn btn-md btn-error text-white rounded-md"
                onClick={logOut}
              >
                Logout
              </button>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip={user.displayName || "User"}
                >
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || "Not available"} alt="User" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52"
                >
                  <li>
                    <span className="font-bold ">
                      {user.displayName || "User"}
                    </span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-md btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-md btn-secondary">
                Register
              </Link>
            </>
          )}
        </div>
      </div> 
     </div>
    </nav>
  );
};

export default Navbar;
