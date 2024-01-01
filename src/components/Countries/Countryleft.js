import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import about4 from "../../img/about3.jpg";
function Countryleft(props) {
  return (
    <div className="cont-left country">
      <div className="info">
        <div className="cont">
          <h1>
            Study In
            <br />
            <span className="big-title">{props.content.country}</span>
          </h1>
          <p>{props.content.desc}</p>
          <div className="btn-left">
            <button className="btn btn1 btn-warning">Learn More</button>
          </div>
        </div>
      </div>
      <div className="pic">
        <img src={about4} alt="about" />
      </div>
    </div>
  );
}

export default Countryleft;
