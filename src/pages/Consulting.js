import ConsultRight from "../components/About-us/ConsultRight";
import ConsultLeft from "../components/About-us/ConsultLeft";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import IntroBoxesCont from "../components/Content/IntroBoxes/IntroBoxesCont";
import StrSpTitle from "../components/UtilitiesCont/StrSpTitle";
import { NewH } from "../components/NewHeader/NewH";
import { ConsultServices } from "../components/Consulting/ConsultServices";
import NewFooter from "../components/Footer/NewFooter";

function Consulting() {
  return (
    <div>
      {/* <Header homePage={false} content={IntroBoxesCont[7]} /> */}
      <NewH />
      <ConsultServices />
      {/* <div className="consult">
        <StrSpTitle
          className="strategy-title-consult"
          subtitle="معلومات عن"
          title="الاستشارات"
        />
        <div className="mother-consult">
          <ConsultRight />
          <ConsultLeft />
        </div>
      </div>
      <div className="marginTop">
        <Footer />
      </div> */}
      {/* <NewFooter /> */}
    </div>
  );
}

export default Consulting;
