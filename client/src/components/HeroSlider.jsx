import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 1000,
    autoplaySpeed: 1500,
    infinite: true,
    autoplay: true,
    slidesToShow: 3, // Set the number of slides to show
    slidesToScroll: 3,
    pauseOnHover: false,
    lazyLoad: "ondemand",
  };

  return (
    <Slider {...settings} className="hero__slider">
      <div
        className="slider__item slider__item-01 mt0"
        data-lazy="https://bucket.dealervenom.com/2023/08/2023-Toyota-Camry-TRD-Model-Left.jpg?fm=pjpg&ixlib=php-3.3.1"
      >
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div
        className="slider__item slider__item-02 mt0"
        data-lazy="https://www.cnet.com/a/img/resize/449f9e27e7949cce20b641d6a869526221a33f09/hub/2018/07/23/052f8057-176e-411b-aa71-a750825c994e/005-2019-mercedes-amg-c63-coupe.jpg?auto=webp&width=1200"
      >
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div
        className="slider__item slider__item-03 mt0"
        data-lazy="https://upload.wikimedia.org/wikipedia/commons/f/f0/2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg"
      >
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;



