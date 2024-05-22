import React, { useState, useEffect } from "react";
import consultData from "../../data/consulting.json";

export const ConsultServices = (props) => {
  const [consultDataPage, setconsultDataPage] = useState({});
  useEffect(() => {
    setconsultDataPage(consultData);
  }, []);

  return (
    <div id="consultServices" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>الاستشارات</h2>
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
          {consultDataPage.Consulting
            ? consultDataPage.Consulting.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 hovering"
                  style={{
                    height: "270px",
                    borderRadius: "20px",
                    margin: "5px",
                    background: "#f6f6f6",
                  }}
                >
                  <i className={d.icon}> {i + 1} </i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
