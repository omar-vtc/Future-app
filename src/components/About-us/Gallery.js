import React from "react";
import { Image } from "./Image";
import smg from "../../img/portfolio/01-large.jpg";
import sm01 from "../../img/portfolio/01-small.jpg";
import sm02 from "../../img/portfolio/02-small.jpg";
import sm03 from "../../img/portfolio/03-small.jpg";
import sm04 from "../../img/portfolio/04-small.jpg";
import sm05 from "../../img/portfolio/05-small.jpg";
import sm06 from "../../img/portfolio/06-small.jpg";
import sm07 from "../../img/portfolio/07-small.jpg";
import sm08 from "../../img/portfolio/08-small.jpg";
import sm09 from "../../img/portfolio/09-small.jpg";

import lg01 from "../../img/portfolio/01-small.jpg";
import lg02 from "../../img/portfolio/02-small.jpg";
import lg03 from "../../img/portfolio/03-small.jpg";
import lg04 from "../../img/portfolio/04-small.jpg";
import lg05 from "../../img/portfolio/05-small.jpg";
import lg06 from "../../img/portfolio/06-small.jpg";
import lg07 from "../../img/portfolio/07-small.jpg";
import lg08 from "../../img/portfolio/08-small.jpg";
import lg09 from "../../img/portfolio/09-small.jpg";

export const Gallery = (props) => {
  const gallery = [
    {
      title: "Project Title",
      largeImage: lg01,
      smallImage: sm01,
    },
    {
      title: "Project Title",
      largeImage: lg02,
      smallImage: sm02,
    },
    {
      title: "Project Title",
      largeImage: lg02,
      smallImage: sm03,
    },
    {
      title: "Project Title",
      largeImage: lg04,
      smallImage: sm04,
    },
    {
      title: "Project Title",
      largeImage: lg05,
      smallImage: sm05,
    },
    {
      title: "Project Title",
      largeImage: lg06,
      smallImage: sm06,
    },
    {
      title: "Project Title",
      largeImage: lg07,
      smallImage: sm07,
    },
    {
      title: "Project Title",
      largeImage: lg08,
      smallImage: sm08,
    },
    {
      title: "Project Title",
      largeImage: lg09,
      smallImage: sm09,
    },
  ];
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div
            className="portfolio-items"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {gallery
              ? gallery.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
