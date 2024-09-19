import React, { useContext, useEffect, useState } from "react";
import style from "./Home.module.css";
import RecentProducts from "../RecentProducts/RecentProducts";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import CategoriesSlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import { WishListContext } from "../../Context/WishListContext";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProduct() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products`
      );
      console.log(data.data[0].subcategory[0].category);

      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="mt-6">
        <MainSlider />
      </div>
      <div className="mt-4">
        <CategoriesSlider />
      </div>

      <div className="py-3">
        {products.length ? (
          <div className="flex flex-wrap py-16">
            {products.map((product) => (
              <RecentProducts key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-16">
            <LoadingScreen />
          </div>
        )}
      </div>
    </>
  );
}