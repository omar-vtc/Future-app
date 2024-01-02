import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import about4 from "../../img/about3.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Countryleft(props) {
  const id = props.content.id;
  console.log(id);
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
            <Link to={`/country/${id}`}>
              <button className="btn btn1 btn-warning">Learn More</button>
            </Link>
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
