import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import about4 from "../../img/about3.jpg";
function Countryleft() {
  return (
    <div className="cont-left country">
      <div className="info">
        <div className="cont">
          <h1>
            Study In
            <br />
            <span className="big-title">Poland</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            porro, aut placeat assumenda fugit, omnis, libero velit at doloribus
            officiis earum ipsa vel? Quibusdam perspiciatis laudantium voluptate
            fuga cupiditate at? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi porro, aut placeat assumenda fugit, omnis,
            libero velit at doloribus officiis earum ipsa vel? Quibusdam
            perspiciatis laudantium voluptate fuga cupiditate at?
          </p>
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
