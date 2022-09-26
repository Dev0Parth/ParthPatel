import { React, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav>
      <div className="nav__container container">
        <div className="logo">
          <a href="#home" className="logo_link">
            <h3>Parth</h3>
          </a>
        </div>

        <div className="nav_items">
          {/* <a
            href="#home"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Home
          </a> */}
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ? "active" : ""}
          >
            Services
          </a>

          <a
            href="#works"
            onClick={() => {
              setActiveNav("#works");
              setActiveMenu(false);
            }}
            className={activeNav === "#works" ? "active" : ""}
          >
            Works
          </a>

          <a
            href="#notes"
            onClick={() => setActiveNav("#notes")}
            className={activeNav === "#notes" ? "active" : ""}
          >
            Notes
          </a>

          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            experience
          </a>
        </div>

        <div
          className="hamburger"
          onClick={
            activeMenu === false
              ? () => setActiveMenu(true)
              : () => setActiveMenu(false)
          }
        >
          {activeMenu === false ? <RiMenu5Line /> : <RiCloseLine />}
        </div>

        {activeMenu === true ? (
          <div className="mobile_nav_items">
            {/* <a
              href="#home"
              onClick={() => {
                setActiveNav("#");
                setActiveMenu(false);
              }}
              className={activeNav === "#" ? "active" : ""}
            >
              Home
            </a> */}
            <a
              href="#about"
              onClick={() => {
                setActiveNav("#about");
                setActiveMenu(false);
              }}
              className={activeNav === "#about" ? "active" : ""}
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => {
                setActiveNav("#services");
                setActiveMenu(false);
              }}
              className={activeNav === "#services" ? "active" : ""}
            >
              Services
            </a>

            <a
              href="#works"
              onClick={() => {
                setActiveNav("#works");
                setActiveMenu(false);
              }}
              className={activeNav === "#works" ? "active" : ""}
            >
              Works
            </a>

            <a
              href="#notes"
              onClick={() => {
                setActiveNav("#notes");
                setActiveMenu(false);
              }}
              className={activeNav === "#notes" ? "active" : ""}
            >
              Notes
            </a>

            <a
              href="#experience"
              onClick={() => {
                setActiveNav("#experience");
                setActiveMenu(false);
              }}
              className={activeNav === "#experience" ? "active" : ""}
            >
              experience
            </a>
          </div>
        ) : (
          ""
        )}

        <div className="phone_no">
          <p>(+91) 72290 01216</p>
          <a href="https://wa.me/7229001216">
            <div className="phone_btn">
              <FaWhatsapp />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
