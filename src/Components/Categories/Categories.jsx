import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";


export default function Categories() {


  const [categorys, setCategorys] = useState([]);
  const [subCategory, setSubCategory] = useState([]);


  async function getCategory() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
      // console.log(data.data);
      setCategorys(data.data)

    } catch (error) {
      console.log(error);

    }
  }


  async function getSubCategory(id) {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
      console.log(data);
      setSubCategory(data.data)

    } catch (error) {
      console.log(error);

    }
  }



  useEffect(() => {
    getCategory()


  }, [])


  return <>

    {categorys.length ? <div className="md:flex flex-wrap  w-[90%] mx-auto  ">
      {categorys.map((category) =>
        <div key={category._id} className="md:w-1/3  p-8 my-3 ">
          <Link>
            <div onClick={() => getSubCategory(category._id)} className=" transition-all duration-300 hover:shadow-md hover:shadow-[#0aad0a] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

              <img className="rounded-t-lg w-full h-[400px] border-b-2 " src={category.image} alt={category.name} />

              <div className="p-5">

                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-main dark:text-white">{category.name}</h5>


              </div>
            </div>
          </Link>
        </div>)}
    </div> : <div className="flex justify-center py-16">
      <LoadingScreen />
    </div>}



    {subCategory.length ? <div className="my-10">

      <div className="text-main text-4xl my-5 text-center">Home subcategories</div>


      {subCategory.length ? <div className=" md:flex md:flex-wrap   w-[90%] mx-auto  ">
        {subCategory.map((category) =>
          <div key={category._id} className=" md:w-1/3  py-2 px-8 my-3 ">
            <Link>
              <div className=" transition-all duration-300 hover:shadow-md hover:shadow-[#0aad0a] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-black dark:text-white">{category.name}</h5>
                </div>
              </div>
            </Link>
          </div>)}
      </div> : <div className="flex justify-center py-16">
        <LoadingScreen />
      </div>}


    </div> : ''}








  </>;
}