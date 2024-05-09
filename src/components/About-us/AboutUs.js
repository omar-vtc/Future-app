import "../../css/aboutUs.css";
import AboutFuture from "./AboutFuture";
import strategy from "../../img/strategy.png";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ImageMap from "./ImageMap";
import Strategy from "./Strategy";
import ProductCategories from "../UtilitiesCont/ProductCategories";

function AboutUs() {
  return (
    <div>
      <AboutFuture />
      <Strategy />
      <ImageMap />
    </div>
  );
}

export default AboutUs;
