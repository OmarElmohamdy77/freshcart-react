import { useContext, useState } from "react";
import Style from "./ProductItem.module.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

function ProductItem({ product }) {



  const {addItemToCart , setCartItems}= useContext(CartContext);
  async function addItem(id){
    const response = await addItemToCart(id);
    console.log(response);

    if(response.data.status == "success") {
      setCartItems(response.data.numOfCartItems)
      toast.success('added successfully' , {
        duration: 5000,
      })
  }
}
  return (
    <div>
      <Link to={`/productDetails/${product._id}`}>
    <div className="">
      <img src={product.imageCover} 
      className="w-full object-cover" 
      alt="" 
      />
      <p className="text-sm text-green-600 my-2">{product.category.name}</p>
      <h3 className="truncate h4 mb-2">
        {product.title.split(" ").slice(0, 2).join(" ")}
      </h3>

      <div className="flex  justify-between">
        <p>{product.price} EGY</p>
        <p>
          {product.ratingsAverage}{" "} 
          <FaStar className="text-yellow-400 inline-block" />{" "}
        </p>
      </div>
    </div>
  </Link>

      <button onClick={() => addItem(product._id)}>+ Add </button>
    </div>
  
  );
}

export default ProductItem;
