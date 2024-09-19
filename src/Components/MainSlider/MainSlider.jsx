import React from "react";
import mainSlider from "../../assets/images/slider-image-3.jpeg";
import mainSlider1 from "../../assets/images/grocery-banner-2.jpeg";
import slider1 from "../../assets/images/slider-image-1.jpeg";
import slider2 from "../../assets/images/slider-image-2.jpeg";
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <>
      <div className="md:flex w-full flex-wrap">
        <div className="md:w-3/4">
          <Slider {...settings}>
            <img src={mainSlider} alt="food" className="w-full h-[400px]" />
            <img src={mainSlider1} alt="food" className="w-full h-[400px]" />
            <img src={slider2} alt="food" className="w-full h-[400px]" />
          </Slider>
        </div>
        <div className="md:w-1/4">
          <img src={slider1} alt="food" className="w-full h-[200px]" />
          <img src={slider2} alt="food" className="w-full h-[200px]" />
        </div>
      </div>
    </>
  );
}