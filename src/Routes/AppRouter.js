import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";


const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;