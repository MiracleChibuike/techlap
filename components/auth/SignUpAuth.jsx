/* eslint-disable no-unused-vars */

import "../auth/SignInAuth.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
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
const db = getFirestore(app);

const SignUpAuth = () => {
 const [showPassword, setShowpassword] = useState(false);
 const errorRef = useRef(null);
 const [isError, setIsError] = useState(false);
 const [displayErrMessage, setDisplayErrMessage] = useState('');
//  Success Message
const successRef = useRef(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [displaySuccessMsg, setDisplaySuccessMsg] = useState('');
 const navigate = useNavigate();
 const adminForm = useRef(null);
 const submitBtn = useRef(null);

useEffect(() => {
const adminFormCurrent = adminForm.current;
const btnForm = submitBtn.current;


const adminLogin = async (event) => {
  event.preventDefault();
  //  const errorCurrent = errorRef.current;
  try {
       btnForm.disabled = true;
       btnForm.textContent = "Signing In.....";
       btnForm.style.cursor = "not-allowed";
      const adminDetails = new FormData(event.currentTarget);
      const adminData = Object.fromEntries(adminDetails);
      const email = adminDetails.get("userEmail");
      const password = adminDetails.get("userPassword");
      const displayName = adminDetails.get("userName")
      // console.log(adminData)
      const adminRef = await signInWithEmailAndPassword(auth, email, password, displayName);
      const user = adminRef.user;
      await updateProfile(user, {
        displayName: displayName
      })
      console.log(user);
      setIsLoggedIn(true);
      setDisplaySuccessMsg('Successfully logged in. Redirecting.....');
      setTimeout(() => {
        setIsLoggedIn(false); // hide message after 5 seconds
      }, 5000);
      setTimeout(() => {
        navigate("/auth/admin");
      }, 5000)
  } catch (err) {
    console.log(err);
    setIsError(true);
    // errorCurrent.scrollIntoView({behavior: "smooth"});
    setDisplayErrMessage(`${err}`);
    setTimeout(() => {
      setIsError(false); // hide message after 5 seconds
    }, 5000)
  }finally{
    btnForm.disabled = false;
    btnForm.textContent = "Log In";
    btnForm.style.cursor = "pointer";
  }
};
if (adminFormCurrent) {
  adminFormCurrent.addEventListener("submit", adminLogin)
};

// Clean Up Event Listener
return () => {
  if (adminFormCurrent) {
    adminFormCurrent.removeEventListener("submit", adminLogin);
  }
}
}, []);
// Scroll into view in error message
useEffect(() => {
  if (isError && errorRef.current) {
    setTimeout(() => {
      errorRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }
}, [isError]);
// Scroll into view in Success Message
useEffect(() => {
  if (isLoggedIn && successRef.current) {
    setTimeout(() => {
      successRef.current.scrollIntoView({behavior: "smooth"})
    }, 0)
  }
}, [isLoggedIn])
    return (
      <>
        <Helmet>
          <title>Sign In - Admin</title>
        </Helmet>
        <div className="parent">
          <div className="container">
            {isLoggedIn && (
              <div ref={successRef} className="success_msg bg-success text-white p-3 rounded-4 m-2">
                <div className="success d-flex gap-1">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ fontSize: "25px" }}></i>
                  <p id="message_success"> {displaySuccessMsg} </p>
                </div>
              </div>
            )}
            {/* <!-- Error --> */}
            {isError && (
              <div
                ref={errorRef}
                className="error_msg bg-danger text-white p-3 rounded-4 m-2">
                <div className="success d-flex gap-1">
                  <i
                    className="fa-solid fa-triangle-exclamation"
                    style={{ fontSize: "25px" }}></i>
                  <p id="message_error"> {displayErrMessage} </p>
                </div>
              </div>
            )}
            <div className="admin_login_container">
              <div className="leftLog p-5 text-center">
                <h2 className="text-white mt-3">Welcome!</h2>
                <p className="text-white mt-3">
                  Login to access your admin dashboard
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100px"
                  viewBox="0 -960 960 960"
                  width="100px"
                  fill="#e1d5d5">
                  <path d="M0-160v-60h80v-620h800v620h80v60H0Zm396-60h170v-42H396v42ZM144-322h680v-458H144v458Zm340-229Z" />
                </svg>
              </div>
              <div className="rightLog p-lg-5">
                <h4 className="text-center mt-lg-4 ">Login</h4>
                <div className="form_Container mt-lg-5">
                  <form action="" id="admin_form" ref={adminForm}>
                    <div className="userEmail mb-4">
                      <input
                        name="userName"
                        type="text"
                        id="user_Name"
                        className=" rounded-4 mt-2"
                        placeholder="User Name (Optional)"
                        style={{ color: "rgb(21, 18, 18)" }}
                      />
                    </div>
                    <div className="userEmail mb-4">
                      <input
                        name="userEmail"
                        type="email"
                        id="user_Email"
                        required
                        className=" rounded-4 mt-2"
                        placeholder="User Email"
                      />
                    </div>
                    <div className="userPassword">
                      <img src="/auth/auth_images/password.svg" alt="" />
                      <input
                        name="userPassword"
                        type={showPassword ? "text" : "password"}
                        id="user_Password"
                        required
                        className=" rounded-4 mt-2"
                        placeholder="Enter Password"
                      />
                      <p className="text-secondary d-flex justify-content-end ">
                        <i
                          style={{
                            position: "relative",
                            top: "-35px",
                            paddingRight: "5px",
                            maxWidth: "50px",
                          }}
                          onClick={() => setShowpassword(!showPassword)}>
                          {showPassword ? "🙈" : "👁️"}
                        </i>
                      </p>
                    </div>
                    <div className="login mt-5">
                      <button
                        ref={submitBtn}
                        type="submit"
                        id="validateUser"
                        className="border-0 p-3 rounded-5">
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default SignUpAuth;