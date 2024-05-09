import Header from "../components/Header/Header";
import IntroBoxesCont from "../components/Content/IntroBoxes/IntroBoxesCont";
import StrSpTitle from "../components/UtilitiesCont/StrSpTitle";
import Footer from "../components/Footer/Footer";
import ConsultRight from "../components/About-us/ConsultRight";
import ConsultLeft from "../components/About-us/ConsultLeft";
import studies from "../img/studies.png";

function Studies() {
  return (
    <div>
      <Header homePage={false} content={IntroBoxesCont[7]} />
      <div className="consult">
        <StrSpTitle
          className="strategy-title-consult"
          subtitle="معلومات عن"
          title="الدراسات"
        />
        {/* <div className="mother-consult">
          <ConsultRight />
          <ConsultLeft />
        </div> */}
        <div className="st-img">
          <div className="child-img">
            <img src={studies} alt="" />
          </div>
        </div>
      </div>
      <div className="marginTop">
        <Footer />
      </div>
    </div>
  );
}

export default Studies;
