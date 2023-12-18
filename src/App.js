import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  
} from "react-router-dom";

import { productsData } from "./api/api";
import Cart from './Components/Cart'
import Sign from './Components/Sign'
import Registration from "./Components/Registration";
import HomePage from './Components/Home/HomePage'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Detail from "./Components/Detail/Detail";
import Account from "./Components/Account";
import ProductFilterPage from "./Components/Products/ProductFilterPage";



const Layout = () => {
  return (
    <div >
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<Detail />}/>
          <Route path="filtered/:id" element={<ProductFilterPage />}/>
        </Route>
        <Route path="/sign" element={<Sign />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
    
        <Route path="/account" element={<Account/>}></Route>
        
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
