/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {  Helmet } from "react-helmet-async";
import { Links, Link } from "react-router-dom";
// import "./auth/Admin.new_consultations";
import "../auth/Admin.css";
import Admin_bot from "../auth/admin/Admin_bot.svg";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {serverTimestamp, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import {  getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZyf5IO2pYbFf5e8Uw9D6mO-KUVls9vCU",
    authDomain: "techlap-73997.firebaseapp.com",
    projectId: "techlap-73997",
    storageBucket: "techlap-73997.firebasestorage.app",
    messagingSenderId: "1015232730125",
    appId: "1:1015232730125:web:f0346dc38e7e552fb7f144",
    measurementId: "G-YFRRGR7MVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)



const Admin = () => {
  const navigate = useNavigate()
  // Handle 
  const [isAdmin, setIsadmin] = useState('');
  const [adminExist, setAdminExist] = useState(false);


  // Create a function to fetch admin details
  useEffect(() => {
        const validateAdmin = () => {
          onAuthStateChanged(auth, (user) => {
            if (!user) {
              console.warn(`No active user detected. Please sign Up`);
              setAdminExist(false);
              navigate("/auth/signUp");
            }else{
              // console.log(`${user.displayName}`);
              setAdminExist(true)
              setIsadmin(user.displayName)
            }
          })
        };
    validateAdmin();
  })

    return (
      <>
        <Helmet>
          <title>Admin Dashboard</title>
          <meta
            name="description"
            content="manage your products inventory all in one place"
          />
        </Helmet>
        <div className="parent">
          <div className="container">
            <div className="admin_container m-lg-3">
              <div className="sidePanel">
                <p className="p-3 d-flex justify-content-end">
                  <i className="fa-solid fa-angles-left"></i>
                </p>

                <button className="border-0" id="toggleSidebar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35px"
                    viewBox="0 -960 960 960"
                    width="35px"
                    fill="#1f1f1f">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                </button>
                <div className="links p-3">
                  <div className="d-flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      style={{
                        position: "relative",
                        top: "13px",
                      }}
                      fill="#f6f6f6">
                      <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
                    </svg>
                    <Link to={"/auth/admin"}>
                      <p className="mt-3 active">
                        <strong>Dashboard</strong>
                      </p>
                    </Link>
                  </div>
                  <div className="d-flex gap-2 inactive">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      style={{
                        position: "relative",
                        top: "13px",
                      }}
                      fill="#f6f6f6">
                      <path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z" />
                    </svg>
                    <a href="/auth/oAuth/orders.html">
                      <p className="mt-3">
                        <strong>Orders</strong>
                      </p>
                    </a>
                  </div>
                  <div className="d-flex gap-2 inactive">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      style={{
                        position: "relative",
                        top: "13px",
                      }}
                      fill="#f6f6f6">
                      <path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM508.5-771.5Q520-783 520-800t-11.5-28.5Q497-840 480-840t-28.5 11.5Q440-817 440-800t11.5 28.5Q463-760 480-760t28.5-11.5Z" />
                    </svg>
                    <Link to={"/auth/products"}>
                      <p className="mt-3">
                        <strong>Products</strong>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="actions p-3">
                  <div className="d-flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      style={{
                        position: "relative",
                        top: "13px",
                      }}
                      width="24px"
                      fill="#f6f6f6">
                      <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                    </svg>
                    <p className="mt-3">
                      <strong>Settings</strong>
                    </p>
                  </div>
                  <div className="d-flex gap-2 logOut">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      style={{
                        position: "relative",
                        top: "13px",
                      }}
                      fill="#f6f6f6">
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                    </svg>
                    <p className="mt-3">
                      <strong>Log Out</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mainPanel p-lg-3 ">
                <div className="upper_panel">
                  <div className="search d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      id="search-icon"
                      fill="#000">
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search products, and more"
                      id="searchAdmin"
                    />
                  </div>
                  <div className="adminDetails d-flex">
                    <div className="notifications">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        id="notifications"
                        fill="#000">
                        <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-420ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v13q-11 22-16 45t-4 47q-10-2-19.5-3.5T480-720q-66 0-113 47t-47 113v280h320v-257q18 8 38.5 12.5T720-520v240h80v80H160Zm475-435q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Z" />
                      </svg>
                    </div>
                    <div className="userAdmin">
                      <button className="rounded-circle p-1 border-0">
                        <img src={Admin_bot} alt="Admin Bot" />
                      </button>
                    </div>
                    <div className="userIkumiName m-2">
                      {adminExist && (
                        <strong id="userDisplayName"> {isAdmin} </strong>
                      )}
                      <br />
                      <small>
                        Admin{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#c46a4a">
                          <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                        </svg>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="admin_Analytics p-lg-4 mt-lg-2">
                  <div className="classify">
                    <h2>
                      Welcome,{" "}
                      {adminExist && (
                        <span id="userDisplayName"> {isAdmin} </span>
                      )}
                    </h2>
                    <p>
                      <small>This is how you have fared so far</small>
                    </p>
                  </div>
                  <div className="Ikumi_analytics_insight_top">
                    <div className="products_In_stock p-3">
                      <p>
                        <small>
                          Total Products <strong id="in_stock">Instock</strong>
                        </small>
                      </p>
                      <div className="d-flex justify-content-between">
                        <p>
                          <strong id="product_unitLenght">00</strong>
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#c46a4a">
                            <path d="M80-160v-80h800v80H80Zm80-160v-320h80v320h-80Zm160 0v-480h80v480h-80Zm160 0v-480h80v480h-80Zm280 0L600-600l70-40 160 280-70 40Z" />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="products_Out_stock p-3">
                      <p>
                        <small>
                          Total Products{" "}
                          <strong id="in_stock">Out of stock</strong>
                        </small>
                      </p>
                      <div className="d-flex justify-content-between">
                        <p>
                          <strong id="product_unit">00</strong>
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#c46a4a">
                            <path d="m634-440-81-80h69l110-200H353l-80-80h525q23 0 35.5 19.5t.5 42.5L692-482q-11 20-28 31t-30 11ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm540 52L566-280H304q-44 0-67-37.5t-3-78.5l42-86-72-162L28-820l56-56L876-84l-56 56ZM486-360l-80-80h-62l-40 80h182Zm136-160h-69 69Zm1.5 416.5Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5Z" />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="new_consultations p-3" id="loadOrders">
                      <p>
                        <small>
                          View <strong id="in_stock">Orders</strong>
                        </small>
                      </p>
                      <div className="d-flex justify-content-between">
                        {/* <!-- <p><strong id="product_unit">00</strong></p> --> */}
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#c46a4a">
                            <path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z" />
                          </svg>
                        </p>
                      </div>
                    </div>
                    {/* <!-- Orders --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Mobile Panel --> */}
            <div className="mobilePanel">
              <div className="panelContainer p-2">
                <div className="text-center parent_text">
                  <Link to={"/auth/admin"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#f6f6f6">
                      <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
                    </svg>

                    <p className="mt-1 child_text active">
                      <small>Dashboard</small>
                    </p>
                  </Link>
                </div>
                <div className="text-center parent_text inactive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#f6f6f6">
                    <path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z" />
                  </svg>
                  <a href="/auth//oAuth/orders.html">
                    <p className="mt-1 child_text">
                      <small>Orders</small>
                    </p>
                  </a>
                </div>
                <div className="text-center parent_text inactive">
                  <Link to={"/auth/products"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#f6f6f6">
                      <path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM508.5-771.5Q520-783 520-800t-11.5-28.5Q497-840 480-840t-28.5 11.5Q440-817 440-800t11.5 28.5Q463-760 480-760t28.5-11.5Z" />
                    </svg>
                    <p className="mt-1 child_text">
                      <small>Products</small>
                    </p>
                  </Link>
                </div>
                <div className="text-center parent_text inactive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#f6f6f6">
                    <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                  </svg>
                  <p className="mt-1 child_text" style={{ fontWeight: "bold" }}>
                    <small>Settings</small>
                  </p>
                </div>
                <div className="text-center parent_text inactive logOut">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#f6f6f6">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                  </svg>
                  <p className="mt-1 child_text" style={{ fontWeight: "bold" }}>
                    <small>Log Out</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Admin;