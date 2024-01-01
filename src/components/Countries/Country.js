import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import about3 from "../../img/about3.jpg";
function Country() {
  return (
    <div className="country">
      <div className="pic">
        <img src={about3} alt="about" />
      </div>
      <div className="info">
        <div className="cont">
          <h1>
            Study In
            <br />
            <span className="big-title">Spain</span>
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
          <div className="btn-right">
            <button className="btn btn1 btn-warning">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
