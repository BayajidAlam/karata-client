import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const menuItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/'>Add Service</Link></li>
    <li><Link to='/'>Contact us</Link></li>
    <li><Link to='/'>Blog</Link></li>
  </>
  return (
    <section>
      <div className="navbar bg-base-100 container mx-auto">
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
          <a className="btn">Get started</a>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
