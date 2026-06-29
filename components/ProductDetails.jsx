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
           console.log(product);
        } else {
          console.log("No product found for this id.");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductDetails();
  }, [productId]);

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
                  <p className="" style={{ fontWeight: "lighter" }}>
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
                  <p style={{ fontWeight: "lighter" }}>
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
                <p style={{ fontWeight: "lighter" }}>{product.product_name}</p>
              </div>
              <div className="product-render-data mt-4">
                <div className="p-name_price d-flex justify-content-between">
                  <h3>{product.product_name}</h3>
                  <p aria-label="button">
                    <button id="price-tag"className="p-1 border-0 rounded-5">
                      ${product.price_tag}
                    </button>
                  </p>
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
