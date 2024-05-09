import Strategy from "../components/About-us/Strategy";
import Header from "../components/Header/Header";
import IntroBoxesCont from "../components/Content/IntroBoxes/IntroBoxesCont";
import Footer from "../components/Footer/Footer";

function StrategyPage() {
  return (
    <div>
      <Header homePage={false} content={IntroBoxesCont[7]} />
      <Strategy />
      <Footer />
    </div>
  );
}

export default StrategyPage;
