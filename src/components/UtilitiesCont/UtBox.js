import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import pic1 from "../../img/pic1.jpg";
function UtBox() {
  return (
    <div className="ut-box">
      <div className="pic">
        <img src={pic1} alt="pic" />
      </div>
      <div className="content">
        <h3>How To Rate Our Services</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam
          velit quia ab omnis ut laborum.
        </p>
        <button className="btn btn1 btn-mar btn-warning">Read More</button>
      </div>
    </div>
  );
}

export default UtBox;
