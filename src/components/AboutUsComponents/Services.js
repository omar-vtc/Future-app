import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>مجالات اكادمية المستقبل</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 hovering"
                  style={{
                    height: "370px",
                    // border: "solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={d.to}
                  >
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </Link>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
