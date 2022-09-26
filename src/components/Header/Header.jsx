import React from "react";
import "./header.css";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="intro">
          <h3>
            Hey There, <br /> I'm Parth
          </h3>

          <p>
            I design beautiful simple <br /> things, And I love what i do.
          </p>
        </div>

        <span className="email">
          <a href="mailto:patelparth2282001@gmail.com">
            patelparth2282001@gmail.com
          </a>
        </span>

        <div className="experience">
          <div className="left">
            <h4>1</h4>
            <p>
              YEAR <br /> EXPERIENCE
            </p>
          </div>

          <p className="award">
            IDF CRETIFID <br /> PROFESSIONAL <br /> UI/UX DESIGNER
          </p>
        </div>

        <div className="mypic">
          <img src={ME} alt="my pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
