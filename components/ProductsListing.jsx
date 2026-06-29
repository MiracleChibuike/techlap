/* eslint-disable no-unused-vars */
import './ProductsListings.css';
import sample_image from "../src/assets/sample-image/sample-image.avif";
import rayzen_image from "../src/assets/sample-image/rayzen-sample.avif";
import wifi_err from "../src/assets/sample-image/wifi-error.svg";
import { React, useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  serverTimestamp,
  doc,
  getDocs,
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

const ProductsListing = () => {
  const [products, setProducts] = useState([]); // Define States
  const [loader, setLoader] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const renderProducts = async () => {
      setLoader(true);
      try {
        const productsSnapShot = await getDocs(collection(db, "products"));
        const productResults = productsSnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(productResults, productResults.length);
        setProducts(productResults);
        if (!navigator.onLine) {
          setError(true);
          setErrorMessage(
            `
                    ${wifi_err}
                    This typically indicates that your device does not have a healthy Internet connection at the moment. 
                    The client will operate in offline mode until it is able to successfully connect to the backend.
                    `,
          );
        }

        // Validation if no products are found
        if (!productResults || productResults.length == 0) {
          setError(true);
          setErrorMessage(
            `Sorry, there aren't any products found at the moment.`,
          );
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setErrorMessage(
          `Unable to fetch products at this time: ${String(err)}`,
        );
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 7000);
      } finally {
        setLoader(false);
      }
    };
    renderProducts();
  }, []);
  // Achieving Easy Products Navigation using React (Clicking on buttons and redirecting -- using the product_id)
  // STEP 1
  const navigate = useNavigate(); // To handle navigation (also linked to the button on the card)
  // STEP 2 -- Defining the Route <Component<> itself  `/product-details/:productId` in app component
  //STEP 3; Using react useParams, define a hook eg productId and assign value: const {productId} = useparams();
  // STEP 4: Then fetch using the params (see the `ProductDetails`) for example...
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
            className="text-center m-4"
            style={{
              fontFamily: "Dancing Script",
              fontSize: "clamp(1.7rem, 4.5vw, 2.2rem)",
              fontWeight: "600",
            }}>
            Explore All Products
          </h2>
          {loader && (
            <div id="loaderProducts" className="text-center">
              <span class="loader"></span>
              <p>Loading...</p>
            </div>
          )}
          {/* Error */}
          {isError && (
            <div
              className="error-loading border-2 rounded"
              style={{ display: "grid", placeContent: "center" }}>
              <p className="text-danger">{errorMessage}</p>
            </div>
          )}
          <div className="p-container-holder-main ">
            <div className="p-holder">
              {products.map((product) => (
                <div
                  className="p-container-card rounded-4 p-3 mt-2"
                  key={product.id}>
                  <div className="p-visual-image">
                    <img
                      style={{ width: "100%" }}
                      src={product.imageURL}
                      fetchPriority="high"
                      alt={product.product_name}
                    />
                  </div>
                  <p className="text-center">
                    <strong>Product Details</strong>
                  </p>
                  <div className="p-core-features">
                    <div
                      className=" rounded-5 features-insider-brief dark-add"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                      <p>Product ID</p>
                      <p>
                        <strong>{product.product_id}</strong>
                      </p>
                    </div>
                    <div
                      className=" rounded-5 features-insider-brief faded-white "
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                      <p>Product Name</p>
                      <p>
                        <strong>{product.product_name}</strong>
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
                        <strong>{product.product_brand}</strong>
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
                        <strong>{product.Product_series}</strong>
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
                        <strong>{product.product_size} inches</strong>
                      </p>
                    </div>
                    <div className="btn-send-to-cart">
                      <button
                        onClick={() =>
                          navigate(`/product-details/${product.id}`)
                        }
                        className="p-2 rounded-5 border-0 bg-dark text-white"
                        id="f-details-btn"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsListing;
