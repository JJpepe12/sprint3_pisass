import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../pages/search/Search";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import { UserProvider } from "../context/UserProvider";
import Login from "../pages/login/login";
import Purchases from "../pages/purchases/Purchases";



const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
      <UserProvider>
        <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="purchases" element={<Purchases />} />
          </Route>
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;

