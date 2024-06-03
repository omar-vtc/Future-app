import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";
import "../../css/spain.css";
import IntroBox from "./IntroBox";
import HeaderGrid from "./HeaderGrid";
import CountryPic from "./CountryPic";
import Navb from "./Navb";
function Header(props) {
  if (props.homePage) {
    return (
      <div className="mega">
        <header className="header container-fluid">
          <Navb />
          <IntroBox homePage={props.content.homePage} content={props.content} />
          <HeaderGrid />
        </header>
      </div>
    );
  } else {
    return (
      <header className="header-cont container-fluid">
        <Navb />
        <div className="country-intro">
          <IntroBox homePage={false} content={props.content} />
          <CountryPic />
        </div>
      </header>
    );
  }
}

export default Header;
