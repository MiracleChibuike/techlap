/* eslint-disable no-unused-vars */

import "./Navbar.css";
import SignUp from "./SignUp";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
const location = useLocation();
const isActiveBar = (path) => location.pathname === path;

return (
  <>
    {/* Mobile Navs */}
    <div
      className="mobile-navs"
      role="navigation"
      aria-label="Mobile navigation">
      <button
        type="button"
        className={`btn-cta-mobile nav-btn-mobile ${isActiveBar("/") ? "activeBar" : ""}`}
        aria-label="Home"
        onClick={() => navigate("/")}>
        <i className="fa-solid fa-home nav-icon"></i>
        <span className="nav-label">Home</span>
      </button>
      <button className="btn-cta-mobile nav-btn-mobile">
        {" "}
        <i className="fa-solid fa-users nav-icon"></i>
        <span className="nav-label">About Us</span>
      </button>
      <button
        onClick={() => navigate("/product-listings")}
        className={`btn-cta-mobile nav-btn-mobile ${isActiveBar("/product-listings") ? "activeBar" : ""}`}>
        <i className="fa-solid fa-laptop nav-icon"></i>
        <span className="nav-label">Products</span>
      </button>
      <button className="btn-cta-mobile nav-btn-mobile">
        <i className="fa-solid fa-cart-arrow-down nav-icon"></i>
        <span className="nav-label">Cart</span>
        <span className="badge">2</span>
      </button>
      <button
        onClick={() => navigate("/signup")}
        className={`btn-cta-mobile nav-btn-mobile ${isActiveBar("/signup") ? "activeBar" : ""}`}>
        <i className="fa-solid fa-user nav-icon"></i>
        <span className="nav-label">Account</span>
      </button>
    </div>
  </>
);

};

export default NavBar;