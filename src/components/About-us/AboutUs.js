// import "../../css/index.css";
import "../../css/aboutUs.css";
import AboutFuture from "./AboutFuture";
import strategy from "../../img/strategy.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ImageMap from "./ImageMap";
function AboutUs() {
  const history = useHistory();

  const handleAreaClick = (areaId) => {
    // Handle click events for map areas
    console.log("Clicked area:", areaId);
    // Navigate to the corresponding page
    history.push("/consulting");
    // switch (areaId) {
    //   case "northAmerica":
    //     history.push("/north-america");
    //     break;
    //   case "europe":
    //     history.push("/europe");
    //     break;
    //   // Add more cases for other areas if needed
    //   default:
    //     break;
    // }
  };
  return (
    <div>
      <AboutFuture />
      <div className="strategy">
        <div className="strategy-title">
          <div className="float-right">
            <h4>معلومات عن</h4>
            <h1>استراتجية اكاديمية المستقبل</h1>
          </div>
        </div>
      </div>
      <ImageMap />
    </div>
  );
}

export default AboutUs;
