import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  return (
    <div>
      <Router>
        <NewH />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country/:id">
            <CountryPage />
          </Route>
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
