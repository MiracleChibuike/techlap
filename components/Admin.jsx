/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Admin.css";
import Admin_bot from "../src/assets/admin/Admin_bot.svg";


const Admin = () => {
    return (
      <>
        <div className="parent">
          <div className="container">
            <div className="admin_container m-lg-3">
              <div className="success_msg bg-success text-white p-3 rounded-4 m-2">
                <div className="success d-flex gap-1">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ fontSize: "25px" }}></i>
                  <p id="message_success"></p>
                </div>
              </div>
              {/* <!-- Error --> */}
              <div className="error_msg bg-danger text-white p-3 rounded-4 m-2">
                <div className="success d-flex gap-1">
                  <i
                    className="fa-solid fa-triangle-exclamation"
                    style={{ fontSize: "25px" }}></i>
                  <p id="message_error"></p>
                </div>
              </div>
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
                    <img src="/auth/auth_images/dashboard.svg" alt="" />
                    <a href="#" className="active">
                      <p className="mt-3">
                        <strong>Dashboard</strong>
                      </p>
                    </a>
                  </div>
                  <div className="d-flex gap-2 inactive">
                    <img src="/auth/auth_images/consultations.svg" alt="" />
                    <a href="/auth/oAuth/orders.html">
                      <p className="mt-3">
                        <strong>Orders</strong>
                      </p>
                    </a>
                  </div>
                  <div className="d-flex gap-2 inactive">
                    <img src="/auth/auth_images/products.svg" alt="" />
                    <a href="/auth/oAuth/formulations_inventory.html">
                      <p className="mt-3">
                        <strong>Products</strong>
                      </p>
                    </a>
                  </div>
                </div>
                <div className="actions p-3">
                  <div className="d-flex gap-2">
                    <img src="/auth/auth_images/gear.svg" alt="" />
                    <p className="mt-3">
                      <strong>Settings</strong>
                    </p>
                  </div>
                  <div className="d-flex gap-2 logOut">
                    <img
                      src="/auth/auth_images/log_out.svg"
                      alt=""
                      id="logOut"
                    />
                    <p className="mt-3">
                      <strong>Log Out</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mainPanel p-lg-3 ">
                <div className="upper_panel">
                  <div className="search d-flex">
                    <img
                      src="/auth/auth_images/search.svg"
                      style={{
                        position: "relative",
                        left: "35px",
                        width: "30px",
                      }}
                      alt=""
                    />
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
                      <strong id="userEmail">Admin</strong> <br />
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
                  <h2>
                    Welcome, <span id="userDisplayName"></span>
                  </h2>
                  <p>
                    <small>This is how you have fared so far</small>
                  </p>
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
                          <img src="/auth/auth_images/products2.svg" alt="" />
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
                          <img src="/auth/auth_images/out_stock.svg" alt="" />
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
                          <img src="/auth/auth_images/calendar.svg" alt="" />
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
                  <img src="/auth/auth_images/dashboard.svg" alt="" />
                  <a href="/auth/oAuth/ikumi_adminxr.html">
                    <p className="mt-1 child_text">
                      <small>Dashboard</small>
                    </p>
                  </a>
                </div>
                <div className="text-center parent_text inactive">
                  <img src="/auth/auth_images/consultations.svg" alt="" />
                  <a href="/auth//oAuth/orders.html">
                    <p className="mt-1 child_text">
                      <small>Orders</small>
                    </p>
                  </a>
                </div>
                <div className="text-center parent_text inactive">
                  <img src="/auth/auth_images/products.svg" alt="" />
                  <a href="/auth/oAuth/formulations_inventory.html">
                    <p className="mt-1 child_text">
                      <small>Products</small>
                    </p>
                  </a>
                </div>
                <div className="text-center parent_text inactive">
                  <img src="/auth/auth_images/gear.svg" alt="" />
                  <p className="mt-1 child_text">
                    <small>Settings</small>
                  </p>
                </div>
                <div className="text-center parent_text inactive logOut">
                  <img
                    src="/auth/auth_images/log_out.svg"
                    alt=""
                    id="logOutMobile"
                  />
                  <p className="mt-1 child_text">
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