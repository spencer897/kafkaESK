import React, { Component } from "react";
import "../styles/nav.scss";
import Logo from "../images/kafkaesk-logo3.png";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <img src={Logo} width="130" />
      </div>
      <div>&nbsp;</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </nav>
  );
};

export default Nav;
