import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import Consulting from "./pages/Consulting";
import Studies from "./pages/Studies";
import Education from "./pages/Education";
import NewFooter from "./components/Footer/NewFooter";
import { NewH } from "./components/NewHeader/NewH";
import DevelopePage from "./pages/DevelopePage";
import Data from "./data/data.json";

function App() {
  // Access the i18n instance from the useTranslation hook
  const { i18n } = useTranslation();

  // Force Arabic as the default language
  React.useEffect(() => {
    if (i18n.language !== "ar") {
      i18n.changeLanguage("ar");
    }
  }, [i18n]);

  // Set direction to RTL
  React.useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div dir="rtl">
      <Router>
        <NewH />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/country/:id">
            <CountryPage />
          </Route> */}
          <Route path="/consulting">
            <Consulting />
          </Route>
          <Route path="/Studies">
            <Studies />
          </Route>
          <Route path="/Education">
            <Education />
          </Route>
          <Route path="/Develope">
            <DevelopePage />
          </Route>
        </Switch>
      </Router>
      <NewFooter data={Data.Contact} />
    </div>
  );
}

export default App;
