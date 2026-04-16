
import UpperNavs from "./UpperNavs";
import NavBar from "./Navbar";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Links, Link } from "react-router-dom";


const Home = () => {

    Aos.init( {
        duration: 2000, once: true
    })

    return (
      <>
        <UpperNavs />
        <NavBar />
        <div className="container-fluid">
          {/* <!-- Hero section --> */}
          <section id="hero">
            <div className="homeText">
              <div className="main-text-home">
                <h1 className="websiteInfo" data-aos="fade-right">
                  Upgrade Your Home Office: Best Laptops for productivity in
                  2026. Welcome to TechLap, your ultimate destination for
                  productivity laptops!
                </h1>
                <p data-aos="fade-left">
                  We believe that the right laptop can be a powerful tool to
                  enhance your productivity, whether you're a student, a
                  professional, or a creative individual. At TechLap, we
                  handpick the best laptops that are designed to help you
                  achieve more. Our carefully curated collection features
                  laptops with powerful processors, ample RAM, and
                  high-resolution displays, ensuring that you can work, study,
                  or create with ease.
                </p>
              </div>
              <div className="shop-cart">
                <button id="shop-nowBtn">
                  Shop Now{" "}
                  <i className="fa-solid fa-arrow-right-long shop-right"></i>
                </button>
                <button id="cartBtn">
                  <a href="#products">Add to Cart</a>{" "}
                  <i className="fa-solid fa-cart-shopping cart-icon-add"></i>
                </button>
              </div>
              <Link to={"/auth/signUp"}>
                <button>Admin</button>
              </Link>
            </div>
          </section>
        </div>
      </>
    );
};

export default Home;