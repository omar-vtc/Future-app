import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import LineTitle from "../UtilitiesCont/LineTitle";
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          //   border: "solid red",
        }}
      >
        <LineTitle title="المقومات" />
        <div className="row" style={{ marginBottom: "20px" }}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // border: "solid green",
                  }}
                >
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
