/* eslint-disable no-unused-vars */
import './ProductsListings.css';
import sample_image from "../src/assets/sample-image/sample-image.avif";
import { React, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProductsListing = () => {
  return (
    <>
      <Helmet>
        <title>Explore our available products | Techlap</title>
        <meta
          name="description"
          content="Explore all the astonishing products we have on our shelve"
        />
      </Helmet>
      <div className="products-container">
        <div className="products-heading">
          <h2
            className="text-center"
            style={{
              fontFamily: "Dancing Script",
              fontSize: "clamp(1.7rem, 4.5vw, 2.2rem)",
              fontWeight: "600",
            }}>
            Explore All Products
          </h2>
          <div className="p-container-holder-main">
            <div className="p-holder">
              <div className="p-container-card">
                <div className="p-visual-image">
                  <img
                    style={{ width: "100%" }}
                    src={sample_image}
                    fetchPriority="high"
                    alt="sample text image"
                  />
                </div>
                <p className="text-center p-2">
                  <strong>Product Details</strong>
                </p>
                <div className="p-core-features">
                  <div
                    className=" rounded-5 features-insider-brief faded-white"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <p>Product ID</p>
                    <p>
                      <strong>#techlap-002</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief dark-add"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Brand</p>
                    <p>
                      <strong>Dell</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief faded-white"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Series</p>
                    <p>
                      <strong>IdeaPad gaming</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief dark-add"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Screen Size</p>
                    <p>
                      <strong>13.2 Inches</strong>
                    </p>
                  </div>
                  <div className="btn-send-to-cart">
                    <button
                      className="p-2 rounded-5 border-0 bg-dark text-white"
                      style={{ width: "100%" }}>
                      See full details{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#f2f2f2">
                        <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Product 2 */}
              <div className="p-container-card">
                <div className="p-visual-image">
                  <img
                    style={{ width: "100%" }}
                    src={sample_image}
                    fetchPriority="high"
                    alt="sample text image"
                  />
                </div>
                <p className="text-center p-2">
                  <strong>Product Details</strong>
                </p>
                <div className="p-core-features">
                  <div
                    className=" rounded-5 features-insider-brief faded-white"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <p>Product ID</p>
                    <p>
                      <strong>#techlap-002</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief dark-add"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Brand</p>
                    <p>
                      <strong>Dell</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief faded-white"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Series</p>
                    <p>
                      <strong>IdeaPad gaming</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief dark-add"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Screen Size</p>
                    <p>
                      <strong>13.2 Inches</strong>
                    </p>
                  </div>
                  <div className="btn-send-to-cart">
                    <button
                      className="p-2 rounded-5 border-0 bg-dark text-white"
                      style={{ width: "100%" }}>
                      See full details{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#f2f2f2">
                        <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Product 3 */}
              <div className="p-container-card">
                <div className="p-visual-image">
                  <img
                    style={{ width: "100%" }}
                    src={sample_image}
                    fetchPriority="high"
                    alt="sample text image"
                  />
                </div>
                <p className="text-center p-2">
                  <strong>Product Details</strong>
                </p>
                <div className="p-core-features">
                  <div
                    className=" rounded-5 features-insider-brief faded-white"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <p>Product ID</p>
                    <p>
                      <strong>#techlap-002</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief dark-add"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Brand</p>
                    <p>
                      <strong>Dell</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief faded-white"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Series</p>
                    <p>
                      <strong>IdeaPad gaming</strong>
                    </p>
                  </div>
                  <div
                    className=" rounded-5 features-insider-brief dark-add"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <p>Screen Size</p>
                    <p>
                      <strong>13.2 Inches</strong>
                    </p>
                  </div>
                  <div className="btn-send-to-cart">
                    <button
                      className="p-2 rounded-5 border-0 bg-dark text-white"
                      style={{ width: "100%" }}>
                      See full details{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#f2f2f2">
                        <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsListing;
