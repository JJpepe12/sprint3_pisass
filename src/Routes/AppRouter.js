import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Home from "../Components/home/Home";
import Crew from "../Components/crew/Crew";
import Destination from "../Components/destination/Destination";
import Technology from "../Components/technology/Technology";


const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
                <Route path="crew" element={<Crew />} />
                <Route path="destination" element={<Destination />} />
                <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;