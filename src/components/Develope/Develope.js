import React, { useState, useEffect } from "react";
import DevelopeData from "../../data/Develope.json";
import Titledesign from "../UtilitiesCont/Titledesign";

function Develope() {
  const [DevelopeDataPage, setDevelopeDataPage] = useState({});
  useEffect(() => {
    setDevelopeDataPage(DevelopeData);
  }, []);
  return (
    <div>
      {/* <NewH /> */}
      <div id="consultServices" className="text-center">
        <div className="container">
          <Titledesign
            title="متابعة وتطوير الأداء المالي والإداري والفني والتسويقي للشركات"
            subtitle="
          مساعدة اصحاب الشركات والمنشآت في إدارة وتطوير وتحسين الأعمال
          والإجراءات الإدارية والمالية والتسويقية والتركيز على المهام
          والعمليات الرئيسية وفي سبيل ذلك نقدم مجموعة الخدمات التالية:"
          />

          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {DevelopeDataPage.Develope
              ? DevelopeDataPage.Develope.map((d, i) => (
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

export default Develope;
