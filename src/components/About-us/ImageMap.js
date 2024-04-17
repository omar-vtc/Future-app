import FASpec from "../../img/FASpec.png";
import "../../css/aboutUs.css";
function ImageMap() {
  return (
    <div className="spec-main">
      <div className="pic">
        <img
          src={FASpec}
          alt="about"
          useMap="#image-map"
          className="relative-img"
        />
      </div>
      <div className="mapping">
        <map name="image-map">
          <area
            className="consult"
            target=""
            alt="consult"
            title="consult"
            href="/consulting"
            coords="696,297,713,264,728,221,733,191,723,173,625,177,616,203,604,236"
            shape="poly"
          ></area>
          <area
            target=""
            alt="study"
            title="study"
            href="/"
            coords="577,398,609,381,645,359,674,329,685,307,598,247,577,267,538,293"
            shape="poly"
          />
          <area
            target=""
            alt="training"
            title="training"
            href="/"
            coords="409,403,444,414,483,417,534,412,561,403,527,298,488,302,446,295"
            shape="poly"
          />
          <area
            target=""
            alt="services"
            title="services"
            href="/"
            coords="283,307,308,337,332,365,366,383,391,394,433,295,414,281,389,265,375,251"
            shape="poly"
          />
          <area
            target=""
            alt="follow-up"
            title="follow-up"
            href="/"
            coords="237,174,244,217,252,255,277,293,370,235,354,209,347,172"
            shape="poly"
          />
        </map>
      </div>
    </div>
  );
}

export default ImageMap;
