import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import LoadingScreen from "../LoadingScreen/LoadingScreen";



export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  const [category, setCategory] = useState([]);

  async function getCategory() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );
    console.log(data.data[0].image);
    setCategory(data.data);
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <h3 className="text-2xl ps-2 py-2 font-bold text-gray-800">
        Shop Popular Categories
      </h3>
      <Slider {...settings}>
        {category ? (
          category.map((product) => (
            <div key={product._id} className="w-[200px] h-[200px]">
              <img src={product.image} alt="" className="w-full h-full" />
              <h3 className="py-1">{product.name}</h3>
            </div>
          ))
        ) : (
          <div className="flex justify-center py-16">
            <LoadingScreen />
          </div>
        )}
      </Slider>
    </>
  );
}