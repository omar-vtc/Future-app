// import "../../css/index.css";
import "../../css/aboutUs.css";
import AboutFuture from "./AboutFuture";
import FASpec from "../../img/FASpec.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
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
      {/* <div className="spec-title">
        <h1>مجالات اكاديمية المستقبل</h1>
      </div> */}
      <div className="spec-main">
        <div className="pic">
          <img src={FASpec} alt="about" useMap="#image-map" />
          <map name="image-map">
            <area
              className="consulting"
              target=""
              alt="consulting"
              title="consulting"
              href="/consulting"
              coords="1024,430,1056,357,1069,307,1069,259,920,256,910,267,907,291,898,312,887,347,940,383"
              shape="poly"
              onClick={() => handleAreaClick("consulting")}
            />

            <area
              target=""
              alt="Study"
              title="Study"
              href=""
              coords="845,583,903,557,942,524,987,487,1011,453,875,364,846,394,818,412,792,430"
              shape="poly"
            />
            <area
              target=""
              alt="Training"
              title="Training"
              href=""
              coords="603,587,645,605,709,611,788,601,824,593,771,441,732,444,692,446,653,437"
              shape="poly"
            />
            <area
              target=""
              alt="Services"
              title="Services"
              href=""
              coords="577,583,519,557,487,531,453,502,417,451,548,364,586,402,634,431"
              shape="poly"
            />
            <area
              target=""
              alt="following"
              title="following"
              href=""
              coords="354,259,356,299,367,351,383,396,406,431,542,346,523,302,512,254"
              shape="poly"
            />
          </map>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
