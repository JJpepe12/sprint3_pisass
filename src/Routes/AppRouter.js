// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "../components/layout/Layout";
// import Home from "../components/pages/home/Home";


// const AppRouter = () => {

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path={"/"} element={<Layout/>}>
//             <Route index element={<Home/>} />
//                 {/* <Route path="crew" element={<Crew />} />
//                 <Route path="destination" element={<Destination />} />
//                 <Route path="technology" element={<Technology />} /> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default AppRouter;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../pages/search/Search";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Results from "../components/resultsCards/ResultsCards";
import Layout from "../components/layout/Layout";
import Home from "../components/pages/home/Home";
import Buscar from "../components/pages/buscar/Buscar";




const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="results" element={<Results />} />
            <Route index element={<Home/>} />
              <Route path="buscar" element={<Buscar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;