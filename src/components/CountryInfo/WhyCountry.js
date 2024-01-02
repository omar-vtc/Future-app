import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/spain.css";
function WhyCountry(props) {
  return (
    <div className="why-country-main">
      <div className="why-country">
        <div className="why-country-cont">
          <h1>Why {props.title}?</h1>
          <ul className="ul-country">
            <li>{props.content.item1}</li>
            <li>{props.content.item2}</li>
            <li>{props.content.item3}</li>
            <li>{props.content.item4}</li>
          </ul>
          <button className="btn btn-warning">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default WhyCountry;
