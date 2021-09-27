import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "./index.css";
// import Navbar from "./components/shared/Navbar/Navbar";
=======
>>>>>>> 8fdcd64d1cd05da4a5c32499a5c6779f0c126156
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <App />
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
