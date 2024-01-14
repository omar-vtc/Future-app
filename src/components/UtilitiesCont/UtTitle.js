import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
function UtTitle(props) {
  return (
    <div className="ut-title">
      <h5>{props.minTitle}</h5>
      <h1>{props.mainTitle}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        officia ratione, quia laboriosam quam neque veritatis at reprehenderit
        sint deserunt harum eaque recusandae sed tenetur laudantium eveniet cum
        aperiam ipsam.
      </p>
    </div>
  );
}

export default UtTitle;
