import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./notes.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Data from "./Data.json";

const Notes = () => {
  return (
    <section id="notes">
      <div className="container notes__container">
        <h2>People talk about us</h2>
        <p>
          I got a job that was in accordance with the salary and field of work.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Data.map((client) => {
            return (
              <SwiperSlide className="main_swiper">
                <div className="swiper_slide">
                  <div className="swiper_client_msg">
                    <p>{client.message}</p>
                  </div>
                  <div className="swiper_client_data grid grid_two_column">
                    <figure>
                      <img
                        src={client.picture}
                        className="client_pic"
                        alt="client Pic"
                      />
                    </figure>
                    <div className="client_data_details">
                      <p>{client.name}</p>
                      <p>{client.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Notes;
