import React, { useContext, useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Slider from "react-slick";
import { CartContext } from "../../Context/CartContext";

export default function ProductDetails() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };


  const { addProduct } = useContext(CartContext)

  const [productDetailes, setProductDetailes] = useState(null);
  const [sameCategory, setSameCategory] = useState(null);

  let { id, category } = useParams();

  async function getDetailes(id) {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );

      setProductDetailes(data.data);



    } catch (error) {
      console.log(error);
    }
  }

  async function getSameCatogery(category) {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?category=${category}`
      );


      setSameCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailes(id);
    getSameCatogery(category);
  }, [id]);

  return (
    <>
      {productDetailes != null && sameCategory != null ? (
        <div className="py-10 flex flex-wrap items-center mx-8">
          <div className="w-1/4 md:px-4 px-1">
            {productDetailes.images.length > 1 ? <Slider {...settings}>{productDetailes.images.map((src, index) => (<img key={index} className="w-full" src={src} alt={productDetailes.title} />
            ))}
            </Slider> : <img

              className="w-full"
              src={productDetailes.imageCover}
              alt={productDetailes.title}
            />}
          </div>
          <div className="w-3/4 px-4">
            <h4 className="font-bold  text-gray-600 py-3">
              {productDetailes.title}
            </h4>

            <p className="text-gray-500 py-3">{productDetailes.description}</p>
            <div className="flex justify-between items-center">
              <span>{productDetailes.category.name}</span>
              <Link className="me-1">
                <i className="fa-regular fa-2x fa-heart"></i>
              </Link>
            </div>


            <div className="flex justify-between mt-3 mb-2 ">
              <p>{productDetailes.price} EGP</p>
              <p>
                <i className="rating-color fa-solid fa-star"></i>
                {productDetailes.ratingsAverage}
              </p>
            </div>

            <button onClick={() => addProduct(productDetailes._id)} type="button" className="bg-main w-full btn p-2 text-white rounded-lg">
              + Add
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-16">
          <LoadingScreen />
        </div>
      )}

      <div className="flex flex-wrap pt-4">
        {sameCategory?.map((product) => (
          <div key={product.id} className="md:w-1/4 lg:w-1/6 py-2">
            <div className="product cursor-pointer px-2 py-3">
              <Link
                to={`/productDetailes/${product.id}/${product.subcategory[0].category}`}
              >
                <div className="product-img">
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between items-center ">
                  <div>
                    <h3 className="text-main px-2 ">{product.category.name}</h3>
                    <p className="text-lg font-normal text-gray-800 px-2">
                      {product.title.split(" ").slice(0, 2).join(" ")}{" "}
                    </p>
                  </div>

                  <Link className="me-1">
                    <i className="fa-regular fa-2x fa-heart"></i>
                  </Link>
                </div>
                <div className="flex justify-between mt-3 mb-2 px-2">
                  <p>{product.price} EGP</p>
                  <p>
                    <i className="rating-color fa-solid fa-star"></i>
                    {product.ratingsAverage}
                  </p>
                </div>
              </Link>
              <button onClick={() => addProduct(product._id)
              } className="bg-main w-full btn p-2 text-white rounded-lg" >
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}