import Requirements from "../components/CountryInfo/Requirements";
import WhyCountry from "../components/CountryInfo/WhyCountry";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import IntroBoxesCont from "../components/Content/IntroBoxes/IntroBoxesCont";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import WhyCountryInfo from "../components/Content/CountriesInfo/WhyCountryInfo";
function CountryPage() {
  // console.log(IntroBoxesCont);
  const { id } = useParams();
  return (
    <div>
      <Header homePage={false} content={IntroBoxesCont[id]} />
      <WhyCountry
        title={IntroBoxesCont[id].mainSpan}
        content={WhyCountryInfo[id]}
      />
      <Requirements />
      <Footer />
    </div>
  );
}

export default CountryPage;
