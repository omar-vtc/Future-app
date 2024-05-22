import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import Consulting from "./pages/Consulting";
import Studies from "./pages/Studies";
import StrategyPage from "./pages/StrategyPage";
import consultData from "./data/consulting.json";
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
          <Route path="/Studies">
            <Studies />
          </Route>
          <Route path="/Strategy">
            <StrategyPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
