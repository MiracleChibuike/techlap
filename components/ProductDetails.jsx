/* eslint-disable no-unused-vars */
import { React, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./ProductsListings.css";

// Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  serverTimestamp,
  doc,
  getDocs,
  getDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
  measurementId: "G-YFRRGR7MVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const ProductDetails = () => {
    // STEPS ON RENDERING THE FULL DETAILS OF A PRODUCT (CARD) IN A COMPONENT WHEN BUTTON IS CLIKED

  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!productId) return;

      try {
        const productRef = doc(db, "products", productId);
        const res = await getDoc(productRef);

        if (res.exists()) {
          setProduct({
            id: res.data(),
            ...res.data(),
          });
          console.log(res.data());
          //  console.log(product);
        } else {
          console.log("No product found for this id.");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductDetails();
  }, []);

    if (!product) {
      return (
        <div id="loaderProducts" className="text-center">
          <span class="loader"></span>
          <p>Retrieving....</p>
        </div>
      );
    }

  return (
    <>
      <Helmet>
        <title>Product Details</title>
        <meta name="description" content="Product details description page" />
      </Helmet>
      <div className="product-desc-container-main products-container">
        <div className="render-products">
          {/* Et */}
          {product && (
            <div className="render-safe">
              <div className="products-header-navs d-flex gap-1">
                <Link to={"/"}>
                  <p
                    className="text-secondary"
                    style={{
                      fontWeight: "lighter",
                      fontSize: "clamp(0.2rem, 20.5vw, 0.9rem)",
                    }}>
                    Home{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#c1c1c1">
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>{" "}
                  </p>
                </Link>
                <Link to={"/product-listings"}>
                  <p
                    className="text-secondary"
                    style={{
                      fontWeight: "lighter",
                      fontSize: "clamp(0.2rem, 20.5vw, 0.9rem)",
                    }}>
                    Product Listings{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#c1c1c1">
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>{" "}
                  </p>
                </Link>
                <p
                  style={{
                    fontWeight: "lighter",
                    fontSize: "clamp(0.2rem, 20.5vw, 1rem)",
                  }}>
                  {product.product_name}
                </p>
              </div>
              <div className="product-render-data mt-4">
                <div className="p-name_price d-flex justify-content-between">
                  <h3>{product.product_name}</h3>
                  <p aria-label="button">
                    <button id="price-tag" className="p-1 border-0 rounded-5">
                      ${product.price_tag}
                    </button>
                  </p>
                </div>
                {/* Product-image-description */}
                <div className="container-global-description">
                  <div className="product-img-description-specs">
                    <div className="product-img-key-features bg-white">
                      <div className="product-img-display">
                        <img
                          id="imageURL"
                          src={product.imageURL}
                          alt={product.product_name}
                          style={{
                            // background: "#e0d4d4",
                            borderTopLeftRadius: "25px",
                            borderTopRightRadius: "25px",
                            transform: "rotate(355deg)",
                            position: "relative",
                            left: "15px",
                          }}
                        />
                      </div>
                      <div className="key-features p-4">
                        <h5 className="mb-4" style={{ color: "#d8a84e" }}>
                          <strong>Key Features</strong>
                        </h5>
                        <div className="features-list d-flex gap-3 ">
                          <div>{product.product_graphics}</div>
                          <div>{product.product_processor}</div>
                          <div>{product.product_storage}</div>
                          <div>{product.product_graphics}</div>
                          <div>{product.product_battery_life}</div>
                        </div>
                      </div>
                      {/* Cart - Buy Now */}
                      <div className="cta-btns d-flex gap-4 p-4">
                        <button id="cart-add-cta-btn" className="btn bg-dark" style={{width: "100%"}}>
                          <svg
                          id="svg-cart"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#fff">
                            <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                          </svg>
                          Add to Cart
                        </button>
                        <button id="btn-buy-now" className="btn" style={{width: "100%"}}>Buy Now</button>
                      </div>
                      <div
                        className="description-large-left p-4 mt-3"
                        style={{ background: "#2e2e2c", color: "#e0d4d4" }}>
                        <h4 style={{ color: "#d8a84e" }}>Description</h4>
                        <p>{product.product_description}</p>
                      </div>
                    </div>
                    {/* Products-main-specifications */}
                    <div className="specs-container-main bg-white p-4">
                      <div className="specs-desc mt-3">
                        <h3>Product Specifications</h3>
                        <table className="table table-responsive">
                          <tbody>
                            <tr>
                              <td>Product ID:</td>
                              <td>
                                <strong>{product.product_id}</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>Brand:</td>
                              <td>
                                <strong>{product.product_brand}</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>Series:</td>
                              <td>
                                <strong>{product.Product_series}</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>Screen Size:</td>
                              <td>
                                <strong>{product.product_size}</strong> inches
                              </td>
                            </tr>
                            <tr>
                              <td>Processor:</td>
                              <td>
                                <strong>
                                  {product.product_processor}
                                </strong>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>Operating System (OS):</td>
                              <td>
                                <strong>{product.product_OS}</strong>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>Graphics (OS):</td>
                              <td>
                                <strong>{product.product_graphics} </strong>
                              </td>
                            </tr>
                            <tr>
                              <td>Storage:</td>
                              <td>
                                <strong>{product.product_storage} </strong>
                              </td>
                            </tr>
                            <tr>
                              <td>Weight (kg):</td>
                              <td>
                                <strong>{product.price_weight}</strong>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>Color:</td>
                              <td>
                                <strong>{product.product_color}</strong>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>Warrantee:</td>
                              <td>
                                <strong>{product.product_warantee}</strong>{" "}
                                years{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>Manufacturer:</td>
                              <td>
                                <strong>
                                  {product.product_manufacturer}
                                </strong>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>Condition</td>
                              <td>
                                <strong>
                                  {product.product_condition}
                                </strong>{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h4 style={{ color: "#d8a84e" }}>Description</h4>
                        <p>{product.product_description}</p>
                        <div className="products-related mt-5">
                          <h4>Related Products</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
