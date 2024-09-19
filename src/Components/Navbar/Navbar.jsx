import React, { useContext,useRef, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

// import { CounterContext } from '../../Context/CounterContext';

export default function Navbar() {

  const { cart } = useContext(CartContext);

  useEffect(() => {

    cart

  }, [])


  const [toggle, setToggle] = useState(true);
  const { userLogin, setUserLogin } = useContext(UserContext);

  // const {counter} = useContext(CounterContext)

  // const {count , setCount} = useContext(CounterContext)


  function logout() {
    setUserLogin(null);
    localStorage.removeItem("userToken");
  }

  function toggleNav() {
    setToggle(!toggle);
  }





  return (
    <>
      <nav className="bg-gray-300  z-50 md:fixed top-0 capitalize inset-x-0 py-2 text-center ">
        <div className="container  w-full flex flex-col md:flex-row justify-around  items-center text-gray-600">

        



          <div className="flex items-center flex-row md:justify-around justify-evenly w-full md:w-fit md:block py-3">
            <img src={logo} width={125} alt="" />
            <div
              onClick={() => {
                toggleNav();
              }}
              className="cursor-pointer md:hidden"
            >
              <i className=" fa-solid fa-bars"></i>
            </div>
          </div>


          <div>
            <ul
              className={`${toggle ? "hidden" : ""
                }  md:flex items-center  flex-col md:flex-row space-x-3`}
            >
              {userLogin !== null ? (
                <>
                  <li className="py-2">
                    <NavLink to="">Home</NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink to="cart">cart</NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink to="wishlist">wish List</NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink to="products">products</NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink to="categories">categories</NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink to="brands">brands</NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>






          <div >
            <ul
              className={`${toggle ? "hidden " : ""
                } md:flex items-center flex-col md:flex-row space-x-3`}
            >



              {userLogin ? (
                <>
                  <li className="py-2 relative ">
                    <NavLink to="cart"><i className="fa-solid fa-cart-shopping fa-2xl text-main"></i>
                      <span className="text-white absolute left-1/2 top-[5px] -translate-x-1/2">{cart ? cart.numOfCartItems : 0}</span>
                    </NavLink>
                  </li>
                  <li className="py-2 ">
                    <Link
                      to="login"
                      onClick={() => {
                        logout();
                      }}
                    >
                      logout
                    </Link>
                  </li>
                </>


              ) : (
                <>
                  <li className="block py-2 px-3">
                    <NavLink to="login">Login</NavLink>
                  </li>
                  <li className="block py-2 px-3">
                    <NavLink to="register">Register</NavLink>
                  </li>
                </>
              )}
                          <li>
              <ToggleMode />
            </li>

              {/* 
            
            FaFacebook
FaTwitter 
FaLinkedinIn
FaTiktok
FaYoutube
FaInstagram
            */}
            <li className="flex gap-4">
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                <FaFacebook />
              </a>
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                <FaTwitter />
              </a>
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                <FaYoutube />
              </a>
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                <FaTiktok />
              </a>
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                <FaInstagram />
              </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
function ToggleMode() {
  //! re
  // ! true

  const [isDarkMode, setIsDarkMode] = useState(false);

  const ref = useRef(document.querySelector("html"));

  //! updating ==> state

  //! side effects
  useEffect(() => {
    toggleDarkFn();
  }, [isDarkMode]);

  function toggleDarkFn() {
    ref.current.classList.toggle("dark", isDarkMode);
  }
  //   console.log(isDarkMode);
  return (
    <>
      {/* <button onClick={() =>setIsDarkMode(!isDarkMode)}>

        {isDarkMode ? <MdDarkMode className="text-white" /> : <MdOutlineDarkMode className="bg-white" />}
      </button> */}

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        id="theme-toggle"
        type="button"
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-xl text-sm p-2.5"
      >
        {isDarkMode ? (
          <svg
            id="theme-toggle-dark-icon"
            className=" w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            id="theme-toggle-light-icon"
            className=" w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </>
  );
}
