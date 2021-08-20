import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        className="display-1"
        style={{ padding: "25% 0% 2%", color: "#7e7ca6" }}
      >
        404, page not found
      </h1>
      <Link to="/"
        className="display-1"
        style={{ padding: "25% 0% 2%", color: "#7e7ca6", fontSize: "18px" }}
      >
        Go Back Home.
      </Link>
    </div>
  );
};

export default NotFound;
