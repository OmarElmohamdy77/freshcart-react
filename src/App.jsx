import { useState } from "react";

import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/LayOut/LayOut.jsx";
import Home from "./Components/Home/Home.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Products from "./Components/Products/Products.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Brands from "./Components/Brands/Brands.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Notfound from "./Components/NotFound/NotFound.jsx";
import UserContextProvider from "./Context/UserContext.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import CartContextProvider from "./Context/CartContext.jsx";
import { Toaster } from "react-hot-toast";
import Allorders from "./Components/Allorders/Allorders.jsx";
import CheckOut from "./Components/CheckOut/CheckOut.jsx";
import Wishlist from "./Components/Wishlist/Wishlist.jsx";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.jsx";
import VerifyCode from "./Components/VerifyCode/VerifyCode.jsx";
import ResetPassword from "./Components/ResetPassword/ResetPassword.jsx";
import WishListContextProvider from "./Context/WishListContext.jsx";





let routers = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "productDetails/:id/:category",
        element: (
          <ProtectedRoute>
            <productDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkOut",
        element: (
          <ProtectedRoute>
            <checkOut />
          </ProtectedRoute>
        ),
      },

      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            <Allorders />
          </ProtectedRoute>
        ),
      },

      {
        path: "brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "resetpassword", element: <ResetPassword /> },
      { path: "*", element: <Notfound /> },
      {
        path: "forgetpassword", element: <ForgetPassword />
      },
      {
        path: "VerifyCode",
        element: (

          <VerifyCode />

        ),
      },
    ],
  },
]);



function App() {


  return (

    <CartContextProvider>
      <WishListContextProvider>
        <UserContextProvider>
          <RouterProvider router={routers}></RouterProvider>
          <Toaster />
        </UserContextProvider>
      </WishListContextProvider>
    </CartContextProvider>


  );
}

export default App;