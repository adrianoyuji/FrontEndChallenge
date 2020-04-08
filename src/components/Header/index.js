import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="headerItem">Home</div>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <div className="headerItem">About</div>
      </Link>
    </div>
  );
}
