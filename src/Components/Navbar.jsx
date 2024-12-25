import { Link } from "react-router-dom";
import useAuth from "../CustomHook/useAuth";
  
const Navbar = () => {
    const {user,logOut}= useAuth();
    console.log(user)
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Service Review
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          {!user ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/add-service">Add Service</Link></li>
              <li><Link to="/my-reviews">My Reviews</Link></li>
              <li><Link to="/my-services">My Services</Link></li>
              <li tabIndex={0}>
                <button className="btn btn-ghost">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.avatar || "default-avatar-url"}
                    alt="User Avatar"
                  />
                </button>
              </li>
              <li>
                <button className="btn btn-error" onClick={logOut}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
