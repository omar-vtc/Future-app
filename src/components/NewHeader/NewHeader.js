import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";
import "../../css/spain.css";
import IntroBox from "./NewIntroBox";
import HeaderGrid from "./NewHeaderGrid";
import CountryPic from "./NewCountryPic";
import Navb from "./Navb";
import NewIntroBox from "./NewIntroBox";
import NewHeaderGrid from "./NewHeaderGrid";
import { Grid } from "@mui/material";
import GridNew from "./GridNew";
function NewHeader(props) {
  if (props.homePage) {
    return (
      <div className="mega" style={{ border: "solid black" }}>
        <header className="header container-fluid">
          <Navb homePage={props.homePage} />
          <NewIntroBox
            homePage={props.content.homePage}
            content={props.content}
          />
          <GridNew />
          {/* <NewHeaderGrid /> */}
        </header>
      </div>
    );
  } else {
    return (
      <header className="header-cont container-fluid">
        <Navb homePage={props.homePage} />
        <div className="country-intro">
          <IntroBox homePage={false} content={props.content} />
          <CountryPic />
        </div>
      </header>
    );
  }
}

export default NewHeader;
