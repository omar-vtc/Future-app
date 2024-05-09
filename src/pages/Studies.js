import Header from "../components/Header/Header";
import IntroBoxesCont from "../components/Content/IntroBoxes/IntroBoxesCont";

function Studies() {
  return (
    <div>
      <Header homePage={false} content={IntroBoxesCont[7]} />
    </div>
  );
}

export default Studies;
