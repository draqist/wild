import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalFonts } from "./fonts/tungsten";
import { GlobalStyles } from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
