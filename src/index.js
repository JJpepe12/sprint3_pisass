import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routes/AppRouter";
import { GlobalStyles } from "./Styleindex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <GlobalStyles />
      <AppRouter />
    </React.StrictMode>
);