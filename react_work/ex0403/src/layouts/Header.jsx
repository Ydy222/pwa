import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">
        <h2>홈</h2>
      </Link>
      <Link to="/contact">
        <h2>연락처</h2>
      </Link>
      <Link to="/about">
        <h2>About</h2>
      </Link>
      <Link to="/user/33d49fbf-490c-4a33-9c3e-55aa7751ef65">
        <h2>MYPAGE</h2>
      </Link>
    </div>
  );
}

export default Header;
