import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import Consulting from "./pages/Consulting";

function App() {
  return (
    <div>
      <Router>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
