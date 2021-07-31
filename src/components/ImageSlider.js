import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="img-1" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="img-1" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="img-1" />
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  button {
    z-index: 1;
  }

  .slick-list {
    overflow: inherit;
  }
  .slick-dots {
    li {
      button {
        &::before {
          color: #f2f2f2;
          font-size: 9px;
        }
      }
    }
  }
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    &:hover {
      opacity: 0.8;
      /* border-bottom: 4px solid rgba(249, 249, 249, 0.8); */
      transition-duration: 300ms;
    }
  }
`;
export default ImageSlider;
