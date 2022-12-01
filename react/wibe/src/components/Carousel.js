import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination, Autoplay } from "swiper";
import image from "../assets/Images/wearshopportfolio.png";
import image2 from "../assets/Images/abema.png";
import image3 from "../assets/Images/djwodzirej.png";
import image4 from "../assets/Images/kajakilaptop.png";
import image5 from "../assets/Images/abema.png";
import image6 from "../assets/Images/jsgymlaptop.png";
const Container = styled.div`
  width: 60vw;
  height: 70vh;
  margin: 1rem;
  @media (max-width: 64em) {
    width: 90vw;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .swiper-slide img {
    width: 100%;
    height: 95%;
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        scrollbar={{
          draggable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} />
          Nazwa link strony www
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={image2} />
          Nazwa link strony www
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
          Nazwa link strony www
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
          Nazwa link strony www
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
          Nazwa link strony www
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} />
          Nazwa link strony www
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
