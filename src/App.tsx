import React from "react";
import { Route, Switch } from "react-router";

const Component: React.FC = () => {
  return <div>App Component</div>;
};

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Component} />
  </Switch>
);

export default App;
