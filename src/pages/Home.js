import React, { useState, useEffect } from "react";

import JsonData from ".././data/data.json";
import { Features } from "../components/About-us/Features";
import { About } from "../components/About-us/About";
import { Services } from "../components/About-us/Services";
import { Gallery } from "../components/About-us/Gallery";
import { Team } from "../components/About-us/Team";
import { Testimonials } from "../components/About-us/Testimonials";
function Home() {
  // console.log(introBoxHome);
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      {/* <NewHeader homePage={true} content={introBoxHome} /> */}
      {/* <NewH /> */}
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      {/* <AboutUs /> */}
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
      {/* <NewFooter data={landingPageData.Contact} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
