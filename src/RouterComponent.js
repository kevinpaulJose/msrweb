import React from "react";
import {
  Switch,
  Route,
  Redirect,
  HashRouter as Router,
} from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";

export default function Routes() {
  return (
    <Router>
      <Route path="/home" component={HomeComponent} />

      <Redirect to={"/home"} />
    </Router>
  );
}
