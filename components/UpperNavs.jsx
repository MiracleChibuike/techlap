
import "./UpperNavs.css";

const UpperNavs = () => {

    return(
        <>
         <section className="contactGlobal">
            <div id="contact-handles" className="Social-Icons">
                <span className="facebook"><i className="fa-brands fa-facebook"></i></span>
                <span className="X"><i className="fa-brands fa-x-twitter"></i></span>
                <span className="youTube"><i className="fa-brands fa-youtube"></i></span>
            </div>
            <div id="contacts-local">
                <span className="email"><i className="fa-solid fa-envelope" id="envelope"></i>servicesmtechs@gmail.com</span>
                <span className="phone"><i className="fa-solid fa-phone" id="phone"></i>(+234) 704 338
                    2546</span>
                <span className="clock"><i className="fa-solid fa-clock" id="clock"></i>Mon - Sat: 8:00 AM -
                    6:00 PM
                </span>
            </div>
        </section>
        </>
    );
};

export default UpperNavs;