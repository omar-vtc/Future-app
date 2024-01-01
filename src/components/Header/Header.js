import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";
import "../../css/spain.css";
import IntroBox from "./IntroBox";
import HeaderGrid from "./HeaderGrid";
import Nav from "./Nav";
import CountryIntro from "./CountryIntro";
function Header(props) {
  if (props.homePage) {
    return (
      <div className="mega">
        <header className="header container-fluid">
          <Nav />
          <IntroBox homePage={props.homePage} />
          <HeaderGrid />
        </header>
      </div>
    );
  } else {
    return (
      <header className="header-cont container-fluid">
        <Nav />
        <CountryIntro />
      </header>
    );
  }
}

export default Header;
