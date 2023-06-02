import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
                <Route path="crew" element={<Crew />} />
                <Route path="destination" element={<Destination />} />
                <Route path="technology" element={<Technology />} />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;