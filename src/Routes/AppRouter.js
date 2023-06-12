import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../pages/search/Search";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import { UserProvider } from "../context/UserProvider";
import Login from "../pages/login/login";
import { PizzasProvider } from "../context/PizzasProvider";
import Purchases from "../pages/purchases/Purchases";
import Order from "../pages/order/Order";
import { NotFound } from "../components/notFound/NotFound";
import Details from "../pages/details/Details";



const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
      <PizzasProvider>
      <UserProvider>
        <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="order" element={<Order />} />
            <Route path="details" element={<Details />} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </UserProvider>
        </PizzasProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;

