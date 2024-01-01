import React from "react";
import "../App.css";
import Header from "../components/Header/Header";
import WhyFuture from "../components/Countries/WhyFuture";
import Country from "../components/Countries/Country";
import Countryleft from "../components/Countries/Countryleft";
import UtTitle from "../components/UtilitiesCont/UtTitle";
import UtGrid from "../components/UtilitiesCont/UtGrid";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <div>
      <Header homePage={true} />
      <WhyFuture />
      <Country />
      <Countryleft />
      <Country />
      <Countryleft />
      <Country />
      <Countryleft />
      <UtTitle />
      <UtGrid />
      <Footer />
    </div>
  );
}

export default Home;
