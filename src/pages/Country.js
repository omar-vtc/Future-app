import Requirements from "../components/CountryInfo/Requirements";
import WhyCountry from "../components/CountryInfo/WhyCountry";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UtTitle from "../components/UtilitiesCont/UtTitle";
function Country() {
  return (
    <div>
      <Header homePage={false} />
      <WhyCountry />
      <Requirements />
      <Footer />
    </div>
  );
}

export default Country;
