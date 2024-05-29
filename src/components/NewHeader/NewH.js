import React from "react";
import "../../css/style.css";
import Navb from "./Navb";
export const NewH = (props) => {
  return (
    <header id="header">
      <Navb />
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  أكاديمية المستقبل
                  <span></span>
                </h1>
                <p>
                  "حيث تقدم أكاديمية المستقبل خدمات دعم التعليم والاستشارات
                  والبحوث والدراسات والبرامج التدريبة المتميزة لمؤسسات القطاع
                  الحكومي وشركات القطاع الخاص وقادة الاعمال."
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  معرفة المزيد
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
