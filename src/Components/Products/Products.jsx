import React, { useContext, useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { WishListContext } from '../../Context/WishListContext';
import RecentProducts from '../RecentProducts/RecentProducts';

export default function Products() {

  const { addProduct } = useContext(CartContext);
  const { addWishList } = useContext(WishListContext);

  const [products, setProducts] = useState([]);

  const [seccolor, setSecColor] = useState(false);

  function changeColor() {
    setSecColor(true);
  }


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


  return <>

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
}