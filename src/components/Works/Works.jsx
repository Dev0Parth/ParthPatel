import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./Images";
import "./works.css";

const Works = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section id="works">
      <div className="container works__container">
        <div className="work_heading">
          <div className="work_title">
            <h2>My Latest Works</h2>
            <p>Perfect solution for digital experience</p>
          </div>

          <div className="explore_btn">
            <a href="#works">Explore More Works</a>
          </div>
        </div>

        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt="project" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
