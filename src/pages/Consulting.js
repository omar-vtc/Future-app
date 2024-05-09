import Navb from "../components/Header/Navb";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import H3Edit from "../components/UtilitiesCont/H3Edit";
import H2Edit from "../components/UtilitiesCont/H2Edit";
import Paragraph from "../components/UtilitiesCont/Paragraph";
import AccordionComponent from "../components/UtilitiesCont/AccordionComponent";
import ConsultRight from "../components/About-us/ConsultRight";
import ConsultLeft from "../components/About-us/ConsultLeft";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import IntroBoxesCont from "../components/Content/IntroBoxes/IntroBoxesCont";
import StrSpTitle from "../components/UtilitiesCont/StrSpTitle";

function Consulting() {
  return (
    <div>
      <Header homePage={false} content={IntroBoxesCont[7]} />
      <div className="consult">
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
      </div>
    </div>
  );
}

export default Consulting;
