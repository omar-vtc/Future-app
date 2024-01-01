import React from "react";
import "../App.css";
import Header from "../components/Header/Header";
import WhyFuture from "../components/Countries/WhyFuture";
import Country from "../components/Countries/Country";
import Countryleft from "../components/Countries/Countryleft";
import UtTitle from "../components/UtilitiesCont/UtTitle";
import UtGrid from "../components/UtilitiesCont/UtGrid";
import Footer from "../components/Footer/Footer";
import introBoxHome from "../components/Content/IntroBoxes/IntroBoxHome";

import countriesHome from "../components/Content/CountriesInfo/CountriesHome";
function Home() {
  // console.log(introBoxHome);
  return (
    <div>
      <Header homePage={true} content={introBoxHome} />
      <WhyFuture />
      {countriesHome.map((country, index) =>
        index % 2 === 0 ? (
          <Country key={index} content={country} />
        ) : (
          <Countryleft key={index} content={country} />
        )
      )}
      {/* <Country content={spain} />
      <Countryleft />
      <Country content={spain} />
      <Countryleft />
      <Country content={spain} />
      <Countryleft /> */}
      <UtTitle />
      <UtGrid />
      <Footer />
    </div>
  );
}

export default Home;
