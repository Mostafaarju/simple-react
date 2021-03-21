import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://www.fcbarcelona.com/resources/v2.17.1-3917/i/bg-elements/fan-comments-background@x2.png"
        alt=""
      />
      <nav>
        <a href="/player">Player List</a>
        <a href="/review">Player Review</a>
        <a href="/manage">Player Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
