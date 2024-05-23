import React, { useState, useEffect } from "react";
import StudiesData from "../data/Studies.json";

function Studies() {
  const [StudiesDataPage, setStudiesDataPage] = useState({});
  useEffect(() => {
    setStudiesDataPage(StudiesData);
  }, []);
  return (
    <div>
      {/* <NewH /> */}
      <div id="consultServices" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>الدراسات</h2>
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
            {StudiesDataPage.Studies
              ? StudiesDataPage.Studies.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-4 hovering"
                    style={{
                      // height: "270px",
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
      {/* <NewFooter /> */}
    </div>
  );
}

export default Studies;
