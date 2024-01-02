import CountryPic from "./CountryPic";
import IntroBox from "./IntroBox";

function CountryIntro(props) {
  return (
    <div className="country-intro">
      <IntroBox homePage={false} />
      <CountryPic />
    </div>
  );
}

export default CountryIntro;
