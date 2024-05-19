import CountryPic from "./NewCountryPic";
import IntroBox from "./NewIntroBox";

function NewCountryIntro(props) {
  return (
    <div className="country-intro">
      <IntroBox homePage={false} />
      <CountryPic />
    </div>
  );
}

export default NewCountryIntro;
