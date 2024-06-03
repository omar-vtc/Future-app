import React, { useState, useEffect } from "react";
import StudiesData from "../../data/Studies.json";
import Titledesign from "../UtilitiesCont/Titledesign";

function StudiesServices() {
  const [StudiesDataPage, setStudiesDataPage] = useState({});
  useEffect(() => {
    setStudiesDataPage(StudiesData);
  }, []);
  return (
    <div>
      {/* <NewH /> */}
      <div id="consultServices" className="text-center">
        <div className="container">
          <Titledesign
            title="الدراسات"
            subtitle="تقدم أكاديمية المستقبل الدراسات التالية للمؤسسات والجهات الحكومية و منظمات الاعمال:"
          />

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

export default StudiesServices;
