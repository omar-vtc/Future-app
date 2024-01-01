import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";
import HeaderGridBox from "./HeaderGridBox";
function Grid3Boxes() {
  return (
    <div>
      <div className="intro-grid">
        <HeaderGridBox />
        <HeaderGridBox />
        <HeaderGridBox />

        {/* <div className="intro-con-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-map box-pic"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
            />
          </svg>
          <div className="desc">
            <h2>Mission</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="btn btn-outline-secondary btn-lg">
            Learn more
          </button>
        </div> */}

        {/* <div className="intro-con-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-crosshair box-pic"
            viewBox="0 0 16 16"
          >
            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          </svg>
          <div className="desc">
            <h2>Aim</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="btn btn-outline-secondary btn-lg">
            Learn more
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Grid3Boxes;
