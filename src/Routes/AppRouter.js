import React, {createContext, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";


export const UserContext = createContext({});
const AppRouter = () => {
  const [usernamec, setUsernamec] = useState("");
  return (
    <BrowserRouter>
    <UserContext.Provider value={{ 
      usernamec,
      setUsernamec,
       }}>
  
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
          </Route>
        </Routes>
    </UserContext.Provider>
  </BrowserRouter>
  );
};

export default AppRouter;