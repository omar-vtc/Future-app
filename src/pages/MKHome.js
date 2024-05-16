import AboutUs from "../components/About-us/AboutUs";
import Footer from "../components/Footer/Footer";
import MKHeader from "../components/Header/MKHeader";

function MKHome() {
  return (
    <div>
      <MKHeader />
      <AboutUs />
      {/* <WhyFuture /> */}
      {/* {countriesHome.map((country, index) =>
    index % 2 === 0 ? (
      <Country key={index} content={country} />
    ) : (
      <Countryleft key={index} content={country} />
    )
  )} */}
      {/* <UtTitle />
  <UtGrid /> */}
      <Footer />
    </div>
  );
}

export default MKHome;
