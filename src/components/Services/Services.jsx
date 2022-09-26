import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineMobile } from "react-icons/ai";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="container services__container">
        <div className="services_cards">
          <div className="card">
            <div className="card_icon computer_icn">
              <RiComputerLine />
            </div>
            <div className="card_txt">
              <h4>Website Development</h4>
              <p>76 Projects</p>
            </div>
          </div>

          <div className="card">
            <div className="card_icon mobile_icn">
              <AiOutlineMobile />
            </div>
            <div className="card_txt">
              <h4>Mobile App Development</h4>
              <p>63 Projects</p>
            </div>
          </div>

          <div className="card">
            <div className="card_icon testing_icn">
              <IoShieldCheckmarkOutline />
            </div>
            <div className="card_txt">
              <h4>Software Testing</h4>
              <p>47 Projects</p>
            </div>
          </div>
        </div>

        <div className="services_details">
          <h2>What do I help?</h2>
          <p>
            I will help you with finding a solution and solve your problem. We
            use process design to create digital products. Besids that also help
            their business.
          </p>
          <p>
            We use process design to create digital products. Besids that also
            help their business.
          </p>
          <div className="projects_clients">
            <div className="project_count">
              <h2>2+</h2>
              <p>Project Completed</p>
            </div>
            <div className="client_count">
              <h2>1+</h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
