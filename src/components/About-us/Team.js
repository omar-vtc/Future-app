import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../img/team/01.jpg";
import img2 from "../../img/team/02.jpg";
import img3 from "../../img/team/03.jpg";
import img4 from "../../img/team/04.jpg";
export const Team = (props) => {
  const team = [
    {
      img: img1,
      name: "John Doe",
      job: "Director",
    },
    {
      img: img2,
      name: "Mike Doe",
      job: "Senior Designer",
    },
    {
      img: img3,
      name: "Jane Doe",
      job: "Senior Designer",
    },
    {
      img: img4,
      name: "Karen Doe",
      job: "Project Manager",
    },
  ];
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div
          className="col-md-8 col-md-offset-2 section-title"
          style={{ margin: "auto" }}
        >
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row" style={{ display: "flex" }}>
          {team
            ? team.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
