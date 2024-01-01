import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";

function IntroBox(props) {
  if (props.homePage === true) {
    // console.log("Ommaaar");
    // console.log(props.content);

    return (
      <div className="intro-box">
        <h1>
          <span className="main-title">{props.content.mainSpan}</span>
          <br />
          {props.content.main} <br />
        </h1>
        <p className="future-desc">
          <span className="future">{props.content.future}</span>
          {props.content.futureDesc}
        </p>
        <button className="btn btn-warning">Learn more</button>
      </div>
    );
  } else {
    return (
      <div className="intro-box-cont">
        <h1>
          <span className="main-title">{props.content.mainSpan}</span>
          <br />
          {props.content.main} <br />
        </h1>
        <p className="future-desc">
          <span className="future">{props.content.future}</span>
          {props.content.futureDesc}
        </p>
        <button className="btn btn-warning">Learn more</button>
      </div>
    );
  }
}

export default IntroBox;
