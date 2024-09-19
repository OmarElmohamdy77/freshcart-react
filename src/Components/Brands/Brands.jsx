import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link } from 'react-router-dom';

export default function Brands() {

  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
      console.log(data.data);
      setBrands(data.data)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getBrands()


  }, [])


  return <>

    <div className='my-7'>
      <h1 className="text-3xl text-center text-main">All Brands</h1>


      {brands.length ? <div className="md:flex flex-wrap  w-[90%] mx-auto  ">
        {brands.map((brand) =>
          <div key={brand._id} className="md:w-1/2 lg:w-1/3 xl:w-1/4  p-8 my-3 ">
            <Link>
              <div className=" transition-all duration-300 hover:shadow-md hover:shadow-[#0aad0a] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg   " src={brand.image} alt={brand.name} />

                <div className="p-5">

                  <h5 className="mb-2 text-xl md:text-2xl text-center font-bold tracking-tight text-black dark:text-white">{brand.name}</h5>


                </div>
              </div>
            </Link>
          </div>)}
      </div> : <div className="flex justify-center py-16">
        <LoadingScreen />
      </div>}
    </div>

  </>
}