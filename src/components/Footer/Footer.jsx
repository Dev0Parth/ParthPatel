import { React, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <footer>
      <div className="container footer__container">
        <div className="inner__container">
          <div className="left_side">
            <h2>Let's make something amazing together.</h2>
            <h3>
              Start by{" "}
              <a href="mailto:patelparth2282001@gmail.com">saying hi</a>
            </h3>
          </div>

          <div className="right_side">
            <h5>Information</h5>
            <p>145 New York, FL 5467, USA</p>
            <div className="navigation">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "active" : ""}
              >
                services
              </a>
              <a
                href="#works"
                onClick={() => setActiveNav("#works")}
                className={activeNav === "#works" ? "active" : ""}
              >
                works
              </a>
              <a
                href="#notes"
                onClick={() => setActiveNav("#notes")}
                className={activeNav === "#notes" ? "active" : ""}
              >
                notes
              </a>
              <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
              >
                experience
              </a>
            </div>
          </div>
        </div>

        <div className="footer__logo">
          <a href="#home" className="logo_link">
            <h3>Parth</h3>
          </a>

          <p>
            Design by <span>Parth Patel</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
