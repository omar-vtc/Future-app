import React from "react";

import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";
import introBoxHome from "../components/Content/IntroBoxes/IntroBoxHome";

import AboutUs from "../components/About-us/AboutUs";
import NewHeader from "../components/NewHeader/NewHeader";
function Home() {
  // console.log(introBoxHome);
  return (
    <div>
      <NewHeader homePage={true} content={introBoxHome} />
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

export default Home;
