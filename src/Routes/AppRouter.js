import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../pages/search/Search";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Results from "../components/resultsCards/ResultsCards";


const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="results" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;