import countriesHome from "../components/Content/CountriesInfo/CountriesHome";
import Country from "../components/Countries/Country";
import Countryleft from "../components/Countries/Countryleft";
import { NewH } from "../components/NewHeader/NewH";

function Education() {
  return (
    <div>
      <NewH />
      {countriesHome.map((country, index) =>
        index % 2 === 0 ? (
          <Country key={index} content={country} />
        ) : (
          <Countryleft key={index} content={country} />
        )
      )}
    </div>
  );
}

export default Education;
