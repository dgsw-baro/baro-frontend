import React from "react";
import { Route, Switch } from "react-router";

import * as Pages from "../pages";

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Pages.Main} />
  </Switch>
);

export default App;
