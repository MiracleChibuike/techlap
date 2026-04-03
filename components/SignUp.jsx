/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { setDoc, serverTimestamp, doc, getFirestore } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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

const analytics = getAnalytics(app);
const SignUp = () => {
    const navigate = useNavigate();
    const formEL = useRef(null);
    let buttonSubmitRef = useRef(null);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [signedInMessage, setSignedMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    // Sign Up code
   useEffect(() => {
    const formElement = formEL.current;
    let btnSubmit = buttonSubmitRef.current;

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            btnSubmit.disabled = true;
            btnSubmit.textContent = 'Signing Up.....';
            btnSubmit.style.cursor = 'not-allowed';
        const formCredentials = new FormData(ev.currentTarget);
        const email = formCredentials.get('user_Email');
        const password = formCredentials.get('user_Password');
        const displayName = formCredentials.get('user_Name');
        const formDetails = Object.fromEntries(formCredentials);
        console.log(formDetails);
        const userRef = await createUserWithEmailAndPassword(auth, email, password, displayName); // create a user
        const user = userRef.user; 
            console.log(user);
        // Add user to DB
        const addUserToDb = await setDoc(doc(db, 'users', user.uid), {
            userName: displayName,
            userEmail: email,
            createdAt: serverTimestamp(),
        });
        console.log(`User created with id: ${user.uid}`);
        setIsSignedIn(true);
        setSignedMessage("Account created succesfully");
        setTimeout(() => {
            setIsSignedIn(false);
            setSignedMessage("");
            navigate('/dashboard'); // navigate to the dashboard component
        }, 5000);
        } catch (err) {
            console.error(err);
            setIsError(true);
            setErrorMessage(`${err}`);
            setTimeout(() => {
                setIsError(false);
                setErrorMessage("");
            }, 5000);
        }finally{
            btnSubmit.disabled = false;
            btnSubmit.textContent = 'Sign Up';
            btnSubmit.style.cursor = 'pointer';
        }
    };

    if (formElement) {
        formElement.addEventListener('submit', handleSubmit);
    }

    // CLEANUP: This runs when the component unmounts
    return () => {
        if (formElement) {
            formElement.removeEventListener('submit', handleSubmit);
        }
    };
}, []);
    const showPasswordRef = useRef(null);
    const inputPasswordRef = useRef(null);
    const [showPassword, setShowpassword] = useState(false);
   
    useEffect(() => {
         const showMenuIcon = showPasswordRef.current;
        const togglePassword = () => {
            console.log("logged message count")
         
        };

        if (showMenuIcon) {
            showMenuIcon.addEventListener('click', togglePassword)
        }
        // Clean Up Event
        return () => {
             if (showMenuIcon) {
            showMenuIcon.removeEventListener('click', togglePassword)
        }
        };
    }, []);

    return (
      <>
        <div className="parent">
          <div className="container">
            <div className="account_container">
              {/* <!-- Error Modal --> */}
              {isError && (
                <div className="validation_message text-center p-3 rounded-4 mb-4 bg-danger shadow text-white d-flex justify-content-center align-items-center">
                  <p style={{ fontSize: "1.7rem" }}>
                    <i className="fa-solid fa-triangle-exclamation mx-3"></i>
                  </p>
                  <p className="message_error"> {errorMessage} </p>
                </div>
              )}
              {/* <!-- Success Modal --> */}
              {isSignedIn && (
                <div className="validation_message_success text-center p-3 rounded-4 mb-4 bg-success shadow text-white d-flex justify-content-center align-items-center">
                  <p style={{ fontSize: "1.7rem" }}>
                    <i className="fa-solid fa-circle-check mx-3"></i>
                  </p>
                  <p className="message_success"> {signedInMessage} </p>
                </div>
              )}
              <div className="arrange p-2 rounded-4 ">
                <div className="headings text-center">
                  <h2 className="heading">Create Account</h2>
                  <p>
                    Fill your information below or register <br /> with your
                    social account
                  </p>
                </div>
                <div className="form_container mt-4 p-2" id="form_container">
                  <form action="" ref={formEL} id="signUpForm">
                    {/* <!-- Name --> */}
                    <div className="email mb-4 d-flex flex-column">
                      <label htmlFor="userName">Name</label>
                      <input
                        type="text"
                        name="user_Name"
                        className=" rounded-4 mt-2 border-1"
                        placeholder="Onyia Miracle"
                        id="userName"
                        required
                      />
                    </div>
                    <div className="email mb-4 d-flex flex-column">
                      <label htmlFor="userEmail">Email</label>
                      <input
                        type="email"
                        name="user_Email"
                        className=" rounded-4 mt-2"
                        placeholder="example@gmail.com"
                        id="userEmail"
                        required
                      />
                    </div>
                    <div className="password mb-1 d-flex flex-column">
                      <label htmlFor="userPassword">Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        ref={inputPasswordRef}
                        name="user_Password"
                        autoComplete="current-password"
                        className=" rounded-4 mt-2"
                        placeholder="************"
                        id="userPassword"
                        required
                      />
                      <i
                        onClick={() => setShowpassword(!showPassword)}
                        className="text-secondary d-flex justify-content-end ">
                        {showPassword ? "🙈" : "👁️"}
                      </i>
                    </div>
                    <p>
                      <input type="checkbox" id="check" />
                      <label htmlFor="check" className="p-2">
                        Agree with{" "}
                        <Link
                          to={"/signin"}
                          style={{
                            color: "rgba(0, 0, 0",
                            textDecoration: "underline",
                            fontWeight: "lighter",
                          }}>
                          {" "}
                          Terms & Condtitons{" "}
                        </Link>{" "}
                      </label>
                    </p>
                    {/* <!-- <div className="forget-password d-flex justify-content-end">
                                <a href="#">Forgot Password?</a>
                            </div> --> */}
                    <div className="login mt-5">
                      <button
                        ref={buttonSubmitRef}
                        type="submit"
                        id="signButton"
                        className="rounded-5 p-3">
                        Sign Up
                      </button>
                    </div>
                    <div className="text-center mt-5">
                      <p>Or sign up with </p>
                      <div className="iconsSocial mt-4">
                        <i className="fa-brands fa-google mx-3  "></i>
                        <i className="fa-brands fa-facebook-f mx-3  "></i>
                        <i
                          className="fa-brands fa-github mx-3  "
                          id="github"></i>
                      </div>
                    </div>
                    <div className="account_create">
                      <p className="text-center mt-4">
                        Already have an account?{" "}
                        <Link to={"/signin"} style={{ color: "rgba(0, 0, 0" }}>
                          {" "}
                          Sign In{" "}
                        </Link>{" "}
                      </p>
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

export default SignUp;