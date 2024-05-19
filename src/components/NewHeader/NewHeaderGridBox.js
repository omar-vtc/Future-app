import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";

function NewHeaderGridBox() {
  return (
    <div className="intro-con-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-lightbulb box-pic"
        viewBox="0 0 16 16"
      >
        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
      </svg>
      <div className="desc">
        <h2>Vision</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <button className="btn btn-outline-secondary btn-lg">Learn more</button>
    </div>
  );
}

export default NewHeaderGridBox;
