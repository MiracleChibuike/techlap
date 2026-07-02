/* eslint-disable no-unused-vars */

import "./Navbar.css";
import SignUp from "./SignUp";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Links } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
//     const menuRef = useRef(null);
//     const navsRef = useRef(null);
//    useEffect(() => {
//     const menu = menuRef.current;
    
//     const handleClick = () => {
//         if (navsRef.current) {
//             navsRef.current.classList.toggle("show");
//         }
//     };

//     if (menu) {
//         menu.addEventListener("click", handleClick);
//     }

//     // Cleanup function
//     return () => {
//         if (menu) {
//             menu.removeEventListener("click", handleClick);
//         }
//     };
// }, []);

return (
  <>
    <div className="nav">
      {/* <!-- logo --> */}
      <h1 className="logo">
        Tech<span>Lap.</span>
      </h1>
      {/* <div className="menuIcon">
        <svg
          // ref={menuRef}
          id="showMenu"
          xmlns="http://www.w3.org/2000/svg"
          height="34"
          viewBox="0 -960 960 960"
          width="34"
          fill="#FFF">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div> */}
      {/* Nav Bar */}
      <nav className="navbar">
        <ul>
          <li className="landing">
            <a href="index.html" id="pageHome">
              {" "}
              <button className="btn">
                <i className="fa-solid fa-house"></i>
              </button>
            </a>
          </li>
          <li>
            {" "}
            <button className="btn">
              <i className="fa-solid fa-users"></i>
            </button>
          </li>
          <li>
            <Link to={"/product-listings"}>
              <button className="btn">
                {" "}
                <i className="fa-solid fa-laptop"></i>{" "}
              </button>
            </Link>
          </li>
          <li>
            <button className="btn">
              {" "}
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="fa-solid fa-square-phone-flip"></i>
            </button>
          </li>
          <li>
            <Link to={"/signup"}>
              <button id="sign-upBTN">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff">
                  <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z" />
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Mobile Navs */}
    <div className="mobile-navs">
      <button className="btn-cta-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff">
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>
        <p>
          <small className="text-white">Home</small>
        </p>
      </button>
      <button className="btn-cta-mobile">
        {" "}
        <i className="fa-solid fa-users text-white"></i>
        <p>
          <small className="text-white">About Us</small>
        </p>
      </button>
      <button className="btn-cta-mobile">
        <Link to={"/product-listings"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff">
            <path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm428.5-51.5Q520-223 520-240t-11.5-28.5Q497-280 480-280t-28.5 11.5Q440-257 440-240t11.5 28.5Q463-200 480-200t28.5-11.5ZM160-320h640v-440H160v440Zm0 0v-440 440Z" />
          </svg>
          <p>
            <small className="text-white">Products</small>
          </p>
        </Link>
      </button>
      <button className="btn-cta-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff">
          <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
        <p>
          <small className="text-white">Cart</small>
        </p>
      </button>
      <button className="btn-cta-mobile">
        <Link to={"/signup"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff">
            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z" />
          </svg>
          <p>
            <small className="text-white">Account</small>
          </p>
        </Link>
      </button>
    </div>
  </>
);

};

export default NavBar;