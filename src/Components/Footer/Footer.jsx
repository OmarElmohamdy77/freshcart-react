import React, { useState } from 'react'
import style from './Footer.module.css'
import amazon from "../../assets/images/amazon-pay logo.svg";
import appStore from "../../assets/images/app store.svg";
import american from "../../assets/images/American-Express logo.png";
import masterCard from "../../assets/images/Mastercard-logo.png";
import paypal from "../../assets/images/Paypal-logo.png";
import google from "../../assets/images/google play.png";

export default function Footer() {




  return <>

    <div className='bg-gray-200 px-4 py-8 mt-5'>
      <h4 className='text-xl ms-1'>Get the FreshCart app</h4>
      <p className='text-gray-500 ms-1'>We will send you a link, open it on your phone to download the app</p>



      <div className='my-2 py-5 md:flex justify-center'>
        <div className="relative z-0 w-[85%]   group bg-white">
          <input type="email" name="emaill" id="emaill" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="emaill" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email ...</label>
        </div>

        <button type="button" className="md:w-[10%] md:mt-0 py-3 md:py-0 w-fit md:ms-5 mt-3 focus:outline-none text-white bg-main hover:bg-green-500 focus:ring-4 py focus:ring-green-300 font-medium rounded-lg text-sm px-5   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Share App Link</button>

      </div>

      <hr className='w-[95%] mx-auto h-[1.5px] bg-gray-300 ' />

      <div className='mx-auto w-[95%] py-4 md:flex justify-between'>
        <div className='md:flex items-center gap-x-4 my-2 md:my-0 '>
          <p className='text-2xl'>Payment Partners</p>
          <div className='flex items-center gap-x-3'>
            <img src={amazon} className='w-[40px ] h-[40px] cursor-pointer' alt="amazonLogo" />
            <img src={american} className='w-[30px ] h-[30px] cursor-pointer ' alt="american" />
            <img src={masterCard} className='w-[30px ] h-[30px] cursor-pointer' alt="masterCard" />
            <img src={paypal} className='w-[30px ] h-[30px] cursor-pointer' alt="paypal" />
          </div>


        </div>

        <div className='md:flex items-center gap-x-2 my-2 md:my-0'>
          <p className='text-2xl'>Get deliveries with FreshCart</p>
          <div className='flex items-center'>
            <img src={appStore} className='w-[60px ] h-[60px] cursor-pointer' alt="appStore" />
            <img src={google} className='w-[30px ] h-[30px] cursor-pointer ' alt="google" />
          </div>


        </div>




      </div>

      <hr className='w-[95%] mx-auto h-[1.5px] bg-gray-300' />

    </div>

  </>
}