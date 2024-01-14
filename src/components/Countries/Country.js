import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import about3 from "../../img/about3.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Country(props) {
  const id = props.content.id;
  console.log(id);
  return (
    <div className="country">
      <div className="pic">
        <img src={props.content.pic} alt="about" />
      </div>
      <div className="info">
        <div className="cont">
          <h1>
            Study In
            <br />
            <span className="big-title">{props.content.country}</span>
          </h1>
          <p>{props.content.desc}</p>
          <div className="btn-right">
            <Link to={`/country/${id}`}>
              <button className="btn btn1 btn-warning">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
