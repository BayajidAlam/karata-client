import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const NavBar = () => {

  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  // one list for mobile tablet and desktop 
  const menuItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/'>Add Service</Link></li>
    <li><Link to='/'>Contact us</Link></li>
    <li><Link to='/'>Blog</Link></li>
  </>

  // sign out user 
  const handleSignOut = () => {
    signOutUser()
    .then(()=>{

    })
    .catch(err=>{
      toast.error(err.message)
    })
  }

  return (
    <section>
      <div className="navbar py-4 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* for mobile  */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        {/* for lg */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
            menuItem
            }
            </ul>
        </div>
        <div className="navbar-end">
          {
            user?.uid? 
            <div> 
              <button onClick={()=>handleSignOut()} className="py-2 text-white font-bold text-xl px-7 bg-main">Sign out</button>
            </div>
            :
            <Link to='/login' className="py-2 text-white font-bold text-xl px-10 bg-main">Login</Link>
          }
        </div>
      </div>
    </section>
  );
};

export default NavBar;
