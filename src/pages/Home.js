import React, { useState, useEffect } from "react";

import JsonData from ".././data/data.json";
import { Features } from "../components/AboutUsComponents/Features";
import { About } from "../components/AboutUsComponents/About";
import { Services } from "../components/AboutUsComponents/Services";
import { Gallery } from "../components/AboutUsComponents/Gallery";
import { Team } from "../components/AboutUsComponents/Team";
import { Testimonials } from "../components/AboutUsComponents/Testimonials";
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
