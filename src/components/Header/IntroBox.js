import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";

function IntroBox(props) {
  if (props.homePage === true) {
    console.log("Ommaaar");

    return (
      <div className="intro-box">
        <h1>
          <span className="main-title">The future</span>
          <br />
          of your Education Is Here <br />
        </h1>
        <p className="future-desc">
          <span className="future">Future Academy</span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolore aut perspiciatis sed ab,
          magnam.
        </p>
        <button className="btn btn-warning">Learn more</button>
      </div>
    );
  } else {
    return (
      <div className="intro-box-cont">
        <h1>
          <span className="main-title">The future</span>
          <br />
          of your Education Is Here <br />
        </h1>
        <p className="future-desc">
          <span className="future">Future Academy</span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolore aut perspiciatis sed ab,
          magnam.
        </p>
        <button className="btn btn-warning">Learn more</button>
      </div>
    );
  }
}

export default IntroBox;
