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

  .slick-list {
    overflow: inherit;
    border: 3px solid transparent;
  }
  .slick-dots {
    li {
      button {
        &::before {
          color: white;
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
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
export default ImageSlider;
