/* eslint-disable no-unused-vars */

import "./Navbar.css";
import SignUp from "./SignUp";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Links } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const navsRef = useRef(null);
   useEffect(() => {
    const menu = menuRef.current;
    
    const handleClick = () => {
        if (navsRef.current) {
            navsRef.current.classList.toggle("show");
        }
    };

    if (menu) {
        menu.addEventListener("click", handleClick);
    }

    // Cleanup function
    return () => {
        if (menu) {
            menu.removeEventListener("click", handleClick);
        }
    };
}, []);

return (
    <>
    <div className="nav">
    {/* <!-- logo --> */}
    <h1 className="logo">Tech<span>Lap.</span></h1>
    <div className="menuIcon">
        <svg 
        ref={menuRef}
        id="showMenu"
        xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34" fill="#FFF">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
    </div>
    {/* Nav Bar */}
    <nav className="navbar" ref={navsRef}>
        <ul>
            <li className="landing">
                <a href="index.html" id="pageHome"> <i className="fa-solid fa-house"></i>Home</a>
            </li>
            <li>
                <a href="#about"> <i className="fa-solid fa-users"></i> About Us</a>
            </li>
            <li>
                <a href="#products">
                    <i className="fa-solid fa-laptop"></i>Products</a>
            </li>
            <li>
                <a href="#shop"> <i className="fa-solid fa-cart-shopping"></i>Shop</a>
            </li>
            {/* <!-- <li>
                        <button type="button" className="btn btn-primary position-relative">
                            Inbox
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </li> --> */}
            <li>
                <a href="#contact">
                    <i className="fa-solid fa-square-phone-flip"></i>Contact</a>
            </li>
            <li>
                <a href="#pag" id="pages">Pages <i className="fa-solid fa-caret-down"></i></a>
                <div className="drop">
                    <ul>
                        <li><a href="#">Appointments</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Testimony</a></li>
                        <li><a href="#">FAQS</a></li>
                    </ul>
                </div>

            </li>
            <li>
                <Link to={'/signup'}>
                <button id="sign-upBTN">Sign Up <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </button>
                </Link>
            </li>
        </ul>
    </nav>
</div>
    </>
);

};

export default NavBar;